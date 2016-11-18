<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    function generateRandomString($length = 255)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        return $randomString;
    }

    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        return new JsonResponse(array('message' => 'connected'), 200);
    }

    /**
     * Creates a new user entity.
     *
     * @Route("/register", name="register")
     * @Method("POST")
     */
    public function registerAction(Request $request)
    {
        $content = $this->get("request")->getContent();
        $parameters = json_decode($content, true);

        if (!$parameters['username'] || !$parameters['password'] || !$parameters['email']) {
            return new JsonResponse(array('message' => 'Les paramètres sont incorrects.'), 400);
        }

        $user = $this->getDoctrine()
            ->getRepository('AppBundle:User')
            ->findOneBy(array('username' => $parameters['username']));

        if ($user) {
            return new JsonResponse(array('message' => "L'utilisateur existe déjà."), 400);
        }

        $user = new User();
        $username = $parameters['username'];
        $password = $parameters['password'];
        $email = $parameters['email'];

        $user->setUsername($username);
        $user->setPassword($password);
        $user->setEmail($email);
        $user->setApiKey($this->generateRandomString());

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return new JsonResponse(array('message' => 'Utilisateur enregistré.'), 200);
    }

    /**
     * Log user.
     *
     * @Route("/login", name="login")
     * @Method("POST")
     */
    public function loginAction(Request $request)
    {
        $parameters = array();
        $content = $this->get("request")->getContent();
        if (!empty($content)) {
            $parameters = json_decode($content, true);
        }

        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository('AppBundle:User')->findOneBy(array('username' => $parameters['username']));

        if (!$user || $parameters['password'] !== $user->getPassword()) {
            return new JsonResponse(array('message' => 'Utilisateur inexistant ou mot de passe incorrect.'), 401);
        }

        $apiKey = $this->generateRandomString();

        $user->setApiKey($apiKey);
        $em->flush();

        $response = array(
            'message' => 'Utilisateur connecté.',
            'username' => $parameters['username'],
            'token' => $apiKey,
        );

        return new JsonResponse($response, 200);
    }
}
