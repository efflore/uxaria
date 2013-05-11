Uxaria
======

Uxaria is a User Interface Toolkit for the Web.

It's built with some of the best open source libraries for web development:

  * Silex PHP micro-framework
  * Twig templating engine
  * jQuery javascript library
  * Modernizr javascript feature detection
  * Twitter Bootstrap for HTML, CSS and Javascript components
  
Setup
-----

1. Clone this repository to a folder on a web server.

2. Ensure the following PHP setting in php.ini:

    ```
    detect_unicode = Off
    date.timezone = UTC
    ```
    
3. You Apache configuration should include something like this:

    ```
    <Directory "/Users/~**user**/Sites/">
      Options Indexes MultiViews FollowSymLinks
      AllowOverride All
      Order allow,deny
      Allow from all
    </Directory>
    ```
    
4. Open a terminal window for your project directory and enter these commands:

    ```sh
    $ curl -s http://getcomposer.org/installer | php
    $ php composer.phar install
    ```

5. Setup .htaccess in `/web/` directory:

    ```
    <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /~**user**/web-toolkit/web
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule ^(.*)$ index.php [QSA,L]
    </IfModule>
    ```

Update
------

    ```sh
    $ php composer.phar self-update
    $ php composer.phar update
    ```