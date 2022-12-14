<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

         <!-- BEGIN: Vendor CSS-->
            <!-- BEGIN: Theme CSS-->
            <link rel="stylesheet" type="text/css" href="backend/css/vendors.min.css">
            <link rel="stylesheet" type="text/css" href="backend/css/apexcharts.css">
            <link rel="stylesheet" type="text/css" href="backend/css/bootstrap.css">
            <link rel="stylesheet" type="text/css" href="backend/css/bootstrap-extended.css">
            <link rel="stylesheet" type="text/css" href="backend/css/colors.css">
            <link rel="stylesheet" type="text/css" href="backend/css/components.css">
 

            <!-- BEGIN: Page CSS-->

            <!-- END: Page CSS-->

            <!-- BEGIN: Custom CSS-->
            <link rel="stylesheet" type="text/css" href="backend/css/style.css">
            @guest
            <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
            @endguest
    <!-- END: Custom CSS-->
        @php $config  = getConfiguration();@endphp
        <script>
            let baseUrl = "{{url('/')}}";
            let logo = '{{$config["IMAGE"]}}';
            let company_name = '{{$config["NAME"]}}';

        </script>
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        @routes
        <script src="{{ asset(mix('/js/app.js')) }}" defer></script>

    </head>
    <body class="vertical-layout vertical-menu-modern  navbar-floating footer-static  font-sans antialiased"  data-open="click" data-menu="vertical-menu-modern" data-col="">
    <!-- BEGIN: Content-->
        @inertia
    <!-- END: Content-->
    <!-- BEGIN: Footer-->
   
    <button class="btn btn-primary btn-icon scroll-top" type="button"><i data-feather="arrow-up"></i></button>
    <!-- END: Footer-->


    <!-- BEGIN: Vendor JS-->
    <script src="backend/js/vendors.min.js"></script>
    <!-- BEGIN Vendor JS-->

    <!-- BEGIN: Page Vendor JS-->
    <!-- END: Page Vendor JS-->

    <!-- BEGIN: Theme JS-->
    <script src="backend/js/app-menu.js"></script>
    <script src="backend/js/app.js"></script>
    <!-- END: Theme JS-->

    <!-- BEGIN: Page JS-->
    <!-- END: Page JS-->

    <script>
        $(window).on('load', function() {
            if (feather) {
                feather.replace({
                    width: 14,
                    height: 14
                });
            }
        })
    </script>
</body>
    <!-- <body class="font-sans antialiased">
        @inertia

    </body> -->
</html>
