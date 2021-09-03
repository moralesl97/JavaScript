let products =[];
    let listaProductos = document.getElementById("productList");
    
    function addNewProduct(){
    let newElement = window.prompt('Nuevo Producto');
    if(newElement != null){
        products.push(newElement)
    }
    console.log(products);
    
    while(productsList.firstChild)
        productsList.removeChild(productsList.firstChild);

    products.forEach((product)=>{
        let newProduct = document.createElement("li");
        let totalProducts = productsList.children.length;
        newProduct.setAttribute('id', totalProducts);
        newProduct.innerHTML = `${product} <button onclick = 'deleteProduct(${totalProducts})'>Eliminar</button>`;
        productsList.appendChild(newProduct);
    });

    }

    function deleteProduct(cual){;
        alert( `Eliminar producto ${cual}`);
       productsList.removeChild(productsList.childNodes[cual]);
    }
