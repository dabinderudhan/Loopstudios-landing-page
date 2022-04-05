const nav = document.querySelector(".content-wrapper");
const toggleBtn = document.querySelector(".header-nav--toggle");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 700) nav.classList.remove("show-nav");
});

const figData = [
  {
    name: "Deep Earth",
    mobileImg: "./src/images/mobile/image-deep-earth.jpg",
    desktopImg: "./src/images/desktop/image-deep-earth.jpg",
  },

  {
    name: "Night arcade",
    mobileImg: "./src/images/mobile/image-night-arcade.jpg",
    desktopImg: "./src/images/desktop/image-night-arcade.jpg",
  },

  {
    name: "Soccer team VR",
    mobileImg: "./src/images/mobile/image-soccer-team.jpg",
    desktopImg: "./src/images/desktop/image-soccer-team.jpg",
  },

  {
    name: "The grid",
    mobileImg: "./src/images/mobile/image-grid.jpg",
    desktopImg: "./src/images/desktop/image-grid.jpg",
  },

  {
    name: "From up above VR",
    mobileImg: "./src/images/mobile/image-from-above.jpg",
    desktopImg: "./src/images/desktop/image-from-above.jpg",
  },

  {
    name: "Pocket borealis",
    mobileImg: "./src/images/mobile/image-pocket-borealis.jpg",
    desktopImg: "./src/images/desktop/image-pocket-borealis.jpg",
  },

  {
    name: "The curiosity",
    mobileImg: "./src/images/mobile/image-curiosity.jpg",
    desktopImg: "./src/images/desktop/image-curiosity.jpg",
  },

  {
    name: "Make it fisheye",
    mobileImg: "./src/images/mobile/image-fisheye.jpg",
    desktopImg: "./src/images/desktop/image-fisheye.jpg",
  },
];

const imgGrid = document.querySelector(".section-images");

figData.map((fig) => {
  const figure = document.createElement("figure");
  figure.innerHTML = `<figure class="imgbox">
              <picture class="imgbox-img">
                <source
                  media="(min-width:700px)"
                  srcset="${fig.desktopImg}"
                />
                <img
                  src="${fig.mobileImg}"
                  alt="earth"
                  aria-hidden="true"
                />
              </picture>
              <figcaption class="imgbox-title">${fig.name}</figcaption>
            </figure>`;

  imgGrid.appendChild(figure);
});
