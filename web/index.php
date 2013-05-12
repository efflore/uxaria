<?php

// Define Constants

if (!defined('APP_DIR')){
  define('APP_DIR', __DIR__.'/../app');
}

if (!defined('VENDOR_DIR')){
  define('VENDOR_DIR', __DIR__.'/../vendor');
}

if (!defined('DATA_DIR')){
  define('DATA_DIR', __DIR__.'/../data');
}

if (!defined('CACHE_DIR')){
  define('CACHE_DIR', __DIR__.'/../cache');
}

// Load core components

require_once VENDOR_DIR.'/autoload.php';

$app = new Silex\Application();

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
  'twig.path' => DATA_DIR,
  'twig.options' => array(
    'cache' => $app['debug'] ? false : CACHE_DIR.'/twig',
    'debug' => $app['debug']
  )
));
$app['twig']->addExtension(new Twig_Extension_Debug());

$app->register(new Silex\Provider\UrlGeneratorServiceProvider());

// Load application

require_once APP_DIR.'/main.php';

// Define routes

// Generate CSS
$app->get('/styles/{id}.css', function($id) use ($app){
  $input =  realpath(DATA_DIR.'/styles/'.$id.'.less');
  $output = realpath(__DIR__.'/css/'.$id.'.css');
  
  if (!@file_exists($input)){
    $content = '';
  } else {
    require_once VENDOR_DIR.'/leafo/lessphp/lessc.inc.php';
    $less = new lessc;
    $content = $less->compileFile($input);  // development
    $less->setFormatter('compressed');
    $less->checkedCompile($input, $output); // production
  }
  $response = new Response($content);
  $response->headers->set('Content-Type', 'text/css');
  return $response;
})
->bind('css');

// Pages
$app->get('/{id}', function($id) use ($app){
  $path = '/pages/'.$id.'/'.$id.'.html';
  if (!@file_exists(DATA_DIR.$path)){
    $app->abort(404, 'Sorry, this page does not exist.');
  }
  return $app['twig']->render($path, array('id' => $id));
})
->value('id', 'start')
->bind('page');

// Pages in folders
$app->get('/{folder}/{id}', function($folder, $id) use ($app){
  $path = '/pages/'.$folder.'/'.$id.'/'.$id.'.html';
  if (!@file_exists(DATA_DIR.$path)){
    $app->abort(404, 'Sorry, this page does not exist.');
  }
  return $app['twig']->render($path, array('folder' => $folder, 'id' => $id));
})
->value('id', 'start')
->bind('subpage');

$app->run();

?>