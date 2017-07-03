<!DOCTYPE html>
<html lang="en">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Gentellela Alela! | </title>

        <!-- Bootstrap -->
        <link href="{{ asset("css/bootstrap.min.css") }}" rel="stylesheet">
        <!-- Font Awesome -->
        <link href="{{ asset("css/font-awesome.min.css") }}" rel="stylesheet">
        <!-- Custom Theme Style -->
        <link href="{{ asset("css/gentelella.min.css") }}" rel="stylesheet">
        <!-- nprogress -->
        <link href="{{ asset("css/nprogress.css") }}" rel="stylesheet">

        @stack('stylesheets')

        <!-- jQuery -->
        <script src="{{ asset("js/jquery.min.js") }}"></script>

    </head>

    <body class="nav-md">
        <div class="container body">
            <div class="main_container">

                @include('includes/sidebar')

                @include('includes/topbar')

                @yield('main_container')

            </div>
        </div>

        @stack('scripts')

        <!-- Bootstrap -->
        <script src="{{ asset("js/bootstrap.min.js") }}"></script>
        <!-- Custom Theme Scripts -->
        <script src="{{ asset("js/gentelella.min.js") }}"></script>
        <!-- Chart.js -->
        <script src="{{ asset("js/Chart.min.js") }}"></script>
        <!-- fastclick.js -->
        <script src="{{ asset("js/fastclick.js") }}"></script>
        <!-- nprogress.js -->
        <script src="{{ asset("js/nprogress.js") }}"></script>

    </body>
</html>