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
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        return new JsonResponse(array('message' => 'connected'), 200);
    }

    function generateRandomString($length = 10)
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
     * Creates a new user entity.
     *
     * @Route("/register", name="register")
     * @Method("GET")
     */
    public function registerAction(Request $request)
    {
        $parameters = $request->query;

        if (!$parameters->get('username') || !$parameters->get('password')|| !$parameters->get('email')){
            return new JsonResponse(array('message' => 'Les paramètres sont incorrects.'), 400);
        }

        $user = $this->getDoctrine()->getRepository('AppBundle:User')->findOneBy(array('username' => $parameters->get('username')));

        if ($user) {
            return new JsonResponse(array('message' => "L'utilisateur existe déjà."), 400);
        }

        $user = new User();
        $user->setUsername($parameters->get('username'));
        $user->setPassword($parameters->get('password'));
        $user->setEmail($parameters->get('email'));
        $user->setApiKey($this->generateRandomString());

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return new JsonResponse(array('message' => 'Utilisateur enregistré.'), 200);
    }
}
