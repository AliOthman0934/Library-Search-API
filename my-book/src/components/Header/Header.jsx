import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css"

const Header = () =>{
    return(
        <div className="holder">
            <header className="header">
                <Navbar></Navbar>
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">
                        find your book of choice
                    </h2>
                    <br></br>
                    <p className="header-text fs-18">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae excepturi consequuntur non illo natus quam, incidunt sunt earum voluptate voluptatibus aut nemo perferendis rerum adipisci dicta voluptas blanditiis soluta odio!
                    </p>
                    <SearchForm></SearchForm>
                </div>
            </header>
            
        </div>
    )
};

export default Header;