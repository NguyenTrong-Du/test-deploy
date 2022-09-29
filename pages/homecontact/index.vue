<template>
  <div class="home-contact">
    <div class="banner-section">
      <div class="container">
        <div><h2>Contact</h2></div>
        <div class="circle"></div>
      </div>
    </div>
    <div class="info-section">
      <div class="container">
        <div class="contact-info-wrap">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="single-contact-info text-center">
                <div class="info-icon">
                  <span class="material-icons"> call </span>
                </div>
                <div class="info-content">
                  <h5 class="title">Telephone</h5>
                  <p>0862009300</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="single-contact-info text-center">
                <div class="info-icon">
                  <span class="material-icons"> email </span>
                </div>
                <div class="info-content">
                  <h5 class="title">Mail Address</h5>
                  <p>hello@btc-studio.io</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="single-contact-info info-place text-center">
                <div class="info-icon">
                  <span class="material-icons"> place </span>
                </div>
                <div class="info-content">
                  <h5 class="title">Location</h5>
                  <p>
                    Tầng 2, Số 5 Biệt thự 2, Khu đô thị Vinaconex 3, Phường
                    Trung Văn, Quận Nam Từ Liêm, Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="map-section">
      <div class="place-card">
        <div class="place-desc-large">
          <div class="place-name">CÔNG TY TNHH BTC STUDIO</div>
          <div class="address">
            Tầng 2, Số 5 Biệt thự 2, Khu đô thị Vinaconex 3, Phường Trung Văn,
            Quận Nam Từ Liêm, Hà Nội
          </div>
        </div>
        <div class="bottom-actions">
          <div class="google-maps-link">
            <a
              aria-label="View larger map"
              target="_blank"
              jstcache="31"
              href="https://www.google.com/maps/dir//Chung+C%C6%B0+CT1+Trung+V%C4%83n+Vinaconex+3,+XQWH%2B6PV,+C%C6%B0%C6%A1ng+Ki%C3%AAn,+Trung+V%C4%83n,+Nam+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9874197,105.7646597,13.83z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3134534b71693337:0xd5bf8c777b002bfd!2m2!1d105.7792161!2d20.9956622!3e2"
              jsaction="mouseup:placeCard.largerMap"
              >View larger map</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContact',
}
</script>

<style scoped>
.info-section {
  padding: 120px 0;
  background: #ffffff;
}
.info-section .contact-info-wrap .single-contact-info {
  background: #ffffff;
  box-shadow: 0px 0px 100px 0px rgb(0 0 0 / 11%);
  padding: 60px 15px;
  border-radius: 10px;
  margin-top: 70px;
  text-align: center;
}
.info-section .contact-info-wrap .info-place {
  padding-bottom: 5px;
}
.info-section .contact-info-wrap .single-contact-info .info-icon {
  width: 100px;
  height: 100px;
  line-height: 103px;
  background: #005de0;
  color: #ffffff;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: -115px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info-section .contact-info-wrap .single-contact-info .info-icon span {
  font-size: 40px;
}
.info-section .contact-info-wrap .single-contact-info .info-content .title {
  font-size: 18px;
  line-height: 36px;
  color: #333333;
  margin-top: 15px;
}
.info-section .contact-info-wrap .single-contact-info .info-content p {
  font-size: 18px;
  font-weight: 700;
  color: #005de0;
  -webkit-text-decoration-color: #7faeef;
  text-decoration-color: #7faeef;
}
.map-section {
  height: 600px;
  background-image: url('../../static/map.png');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
.place-card {
  background-color: white;
  margin: 15px;
  padding: 15px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
  border-radius: 2px;
  color: #333;
  position: absolute;
  max-width: 350px;
}
.place-card .place-name {
  font-weight: 600;
}
.place-card .address {
  font-size: 14px;
}
.place-card .bottom-actions {
  font-size: 14px;
  color: #005de0;
}
</style>
