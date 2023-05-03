import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom";
import { useAuth } from "../context/AuthContext";

export default function PageModal(props){
    const {setOpenModal,openModal} = props    
    const [_document, set_document] = useState(null)
    const {logout} = useAuth()

    useEffect(()=>{
        set_document(document)
    },[]);

    if(!_document) {return null}


    return ReactDOM.createPortal(
        <div className={` fixed top-0 bottom-0 right-0 left-auto ${!openModal ? "translate-x-0 ease-out w-1/5" : "-translate-x-auto ease-in"}
          duration-300  bg-gray-200 text-slate-900 text-lg flex flex-col `}>
            <div className="flex items-center justify-between border-b border-solid border-gray-900 p-4">
                <h1 className="font-black text-3xl select-none">MENU</h1>
                <i onClick={()=> setOpenModal(false)} className="fa-solid fa-rectangle-xmark fa-2xl cursor-pointer "></i>
            </div>
            <div className="p-4 flex flex-col text-right gap-3">
                <h2 onClick={()=>{
                    logout()
                    setOpenModal(false)
                }} className=" font-extrabold select-none  hover:text-gray-500 cursor-pointer">Logout</h2>
            </div>
        </div>,
        _document.getElementById('portal')
    )
}