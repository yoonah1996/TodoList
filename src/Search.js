import React from "react";
import { Button } from "reactstrap";


const Search = () => (
    <div className="searching">
        <Button variant="outline-secondary" size="sm" >  왼쪽  </Button>
        <span>   </span>
        <Button variant="outline-secondary" size="sm" >오른쪽</Button>
        <br></br>
        <input type = "text"></input>
    </div>

);

export default Search;