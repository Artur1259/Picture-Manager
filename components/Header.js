import { useState } from "react";
import PageModal from "./PageModal";   



const Header = ({children}) => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            {openModal && <PageModal setOpenModal={setOpenModal}/>}
            <div className="flex justify-end items-center pr-10 bg-gray-100">
                MENU
                    <i onClick={()=>{
                        setOpenModal(true)

                    }} 
                        className="fa-solid fa-bars fa-xl cursor-pointer ml-5"></i>
                
            </div>
        </>
    )

};

export default Header;
