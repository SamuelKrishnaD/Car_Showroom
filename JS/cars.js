"use-strict";
console.log("script connected");

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
    name: "Mclaren_Artura",
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

const carBrands = [
  {
    name: "Chevrolet",
    image: "./Assets/chevrolet.png",
  },

  {
    name: "Mercedes Benz",
    image: "./Assets/mercedes.png",
  },

  {
    name: "BMW",
    image: "./Assets/bmw.png",
  },

  {
    name: "Bugatti",
    image: "./Assets/bugatti.png",
  },

  {
    name: "Ferrari",
    image: "./Assets/ferrari.png",
  },

  {
    name: "Ford",
    image: "./Assets/ford.png",
  },

  {
    name: "Aston Martin",
    image: "./Assets/astonMartin.png",
  },

  {
    name: "Lamborghini",
    image: "./Assets/lamborghini.png",
  },

  {
    name: "Audi",
    image: "./Assets/audi.png",
  },

  {
    name: "Porsche",
    image: "./Assets/porsche.png",
  },

  {
    name: "Mclaren",
    image: "./Assets/mcLaren.png",
  },
];

const carBrandList = document.getElementById("car-brand-content");
let carouselIndex = 0;

function showCarousel(index) {
  let html = "";

  for (let i = 0; i < 6; i++) {
    const brandIndex = (index + i) % carBrands.length;
    html += `
      <div class="car-brand-list">
        <img src="${carBrands[brandIndex].image}" loading="lazy" alt="" />
      </div>
    `;
  }

  html += `
    <div class="brand-prev-next-button">
      <button class="brand-prev-button" id="brand-prev">
        <img src="./Assets/whiteArrow.png" alt="Previous" />
      </button>
      <button class="brand-next-button" id="brand-next">
        <img src="./Assets/whiteArrow.png" alt="Next" />
      </button>
    </div>
  `;

  carBrandList.innerHTML = html;

  document.getElementById("brand-prev").addEventListener("click", function () {
    carouselIndex = (carouselIndex - 1 + carBrands.length) % carBrands.length;
    showCarousel(carouselIndex);
  });

  document.getElementById("brand-next").addEventListener("click", function () {
    carouselIndex = (carouselIndex + 1) % carBrands.length;
    showCarousel(carouselIndex);
  });
}

showCarousel(carouselIndex);

setInterval(() => {
  carouselIndex = (carouselIndex + 1) % carBrands.length;
  showCarousel(carouselIndex);
}, 3000);

// New Car
const newCarList = document.getElementById("new-car-list");
const newCars = carsData.filter((car) => car.isNew);

let newIndex = 0;

function newSlider(index) {
  newCarList.innerHTML = "";
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    for (let i = 0; i < 1; i++) {
      const newCarIndex = (index + i) % newCars.length;
      newCarList.innerHTML += `
        <div class="new-car-slider fade">
          <div class="new-car-products">
            <a href="">
              <img src="${newCars[newCarIndex].image}" loading="lazy" alt="${newCars[newCarIndex].name}" />
              <p>${newCars[newCarIndex].name}</p>
            </a>
          </div>
        </div>
      `;
    }
  } else {
    for (let i = 0; i < 5; i++) {
      const newCarIndex = (index + i) % newCars.length;
      newCarList.innerHTML += `
        <div class="new-car-slider fade">
          <div class="new-car-products">
            <a href="">
              <img src="${newCars[newCarIndex].image}" loading="lazy" alt="${newCars[newCarIndex].name}" />
              <p>${newCars[newCarIndex].name}</p>
            </a>
          </div>
        </div>
      `;
    }
  }
}

document.getElementById("new-car-prev").addEventListener(
  "click",
  throttle(() => {
    newIndex = (newIndex - 1 + newCars.length) % newCars.length;
    newSlider(newIndex);
  }, 500)
);

document.getElementById("new-car-next").addEventListener(
  "click",
  throttle(() => {
    newIndex = (newIndex + 1) % newCars.length;
    newSlider(newIndex);
  }, 500)
);

newSlider(newIndex);

// Used Car
const usedCarList = document.getElementById("used-car-list");
const usedCars = carsData.filter((car) => !car.isNew);

let usedIndex = 0;

function usedSlider(index) {
  usedCarList.innerHTML = "";
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    for (let i = 0; i < 1; i++) {
      const usedCarIndex = (index + i) % usedCars.length;
      usedCarList.innerHTML += `
        <div class="used-car-slider fade">
          <div class="used-car-products">
            <a href="">
              <img src="${usedCars[usedCarIndex].image}" loading="lazy" alt="${usedCars[usedCarIndex].name}" />
              <p>${usedCars[usedCarIndex].name}</p>
            </a>
          </div>
        </div>
      `;
    }
  } else {
    for (let i = 0; i < 5; i++) {
      const usedCarIndex = (index + i) % usedCars.length;
      usedCarList.innerHTML += `
        <div class="used-car-slider fade">
          <div class="used-car-products">
            <a href="">
              <img src="${usedCars[usedCarIndex].image}" loading="lazy" alt="${usedCars[usedCarIndex].name}" />
              <p>${usedCars[usedCarIndex].name}</p>
            </a>
          </div>
        </div>
      `;
    }
  }
}

document.getElementById("used-car-prev").addEventListener(
  "click",
  throttle(() => {
    usedIndex = (usedIndex - 1 + usedCars.length) % usedCars.length;
    usedSlider(usedIndex);
  }, 500)
);

document.getElementById("used-car-next").addEventListener(
  "click",
  throttle(() => {
    usedIndex = (usedIndex + 1) % usedCars.length;
    usedSlider(usedIndex);
  }, 500)
);

usedSlider(usedIndex);

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
