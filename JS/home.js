"use strict";

console.log("Script Connected");

// CARS DATA
const carsData = [
  // Top Tier
  {
    name: "Mclaren 765LT Coupe",
    image: "./Assets/McLaren_765lt.png",
    description: "",
    price: "Rp12.500.000.000,00",
    isTopTier: true,
    isFeatured: false,
    isNew: true,
  },

  {
    name: "Lamborghini Revuelto",
    image: "./Assets/Lamborghini_Revuelto.png",
    description: "",
    price: "Rp21.600.000.000,00",
    isTopTier: true,
    isFeatured: false,
    isNew: true,
  },

  {
    name: "Bugatti Divo",
    image: "./Assets/Buggati_Divo.png",
    description: "",
    price: "Rp92.700.000.000,00",
    isTopTier: true,
    isFeatured: false,
    isNew: true,
  },

  {
    name: "Ferrari LaFerrari Aperta",
    image: "./Assets/LaFerrari_Aperta.png",
    description: "",
    price: "Rp129.000.000.000,00",
    isTopTier: true,
    isFeatured: false,
    isNew: true,
  },

  {
    name: "Lamborghini Huracan Evo Spyder",
    image: "./Assets/Huracan_Evo_Spyder.png",
    description: "",
    price: "Rp12.000.000.000,00",
    isTopTier: true,
    isFeatured: false,
    isNew: true,
  },

  //Featured
  {
    name: "Mclaren Artura",
    image: "./Assets/Mclaren_Artura.png",
    description: "",
    price: "Rp10.000.000.000,00",
    isTopTier: false,
    isFeatured: true,
    isNew: true,
  },

  {
    name: "Audi R8 Coupe",
    image: "./Assets/Audi_R8.png",
    description: "V10 plus",
    price: "Rp8.500.000.000,00",
    isTopTier: false,
    isFeatured: true,
    isNew: true,
  },

  {
    name: "Chevrolet Camaro ZL1",
    image: "./Assets/Camaro_ZL1.png",
    description: "",
    price: "Rp3.000.000.000,00",
    isTopTier: false,
    isFeatured: true,
    isNew: true,
  },

  {
    name: "Porsche 911 Carrera GTS",
    image: "./Assets/911_Carrera.png",
    description: "",
    price: "Rp6.200.000.000,00",
    isTopTier: false,
    isFeatured: true,
    isNew: true,
  },

  {
    name: "Nissan GT-R Nismo",
    image: "./Assets/GT-R_Nismo.png",
    description: "",
    price: "Rp8.500.000.000,00",
    isTopTier: false,
    isFeatured: true,
    isNew: true,
  },

  {
    name: "Aston Martin DB 11",
    image: "./Assets/AstonMartin_DB11.png",
    description: "",
    price: "Rp7.700.000.000,00",
    isTopTier: false,
    isFeatured: true,
    isNew: true,
  },

  // New (Not Top tier or Featured)
  {
    name: "Mustang Mach1",
    image: "./Assets/Mustang_Mach1.png",
    description: "",
    price: "Rp3.500.000.000,00",
    isTopTier: false,
    isFeatured: false,
    isNew: true,
  },

  {
    name: "BMW i7 xDrive60",
    image: "./Assets/BMW_I7_xDrive.png",
    description: "",
    price: "Rp3.300.000.000,00",
    isTopTier: false,
    isFeatured: false,
    isNew: true,
  },

  {
    name: "BMW M4 Competition G82",
    image: "./Assets/BMW_M4_CompetitionG82.png",
    description: "",
    price: "Rp2.650.000.000,00",
    isTopTier: false,
    isFeatured: false,
    isNew: true,
  },

  {
    name: "Mercedes-AMG G 63",
    image: "./Assets/Mercedes_G63.png",
    description: "",
    price: "Rp6.600.000.000,00",
    isTopTier: false,
    isFeatured: false,
    isNew: true,
  },

  // Used Car
  {
    name: "Porsche 911 Targa 4 GTS",
    image: "./Assets/911_Targa_4GTS.png",
    description: "",
    price: "Rp5.000.000.000,00",
    isTopTier: false,
    isFeatured: false,
    isNew: false,
  },

  {
    name: "Mercedes-AMG SL 43",
    image: "./Assets/Mercedes_Sl43.png",
    description: "",
    price: "Rp3.300.000.000,00",
    isTopTier: false,
    isFeatured: false,
    isNew: false,
  },

  {
    name: "Aston Martin DB 9 GT Bond",
    image: "./Assets/AstonMartin_DB9.png",
    description: "",
    price: "Rp5.600.000.000,00",
    isTopTier: false,
    isFeatured: false,
    isNew: false,
  },

  {
    name: "Ferrari 458",
    image: "./Assets/Ferrari_458.png",
    description: "",
    price: "Rp6.500.000.000,00",
    isTopTier: false,
    isFeatured: false,
    isNew: false,
  },

  {
    name: "Audi RS5",
    image: "./Assets/Audi_Rs5.png",
    description: "",
    price: "Rp3.000.000.000,00",
    isTopTier: false,
    isFeatured: false,
    isNew: false,
  },
];

// Nav-bar Transition

const navbar = document.getElementById("navbar");
const topTier = document.getElementById("top-tier-cars");

window.addEventListener("scroll", function () {
  const maxHeight = topTier.offsetHeight;
  // console.log("Scroll Y:", window.scrollY);
  // console.log("Header Height:", maxHeight);
  if (window.scrollY > maxHeight) {
    console.log("Adding solid class");
    navbar.classList.add("nav-bar-solid");
  } else {
    console.log("Removing solid class");
    navbar.classList.remove("nav-bar-solid");
  }
});

// Top-Tier Car

const topTierCars = carsData.filter((car) => car.isTopTier);

let currentIndex = 0;

const topTierCarElement = document.getElementById("top-tier-cars");

function updateSlider(index) {
  topTierCarElement.innerHTML = `
      <div class="top-tier-slider">
        <!-- CARS IMAGE -->
        <div class="top-tier-car-image fade">
          <img src="${topTierCars[index].image}" alt="${topTierCars[index].name}" />
        </div>

        <!-- Slider Button -->
        <div class="top-tier-slider-buttons">
          <button class="top-tier-prev-button" id="prev-button">
            <img src="./Assets/whiteArrow.png" alt="Previous" />
          </button>
          <button class="top-tier-next-button" id="next-button">
            <img src="./Assets/whiteArrow.png" alt="Next" />
          </button>
        </div>

        <!-- CARS NAME -->
        <div class="car-name container">
          <p>${topTierCars[index].name}</p>
        </div>
      </div>
    `;

  document.getElementById("prev-button").addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex -= 1;
    } else {
      currentIndex = topTierCars.length - 1;
    }
    updateSlider(currentIndex);
  });

  document.getElementById("next-button").addEventListener("click", function () {
    if (currentIndex < topTierCars.length - 1) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
    updateSlider(currentIndex);
  });
}

updateSlider(currentIndex);

// Featured Car

const featuredCarList = document.getElementById("featured-car-list");
const featuredCar = carsData.filter((car) => car.isFeatured);

// Log the featured cars to the console for debugging
console.log(featuredCar);

for (let i = 0; i < featuredCar.length; i++) {
  featuredCarList.innerHTML += `
      <div class="featured-car-product">
        <!-- CAR IMAGE -->
        <div class="featured-car-image">
          <img src="${featuredCar[i].image}" alt="${featuredCar[i].name}" />
        </div>

        <!-- CAR DETAIL -->
        <div class="featured-car-detail">
          <h3>${featuredCar[i].name}</h3>
          <p>
            Price : ${featuredCar[i].price}
          </p>
          <a href="./cars.html">
            Explore More <img src="./Assets/whiteArrow.png" alt=""/>
          </a>
        </div>
      </div>
    `;
}
