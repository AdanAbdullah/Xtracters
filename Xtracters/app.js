const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// Updated products array with a new "desc" property for each product
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 100,
    desc: "The Nike Air Force 1 blends classic style with modern comfort. Featuring premium leather and a cushioned Air sole, it's built for durability and all-day wear.",
    colors: [
      {
        code: "black",
        img: "Nike_image.png",
      },
      {
        code: "darkblue",
        img: "Nike_image2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 110,
    desc: "Air Jordan offers top-notch performance and iconic style. With excellent cushioning and sleek design, it’s a true streetwear staple.",
    colors: [
      {
        code: "lightgray",
        img: "jordan_image.png",
      },
      {
        code: "green",
        img: "jordan_image2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 100,
    desc: "The Blazer stands out with its timeless design and premium build. Its versatile style makes it perfect for both casual and sporty looks.",
    colors: [
      {
        code: "lightgray",
        img: "blazer_image.png",
      },
      {
        code: "green",
        img: "blazer_image2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 220,
    desc: "Crater features a bold design and innovative structure. It combines eye-catching looks with reliable performance for a standout style.",
    colors: [
      {
        code: "black",
        img: "crater_image.png",
      },
      {
        code: "lightgray",
        img: "crater_image2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 120,
    desc: "Hippie offers a unique blend of laid-back style with modern trends. It’s designed for comfort and a distinctive look that stands out.",
    colors: [
      {
        code: "gray",
        img: "hippie_image.png",
      },
      {
        code: "black",
        img: "hippie_image2.png",
      },
    ],
  },
];

// Set the initially chosen product
let choosenProduct = products[0];

// Update selectors in your selling section:
const currentProductImg = document.querySelector(".selling_shoe_img");
const currentProductTitle = document.querySelector(".Title");
const currentProductPrice = document.querySelector(".product_price");
// New selector for the product description element
const currentProductDescription = document.querySelector(".product_description");

const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// When a menu item is clicked, update slider and product details:
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change slider position (each slide takes full viewport width)
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Update the chosen product based on the menu index
    choosenProduct = products[index];

    // Update product details in the selling section
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Real Price: $" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    // Update the product description:
    currentProductDescription.textContent = choosenProduct.desc;

    // Update color options:
    currentProductColors.forEach((colorElem, i) => {
      if (choosenProduct.colors[i]) {
        colorElem.style.backgroundColor = choosenProduct.colors[i].code;
      }
    });
  });
});

// When a color circle is clicked, update the product image:
currentProductColors.forEach((colorElem, index) => {
  colorElem.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// Size selection: when a size is clicked, highlight it:
currentProductSizes.forEach((sizeElem) => {
  sizeElem.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    sizeElem.style.backgroundColor = "black";
    sizeElem.style.color = "white";
  });
});

// (Optional) Payment modal logic:
const productButton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

if (productButton && payment && close) {
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });

  close.addEventListener("click", () => {
    payment.style.display = "none";
  });
}
