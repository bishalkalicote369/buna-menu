import {useEffect,useRef,useState} from 'react';import {MENU,GALLERY} from './data';import Photo from './Photo';
const eur=p=>p==null?'':'€'+p.toFixed(2);
function useReveal(){const r=useRef();useEffect(()=>{const e=r.current,o=new IntersectionObserver(([x])=>{if(x.isIntersecting){e.classList.add('in');o.disconnect()}},{threshold:.12});o.observe(e);return()=>o.disconnect()},[]);return r}
const Rv=({as:T='div',...p})=><T ref={useReveal()} {...p} className={`rv ${p.className||''}`}/>;
function Modal({item,onClose}){
 useEffect(()=>{const k=e=>e.key==='Escape'&&onClose();addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{removeEventListener('keydown',k);document.body.style.overflow=''}},[onClose]);
 return <div className="scrim" onClick={onClose}><div className="sheet" role="dialog" aria-modal="true" aria-label={item.n} onClick={e=>e.stopPropagation()}>
 <button className="x" onClick={onClose} aria-label="Close" autoFocus>×</button><Photo {...item} tone={item.tone||item.sec} alt={item.n} className="m"/>
 <div className="in"><h3>{item.n}<span>{eur(item.p)}</span></h3>{item.d&&<p>{item.d}</p>}
 {item.opts?<ul>{item.opts.map(o=><li key={o}>{o}</li>)}</ul>:<p className="muted">Ask our team about milk and add-ons.</p>}</div></div></div>;
}
export default function App(){
 const [q,setQ]=useState(''),[open,setOpen]=useState(null),[act,setAct]=useState('coffee'),[top,setTop]=useState(false),[y,setY]=useState(0);
 useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setAct(e.target.id)),{rootMargin:'-40% 0px -55% 0px'});
  MENU.forEach(c=>{const el=document.getElementById(c.id);el&&o.observe(el)});
  const s=()=>{setTop(scrollY>innerHeight);if(innerWidth>760&&scrollY<innerHeight)setY(scrollY)};addEventListener('scroll',s,{passive:true});return()=>{o.disconnect();removeEventListener('scroll',s)}},[q]);
 useEffect(()=>{document.querySelector('.nav a.on')?.scrollIntoView({inline:'center',block:'nearest'})},[act]);
 const m=q.trim().toLowerCase(),sections=MENU.map(c=>({...c,items:c.items.filter(i=>!m||i.n.toLowerCase().includes(m)).map(i=>({...i,sec:c.tone}))})).filter(c=>c.items.length);
 const Card=i=><button key={i.id} className="card" onClick={()=>setOpen(i)}><Photo {...i} tone={i.tone||i.sec} alt={i.n}/><h3>{i.n}<span>{eur(i.p)}</span></h3><p>{i.d}</p></button>;
 const Sec=c=><section key={c.id} id={c.id}><Rv className="head"><h2>{c.title}</h2>{c.sub&&<p>{c.sub}</p>}</Rv>
  {!m&&c.id==='coffee'&&<Rv className="banner"><Photo id="coffee" tone="dark" kind="cup" c="#3b2316" alt="Specialty coffee" w={1600}/></Rv>}
  {c.items.some(i=>i.feat)&&<Rv><p className="swipe">← swipe →</p><div className="cards">{c.items.filter(i=>i.feat).map(Card)}</div></Rv>}
  <Rv className="list">{c.items.filter(i=>!i.feat).map(i=><button key={i.id} className="row" onClick={()=>setOpen(i)}><b>{i.n}</b><i/><span>{eur(i.p)}</span></button>)}</Rv></section>;
 const dark=sections.filter(s=>s.dark),light=sections.filter(s=>!s.dark);
 const before=sections.filter(s=>s.id==='coffee'),after=sections.filter(s=>s.id!=='coffee'&&s.id!=='different');
 return <>
 <header className="hero"><div className="bg" style={{transform:`translateY(${y*.25}px)`}}><Photo id="hero" tone="dark" kind="cup" c="#3b2316" eager w={1600}/></div>
  <h1>BUNA</h1><p>Coffee · Food · Tea · Fresh Drinks</p><a className="cta" href="#coffee">Explore the menu ↓</a></header>
 <nav className="nav" aria-label="Menu categories">{MENU.map(c=><a key={c.id} href={`#${c.id}`} className={act===c.id?'on':''}>{c.nav||c.title}</a>)}
  <input className="search" type="search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search the menu" aria-label="Search the menu"/></nav>
 <main>{!sections.length&&<p className="empty">Nothing matches “{q}”. Try “latte” or “croissant”.</p>}{before.map(Sec)}</main>
 {dark.length>0&&<div className="dark-sec"><main>{dark.map(Sec)}</main></div>}
 <main>{after.map(Sec)}</main>
 <div className="about"><h2>About BUNA</h2><p>[Add your café story here]</p></div>
 <main><section><Rv className="head"><h2>A little BUNA</h2></Rv><div className="grid">{GALLERY.map(([id,kind,c,tone])=><Photo key={id} id={id} kind={kind} c={c} tone={tone}/>)}</div></section></main>
 <footer>BUNA · [Address] · [Opening hours] · [Instagram]</footer>
 <button className={`fab ${top?'show':''}`} onClick={()=>scrollTo({top:document.querySelector('.nav').offsetTop})}>↑ Menu</button>
 {open&&<Modal item={open} onClose={()=>setOpen(null)}/>}</>;
}
