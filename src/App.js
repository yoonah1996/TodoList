import React from "react";
import SearchShow from "./SearchShow";
import DateTodolist from "./DateTodolist";
import { Container, Row, Col } from 'reactstrap';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [{name : "0310",
                    date : "3월 10일",
                    week : "화요일",
                    contents : ["두부찌개 마을", "공부하기", "과제 하기"]}]
        };
        this.TodolistAdd = this.TodolistAdd.bind(this);
    }

    //할일 누르면 그 날짜에 할일을 추가한다.
    TodolistAdd(Todo){
        this.setState((state) => state.data.contents.concat(Todo));
    }


    render() {
        return(
            <Container>
                <Row>
                    <Col className = "SearchAndShow">
                        1
                        <SearchShow 
                            data = {this.state.data[0]}
                        />
                    </Col>
                    <Col className = "DateAndTodolist">
                        2
                        <DateTodolist 
                        data = {this.state.data[0]}
                        TodolistAdd = {this.TodolistAdd}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default App;