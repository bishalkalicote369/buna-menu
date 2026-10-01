// EDIT YOUR MENU HERE. id = image file name in /public/images (WebP). p, d, opts are optional.
// kind = drawn fallback art when no photo exists. c = drink/food colour.
// REMOTE: verified Unsplash photos (Unsplash License). Add more: id -> Unsplash photo ID.
export const REMOTE={hero:'KWZ-rg9o76A',espresso:'KWZ-rg9o76A',coffee:'ZWSezHXJDXs',latte:'ZWSezHXJDXs'};
export const MENU=[
{id:'coffee',title:'Coffee',sub:'Start with something classic.',tone:'dark',items:[
{id:'espresso',n:'Espresso',p:2.5,kind:'cup',c:'#3b2316'},{id:'americano',n:'Americano',p:3.5,kind:'cup',c:'#4a2c1a'},
{id:'flat-white',n:'Flat White',p:4.5,kind:'cup',c:'#b98b62'},{id:'cappuccino',n:'Cappuccino',kind:'cup',c:'#c9a075'},{id:'latte',n:'Latte',kind:'cup',c:'#d4b08a'}]},
{id:'different',title:'Discover something different',nav:'Different',dark:true,tone:'ube',items:[
{id:'ube-latte',n:'Ube Latte',p:5.5,d:'Atypical · creamy · vibrant',kind:'bowl',c:'#9b6fc4',tone:'ube',feat:1},
{id:'matcha',n:'Matcha Latte',kind:'bowl',c:'#86a45a',tone:'sage',feat:1},
{id:'golden-latte',n:'Golden Latte',kind:'bowl',c:'#e0a53a',tone:'gold',feat:1},
{id:'honeychino',n:'Honeychino',kind:'cup',c:'#d9a85c',tone:'gold',feat:1}]},
{id:'cold',title:'Cold & refreshing',nav:'Cold',tone:'sage',items:[
{id:'iced-coffee',n:'Iced Coffee',kind:'iced',c:'#7a4a2c',feat:1},{id:'iced-matcha',n:'Iced Matcha',kind:'iced',c:'#86a45a',tone:'sage',feat:1},
{id:'juices',n:'Fresh Juices',kind:'juice',c:'#f29a2e',tone:'rose',feat:1}]},
{id:'food',title:'Food',sub:'Made to go with the coffee.',tone:'rose',items:[
{id:'croissant',n:'Croissant',kind:'croissant',c:'#d9953f',feat:1},{id:'avocado-toast',n:'Avocado Toast',kind:'toast',c:'#8fae5b',tone:'sage',feat:1},
{id:'salmon-toast',n:'Salmon Toast',kind:'toast',c:'#ee8a6b',tone:'rose',feat:1},{id:'pancakes',n:'Pancakes',kind:'stack',c:'#d79a55'},
{id:'sandwiches',n:'Sandwiches',kind:'toast',c:'#c9a26b'},{id:'salads',n:'Salads',kind:'bowl',c:'#7fa34f'},{id:'cakes',n:'Cakes',kind:'cake',c:'#c98a8a'}]}
];
export const GALLERY=[['gallery-1','cup','#c9a075','dark'],['gallery-2','croissant','#d9953f','rose'],['gallery-3','iced','#7a4a2c','sage'],['gallery-4','bowl','#9b6fc4','ube'],['gallery-5','cake','#c98a8a','rose'],['gallery-6','cup','#3b2316','gold']];
