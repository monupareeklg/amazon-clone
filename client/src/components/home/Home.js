import React from "react";
import Header from "../common/Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/71PkAMs1-+L._SX3000_.jpg"
          />
          <div className="home__row">
            <Product
              id="23498372"
              title="Sennheiser HD 450SE Bluetooth 5.0 Wireless Headphone with Alexa Built-in - Active Noise Cancellation, 30-Hour Battery Life, USB-C Fast Charging, Foldable - Black"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400._.jpg"
              rating={3}
            />
            <Product
              id="878787687"
              title="Sennheiser HD 450SE Bluetooth 5.0 Wireless Headphone with Alexa Built-in - Active Noise Cancellation, 30-Hour Battery Life, USB-C Fast Charging, Foldable - Black"
              price={19.99}
              image="https://assets.wordstream.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="76876875"
              title="Sennheiser HD 450SE Bluetooth 5.0 Wireless Headphone with Alexa Built-in - Active Noise Cancellation, 30-Hour Battery Life, USB-C Fast Charging, Foldable - Black"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg"
              rating={4}
            />
            <Product
              id="8768587678"
              title="Sennheiser HD 450SE Bluetooth 5.0 Wireless Headphone with Alexa Built-in - Active Noise Cancellation, 30-Hour Battery Life, USB-C Fast Charging, Foldable - Black"
              price={59.99}
              image="https://media1.popsugar-assets.com/files/thumbor/Lstx2AEobONBJvX6kHcutQEKesk/0x0:1500x1500/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/10/11/835/n/1922564/49fab0c25da0d1d78bd8f4.82733933_/i/most-popular-products-from-amazon-fashion.jpg"
              rating={3}
            />
            <Product
              id="89798798"
              title="Sennheiser HD 450SE Bluetooth 5.0 Wireless Headphone with Alexa Built-in - Active Noise Cancellation, 30-Hour Battery Life, USB-C Fast Charging, Foldable - Black"
              price={129.99}
              image="data:image/jpeg;base64,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"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="456436235"
              title="Sennheiser HD 450SE Bluetooth 5.0 Wireless Headphone with Alexa Built-in - Active Noise Cancellation, 30-Hour Battery Life, USB-C Fast Charging, Foldable - Black"
              price={529.99}
              image="https://img.global.news.samsung.com/za/wp-content/uploads/2020/08/Big-Screen2_Bigger-the-Better_main1-1-859x408.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
