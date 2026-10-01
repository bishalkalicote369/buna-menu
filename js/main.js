
/* ============ BUNA — menu data ============ */
const MENU = [
 {id:"esp",cat:"coffee",name:"Espresso",price:2.50,desc:"A short, intense shot of our house blend — chocolate, hazelnut, dried fruit."},
 {id:"desp",cat:"coffee",name:"Double Espresso",price:3.00,desc:"Twice the intensity for slow mornings."},
 {id:"am",cat:"coffee",name:"Americano",price:3.50,desc:"Espresso lengthened with hot water. Clean, bold, honest."},
 {id:"fw",cat:"coffee",name:"Flat White",price:4.50,img:"assets/img/final/latte-art.jpg",desc:"Double ristretto under a thin cap of silky micro-foam. Our signature pour.",tag:"Barista favorite"},
 {id:"cap",cat:"coffee",name:"Cappuccino",price:4.50,desc:"Classic thirds — espresso, steamed milk, deep foam. Cocoa dust optional."},
 {id:"lat",cat:"coffee",name:"Latte",price:5.00,img:"assets/img/final/espresso.jpg",desc:"Soft, mellow and generous. Steamed milk over a double shot.",tag:"BUNA classic"},
 {id:"moc",cat:"coffee",name:"Mocha",price:5.50,desc:"Espresso, dark chocolate and milk — dessert in a cup."},
 {id:"cor",cat:"coffee",name:"Cortado",price:4.00,desc:"Equal parts espresso and warm milk, served in glass."},
 {id:"mac",cat:"coffee",name:"Macchiato",price:3.50,desc:"Espresso \u201Cstained\u201D with a spoon of foam."},
 {id:"ube",cat:"signature",name:"Ube Latte",price:5.50,img:"assets/img/final/ube.jpg",tag:"Atypical \u00B7 creamy \u00B7 vibrant",desc:"Philippine purple yam folded into steamed milk. Nutty, vanilla-sweet, unmistakably violet."},
 {id:"mat",cat:"signature",name:"Matcha Latte",price:5.50,img:"assets/img/final/matcha.jpg",tag:"Ceremonial \u00B7 smooth \u00B7 green",desc:"Stone-ground ceremonial matcha whisked to order with your choice of milk."},
 {id:"gol",cat:"signature",name:"Golden Latte",price:5.50,img:"assets/img/final/golden-card.jpg",tag:"Warm \u00B7 spiced \u00B7 golden",desc:"Turmeric, cinnamon, ginger and honey in velvety steamed milk. Caffeine-free comfort."},
 {id:"hon",cat:"signature",name:"Honeychino",price:5.00,tag:"Sweet \u00B7 floral \u00B7 cozy",desc:"Cappuccino sweetened with raw honey and a whisper of vanilla."},
 {id:"ilat",cat:"cold",name:"Iced Latte",price:5.50,img:"assets/img/final/iced-latte.jpg",tag:"Cold \u00B7 creamy \u00B7 sunny",desc:"Double espresso over cold milk and clear ice. Simple perfection."},
 {id:"ipour",cat:"cold",name:"Iced Espresso Tonic",price:6.00,img:"assets/img/final/iced-pour.jpg",tag:"Bright \u00B7 bitter \u00B7 sparkling",desc:"Chilled espresso poured over tonic and orange peel. Surprisingly addictive."},
 {id:"iam",cat:"cold",name:"Iced Americano",price:4.50,desc:"Cold, crisp, uncompromising."},
 {id:"cb",cat:"cold",name:"Cold Brew",price:5.00,desc:"18-hour slow steep. Smooth, sweet, low acidity."},
 {id:"imat",cat:"cold",name:"Iced Matcha",price:6.00,desc:"Whisked matcha over ice and milk."},
 {id:"avs",cat:"food",name:"Avocado Toast",price:8.50,img:"assets/img/final/avocado.jpg",tag:"Fresh \u00B7 green \u00B7 crunchy",desc:"Sourdough, smashed avocado, toasted seeds, chili and citrus. Add a poached egg +1.50."},
 {id:"sal",cat:"food",name:"Salmon Toast",price:9.50,img:"assets/img/final/salmon.jpg",tag:"Silky \u00B7 herby \u00B7 bright",desc:"Cured salmon, herb cream cheese, dill and lemon on dark rye."},
 {id:"pan",cat:"food",name:"Buttermilk Pancakes",price:9.00,tag:"Fluffy \u00B7 golden \u00B7 maple",desc:"Stack of three with maple syrup, whipped butter and seasonal fruit."},
 {id:"snd",cat:"food",name:"Club Sandwich",price:9.50,img:"assets/img/final/sandwich.jpg",tag:"Toasted \u00B7 stacked \u00B7 savory",desc:"Grilled sourdough, chicken, bacon, egg and house sauce. Served with fries."},
 {id:"bowl",cat:"food",name:"BUNA Bowl",price:10.50,img:"assets/img/final/salad.jpg",tag:"Colorful \u00B7 nourishing \u00B7 fresh",desc:"Quinoa, mango, avocado, greens and grilled beef with chili-lime dressing."},
 {id:"cro",cat:"pastry",name:"Butter Croissant",price:3.50,img:"assets/img/final/croissant.jpg",tag:"Flaky \u00B7 laminated \u00B7 French",desc:"Laminated over three days with French butter. Baked every morning."},
 {id:"pac",cat:"pastry",name:"Pain au Chocolat",price:3.80,desc:"Twice-baked croissant dough, two batons of dark chocolate."},
 {id:"muf",cat:"pastry",name:"Muffin of the Day",price:3.50,desc:"Ask our baristas what came out of the oven this morning."},
 {id:"cake",cat:"pastry",name:"Cake of the Day",price:4.80,img:"assets/img/final/cake.jpg",tag:"Layered \u00B7 fruity \u00B7 indulgent",desc:"A rotating slice from our pastry counter — always worth it."},
 {id:"oj",cat:"cold",name:"Fresh Orange Juice",price:4.50,img:"assets/img/final/juice.jpg",tag:"Squeezed \u00B7 sunny \u00B7 pure",desc:"Pressed to order. Nothing added, nothing taken away."},
];
const CATS = [
 {id:"favorites",label:"Favorites"},
 {id:"coffee",label:"Coffee"},
 {id:"signature",label:"Discover"},
 {id:"cold",label:"Cold & Fresh"},
 {id:"food",label:"Food"},
 {id:"pastry",label:"Pastry"},
 {id:"about",label:"About"},
];
const fmt = p => "\u20AC" + p.toFixed(2);

/* ---------- render helpers ---------- */
const listItem = it => `
 <li class="row reveal" data-id="${it.id}" tabindex="0" role="button" aria-label="${it.name}, ${fmt(it.price)}">
   <div><span class="row-name">${it.name}</span>
   ${it.desc?`<span class="row-desc">${it.desc}</span>`:""}</div>
   <span class="dots"></span><span class="row-price">${fmt(it.price)}</span>
 </li>`;
const card = it => `
 <article class="card reveal" data-id="${it.id}" tabindex="0" role="button" aria-label="${it.name}, ${fmt(it.price)}">
   <div class="card-img"><img src="${it.img}" alt="${it.name}" loading="lazy" decoding="async"></div>
   <div class="card-body">
     <h3 class="card-name">${it.name}</h3>
     ${it.tag?`<p class="card-tag">${it.tag}</p>`:""}
     ${it.desc?`<p class="card-desc">${it.desc}</p>`:""}
     <div class="card-foot"><span class="card-price">${fmt(it.price)}</span>
     <span class="card-cta">Details <span aria-hidden="true">&rarr;</span></span></div>
   </div>
 </article>`;
const byCat = c => MENU.filter(m=>m.cat===c);

/* coffee — dark editorial section */
document.getElementById("coffee-list").innerHTML = byCat("coffee").map(listItem).join("");
document.getElementById("sig-cards").innerHTML = byCat("signature").map(card).join("");
document.getElementById("food-cards").innerHTML = byCat("food").filter(f=>f.img).map(card).join("");
document.getElementById("food-list").innerHTML = byCat("food").filter(f=>!f.img).map(listItem).join("");
document.getElementById("pastry-cards").innerHTML = byCat("pastry").filter(p=>p.img).map(card).join("");
document.getElementById("pastry-list").innerHTML = byCat("pastry").filter(p=>!p.img).map(listItem).join("");

const favIds = ["lat","mat","ube","cro","ilat","cake"];
document.getElementById("fav-cards").innerHTML = favIds.map(id=>card(MENU.find(m=>m.id===id))).join("");

/* cold section: split cards + list */
const coldWithImg = byCat("cold").filter(c=>c.img);
document.getElementById("cold-cards").innerHTML = coldWithImg.map(card).join("");
document.getElementById("cold-list").innerHTML = byCat("cold").filter(c=>!c.img).map(listItem).join("");

/* counts */
document.getElementById("coffee-count").textContent = byCat("coffee").length + " drinks";

/* ---------- category nav ---------- */
const track = document.getElementById("catnav-track");
track.innerHTML = CATS.map(c=>`<button class="pill" data-cat="${c.id}">${c.label}</button>`).join("");
const pills = [...track.children];
pills.forEach(p=>p.addEventListener("click",()=>{
  document.getElementById(p.dataset.cat).scrollIntoView({behavior:"smooth"});
}));
function setActive(id){
  pills.forEach(p=>p.classList.toggle("active",p.dataset.cat===id));
  const active = pills.find(p=>p.dataset.cat===id);
  if(active) active.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"});
}

/* scroll spy */
const spy = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) setActive(e.target.id); });
},{rootMargin:"-30% 0px -55% 0px"});
CATS.forEach(c=>{ const el=document.getElementById(c.id); if(el) spy.observe(el); });

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(entries=>{
  entries.forEach((e)=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
},{threshold:.12,rootMargin:"0px 0px -40px 0px"});
function watchReveals(){ document.querySelectorAll(".reveal:not(.in)").forEach(el=>io.observe(el)); }
watchReveals();

/* ---------- header state ---------- */
const topbar=document.querySelector(".topbar"), catnav=document.querySelector(".catnav");
addEventListener("scroll",()=>{
  topbar.classList.toggle("scrolled",scrollY>40);
  catnav.classList.toggle("scrolled",scrollY>40);
},{passive:true});

/* ---------- modal ---------- */
const modal=document.getElementById("modal"), sheet=document.getElementById("modal-sheet");
let lastFocus=null;
function openModal(id){
  const it=MENU.find(m=>m.id===id); if(!it) return;
  lastFocus=document.activeElement;
  const opts = it.cat==="coffee"||it.cat==="signature"
    ? `<div class="opt-group"><p class="opt-label">Size</p><div class="chips" data-group="size">
        <button class="chip on">Regular</button><button class="chip">Large +0.50</button></div></div>
       <div class="opt-group"><p class="opt-label">Milk</p><div class="chips" data-group="milk">
        <button class="chip on">Whole</button><button class="chip">Oat +0.30</button><button class="chip">Almond +0.30</button></div></div>
       <div class="opt-group"><p class="opt-label">Extras</p><div class="chips" data-group="extras">
        <button class="chip">Extra shot +1.00</button><button class="chip">Honey +0.50</button><button class="chip">Decaf</button></div></div>`
    : `<div class="opt-group"><p class="opt-label">Add-ons</p><div class="chips" data-group="extras">
        <button class="chip">Poached egg +1.50</button><button class="chip">Extra avocado +1.00</button></div></div>`;
  sheet.innerHTML=`
    ${it.img?`<div class="modal-img"><img src="${it.img}" alt="${it.name}"></div>`:""}
    <button class="modal-close" aria-label="Close" onclick="closeModal()">&#10005;</button>
    <div class="modal-body">
      <h3 class="modal-name">${it.name}</h3>
      <p class="modal-price">${fmt(it.price)}</p>
      ${it.tag?`<p class="card-tag" style="margin:-6px 0 10px">${it.tag}</p>`:""}
      <p class="modal-desc">${it.desc||"A BUNA original — ask our team for today's details."}</p>
      ${opts}
    </div>
    <button class="modal-add" onclick="addOrder('${it.name}')">Add to order &mdash; ${fmt(it.price)}</button>`;
  modal.classList.add("open");
  document.body.style.overflow="hidden";
  sheet.querySelectorAll(".chips").forEach(g=>g.addEventListener("click",e=>{
    const chip=e.target.closest(".chip"); if(!chip) return;
    if(g.dataset.group==="extras") chip.classList.toggle("on");
    else g.querySelectorAll(".chip").forEach(c=>c.classList.remove("on")), chip.classList.add("on");
  }));
}
function closeModal(){ modal.classList.remove("open"); document.body.style.overflow=""; lastFocus&&lastFocus.focus(); }
modal.addEventListener("click",e=>{ if(e.target===modal) closeModal(); });
addEventListener("keydown",e=>{ if(e.key==="Escape"){ closeModal(); closeSearch(); }});
document.addEventListener("click",e=>{
  const t=e.target.closest("[data-id]"); if(t) openModal(t.dataset.id);
});
document.addEventListener("keydown",e=>{
  const t=e.target.closest&&e.target.closest("[data-id]");
  if(t&&(e.key==="Enter"||e.key===" ")){ e.preventDefault(); openModal(t.dataset.id); }
});
function addOrder(name){
  closeModal();
  const t=document.getElementById("toast");
  t.textContent=`${name} added \u2014 tell it to the counter or order at the table`;
  t.classList.add("show");
  clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("show"),2600);
}

/* ---------- search ---------- */
const search=document.getElementById("search"), sInput=document.getElementById("search-input"),
      sResults=document.getElementById("search-results");
function openSearch(){ search.classList.add("open"); document.body.style.overflow="hidden";
  setTimeout(()=>sInput.focus(),80); renderSearch(""); }
function closeSearch(){ search.classList.remove("open"); if(!modal.classList.contains("open")) document.body.style.overflow=""; }
function renderSearch(q){
  q=q.trim().toLowerCase();
  const hits = q ? MENU.filter(m=>(m.name+" "+(m.desc||"")+" "+(m.tag||"")).toLowerCase().includes(q))
                 : MENU.slice(0,8);
  sResults.innerHTML = hits.length
    ? hits.map(m=>`<div class="search-row" data-id="${m.id}">
        <div>${m.name}<small>${CATS.find(c=>c.id===m.cat).label} \u00B7 ${m.tag||m.desc||""}</small></div>
        <strong>${fmt(m.price)}</strong></div>`).join("")
    : `<p class="empty">Nothing found for \u201C${q}\u201D \u2014 try \u201Cmatcha\u201D or \u201Ccroissant\u201D</p>`;
}
sInput.addEventListener("input",e=>renderSearch(e.target.value));

/* ---------- bottom bar ---------- */
const bSearch=document.getElementById("bb-search"), bTop=document.getElementById("bb-top");
bSearch.addEventListener("click",()=>{ search.classList.contains("open")?closeSearch():openSearch(); });
bTop.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
addEventListener("scroll",()=>{ bTop.classList.toggle("on",scrollY>600); },{passive:true});
