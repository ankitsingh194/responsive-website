
import React from 'react';
import "./index.css"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import headerImg from "./assets/header-img.svg"


const Index = () => {
    return (
        <div className=''>
            <head>
                <title>my portfolio project</title>
                <meta name="description" ></meta>
                
            </head>
            <main className='bg-white '>
         
               <section className="min-h-screen">
                   <nav className='py-10 mb-12 flex justify-between'> 
                      <h1 className='text-xl text-black p-10 font-bold'>WebDevloper</h1>
                      <ul className='flex items-center'>
                        <li>
                        < BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
                        </li>
                        <li>
                            <li><a className='bg-gradient-to-r from-cyan-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
                        </li>
                      </ul>
                   </nav> 
                   <div className='text-center p-10 '>
                    <h2 className='text-5xl py-2 text-teal-600 font-medium'>Ankit singh</h2>
                    <h3 className='text-2xl py-2 text-red-600'>Developer and Desinger.</h3>

                   </div>
                   <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                    <AiFillTwitterCircle />
                    <AiFillLinkedin />
                    <AiFillYoutube />
                   </div>
                   <div className='  relative mx-auto bg-gradient-to-b from-black-500 rounded-full w-80 h-80 mt-20'>
                   <img src={headerImg} layout="fill"  alt="Headder Img"/>

                   </div>
                  <div className='py-10'>
                   <div className="text-center  group block max-w-xs mx-auto rounded-lg p-6  bg-green ring-1 ring-slate-900/5 shadow-lg space-y-3" >
                    
                      <h3 className='text-gray-800 py-1 text-lg font-bold pt-8 pb-2'>Beautiful Designs
                       </h3>
                       <p className='text-gray-800 py-2 font-serif'>Creating elegant Designs suited for your needs following core Design theory</p>
                      <h4 className='py-4 text-teal-600 font-bold '>Design tools I use</h4>
                       <p className='text-gray-800 py-1 font-bold  '>Photoshop</p>
                       <p className='text-gray-800 py-1 font-bold' >Illustrator</p>
                      <p className='text-gray-800 py-1 font-bold' >Figma</p>
                   </div>
                 </div>  
                 <div className='py-10'>
                   <div className="text-center  group block max-w-xs mx-auto rounded-lg p-6  bg-green ring-1 ring-slate-900/5 shadow-lg space-y-3" >
                    
                      <h3 className='text-gray-800 py-1 text-lg font-bold pt-8 pb-2'>Beautiful Designs
                       </h3>
                       <p className='text-gray-800 py-2 font-serif'>Creating elegant Designs suited for your needs following core Design theory</p>
                      <h4 className='py-4 text-teal-600 font-bold '>Design tools I use</h4>
                       <p className='text-gray-800 py-1 font-bold  '>Photoshop</p>
                       <p className='text-gray-800 py-1 font-bold' >Illustrator</p>
                      <p className='text-gray-800 py-1 font-bold' >Figma</p>
                   </div>
                 </div>  
                 <div className='py-10'>
                   <div className="text-center  group block max-w-xs mx-auto rounded-lg p-6  bg-green ring-1 ring-slate-900/5 shadow-lg space-y-3" >
                    
                      <h3 className='text-gray-800 py-1 text-lg font-bold pt-8 pb-2'>Beautiful Designs
                       </h3>
                       <p className='text-gray-800 py-2 font-serif'>Creating elegant Designs suited for your needs following core Design theory</p>
                      <h4 className='py-4 text-teal-600 font-bold '>Design tools I use</h4>
                       <p className='text-gray-800 py-1 font-bold  '>Photoshop</p>
                       <p className='text-gray-800 py-1 font-bold' >Illustrator</p>
                      <p className='text-gray-800 py-1 font-bold' >Figma</p>
                   </div>
                 </div> 
                 <div className='py-10  '>
                 <div className=' text-center  '>
                    
               
                
                </div> 

               </div>
    
    
                </section>
            </main>
        </div>
    );
}

export default Index;
