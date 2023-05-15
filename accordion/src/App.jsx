import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';


// const Section=({name,desc})=>{
//   const [isVisible,setIsVisible]=useState(false);
//   return (
//     <div className='border-2 border-black p-2 m-2'>
//       <p className='font-bold text-xl'>{name}</p>
      
//       {(isVisible) ?  <><p>{desc}</p><button onClick={()=>setIsVisible(false)}>Hide</button></> :
//       <button onClick={()=>setIsVisible(true)}>Show</button>}
//     </div>
//   )
// }

const App=()=>{
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const handleSectionClick = (index) => {
    setOpenSectionIndex((prevState) => (prevState === index ? null : index));
  };
  const sections = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Section 2",
      content: "Pellentesque ac ex eu enim blandit sollicitudin a vel sapien.",
    },
    {
      title: "Section 3",
      content: "Vestibulum faucibus lectus eu nunc tristique, nec venenatis dolor interdum.",
    },
  ];

  
  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className='p-2 m-2 border-2 border-black transition ease-in-out'>
          <div className='flex justify-between'>
          <p className='font-bold'>{section.title}</p>
          {openSectionIndex===index ? <button className='text-sm' onClick={() => handleSectionClick(index)}>Hide</button> :
          <button className='text-sm' onClick={() => handleSectionClick(index)}>Show</button>}
          </div>
          {openSectionIndex === index && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
