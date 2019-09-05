
//function showmore6() {
//  var dots6 = document.getElementById("dots6");
//  var moreText6 = document.getElementById("more6");
//  var btnText6 = document.getElementById("myBtn6");
//
//  if (dots6.style.display === "none") {
//    dots6.style.display = "inline";
//    btnText6.innerHTML = "Read more";
//    moreText6.style.display = "none";
//  } else {
//    dots6.style.display = "none";
//    btnText6.innerHTML = "Read less";
//    moreText6.style.display = "inline";
//  }
//} 

//function addone2(){
//	var add2 = document.getElementById("amountchosen2").innerHTML;
//	add2++;
//	document.getElementById("amountchosen2").innerHTML = add2;
//}
//}
//function retractone6(){
//	var subtract6 = document.getElementById("amountchosen6").innerHTML;
//	subtract6--;
//	document.getElementById("amountchosen6").innerHTML = subtract6;
//}
//function calculate(){
//var multyply1 = document.getElementById("amountchosen1").innerHTML;
//	console.log(multyply1)
//var price1 = document.getElementById("price1").innerHTML;
//var total = multyply1 * price1;
//document.getElementById("price1").innerHTML = total;}

//	var add1 = 0;
//	function addone1(){
//		add1++;
//	document.getElementById("amountchosen1").value = add1;}
//function addone(){
//	var add1 = copy.querySelector(".amountchosen").innerHTML;
//	add1++;console.log("words")
//	copy.querySelector(".amountchosen").innerHTML = add1;}

fetch("https://kea-alt-del.dk/t5/api/categories")
.then(res=>res.json())
.then(function(data){
	data.forEach(buildCategory)
	getProducts();
})

function buildCategory(data){
	const templatecategory = document.querySelector(".another").content;
	const sortcategory = templatecategory.cloneNode(true);
	sortcategory.querySelector("h2.banner").textContent = data;
	sortcategory.querySelector("div.catagorysort").setAttribute("id", data);
	sortcategory.querySelector(".catagorybanner img").src = `imgs/action/${data}.png`;
	document.querySelector(".menuflow").appendChild(sortcategory);

	const link = document.createElement("a");
	link.href="#"+data;
	link.textContent=data;
	document.querySelector("#catagories").appendChild(link)
}


function getProducts(){
fetch("https://kea-alt-del.dk/t5/api/productlist")
.then(function(response){
return response.json()
}).then(function(data){
data.forEach(showDish)
})}

function showDish(dish){
	const template = document.querySelector("template").content;
	const copy = template.cloneNode(true);


	
	copy.querySelector(".menuitemheader h2").textContent= dish.name;
	copy.querySelector(".menuitemshortdescription p").textContent= dish.shortdescription;
	//copy.querySelector(".more").textContent= dish.
	//copy.querySelector(".stars").textContent= dish.
	copy.querySelector(".menucardimage img").src = `imgs/medium/${dish.image}-md.jpg`;
	copy.querySelector(".alcohol span").textContent = dish.alcohol;
	copy.querySelector(".price span").textContent = dish.price;
//	copy.querySelector("")
	
	function alcohol(){
	if (dish.alcohol == 0){
		copy.querySelector(".alcohol").style.display = "none"; 
	}}
alcohol()
		
	function discounted(){
	if (dish.discount > 0){
		copy.querySelector(".menucard").classList.add("discounted");
		 copy.querySelector(".discountprice p span").textContent = dish.price --- dish.discount;
		 copy.querySelector(".price span").textContent = dish.price;
			copy.querySelector(".price").style.textDecoration = "line-through";
	}else{copy.querySelector(".discountprice").style.display = "none";
		}
	}
	 discounted()
		function soldoutornot(){
		if (dish.soldout){
			copy.querySelector(".menucardimage").classList.add("soldout");
		}
			
	}
	soldoutornot()
	
	function vegetarian(){
		if (dish.vegetarian === true){
			copy.querySelector(".veggetarian img").src = `imgs/action/vegetarian-mark.png`;	
		}}
		
	vegetarian()

//	var addone = copy.querySelector(".addone").addEventListener("click", addone);

//	function addone(){
//	var add1 = document.querySelector(".amountchosen").innerHTML;
//	add1++;console.log("words")
//	document.querySelector(".addone").nextElementSibling.innerHTML = add1;}
//	var subtractone = copy.querySelector(".retractone").addEventListener("click", subtractone);;
////	for (var i = 0; i < template.length; i++){
////		template[i].addEventListener.("click", subtractone);
////	} 
//
//	function subtractone(){
//	var retractone = document.querySelector(".amountchosen").innerHTML;
//	retractone--;console.log("words")
//	document.querySelector(".retractone").previousElementSibling.innerHTML = retractone;}
	
		document.querySelector(`#${dish.category}`).appendChild(copy);
	
	
	}

//	function sortdish(){
//	
//	document.getElementById(`#${dish.category}`).appendChild(copy);
//}
//	sortdish()

//	function sortstarter(){
//	if (dish.category === "starter"){
//	document.querySelector("#starters span").appendChild(copy);
//}
//	}sortstarter()
//
//	function sortmain(){
//	if (dish.category === "main"){
//	document.querySelector("#main span").appendChild(copy);
//}
//	}sortmain()
//	
//	function sortsides(){
//	if (dish.category === "sideorders"){
//	document.querySelector("#sides span").appendChild(copy);
//}
//	}sortsides()
//	
//	function sortdrinks(){
//	if (dish.category === "drinks"){
//	document.querySelector("#drinks span").appendChild(copy);
//}
//	}sortdrinks()
//	
//	function dessert(){
//	if (dish.category === "dessert"){
//	document.querySelector("#dessert span").appendChild(copy);
//}
//	}dessert()
//}

//	 //Get the parent DIV, add click listener...
//copy.querySelector("#starter").addEventListener("click",function(e) {
//	// e.target was the clicked element
//  if (e.target && e.target.matches(".arrow")) {
//    console.log("Anchor element clicked!");
//	}
//});
//function showmenusmallscreen(){
//showmenusmallscreen.onclick = function(event) {
//  let menu = event.target.closest(".arrow"); // (1)
//
//  if (!menu) return; // (2)
//
//  if (!table.contains(menu)) return; // (3)
//
//  document.getElementById("#starter").style.display = "block";// (4)
//};}

//function arrow2(){
//	document.querySelector("#main span").style.display = "block";
//}


function scrolltodessert(){
	var elmnt = document.getElementById("scrolltodessert");
elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function scrolltosides(){
	var elmntside = document.getElementById("scolltosides");
elmntside.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function scrolltomain(){
	var elmntmain = document.getElementById("scolltomain");
elmntmain.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function scrolltodrinks(){
	var elmntdrinks = document.getElementById("scolltodrinks");
elmntdrinks.scrollIntoView({ block: 'start',  behavior: 'smooth' });
	
}
function scrolltostarter(){
	var elmntstarters = document.getElementById("scolltostarter");
elmntstarters.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}




var currentHour49 = new Date().getHours();
if (currentHour49 >= 12 && currentHour49 < 23){
	document.getElementById("49").className += "online";}
else {
    document.getElementById("49").className += "offline";}

var currentHour91 = new Date().getHours();
if (currentHour91 >= 11 && currentHour91 < 23){
	document.getElementById("91").className += "online";}
else {
    document.getElementById("91").className += "offline";}

var currentHour11 = new Date().getHours();
if (currentHour11 >= 11 && currentHour11 < 22){
	document.getElementById("11").className += "online";}
else {
    document.getElementById("11").className += "offline";}

var currentHour45 = new Date().getHours();
if (currentHour45 >= 10 && currentHour45 < 23){
	document.getElementById("45").className += "online";}
else {
    document.getElementById("45").className += "offline";}