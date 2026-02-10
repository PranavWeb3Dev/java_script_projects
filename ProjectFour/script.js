document.addEventListener('DOMContentLoaded', () => {
    let getProductName = document.getElementById("product-name");
    let getProductImage = document.getElementById("product-image");
    let getProductPrice = document.getElementById("product-price");
    let addProduct = document.getElementById("addProduct");
    let productRow = document.getElementById("product-row");

    let cart = [];

    addProduct.addEventListener('click', () => {
        // It will redern all the info of the file.
        let productName = getProductName.value.trim();
        let productPrice = getProductPrice.value.trim();
        let productImage = getProductImage.files[0];
        if (!productName || !productPrice || !productImage) {
            alert("Please Fill All the Product Info !!!!");
        } 
        let product = {
            id: Date.now(),
            name: productName,
            price: getProductPrice.value,
            produtImg: URL.createObjectURL(productImage)
        }
        getProductImage.value = ""
        getProductName.value = ""
        getProductPrice.value = ""
        cart.push(product);
        console.log(cart)
        renderProducts(cart);
        
    })
    function renderProducts(cart) {
        cart.forEach((product) => {
         let productDiv = document.createElement("div");
            productDiv.setAttribute('product-id', product.id);
            productDiv.classList.add("col-4");
            productDiv.innerHTML = `<img src="${product.produtImg}" class="prod-img">
            <div class="Product-description"><h3>${product.name}<h3>
             <p>${product.price}<p>
             <button>Add To Cart</button>
            </div>
            `
            productRow.appendChild(productDiv);

        })
        
    }
    

})