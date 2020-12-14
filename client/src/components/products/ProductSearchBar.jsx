import React, { useState, useRef, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import {IconContext} from "react-icons";

const ProductSearchBar = ( {setTerm }) => {

    const [input, setInput] = useState("");
    const [searchToggle, setSearchToggle] = useState({
        active:false,
        search: "search-window",
        background: "",
        searchBar: "search-bar-hidden",
        searchButton: "search-button"

    });

    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        const value = e.target.value;
        if (!value) setTerm("");
        setInput(e.target.value);
    }

    const onKeyPressInput = (e) => {
        if (e.key === "Enter"){
            setSearchToggle({
                active: false,
                search: "search-window-hidden",
                background: "",
                searchBar: "search-bar-hidden",
                searchButton: "search-button",
            })
            setTerm(input);
        } 
  
    }

    const handleClick = (event) =>{
        event.preventDefault();
        if(searchToggle.active === false){
            setSearchToggle({
                active: true,
                search: "search-window-active",
                background: "background-hidden",
                searchBar: "search-bar-active",
                searchButton: "search-button-active"

            })

        }else{
            setSearchToggle({
                active: false,
                search: "search-window-hidden",
                background: "",
                searchBar: "search-bar-hidden",
                searchButton: "search-button"

            })
            setTerm(input)
        }

        console.log(searchToggle.searchBar);

                
    }

    useEffect(() => {
        if (searchToggle.active) {
          inputRef.current.focus();
        }
      }, [searchToggle.active]);


    return (
        <div>
            <div className={searchToggle.background}></div>        
            <div className={searchToggle.search} >
       
                    <form>
                        {searchToggle.active && 
                        <input ref={inputRef} 
                        type="text"
                        id={searchToggle.searchBar}
                        placeholder="Search Product Name"
                        onChange={onChangeInput}
                        onKeyPress={onKeyPressInput}
                        ref={inputRef}
                        value={input} />}
                        <a 
                            className={searchToggle.searchButton}
                            onClick={handleClick}
                            >
                            <IconContext.Provider value={{ color: 'white', size: '3em' }}><BsSearch/></IconContext.Provider>
                        </a>
                    </form>

            </div>
        </div>

    );
}

export default ProductSearchBar;