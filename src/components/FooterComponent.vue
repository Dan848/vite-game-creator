<template>
  <footer class="bg-primary">
    <div class="container d-flex align-items-center justify-content-between py-4">
      <div><button class="bm-btn">Gioca</button></div>
      <div class="footer-social-icon">
        <span class="text-center">Follow us</span>
        <ul class="social_icon">
          <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: 'FooterComponent'
    }
</script>

<style lang="scss" scoped>
.footer-social-icon span {
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.footer-social-icon .social_icon {
  text-align: left;
}
.footer-social-icon .social_icon li {
  float: inherit !important;
  display: inline-block !important;
  width: inherit;
}
.footer-social-icon .social_icon li a i {
  font-size: 15px;
  line-height: 39px;
}
.footer-social-icon .social_icon li a {
  width: 40px;
  height: 40px;
}

.social_icon {
  text-align: right;
  margin: 0;
  margin-top: 3px;
}
.social_icon li {
  display: inline-block;
  margin: 0 5px;
}
.social_icon li a {
  display: inline-block;
  width: 25px;
  height: 25px;
  background: #fff;
  color: #000;
  text-align: center;
  border-radius: 100%;
  transition: 0.2s ease-in-out;
}
.social_icon li a i {
  font-size: 15px;
  line-height: 20px;
}
.social_icon li:nth-child(1) a {
  background: #4267b2;
  color: #fff;
}
.social_icon li:nth-child(2) a {
  background: #1da1f2;
  color: #fff;
}
.social_icon li:nth-child(3) a {
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  color: #fff;
}
.social_icon li:nth-child(4) a {
  background: #ff0000;
  color: #fff;
}
.social_icon li:nth-child(1):hover a {
  background: #fff;
  color: #4267b2;
}
.social_icon li:nth-child(2):hover a {
  background: #fff;
  color: #1da1f2;
}
.social_icon li:nth-child(3):hover a {
  background: #fff;
  color: #bc1888;
}
.social_icon li:nth-child(4):hover a {
  background: #fff;
  color: #ff0000;
}
</style>