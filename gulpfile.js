var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// Gentelella vendors path : vendor/bower_components/gentelella/vendors

elixir(function(mix) {
    
    /********************/
    /* Copy Stylesheets */
    /********************/

    // Bootstrap
    mix.copy('vendor/bower_components/gentelella/vendors/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css');

    // Font awesome
    mix.copy('vendor/bower_components/gentelella/vendors/font-awesome/css/font-awesome.min.css', 'public/css/font-awesome.min.css');

    mix.styles([
        'custom.min.css',
        'my-style.css'
    ], null, 'vendor/bower_components/gentelella/build/css/');

    //// Gentelella
    //mix.copy('vendor/bower_components/gentelella/build/css/custom.min.css', 'public/css/gentelella.min.css');
    //
    //// my-style
    //mix.copy('vendor/bower_components/gentelella/build/css/my-style.css', 'public/css/my-style.css');
    //
    /****************/
    /* Copy Scripts */
    /****************/

    // Bootstrap
    mix.copy('vendor/bower_components/gentelella/vendors/bootstrap/dist/js/bootstrap.min.js', 'public/js/bootstrap.min.js');

    // jQuery
    mix.copy('vendor/bower_components/gentelella/vendors/jquery/dist/jquery.min.js', 'public/js/jquery.min.js');

    // Gentelella
    mix.copy('vendor/bower_components/gentelella/build/js/custom.min.js', 'public/js/gentelella.min.js');

    // Chart
    mix.copy('vendor/bower_components/gentelella/vendors/Chart.js/dist/Chart.min.js', 'public/js/Chart.min.js');

    // my-scripts
    mix.copy('vendor/bower_components/gentelella/build/js/my-scripts.js', 'public/js/gentelella.min.js');

    /**************/
    /* Copy Fonts */
    /**************/

    // Bootstrap
    mix.copy('vendor/bower_components/gentelella/vendors/bootstrap/fonts/', 'public/fonts');

    // Font awesome
    mix.copy('vendor/bower_components/gentelella/vendors/font-awesome/fonts/', 'public/fonts');
});
