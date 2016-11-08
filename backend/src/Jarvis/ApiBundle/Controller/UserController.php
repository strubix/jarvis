<?php

namespace Jarvis\ApiBundle\Controller;

use Jarvis\ApiBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\FOSRestController;

use FOS\RestBundle\Controller\Annotations\View;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class UserController extends FOSRestController
{
    /**
     * @return array
     * @View()
     */
    public function getUsersAction()
    {
        $em = $this->getDoctrine()->getManager();

        $users = $em->getRepository('ApiBundle:User')->findAll();

        return array('users' => $users);
    }

    /**
     * @param User $user
     * @return array
     * @View()
     * @ParamConverter("user", class="ApiBundle:User")
     */
    public function getUserAction(User $user)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('ApiBundle:User')->find($user);
        $statusCode = 200;

        $view = $this->view($entity, $statusCode);
        return $this->handleView($view);
    }
}