const slides = [
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
];

const image = document.querySelector("#slide");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const dots = document.querySelector("#dots");

let currentIndex = 0;

const updateSlider = () => {
  image.setAttribute("src", slides[currentIndex]);
};

const updateDots = () => {
  const dotItems = document.querySelectorAll(".dot-item");
  dotItems.forEach((item) => {
    if (Number(item.id) === currentIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

const handlePrevBtnClick = () => {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
    updateSlider();
    updateDots();
  }
};

const handleNextBtnClick = () => {
  if (currentIndex < slides.length - 1) {
    currentIndex = currentIndex + 1;
    updateSlider();
    updateDots();
  }
};

const handleDotsClick = (event) => {
  const dotItem = event.target.closest(".dot-item");
  if (dotItem) {
    currentIndex = Number(dotItem.id);
    updateSlider();
    updateDots();
  }
};

const createDots = () => {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.classList.add("dot-item");
    dot.id = i;
    if (i === currentIndex) {
      dot.classList.add("active");
    }
    dot.innerHTML = `<span class="dot"></span>`;
    dots.insertAdjacentElement("beforeend", dot);
  }
};

image.setAttribute("src", slides[currentIndex]);
createDots();

prevBtn.addEventListener("click", handlePrevBtnClick);
nextBtn.addEventListener("click", handleNextBtnClick);
dots.addEventListener("click", handleDotsClick);
