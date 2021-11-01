var product = [
    {
        'id': 1,
        "name": "men's shoes",
        'gender': 'male',
        'url': 'Image/Mshoe3.jpg ',
        'price': 790.00,
        'size': 8
    },
    {
        'id': 2,
        "name": "women's heels",
        'gender': 'female',
        'url': 'Image/shoes3.jpg',
        'price': 650.00,
        'size': 8

    },
    {
        'id': 3,
        "name": "men's formal shoes",
        'gender': 'male',
        'url': 'Image/shoe7.jpg',
        'price': 800.00,
        'size': 8
    },
    {
        'id': 4,
        "name": "women's casual shoes",
        'gender': 'female',
        'url': 'Image/heels2.jpg',
        'price': 560.00,
        'size': 8

    },
    {
        'id': 5,
        "name": "men's sports shoes",
        'gender': 'male',
        'url': 'Image/shoes5.jpg',
        'price': 560.00,
        'size': 8
    },
    {
        'id': 6,
        "name": "men's shoes",
        'gender': 'male',
        'url': 'Image/img5.jpg',
        'price': 770.00,
        'size': 8
    },
    {
        'id': 7,
        "name": "men's formal shoes",
        'gender': 'male',
        'url': 'Image/Mshoe2.jpg',
        'price': 789.00,
        'size': 8
    },
    {
        'id': 8,
        "name": "men's slippers",
        'gender': 'male',
        'url': 'Image/MFlat.jpg',
        'price': 230.00,
        'size': 8
    },
    {
        'id': 9,
        "name": "women's pretty flats",
        'gender': 'female',
        'url': 'Image/5.jpg',
        'price': 370.00,
        'size': 8

    },
    {
        'id': 10,
        "name": "women's flats",
        'gender': 'female',
        'url': 'Image/4.jpg',
        'price': 230.00,
        'size': 8
    },
    {
        'id': 11,
        "name": "men's casual shoes",
        'gender': 'male',
        'url': 'Image/2.jpg',
        'price': 500.00,
        'size': 8

    },
    {
        'id': 12,
        "name": "women's Casual shoes",
        'gender': 'female',
        'url': 'Image/shoe2.jpg',
        'price': 470.00,
        'size': 8
    },
    {
        'id': 13,
        "name": "women's casual shoes",
        'gender': 'female',
        'url': 'Image/6.jpg',
        'price': 530.00,
        'size': 8
    },
    {
        'id': 14,
        "name": "men's shoes",
        'gender': 'male',
        'url': 'Image/S1.jpg',
        'price': 540.00,
        'size': 8

    },
    {
        'id': 15,
        "name": "women's box heels",
        'gender': 'female',
        'url': 'Image/1.jpg',
        'price': 550.00,
        'size': 8
    },
    {
        'id': 16,
        "name": "Women's silver heels",
        'gender': 'female',
        'url': 'Image/shoe5.jpg',
        'price': 880.00,
        'size': 8
    },
    {
        'id': 17,
        "name": "men's sports shoes",
        'gender': 'male',
        'url': 'Image/sports.jpg ',
        'price': 630.00,
        'size': 8

    },
    {
        'id': 18,
        "name": "women's sandles",
        'gender': 'female',
        'url': 'Image/shoe4.jpg',
        'price': 490.00,
        'size': 8
    }];


var cartCount = 0;
var cart = [];

function loadIndex() {
    localStorage.setItem("cart", JSON.stringify(cart));

}


if (cartCount > 0) {
    document.getElementById("cart-count").innerHTML = cartCount;
}


function goToProduct(gender) {
    localStorage.setItem('gender', gender);
    window.location.href = "products.html";
}

//header menu part
function myFunction() {
    var x = document.getElementById("Topnav");
    if (x.className === "navbar") {
        x.className = " responsive";
        x.classList.remove("navbar");
    } else {
        x.classList.add("navbar");
        x.className = "navbar";
    }
}

// header search bar
function myFunction1() {
    var x = document.getElementById("search-box");
    if (x.className === "search-box-container") {
        x.className = " response";
        x.classList.remove("search-box-container");
    } else {
        x.classList.add("search-box-container");
        x.className = "search-box-container";
    }
}


function loadData() {

    var gender1 = localStorage.getItem('gender');
    let cards = product.map(item => {
        return `<div class="card" >
                <div class="p-img">
                    <img  src="${item['url']}"></img>
                    </div>
                <div class="p-info">
                  <p class="p-name">${item['name']}</p>
                  <div class="p-details">
                      <span class="p-price">Rs.${item['price']}</span>
                      <span class="p-size">Size:${item['size']}</span>
                  </div>
                </div>  
               <button class="Pbtn" onclick="addToBag(${item['id']})">Add To Bag</button>
            </div>`;
    });
    document.getElementById("Mproducts").innerHTML = cards.join('');
    if (gender1 !== null) {
        selectCategory(gender1);
        localStorage.removeItem('gender');
    }
}

function selectCategory(category) {
    if (category == 'male') {
        let mcards = product.map(item => {
            if (item['gender'] == 'male') {
                return `<div class="card" >
                    <div class="p-img">
                        <img  src="${item['url']}"></img>
                    </div>
                    <div class="p-info">
                      <p class="p-name">${item['name']}</p>
                      <div class="p-details">
                          <span class="p-price">Rs.${item['price']}</span>
                          <span class="p-size">Size:${item['size']}</span>
                      </div>
                    </div>  
                   <button class="Pbtn" onclick="addToBag(${item['id']})">Add To Bag</button>
                </div>`
            }
        });
        document.getElementById("Mproducts").innerHTML = mcards.join('');
    }
    else if (category == 'female') {
        let wcards = product.map(data => {
            if (data['gender'] == 'female') {
                return `<div class="card" >
                       <div class="p-img">
                           <img  src="${data['url']}"></img>
                       </div>
                       <div class="p-info">
                         <p class="p-name">${data['name']}</p>
                         <div class="p-details">
                             <span class="p-price">Rs.${data['price']}</span>
                             <span class="p-size">Size:${data['size']}</span>
                         </div>
                       </div>  
                      <button class="Pbtn" onclick="addToBag(${data['id']})">Add To Bag</button>
                   </div>` ;
            }
        });
        document.getElementById("Mproducts").innerHTML = wcards.join('');

    }
    else {
        loadData();
    }
}



function addToBag(pId) {
    var cartData = JSON.parse(localStorage.getItem("cart") || '[]');
    product.map(data => {
        if (data['id'] == pId) {
            cartData.push(data);
            cartCount++;
        }
    });
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert('Added To bag');
    if (cartCount > 0) {
        document.getElementById("cart-count").innerHTML = cartCount;
    }
}


function removeFromBag(pId) {
    const addedcart = JSON.parse(localStorage.getItem("cart") || '[]');
    addedcart.map(data => {
        if (data['id'] == pId) {
            const index = addedcart.indexOf(data);
            if (index > -1) {
                addedcart.splice(index, 1);
            }
            cartCount--;
        }
    });
    localStorage.setItem("cart", JSON.stringify(addedcart));
    alert('Deleted from bag');
    goToBag();

}


function goToBag() {
    const addedcart = JSON.parse(localStorage.getItem("cart"));
    const cartItems = addedcart.map(data => {

        return ` <div class="Product-data" style="display:flex; justify-content: center;">
        <div class="ImgCart">
            <img  src="${data['url']}" class="cartImg" style="border: 1px solid black;" />
        </div>
        <div class="product-Name" style="display: flex; flex-wrap: wrap; justify-content: space-between;margin: auto 0px auto 0px; ">
            <h3>${data['name']}</h3>
            <div>
            <p> <b>Rs.${data['price']}</b></p>
            <p>Size: ${data['size']}</p>
            
            
            </div>
           
        </div>
        
        <div style="margin: auto 0px auto 15px;">
               
                <span style="color:darkred;" onclick="removeFromBag(${data['id']})" class="material-icons">delete_outline </span>
            </div>
        
    </div>
    <hr>` ;
    });
    getTotal(addedcart);
    document.getElementById("shopping-cart").innerHTML = cartItems.join('');

}

function getTotal(cartArray) {
    var total = 0;
    for (var i = 0; i < cartArray.length; i++) {
        total += cartArray[i].price;
        // console.log(cartArray[i].price);
    }
    // console.log(cartArray);
    document.getElementById("displayTotal").innerHTML = 'Rs. ' + total;
}



