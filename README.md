Brand Tinker
============

Brand Tinker is a search tool to help users secure their local branding. Users enter in a name of their business, copyright or url and Brand Tinker will search for it's availability.

This project is the front-end, built on [AngularJS](https://angularjs.org) 1.

App Structure
=============

The application's built on broadcasting and listening for a single event. searchBranding

1. Users enter in a search term, and hits search
2. BrandCtrl broadcasts searchBranding search term to children in it's scope
3. Directives responds to searchBranding search Term
4. Directives search for terms in their desired APIs
5. Directives display results.


API Configuration
=================

Brand Tinker relies on Two APIs.


1. Mashape.com's Domain Search API
   The domain search API requires setting the header - "X-Mashape-Key" with their given API Key

2. Brand Tinker's backend API
   This exists in a separate project. It uses standard RESTFUL Routes naming conventions. Visit [api.brandtinker](https://github.com/FreshLines/api.brandtinker.com) for details.

        Searching for a Business Name  - "/business/name"
        Searching for a DBA Name       - "/business/name?include_dba=true"
        Searching for a Trademark Name - "/trademark/name"

These configurations are set in the /config folder. You should have the following:

    /config/config.json      - standard config for use in all environments
    /config/production.json  - production keys and urls
    /config/development.json - development keys and urls


Project Setup
================

1. Install the latest versions of npm and the command line tools. Install globally

        npm install -g npm
	    npm install --global yo bower grunt-cli

2. Run `npm install grunt` in the project directory
3. Run `npm install` in the project directory
4. Run `bower install` in the project directory
6. Resolve all the dependencies if they exist


Build & development
===================

Run `grunt` for building and `grunt serve` for preview.

Testing

Running `grunt test` will run the unit tests with karma.


Development Environment Setup
==============================
In the Vagrantfile is a VM provided by [Scotch.io](https://box.scotch.io/) pre-installed with NodeJS. Install [vagrant](https://www.vagrantup.com/) and `vagrant up`.

Project's server directory is at /var/www

We want to have all packages setup to the local installation directory. Make sure that node is setup, and run the following.

    sudo npm set prefix '/home/vagrant/.npm' -global
    sudo npm get prefix
    echo "export PATH=$PATH: $HOME/.npm/bin" >> $HOME/.profile


You can also set up your project locally if desired.

Deployment
==========

Brand Tinker's build uses a grunt task to generate a new set of files for production.

Run `grunt build` to generate production ready deployments.
This will create a minified, uglified version of the project in /dist

If this build fails due to image minification, you can use the Virtual machine provided in the vagrant box to create it.

Brand Tinker Branding
=====================

Orange: #f6921e
Purple: #652d90
