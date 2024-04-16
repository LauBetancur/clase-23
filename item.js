import{ obtenerProductoPorId} from "./utils.js";
const render = async () => {
    const params =new URLSearchParams(window.location.search);
    
    const id = params.get("id");
    const producto= await obtenerProductoPorId(parseInt(id));

    const breadcrumbs= document.querySelector (".breadcrumbs");
    breadcrumbs.textContent="inicio >" +producto.name;

    const itemTitle= document.querySelector(".itemTitle");
    itemTitle.textContent= producto.name;

    const itemPrice = document.querySelector(".itemPrice");
    itemPrice.textContent="$" +producto.price;
    
    const iteamDescription =document.querySelector (".itemDescription");
    iteamDescription.textContent= producto.description;

    const itemLeft= document.querySelector(".item__left");
    itemLeft.src=producto.image;
    itemLeft.alt= producto.name;
    
    
};
  
   
  
  document.addEventListener("DOMContentLoaded", render);
  