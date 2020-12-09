import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const ProductSearchBar = ( {setTerm }) => {

    const [input, setInput] = useState("");

    const onChangeInput = (e) => {
        const value = e.target.value;
        if (!value) setTerm("");
        setInput(e.target.value);
    }

    const onKeyPressInput = (e) => {
        if (e.key === "Enter") setTerm(input);
    }

    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search Product Name"
                onChange={onChangeInput}
                onKeyPress={onKeyPressInput}
                value={input}
            />
            <InputGroup.Append>
                <Button 
                    onClick={() => setTerm(input)}
                    type="submit"
                    variant="outline-secondary">
                        Search
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
}

export default ProductSearchBar;