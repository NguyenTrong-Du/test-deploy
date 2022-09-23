<template>
  <div class="footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="footer-widget-about">
            <a class="footer-logo"
              ><img src="../static/logo.png" alt="logo"
            /></a>
            <div class="widget-info">
              <ul>
                <li>
                  <div class="info-icon">
                    <i class="flaticon-phone-call"></i>
                  </div>
                  <div class="info-text">
                    <span><a href="#">+91 458 654 528</a></span>
                  </div>
                </li>
                <li>
                  <div class="info-icon">
                    <i class="far fa-envelope-open"></i>
                  </div>
                  <div class="info-text">
                    <span><a href="#">info@example.com</a></span>
                  </div>
                </li>
                <li>
                  <div class="info-icon">
                    <i class="flaticon-pin"></i>
                  </div>
                  <div class="info-text">
                    <span>60 East 65th Street, NY</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="footer-nav footer-widget">
            <h4 class="footer-widget-title">SERVICE</h4>
            <div class="footerNav">
              <ul class="footerNav-list">
                <li class="footerNav-item"><a href="#">Career</a></li>
                <li class="footerNav-item"><a href="#">Service</a></li>
                <li class="footerNav-item"><a href="#">News</a></li>
                <li class="footerNav-item"><a href="#">Works</a></li>
                <li class="footerNav-item"><a href="#">Articles</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="footer-nav footer-widget">
            <h4 class="footer-widget-title">SUPPORT</h4>
            <div class="footerNav">
              <ul class="footerNav-list">
                <li class="footerNav-item"><a href="#">Career</a></li>
                <li class="footerNav-item"><a href="#">Service</a></li>
                <li class="footerNav-item"><a href="#">News</a></li>
                <li class="footerNav-item"><a href="#">Works</a></li>
                <li class="footerNav-item"><a href="#">Articles</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="footer-nav footer-widget">
            <h4 class="footer-widget-title">WORKS</h4>
            <div class="footerNav">
              <ul class="footerNav-list">
                <li class="footerNav-item"><a href="#">Career</a></li>
                <li class="footerNav-item"><a href="#">Service</a></li>
                <li class="footerNav-item"><a href="#">News</a></li>
                <li class="footerNav-item"><a href="#">Works</a></li>
                <li class="footerNav-item"><a href="#">Articles</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>© Copyrights 2022 <a>BTC-STUDIO</a> All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
}
</script>

<style>
.footer {
  background: #000;
}
.footer-top {
  display: flex;
  padding: 80px 0 70px;
  border-bottom: 1px solid #919194;
}
.footer-top > div {
  flex: 0 0 auto;
  width: 25%;
  padding-left: 15px;
  padding-right: 15px;
}
.footer-logo {
  max-width: 125px;
  display: inline-block;
}
.widget-info {
  padding-top: 20px;
}
.widget-info ul li {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 10px;
}
.widget-info ul li .info-text a:hover {
  color: #ff5538;
}
.footerNav {
  margin-top: 15px;
}
.footerNav-item {
  margin-top: 10px;
}
.footerNav-item a {
  position: relative;
  padding: 4px 0;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.footerNav-item a::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 10px;
  height: 1px;
  background-color: #fff;
  -webkit-transform: translateY(-50%) scale(0, 1);
  transform: translateY(-50%) scale(0, 1);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.footerNav-item a:hover {
  padding-left: 14px;
  color: #ff5538;
}
.footerNav-item a:hover::after {
  -webkit-transform: translateY(-50%) scale(1, 1);
  transform: translateY(-50%) scale(1, 1);
}
.footer-widget .footer-widget-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 25px;
}
.footer-bottom {
  padding: 50px 0;
  text-align: center;
}
.footer-bottom .footer-copyright a {
  display: inline-block;
  font-weight: bold;
  color: #6bd0ff;
  cursor: pointer;
  transition: all 0.3s;
}
.footer-bottom .footer-copyright a:hover {
  color: #ff5538;
}
</style>
