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

function home(tab) {
    var home = document.getElementsByTagName("body");
    home.innerHTML
}
function product(tab) {
    return;
}
function about(tab) {
    return;
}
function contact(tab) {
    return;
}
function cart(tab) {
    return;
}



function loadData() {
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

var cartCount = 0;
var cart = [];
function addToBag(pId) {
    product.map(data => {
        if (data['id'] == pId) {
            cart.push(data);
            cartCount++;
        }
    });
    if (cartCount > 0) {
        document.getElementById("cart-count").innerHTML = cartCount;
    }
    else{
        document.getElementById("msg").innerHTML=cartCount;
    }
}

function removeFromBag(pId) {
    cart.map(data => {
        if (data['id'] == pId) {
            const index = cart.indexOf(data);
            if (index > -1) {
                cart.splice(index, 1);
            }
            cartCount--;
            goToBag();
        }
    });

    if (cartCount > 0) {
        document.getElementById("cart-count").innerHTML = cartCount;
    }


}


function goToBag() {
    const cartItems = cart.map(data => {

        return `<div class="Cart-Items" style =" display:flex; justify-content: space-between; width =100%;">
        <div class="image-box">
        <img src="${data['url']}" style="height:150px; width:150px;"></img>
        </div>
        <div class="about">
            <h3 class="title">${data['name']}</h3>
            <h5 class="subtitle"></h5>
        </div>
        <div class="counter">
            <input class="cart-quantity-input" type="number" value="2">
        </div>
        
            <div class="amount"> ${data['price']}</div>
            <div class="save"><u>Save for later</u></div>
            <div class="remove"><button onclick="removeFromBag(${data['id']})">Remove</button></div>
        
    </div>
    <hr>` ;
    });
    document.getElementById("Mproducts").innerHTML = cartItems.join('');
    var element = document.getElementById("ProBtn");
    element.classList.add("displayNone");
    var element1 = document.getElementById("Mproducts");
    element1.classList.add("removeFlex");

}



