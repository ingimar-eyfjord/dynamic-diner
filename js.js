fetch("https://kea-alt-del.dk/t5/api/categories")
  .then(res => res.json())
  .then(function (data) {
    data.forEach(buildCategory)
    getProducts();
  })

function buildCategory(data) {
  const templatecategory = document.querySelector(".another").content;
  const sortcategory = templatecategory.cloneNode(true);
  sortcategory.querySelector("h2.banner").textContent = data;
  sortcategory.querySelector("div.catagorysort").setAttribute("id", data);
  sortcategory.querySelector(".catagorybanner img").src = `imgs/action/${data}.png`;
  document.querySelector(".menuflow").appendChild(sortcategory);

  const link = document.createElement("a");
  link.href = "#" + data;
  link.textContent = data;
  document.querySelector("#catagories").appendChild(link)
}

function getProducts() {
  fetch("https://kea-alt-del.dk/t5/api/productlist")
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      data.forEach(showDish)
    })
}

function showDish(dish) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".menuitemheader h2").textContent = dish.name;
  copy.querySelector(".menuitemshortdescription p").textContent = dish.shortdescription;
  copy.querySelector(".menucardimage img").src = `imgs/medium/${dish.image}-md.jpg`;
  copy.querySelector(".alcohol span").textContent = dish.alcohol;
  copy.querySelector(".price span").textContent = dish.price;

  function alcohol() {
    if (dish.alcohol == 0) {
      copy.querySelector(".alcohol").style.display = "none";
    }
  }
  alcohol()

  function discounted() {
    if (dish.discount > 0) {
      copy.querySelector(".menucard").classList.add("discounted");
      copy.querySelector(".discountprice p span").textContent = dish.price-- - dish.discount;
      copy.querySelector(".price span").textContent = dish.price;
      copy.querySelector(".price").style.textDecoration = "line-through";
    } else {
      copy.querySelector(".discountprice").style.display = "none";
    }
  }
  discounted()

  function soldoutornot() {
    if (dish.soldout) {
      copy.querySelector(".menucardimage").classList.add("soldout");
    }
  }
  soldoutornot()

  function vegetarian() {
    if (dish.vegetarian === true) {
      copy.querySelector(".veggetarian img").src = `imgs/action/vegetarian-mark.png`;
    }
  }
  vegetarian()
  //close the modal when clicked
  const modal = document.querySelector(".modal-background");
  modal.addEventListener("click", () => {
    modal.classList.add("hide");
  });

  //our cloning function

  //...
  copy.querySelector(".putinbasket").addEventListener("click", () => {
    fetch(`https://kea-alt-del.dk/t5/api/product?id=${dish.id}`)
      .then(res => res.json())
      .then(showDetails);
  });

  //console.log(showDetails)
  //once we have our data, ....
  function showDetails(data) {
    modal.querySelector(".modal-name").textContent = data.name;
    modal.querySelector(".modal-description").textContent = data.longdescription;

    //...
    modal.classList.remove("hide");
  }

	copy.querySelector('.menucard').id='dish_'+dish.id;
  function fetchstars() {
    fetch(`https://kea-alt-del.dk/t5/api/product?id=${dish.id}`)
      .then(res => res.json())
      .then(showStars);
  }
	fetchstars()
  function showStars(data) {
	  console.log(data)
    document.querySelector(`#dish_${data.id} .stars img`).src = `imgs/action/stars/${data.stars}.png`;
  }

  document.querySelector(`#${dish.category}`).appendChild(copy);
}

function scrolltodessert() {
  var elmnt = document.getElementById("scrolltodessert");
  elmnt.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

function scrolltosides() {
  var elmntside = document.getElementById("scolltosides");
  elmntside.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

function scrolltomain() {
  var elmntmain = document.getElementById("scolltomain");
  elmntmain.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

function scrolltodrinks() {
  var elmntdrinks = document.getElementById("scolltodrinks");
  elmntdrinks.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });

}

function scrolltostarter() {
  var elmntstarters = document.getElementById("scolltostarter");
  elmntstarters.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}
/*
var currentHour49 = new Date().getHours();
if (currentHour49 >= 12 && currentHour49 < 23) {
  document.getElementById("49").className += "online";
} else {
  document.getElementById("49").className += "offline";
}

var currentHour91 = new Date().getHours();
if (currentHour91 >= 11 && currentHour91 < 23) {
  document.getElementById("91").className += "online";
} else {
  document.getElementById("91").className += "offline";
}

var currentHour11 = new Date().getHours();
if (currentHour11 >= 11 && currentHour11 < 22) {
  document.getElementById("11").className += "online";
} else {
  document.getElementById("11").className += "offline";
}

var currentHour45 = new Date().getHours();
if (currentHour45 >= 10 && currentHour45 < 23) {
  document.getElementById("45").className += "online";
} else {
  document.getElementById("45").className += "offline";
}
*/