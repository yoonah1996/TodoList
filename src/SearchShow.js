import React from "react";
import Search from "./Search";
import Show from "./Show";
import { Container, Row} from 'reactstrap';

const SearchShow = (props) => (
    <Container>
        <Row className = "search">
            <Search />
        </Row>
        <Row className = "show">
            <Show 
                data = {props.data}
            />
        </Row>
    </Container>
);

export default SearchShow;