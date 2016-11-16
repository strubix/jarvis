<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * User controller.
 *
 * @Route("user")
 */
class UserController extends Controller
{

    function generateRandomString($length = 10) {
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
     * @Route("/register", name="user_new")
     * @Method("POST")
     */
    public function registerAction(Request $request)
    {
        $parameters = $request->request;

        if (!$parameters->get('username') || !$parameters->get('password')
            || strlen($parameters->get('username')) < 6 || strlen($parameters->get('password')) < 6) {
            return new JsonResponse(array('message' => "Erreur lors de la création de l'utilisateur."), 400);
        }

        $user = $this->getDoctrine()->getRepository('AppBundle:User')->findOneBy(array('username' => $parameters->get('username')));

        if($user){
            return new JsonResponse(array('message' => "L'utilisateur existe déjà."), 400);
        }

        $user = new User();
        $user->setUsername($parameters->get('username'));
        $user->setApiKey($this->generateRandomString());

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return new JsonResponse(array('message' => 'Utilisateur enregistré.'), 200);
    }
}
