export default function Card({props}) {
 return (
   <div className="w-96 h-52 bg-slate-100 my-2 flex flex-col items-center justify-evenly">
    <h1 className="font-bold text-lg">{props.title}</h1>
    <img className="w-72 h-24" src={props.image}/>
    <p className="font-bold text-lg">{props.price}</p>
   </div>
  );
}