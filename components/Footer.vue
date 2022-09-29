<template>
  <div class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="col-lg-6">
          <div class="footer-widget-about">
            <a class="footer-logo"
              ><img src="../static/logo.png" alt="logo"
            /></a>
            <div class="widget-info">
              <ul>
                <li>
                  <div class="info-icon">
                    <span class="material-icons"> call </span>
                  </div>
                  <div class="info-text">
                    <span><a href="#">0862009300</a></span>
                  </div>
                </li>
                <li>
                  <div class="info-icon">
                    <span class="material-icons"> email </span>
                  </div>
                  <div class="info-text">
                    <span><a href="#">hello@btc-studio.io</a></span>
                  </div>
                </li>
                <li>
                  <div class="info-icon">
                    <span class="material-icons"> place </span>
                  </div>
                  <div class="info-text">
                    <span
                      >Tầng 2, Số 5 Biệt thự 2, Khu đô thị Vinaconex 3, Phường
                      Trung Văn, Quận Nam Từ Liêm, Hà Nội
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
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
        <div class="col-lg-3">
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
      </div>
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>© Copyrights 2021 <a>BTC STUDIO</a> All Rights Reserved.</p>
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
  background: #000c29;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.footer-top {
  display: flex;
  padding: 100px 0 90px;
  border-bottom: 1px solid #919194;
}
.footer-widget-about {
  padding-right: 100px;
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
  flex-wrap: nowrap;
  margin-top: 10px;
}
.widget-info ul li .info-text a:hover {
  color: #005de0;
}
.widget-info ul li .info-icon span {
  display: inline-block;
  color: #005de0;
  font-size: 18px;
  margin-right: 10px;
  font-weight: 700;
  padding-top: 3px;
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
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.footerNav-item a::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 10px;
  height: 1px;
  background-color: #005de0;
  -webkit-transform: translateY(-50%) scale(0, 1);
  transform: translateY(-50%) scale(0, 1);
  transition: all 0.3s linear;
}
.footerNav-item a:hover {
  padding-left: 14px;
  color: #005de0;
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
  background: radial-gradient(
    circle,
    #feb302,
    #f8c600,
    #eed900,
    #e0ec00,
    #cdff05
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: all 0.3s linear;
}
.footer-bottom .footer-copyright a:hover {
  background: radial-gradient(
    circle,
    #0206fe,
    #0063f8,
    #0083ee,
    #246591,
    #ade7e2
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
