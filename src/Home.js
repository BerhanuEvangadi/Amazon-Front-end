import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="ASUS L203MA-DS04 VivoBook L203MA Laptop, 11.6” HD Display, Intel Celeron Dual Core CPU, 4GB RAM, 64GB Storage, USB-C, Windows 10 Home In S Mode, Up To 10 Hours Battery Life, One Year Of Microsoft 365"
            price={286.49}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81o8Tll-5-L._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Vremi Beverage Refrigerator and Cooler - 110 to 130 Can Mini Fridge with Glass Door for Soda Beer or Wine - Small Drink Dispenser Machine for Office or Bar with Removable Shelves and Adjustable Feet"
            price={289.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/7138k2mzPyL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title='LG OLED55BXPUA Alexa Built-In BX 55" 4K Smart OLED TV (2020)'
            price={1296.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/818TCiwqmeL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Zulay Original Milk Frother Handheld Foam Maker for Lattes - Whisk Drink Mixer for Coffee, Mini Foamer for Cappuccino, Frappe, Matcha, Hot Chocolate by Milk Boss (Black)"
            price={19.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81XGIuzv1ZL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
