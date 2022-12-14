<!DOCTYPE html>
<html>

<head>
  <!-- Basic -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- Mobile Metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <!-- Site Metas -->
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />

  <title>Transportz</title>

  <!-- slider stylesheet -->
  <link rel="stylesheet" type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />

  <!-- bootstrap core css -->
  <link rel="stylesheet" type="text/css" href="{{asset('frontend/css/bootstrap.css')}}" />

  <!-- fonts style -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
  <!-- Custom styles for this template -->
  <link href="{{asset('frontend/css/style.css')}}" rel="stylesheet" />
  <!-- responsive style -->
  <link href="{{asset('frontend/css/responsive.css')}}" rel="stylesheet" />
</head>

<body>
  <div class="hero_area">
    <!-- header section strats -->
    <section class="header_section" >
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container d-lg-none">
          <a class="navbar-brand" href="#">
            <div class="logo-box">
              <img src="frontend/images/logo.png" alt="">
              <span>
                Transportz
              </span>
            </div>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item active">
                <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
              </li>
              @if($configartion['ABOUT_SECTION_DISABLED'] != 1)
              <li class="nav-item">
                <a class="nav-link" href="#about"> About </a>
              </li>
              @endif
              <li class="nav-item">
                <a class="nav-link" href="#service"> Service</a>
              </li>
              @if($configartion['COMPANY_SECTION_DISABLED'] != 1)
              <li class="nav-item">
                <a class="nav-link" href="#company"> Company </a>
              </li>
              @endif
              <li class="nav-item ">
                <a class="nav-link " href="#contact">Contact us</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="header_container ">
          <div class="logo-box">
            <img src="{{url('uploads/settings/') . '/'.$configartion['IMAGE']}}" alt="">
            <span>
              {{$configartion['COMPANY_NAME']}}
            </span>
          </div>
          <div>
            <div class="header_top">
              <div class="header_top-contact">

                <a href="" class="ml-4">
                  <div>
                    <img src="frontend/images/phone.png" alt="" />
                  </div>
                  <span>
                  {{$configartion['COMPANY_MOBILE']}}
                  </span>
                </a>
                <a href="" class="ml-4">
                  <div>
                    <img src="frontend/images/mail.png" alt="" />
                  </div>
                  <span>
                  {{$configartion['COMPANY_EMAIL']}}
                  </span>
                </a>
              </div>
              <div class="header_top-social">
                @if($configartion['COMPANY_FACEBOOK_URL'])
                <div>
                  <a href=" {{$configartion['COMPANY_FACEBOOK_URL']}}">
                    <img src="frontend/images/fb.png" alt="">
                  </a>
                </div>
                @endif
                @if($configartion['COMPANY_TWITTER_URL'])
                <div>
                  <a href="{{$configartion['COMPANY_TWITTER_URL']}}">
                    <img src="frontend/images/twitter.png" alt="">
                  </a>
                </div>
                @endif
                @if($configartion['COMPANY_FACEBOOK_URL'])
                <div>
                  <a href="{{$configartion['COMPANY_INSTAGRAM_URL']}}">
                    <img src="frontend/images/insta.png" alt="">
                  </a>
                </div>
                @endif
                @if($configartion['COMPANY_LINKED_IN_URL'])
                <div>
                  <a href="{{$configartion['COMPANY_LINKED_IN_URL']}}">
                    <img src="frontend/images/linkedin.png" alt="">
                  </a>
                </div>
                @endif
              </div>
            </div>
            <div class="header_btm">
              <nav class="navbar navbar-expand-lg custom_nav-container pt-3">

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                    <ul class="navbar-nav  ">
                     
                      <li class="nav-item active">
                        <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    @if($configartion['ABOUT_SECTION_DISABLED'] != 1)
                    <li class="nav-item">
                        <a class="nav-link" href="#about"> About </a>
                    </li>
                    @endif
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#service"> Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#shop"> Shop </a>
                    </li>
                    @if($configartion['COMPANY_SECTION_DISABLED'] != 1)
                    <li class="nav-item">
                        <a class="nav-link" href="#company"> Company </a>
                    </li>
                    @endif
                    <li class="nav-item ">
                        <a class="nav-link  pr-0" href="#contact">Contact us</a>
                    </li>
                    </ul>

                  </div>

                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end header section -->

    <!-- slider section -->
    <section class=" slider_section " id="home">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          @foreach($banners as $key => $banner)
            <li data-target="#carouselExampleIndicators" data-slide-to="{{$key}}" class="@if($key == 0){{'active'}}@endif"></li>
          @endforeach
        </ol>
        <div class="carousel-inner">

        @foreach($banners as $key => $banner)
          <div class="carousel-item @if($key == 0){{'active'}}@endif">
            <div class="container">
              <div class="slider_item-container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="slider_item-detail">
                      <div>
                        <h1>
                          {{$banner->title}}
                        </h1>

                        <div class="d-flex">
                          @if($banner->link)
                          <div>
                            <a href="{{$banner->link}}" target="@if($banner->redirect == 1){{'_blank'}}@endif" class="read-btn">
                              <span>
                                Read More
                              </span>
                              <img src="frontend/images/white-next.png" alt="">
                            </a>
                          </div>
                          @endif
                          <div class="ml-3">
                            <a href="#contact" class="quote-btn">

                              <span>
                                Get A Quote
                              </span>
                              <img src="frontend/images/white-next.png" alt="">
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="slider_img-box">
                      <img src="{{url('uploads/banners/') . '/'.$banner->image}}" alt="{{$banner->alt}}" class="img-fluid">
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
          @endforeach
        </div>

      </div>


    </section>

    <!-- end slider section -->
  </div>

  <!-- about section -->
  @if($configartion['ABOUT_SECTION_DISABLED'] != 1)
  <section class="about_section " id="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="heading_style">
            About Us
          </h2>
          
        </div>

      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="about_img-box">
            <img src="{{url('uploads/about/') . '/'.$configartion['ABOUT_SECTION_IMAGE']}}" class="img-fluid" alt="">
          </div>
        </div>
        <div class="col-md-6 about_detail-container">
          <div class="about_detail-box">
            <h3>
            {{$configartion['ABOUT_SECTION_TITLE']}}
            </h3>
            <p>
            {!!$configartion['ABOUT_SECTION_CONTENT']!!}
            </p>
            
          </div>
        </div>
      </div>
    </div>

  </section>
@endif
  <!-- end about section -->
  @if(count($services) > 0)
  <!-- service section -->
  <section class="service_section layout_padding"  id="service">
    <div class="container">
      <div class="d-flex justify-content-center">
        <h2 class="heading_style">
          Our Services
        </h2>
      </div>
      <div class="row layout_padding2-top">
        @foreach($services as $service)
        <div class="col-md-4">
          <div class="service_img-box s-b-1">
            <img src="{{url('uploads/services/') . '/'.$service->image}}" alt="">
            <div class="d-flex">
              <h3>
                {{$service->name}}

              </h3>
            </div>
          </div>
          <div class="service-detail">
            <p>
              {{$service->content}}
            </p>
            <div class="d-flex justify-content-end">
              <a href="#" class="service-btn">
                See More
              </a>
            </div>
          </div>
        </div>
        @endforeach
      </div>
    </div>
  </section>
  <!-- end service section -->
@endif

  
@if(count($testimonials) > 0)
  <!-- testimonial section -->
  <section class="client_section layout_padding">
    <div class="d-flex justify-content-center">
      <h2 class="heading_style">
        Testimonial
      </h2>
    </div>
    <div id="carouselExampleIndicator" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        @foreach($testimonials as $key => $testimonial)
          <li data-target="#carouselExampleIndicator" data-slide-to="{{$key}}" class="@if($key == 0){{'active'}}@endif"></li>
        @endforeach
      </ol>
      <div class="carousel-inner">
      @foreach($testimonials as $key => $testimonial)
        <div class="carousel-item @if($key == 0){{'active'}}@endif">
          <div class="container">
            <div class="row">
              
              <div class="col-md-6">
                <div class="client_box c-b-1">
                  <div class="client_img">
                    <img src="{{url('uploads/testimonials/') . '/'.$testimonial->image}}" width="129" height="129" class="img-fluid">
                  </div>
                  <div class="client_detail">
                    <h5>
                     {{$testimonial->name}} ({{$testimonial->designation}})
                    </h5>
                    <p>
                    {{$testimonial->content}}
                    </p>
                  </div>
                  
                </div>
              </div>
          
            </div>
          </div>
        </div>
        @endforeach
      
      </div>

    </div>

  </section>
  <!-- end testimonial section -->
@endif
  @if($configartion['COMPANY_SECTION_DISABLED'] != 1)

  <!-- company section -->
  <section class="company_section layout_padding2" id="company">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex align-items-center h-100">
            <div class="company-detail">
              <h3>
              {{$configartion['COMPANY_SECTION_TITLE']}}
              </h3>
              <p>
               {!!$configartion['COMPANY_SECTION_CONTENT']!!}
              </p>
            </div>
          </div> 
        </div>
        <div class="col-md-6">
          <div class="company_img-box">
            <img src="frontend/images/company.jpg" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end company section -->
@endif


  <!-- contact section -->
  <section class="contact_section layout_padding" id="contact">
    <div class="d-flex justify-content-center">
      <h2 class="heading_style">
        Contact us
      </h2>
    </div>
    <div class="container layout_padding2-top">
      <div class="row">
        <div class="col-md-6">
          <div id="map" class="h-100 w-100"></div>
        </div>

        <div class="col-md-6">
          <div class="contact_form-container">
            <form action="">
              <div>
                <input type="text" placeholder="Your Name">
              </div>
              <div>
                <input type="email" placeholder="Your Email">
              </div>
              <div>
                <input type="text" placeholder="Your Phone">
              </div>

              <div>
                <input type="text" class="message_input" placeholder="Message">
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit " class="">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end contact section -->



  <!-- info section -->
  <section class="info_section ">
    <div class="container ">
      <div class="row  mb-3 pb-4">
        <div class="col-md-3 info_logo">
          <div class="logo-box">
            <img src="frontend/images/logo-white.png" alt="">
            <span>
              Transportz
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur
          </p>
          <div class="info_social">
            <div>
              <a href="">
                <img src="frontend/images/fb.png" alt="">
              </a>
            </div>
            <div>
              <a href="">
                <img src="frontend/images/twitter.png" alt="">
              </a>
            </div>
            <div>
              <a href="">
                <img src="frontend/images/g-plus.png" alt="">
              </a>
            </div>
            <div>
              <a href="">
                <img src="frontend/images/linkedin.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 info_address">
          <h5>
            Address
          </h5>
          <p>
          {{$configartion['COMPANY_ADDRESS'] .', '. $configartion['COMPANY_STATE'].', '. $configartion['COMPANY_COUNTRY']}}
          </p>
          <p>
          {{$configartion['COMPANY_MOBILE']}}
          </p>
          @if($configartion['COMPANY_ALTERNATE_MOBILE'])
          <p>
          {{$configartion['COMPANY_ALTERNATE_MOBILE']}}
          </p>
          @endif
          <p>
            <a href="#">
            {{$configartion['COMPANY_EMAIL']}}
            </a>
          </p>
        </div>
        <div class="col-md-3 info_links">

          <div class="info_nav ">
            <nav class="">
              <ul>
                <h5>
                  Links
                </h5>
                <li>
                  <a href="index.html"> Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="service.html"> Service</a>
                </li>
                <li>
                  <a href="shop.html"> Shop</a>
                </li>
                <li>
                  <a href="company.html"> Company</a>
                </li>
                <li>
                  <a href="contact.html">Contact us</a>
                </li>

              </ul>
            </nav>
          </div>
        </div>
        <div class="col-md-3 info_news">
          <h5>
            Newsletter
          </h5>
          <form action="">
            <div>
              <input type="text" placeholder="Your Name">
            </div>
            <div>
              <input type="email" placeholder="Email">
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>


    </div>
  </section>
  <!-- end info section -->

  <!-- footer section -->
  <section class="container-fluid footer_section">
    <p>
      Copyright &copy; 2019 All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </section>
  <!-- footer section -->

  <script type="text/javascript"  src="{{asset('frontend/js/jquery-3.4.1.min.js')}}"></script>
  <script type="text/javascript"  src="{{asset('frontend/js/bootstrap.js')}}"></script>
  


  <script>
    // This example adds a marker to indicate the position of Bondi Beach in Sydney,
    // Australia.
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {
          lat: 40.645037,
          lng: -73.880224
        },
      });

      var image = 'frontend/images/maps-and-flags.png';
      var beachMarker = new google.maps.Marker({
        position: {
          lat: 40.645037,
          lng: -73.880224
        },
        map: map,
        icon: image
      });
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  </script>
  <!-- google map js -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap">
  </script>
  <!-- end google map js -->
</body>

</html>