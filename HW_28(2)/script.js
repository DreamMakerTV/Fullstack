const pics = [
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
];

class AdvancedSlider {
  constructor(containerId, images, config = {}) {
    this.container = document.querySelector(containerId);
    this.images = images;
    this.config = config;
    this.currentIndex = 0;
    this.timer = null;

    this.wrapper = document.createElement("div");
    this.wrapper.className = "slider-wrapper";

    this.img = document.createElement("img");
    this.img.className = "slide-img";

    this.controls = document.createElement("div");
    this.controls.className = "controls";

    this.prevBtn = document.createElement("button");
    this.prevBtn.textContent = "Назад";

    this.nextBtn = document.createElement("button");
    this.nextBtn.textContent = "Вперед";

    this.dotsBox = document.createElement("ul");
    this.dotsBox.className = "dots";

    this.init();
  }

  init() {
    this.wrapper.append(this.img);

    if (this.config.showArrows !== false) {
      this.controls.append(this.prevBtn, this.nextBtn);
      this.wrapper.append(this.controls);
    }

    if (this.config.showDots !== false) {
      this.wrapper.append(this.dotsBox);
      this.createDots();
    }

    this.container.append(this.wrapper);
    this.bindEvents();
    this.showSlide();

    if (this.config.autoplay) {
      this.startAutoPlay();
      this.bindHoverEvents();
    }
  }

  showSlide() {
    this.img.src = this.images[this.currentIndex];
    this.updateDots();
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.showSlide();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
    this.showSlide();
  }

  createDots() {
    this.dotsBox.innerHTML = "";
    for (let i = 0; i < this.images.length; i++) {
      const dot = document.createElement("li");
      dot.className = "dot-item";
      dot.innerHTML = `<span class="dot"></span>`;
      dot.addEventListener("click", () => {
        this.currentIndex = i;
        this.showSlide();
      });
      this.dotsBox.append(dot);
    }
  }

  updateDots() {
    const dots = this.dotsBox.querySelectorAll(".dot-item");
    if (dots.length === 0) return;
    dots.forEach((d) => d.classList.remove("active"));
    dots[this.currentIndex].classList.add("active");
  }

  bindEvents() {
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());
  }

  startAutoPlay() {
    const interval = this.config.interval || 3000;
    this.timer = setInterval(() => this.nextSlide(), interval);
  }

  stopAutoPlay() {
    clearInterval(this.timer);
  }

  bindHoverEvents() {
    this.wrapper.addEventListener("mouseenter", () => this.stopAutoPlay());
    this.wrapper.addEventListener("mouseleave", () => this.startAutoPlay());
  }
}

const mySlider2 = new AdvancedSlider("#slider-container", pics, {
  showArrows: true,
  showDots: true,
  autoplay: true,
  interval: 2000,
});
