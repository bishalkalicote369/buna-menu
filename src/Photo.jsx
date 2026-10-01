import {useState} from 'react';import Art from './Art';import {REMOTE} from './data';
// Order: /public/images/<id>.webp -> Unsplash (REMOTE) -> drawn art. Art is always underneath, so there is never an empty box.
export default function Photo({id,tone='',kind,c,alt='',eager,w=900,className=''}){
 const [src,setSrc]=useState(`/images/${id}.webp`),[tried,setTried]=useState(false),[ok,setOk]=useState(true),[loaded,setLoaded]=useState(false);
 const err=()=>{if(!tried&&REMOTE[id]){setTried(true);setSrc(`https://unsplash.com/photos/${REMOTE[id]}/download?w=${w}`)}else setOk(false)};
 return <div className={`ph ${tone} ${className}`}><Art kind={kind} c={c}/>
 {ok&&<img src={src} alt={alt} width={w} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':'auto'} decoding="async" onError={err} onLoad={()=>setLoaded(true)} className={loaded?'on':''}/>}</div>;
}
