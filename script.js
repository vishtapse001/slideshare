document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/allu-arjun-072241749-16x9_0.jpg?VersionId=K_n8YW.C2E4R3xdcdF74eB_BV9dtRyed&size=690:388",
    "https://wallpapers.com/images/featured/kgf-2-ct4dus1uoa4iqimt.jpg",
    "https://assets.thehansindia.com/h-upload/2022/03/24/1283372-rrr.webp",
    // Add more image URLs as needed
  ];

  let currentIndex = 0;
  const slideshowImage = document.getElementById("slideshow-image");

  function showImage(index) {
    slideshowImage.src = images[index];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  // Initial display
  showImage(currentIndex);

  // Interval to change image every 2000ms
  setInterval(nextImage, 2000);

  // Button event listeners
  document.getElementById("prev-btn").addEventListener("click", prevImage);
  document.getElementById("next-btn").addEventListener("click", nextImage);
});
