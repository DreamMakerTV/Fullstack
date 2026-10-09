const pics = [
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
];

function BaseSlider(containerId, images, config) {
  this.container = document.querySelector(containerId);
  this.images = images;
  this.config = config || {};
  this.currentIndex = 0;

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

BaseSlider.prototype.init = function () {
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
};

BaseSlider.prototype.showSlide = function () {
  this.img.src = this.images[this.currentIndex];
  this.updateDots();
};

BaseSlider.prototype.nextSlide = function () {
  if (this.currentIndex < this.images.length - 1) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0;
  }
  this.showSlide();
};

BaseSlider.prototype.prevSlide = function () {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } else {
    this.currentIndex = this.images.length - 1;
  }
  this.showSlide();
};

BaseSlider.prototype.createDots = function () {
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
};

BaseSlider.prototype.updateDots = function () {
  const dots = this.dotsBox.querySelectorAll(".dot-item");
  if (dots.length === 0) return;
  dots.forEach((d) => d.classList.remove("active"));
  dots[this.currentIndex].classList.add("active");
};

BaseSlider.prototype.bindEvents = function () {
  this.prevBtn.addEventListener("click", () => this.prevSlide());
  this.nextBtn.addEventListener("click", () => this.nextSlide());
};

function DraggableSlider(containerId, images, config) {
  BaseSlider.call(this, containerId, images, config);
  this.startX = 0;
  this.bindDragEvents();
}

DraggableSlider.prototype = Object.create(BaseSlider.prototype);
DraggableSlider.prototype.constructor = DraggableSlider;

DraggableSlider.prototype.bindDragEvents = function () {
  this.img.addEventListener("mousedown", (e) => {
    e.preventDefault();
    this.startX = e.clientX;
  });

  this.img.addEventListener("mouseup", (e) => {
    const diff = e.clientX - this.startX;
    if (diff > 50) this.prevSlide();
    if (diff < -50) this.nextSlide();
  });

  this.img.addEventListener("touchstart", (e) => {
    this.startX = e.touches[0].clientX;
  });

  this.img.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - this.startX;
    if (diff > 50) this.prevSlide();
    if (diff < -50) this.nextSlide();
  });
};

const mySlider1 = new DraggableSlider("#slider-container", pics, {
  showArrows: true,
  showDots: true,
});
