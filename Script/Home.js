document.getElementById("cart").setAttribute("data-count",cartItems)

// Create Image Slider
var i = 1;
var timerID;
function prevoius(){
  i--;
  if(i<1){i = 5;}
  document.images[0].src = `media/${i}.jpg`
}
function play(){
  timerID = setTimeout(play,3000)
  next()
}
function next(){
  i++;
  if(i>5){i = 1;}
  document.images[0].src = `media/${i}.jpg`
}
play();

// Create Categories' elements
var cat = document.getElementById("category")
for(var i=0; i<categories.length;i++)
{
  var container = document.createElement("div");
  var image = document.createElement("img")
  var button = document.createElement("button")
  image.setAttribute("src",`${categories[i].img}`)
  button.innerText = `${categories[i].title}`
  container.appendChild(button)
  container.appendChild(image)
  cat.appendChild(container)
}

// Create Products' elements
function createProducts(cat){
  var product = document.getElementById("product")
  product.innerHTML="";
  if(cat != ""){
      for(var i=0; i<products.length;i++)
      {
          if(products[i].cat == cat){
          var container = document.createElement("div");
          var image = document.createElement("img")
          var desc = document.createElement("p")
          var button = document.createElement("button")
          image.setAttribute("src",`${products[i].img}`)
          desc.innerHTML= `${products[i].desc}`
          button.setAttribute("class","cart-btn")
          button.setAttribute("id",`${products[i].id}`)
          button.innerText = `ADD TO CART`
          container.appendChild(desc)
          container.appendChild(button)
          container.appendChild(image)
          product.appendChild(container)
        }
      }
  }
  else if (cat == ""){
    for(var i=0; i<products.length;i++)
    {
        var container = document.createElement("div");
        var image = document.createElement("img")
        var desc = document.createElement("p")
        var button = document.createElement("button")
        image.setAttribute("src",`${products[i].img}`)
        desc.innerHTML= `${products[i].desc}`
        button.setAttribute("class","cart-btn")
        button.setAttribute("id",`${products[i].id}`)
        button.innerText = `ADD TO CART`
        container.appendChild(desc)
        container.appendChild(button)
        container.appendChild(image)
        product.appendChild(container)
    }
  }
}
createProducts("")

// Filter products by category on option select
var select = document.getElementById("select-cat")
select.addEventListener("change",function(){
  // Send the selected category as parameter to product function
  createProducts(this.value)
  addToCart()
})

// Add event listener to all Add to Cart Buttons
function addToCart(){
    document.querySelectorAll(".cart-btn").forEach(item => {
      item.addEventListener("click", event => {
        //Add clicked product to cart
        cartItems++;
        document.getElementById("cart").setAttribute("data-count",cartItems)
        
        //Alert The product that added to cart
        //Get the added product by it's ID
        alert(`The Product: ${products[event.target.id-1].desc} Added To Cart`)
      })
    })
}
addToCart()

var topBtn = document.getElementById("top-btn");
// Change Top button visivilty while scrolling
window.onscroll = function()
{
    if(scrollY >= 300)
    {
      // Show top button
      topBtn.style.visibility="visible"
    }else
    {
      // Hide top button
      topBtn.style.visibility="hidden";
    }
};
// Back to the top of the page
topBtn.addEventListener("click",function(){
  document.body.scrollIntoView({
    behavior: "smooth",
  });
 // document.documentElement.scrollTop = 0;
})


