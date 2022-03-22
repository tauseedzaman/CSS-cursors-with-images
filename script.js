const grid = document.getElementById("grid");

const cursor__builten_properties = [
  "alias",
  "none",
  "col-resize",
  "context-menu",
  "copy",
  "crosshair",
  "default",
  "e-resize",
  "ew-resize",
  "grab",
  "selection",
  "marker",
  "cell",
  "bing",
  "help",
  "move",
  "n-resize",
  "ne-resize",
  "nesw-resize",
  "pointer",
  "progress",
  "row-resize",
  "s-resize",
  "se-resize",
  "sw-resize",
  "text",
  "vertical-text",
  "w-resize",
  "wait",
  "zoom-in",
  "zoom-out",
];
const image_cursors = [
  "2.jpg",
  "9.jpg",
];

const load__grid = (item) => {
  const box = document.createElement("div");
  box.classList.add("tester");
  box.textContent = item;
  box.style.cursor = item;
  box.setAttribute("title", "Click to apply");
  box.addEventListener("click", (e) => {
    let item = e.target.textContent;
    set_cursor(item);
  });
  grid.appendChild(box);
};
// set cursor method
const set_cursor = (cursor) => {
  document.querySelector("body").style.cursor = cursor;
};

// map over all builten cursors
cursor__builten_properties.map((item) => load__grid(item));

// map over all images and make then cursors
image_cursors.map((element) => {
  const box = document.createElement("div");
  let image_path = "./images/" + element;
  box.classList.add("tester");
  box.style.cursor = `url(${image_path}),auto`;
  box.setAttribute("title", "Click to apply");

  const image = document.createElement("img");
  image.setAttribute("src", image_path);
  image.classList.add("img");
  image.setAttribute("alt", image_path);
  // box.
  box.addEventListener("click", (e) => {
    let item = e.target.getAttribute("alt");
    document.querySelector("body").style.cursor = `url(${image_path}),auto`;
  });
  box.appendChild(image);
  grid.appendChild(box);
});
