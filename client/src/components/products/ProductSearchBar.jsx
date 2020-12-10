import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {IconContext} from "react-icons";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const ProductSearchBar = ( {setTerm }) => {

    const [input, setInput] = useState("");
    const [searchToggle, setSearchToggle] = useState({
        active:false,
        search: "search-window",
        background: "",
        searchBar: "search-bar-hidden",


    });

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
                searchBar: "search-bar-hidden"
            })
            setTerm(input);
        } 
  
    }

    const handleClick = (event) =>{
        if(searchToggle.active === false){
            setSearchToggle({
                active: true,
                search: "search-window-active",
                background: "background-hidden",
                searchBar: "search-bar-active"
            })
        }else{
            setSearchToggle({
                active: false,
                search: "search-window-hidden",
                background: "",
                searchBar: "search-bar-hidden"
            })
            setTerm(input)
        }
                
    }


    return (
        <div>
            <div className={searchToggle.background}></div>        
            <div className={searchToggle.search} >
       
                <InputGroup className="mb-3">
                    <FormControl
                        id={searchToggle.searchBar}
                        placeholder="Search Product Name"
                        onChange={onChangeInput}
                        onKeyPress={onKeyPressInput}
                        value={input}
                    />
                    <InputGroup.Append>
                        <Button 
                            className="search-button"
                            onClick={handleClick}
                            type="submit"
                            variant="outline-secondary">
                            <IconContext.Provider value={{ color: 'white', size: '3em' }}><BsSearch/></IconContext.Provider>
                        </Button>
                    </InputGroup.Append>
                </InputGroup>

            </div>
        </div>

    );
}

export default ProductSearchBar;