const PRODUCTS=[
{id:1,name:"Stoneware Mug Set",price:34,cat:"Kitchen",desc:"Set of four hand-glazed mugs, dishwasher safe."},
{id:2,name:"Linen Throw Blanket",price:68,cat:"Living",desc:"Stonewashed linen, soft from the first night."},
{id:3,name:"Oak Serving Board",price:42,cat:"Kitchen",desc:"Solid oak with a hand-rubbed oil finish."},
{id:4,name:"Soy Candle, Cedar",price:24,cat:"Living",desc:"40-hour burn time in a reusable tin."},
{id:5,name:"Ceramic Plant Pot",price:29,cat:"Garden",desc:"Drainage hole and saucer included."},
{id:6,name:"Cotton Bath Towels",price:56,cat:"Bath",desc:"Two heavyweight towels in natural white."},
{id:7,name:"Brass Desk Lamp",price:89,cat:"Living",desc:"Adjustable arm with warm dimmable light."},
{id:8,name:"Herb Garden Kit",price:31,cat:"Garden",desc:"Basil, thyme and parsley with pots and soil."}
].map(p=>({...p,img:`https://picsum.photos/seed/shop${p.id}/600/440`}));
const SEED_REVIEWS=[
{pid:1,name:"Amina K.",rating:5,text:"Sturdy, beautiful and they keep coffee hot."},
{pid:2,name:"Daniel R.",rating:5,text:"Gets softer with every wash. Love it."},
{pid:7,name:"Sara M.",rating:4,text:"Great light, arm could be a little stiffer."},
{pid:4,name:"Omar H.",rating:5,text:"The cedar scent fills the room without being heavy."}];
const $=(s,r=document)=>r.querySelector(s), money=n=>"$"+n.toFixed(2);
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const getCart=()=>load("cart",[]), setCart=c=>{save("cart",c);renderNav()};
const getUser=()=>load("session",null);
const getReviews=()=>load("reviews",SEED_REVIEWS);
const stars=n=>"★".repeat(n)+"☆".repeat(5-n);
function addToCart(id){const c=getCart(),i=c.find(x=>x.id===id);i?i.qty++:c.push({id,qty:1});setCart(c);toast("Added to cart")}
function toast(msg){let t=$("#toast");if(!t){document.body.insertAdjacentHTML("beforeend",'<div class="toast-container position-fixed bottom-0 end-0 p-3"><div id="toast" class="toast text-bg-dark"><div class="toast-body"></div></div></div>');t=$("#toast")}
$(".toast-body",t).textContent=msg;bootstrap.Toast.getOrCreateInstance(t,{delay:1800}).show()}
function renderNav(){
const u=getUser(),n=getCart().reduce((s,x)=>s+x.qty,0);
$("#nav").innerHTML=`<nav class="navbar navbar-expand-lg navbar-dark sticky-top"><div class="container">
<a class="navbar-brand" href="index.html">Northfield Goods</a>
<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Menu"><span class="navbar-toggler-icon"></span></button>
<div class="collapse navbar-collapse" id="menu">
<ul class="navbar-nav me-auto"><li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
<li class="nav-item"><a class="nav-link" href="index.html#products">Shop</a></li>
<li class="nav-item"><a class="nav-link" href="index.html#reviews">Reviews</a></li></ul>
<ul class="navbar-nav align-items-lg-center gap-lg-2">
<li class="nav-item"><a class="nav-link" href="cart.html">Cart <span class="badge bg-success">${n}</span></a></li>
${u?`<li class="nav-item"><span class="nav-link">Hi, ${u.name.split(" ")[0]}</span></li><li class="nav-item"><button class="btn btn-outline-light btn-sm" id="logout">Log out</button></li>`
:`<li class="nav-item"><a class="nav-link" href="login.html">Log in</a></li><li class="nav-item"><a class="btn btn-accent btn-sm" href="signup.html">Sign up</a></li>`}
</ul></div></div></nav>`;
const lo=$("#logout");if(lo)lo.onclick=()=>{localStorage.removeItem("session");location.href="index.html"};
}
function footer(){$("#foot").innerHTML='<footer class="py-4 mt-5"><div class="container text-center small">© 2026 Northfield Goods. Demo store: data stays in your browser.</div></footer>'}
document.addEventListener("DOMContentLoaded",()=>{renderNav();footer()});
