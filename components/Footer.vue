<template>
  <div class="footer">
    <div class="footer_top">
      <div class="footer-nav">
        <nav class="footerNav">
          <ul class="footerNav-list">
            <li class="footerNav-item"><a href="#">TOP</a></li>
            <li class="footerNav-item"><a href="#">CAREER</a></li>
            <li class="footerNav-item"><a href="#">SERVICE</a></li>
            <li class="footerNav-item"><a href="#">NEWS</a></li>
            <li class="footerNav-item"><a href="#">WORKS</a></li>
            <li class="footerNav-item"><a href="#">ARTICLES</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-security">
        <div class="footer-security-text">
          ISO/IEC
          27001認証取得により、情報リスクの低減や回避、業務効率の改善や組織体制の強化、海外企業を含む取引要件の達成等の効果が見込まれます。今後もより一層、万一の緊急事態に際した対処を含む情報管理体制の維持、改善等のリスクマネジメントの実現により、組織内外両面の安心・安全の確保・提供に努めてまいります。
        </div>
        <div class="footer_security-img">
          <img
            src="https://hinode-labo.com/wp-content/themes/hinodelabo/images/img_iso_iec.png"
            alt=""
            width="300"
            height="98"
            loading="lazy"
            data-src="https://hinode-labo.com/wp-content/themes/hinodelabo/images/img_iso_iec.png"
            decoding="async"
            data-srcset="https://hinode-labo.com/wp-content/themes/hinodelabo/images/img_iso_27001.png 1x, https://hinode-labo.com/wp-content/themes/hinodelabo/images/img_iso_27001@2x.png 2x"
            class="ls-is-cached lazyloaded"
            srcset="
              https://hinode-labo.com/wp-content/themes/hinodelabo/images/img_iso_27001.png    1x,
              https://hinode-labo.com/wp-content/themes/hinodelabo/images/img_iso_27001@2x.png 2x
            "
          /><noscript
            ><img
              src="https://hinode-labo.com/wp-content/themes/hinodelabo/images/img_iso_iec.png"
              srcset="
                https://hinode-labo.com/wp-content/themes/hinodelabo/images/img_iso_27001.png    1x,
                https://hinode-labo.com/wp-content/themes/hinodelabo/images/img_iso_27001@2x.png 2x
              "
              alt=""
              width="300"
              height="98"
              loading="lazy"
              data-eio="l"
          /></noscript>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copyright">
        <small>© 2022 Hinode Labo inc. All Rights Reserved.</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.footer {
  max-width: 100%;
  overflow: hidden;
  margin-top: 240px;
}
.footer_top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.footer-nav {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 40%;
  flex: 1 1 40%;
  padding-left: calc(calc(100% - 1170px) * 0.5);
}
.footerNav {
  width: 100%;
}
.footerNav-list {
  padding-top: 14px;
  display: flex;
  flex-wrap: wrap;
}
.footerNav-item {
  flex: 1 1 50%;
  font-family: attn-new, sans-serif;
  margin: 8px 0;
  font-size: 16px;
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
}
.footerNav-item a:hover::after {
  -webkit-transform: translateY(-50%) scale(1, 1);
  transform: translateY(-50%) scale(1, 1);
}
.footer-security {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 60%;
  flex: 1 1 60%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 36px 40px;
  background-color: #474e57;
}
.footer-security-text {
  padding-right: 40px;
  font-size: 14px;
  text-align: justify;
  line-height: 2;
}

.footer-copyright {
  font-family: atten-new, sans-serif;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 100%;
  flex: 1 1 100%;
  margin-top: 72px;
  padding-left: 40px;
  font-size: 14px;
}
</style>
