const showroomCarousel = document.getElementById("carousel-pict");
const totalImages = 3; // Total number of images in the carousel
let currentIndex = 0;

function showImage(index) {
  showroomCarousel.innerHTML = `
        <img src="../Assets/showRoomCarousel${
          index + 1
        }.png" alt="Showroom Image ${index + 1}" class="fade"/>
      `;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

document.getElementById("showroom-prev").addEventListener("click", prevImage);
document.getElementById("showroom-next").addEventListener("click", nextImage);

showImage(currentIndex);

setInterval(nextImage, 5000);
