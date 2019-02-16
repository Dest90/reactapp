import React, { Component } from 'react';
import {ToDoItem} from "../../components/ToDoItem/index";
import {NewTodoForm} from "../../components/NewTodoForm/index";
import styled from "styled-components";


const Container = styled.div`
    background: #2b2e39;
    margin: 0 auto;
    width: 80%;
    max-width: 600px;
    padding: 14px;
    border-radius: 14px;
    margin-top: 14px
`;

const Header = styled.h1`
    color: #fff;  
`;

const DestroyButton = styled.button`
    border-radius: 10px;
    background: red;
    padding: 5px;
    color: #fff;
    margin-bottom: 10px;
`;

export class ToDoList extends Component {
    constructor(props) {
        super(props);
        console.log('Hello from constructor');
    }

    componentDidMount = () => {
        console.log('component mount')
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        console.log('component update')
    };

    static defaultProps = {
        tasks: [
            {done: true, text: 'Record a ReactJS video'},
            {done: false, text: 'Go for a walk'}
        ],
        title: 'My stuff'
    };

    state = {
        tasks: this.props.tasks,
        draft: ''
    };

    updateDraft = (event) => {
        this.setState({draft: event.target.value})
    };

    addToDo = () => {
        const { tasks, draft } = this.state;
        const list = tasks;
        list.push({text: draft, done: false});
        this.setState({tasks: list, draft: ''});
    };

    removeAll = () => {
        this.setState({tasks: []})
    };

    render() {
        const { title } = this.props;
        const { tasks, draft } = this.state;
        return (
            <Container>
                <Header>{title}</Header>
                <DestroyButton onClick={this.removeAll}>Remove all</DestroyButton>
                {tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}
                <NewTodoForm
                    onSubmit={this.addToDo}
                    onChange={this.updateDraft}
                    draft={draft}
                />
            </Container>
        );
    }
}
