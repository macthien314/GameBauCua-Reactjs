import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from '../../ComponentToDoList/Container'
import { ToDoListDarkTheme } from '../../Themes/ToDoListDarkTheme'
import { ToDoListLightTheme } from '../../Themes/ToDoListLightTheme'
import { ToDoListPrimaryTheme } from '../../Themes/ToDoListPrimaryTheme'
import { Dropdown } from '../../ComponentToDoList/Dropdown'
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../../ComponentToDoList/Heading'
import { TextField, Label, Input } from '../../ComponentToDoList/TextField'
import { Button } from '../../ComponentToDoList/Button'
import { Table, Tr, Td, Th, Thead, Tbody } from '../../ComponentToDoList/Table'
import {connect} from 'react-redux' 
import { addTaskAction, changeThemeAction, deleteTaskAction, doneTaskAction, editTaskAction, updateTask } from '../../../redux/actions/ToDoListAction'
import {arrTheme} from '../../../JSS_StyleComponent/Themes/ThemeManager'
class ToDoList extends Component {

    state = {
        taskName:'',
        disabled:true
    }

    renderTaskToDo = ()=> {
        return this.props.taskList.filter(task=>!task.done).map((task, index)=>{
            return  <Tr key={index}>
            <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
            <Th className='text-right'>
                <Button onClick={()=>{

                    this.setState({
                        disabled:false
                    }, ()=>{
                        this.props.dispatch(editTaskAction(task))
                    })

                   
                }}className='ml-1'><i className='fa fa-edit'></i></Button>
                <Button onClick={()=>{
                    this.props.dispatch(doneTaskAction(task.id))
                }} className='ml-1'><i className='fa fa-check'></i></Button>
                <Button onClick={()=>{
                    this.props.dispatch(deleteTaskAction(task.id))
                }} className='ml-1'><i className='fa fa-trash'></i></Button>
            </Th>
        </Tr>
        })
    }

    renderTaskCompleted = ()=>{
        return this.props.taskList.filter(task => task.done).map((task, index)=>{
            return <Tr key={index}>
            <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
            <Th className='text-right'>
                <Button onClick={()=>{
                    this.props.dispatch(deleteTaskAction(task.id))
                }} className='ml-1'><i className='fa fa-trash'></i></Button>
            </Th>
        </Tr>
        })
    }

    renderTheme = ()=>{
        return arrTheme.map((theme, index)=>{
            return <option key={index} value={theme.id}>{theme.name}</option>
        })
    }

    //Life cycle bản 16 nhận vào props mới được thực thi trước render
    // componentWillReceiveProps(newprops){
    //     console.log('this.props',this.props);
    //     console.log('newProps', newprops);
    //     this.setState({
    //         taskName:newprops.taskEdit.taskName
    //     })
    // }

    //Lifecylce tĩnh không truy xuất được trỏ this
    // KHÔNG DÙNG FUNC NÀY ĐƯỢC VÌ KHI SET STATE HÀM ALIJ DC GỌI NÊN K THỂ NHẬP LIỆU NÊN CHỌN componentDidUpdate(prevProps, prevState)
    // static getDerivedStateFromProps(newProps, currentState){
    //     //newProps: là props mới, props cũ là this.props (không truy xuất được)
    //     //currentState: ứng với state hiện tại this.state

    //     //hoặc trả về state mới (this.state)
    //     let newState = {...currentState, taskName:newProps.taskEdit.taskName}
    //     return newState; 

    //     //trả về null state giữ nguyên
    //     // return null;
    // }

    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className='w-50'>
                    <Dropdown onChange={(e)=>{
                        let{value} = e.target;
                        //Dispatch value lên reducer
                        this.props.dispatch(changeThemeAction(value))
                    }}>
                       {this.renderTheme()}
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                    <TextField value={this.state.taskName} onChange={(e)=>{
                        this.setState({
                            taskName:e.target.value
                        })
                    }} name="taskName" label='Task name'></TextField>
                    <Button onClick={()=>{
                        //Lấy thông tin người dùng nhập vào từ input
                        let {taskName} = this.state;
                        //Tạo ra 1 task object
                        let newTask = {
                             id: Date.now(),
                             taskName: taskName,
                             done:false
                        }
                        //Đưa task object lên redux thông qua phương thức dispatch
                        // this.props.dispatch({
                        //     type:add_task,
                        //     task
                        // })
                        this.props.dispatch(addTaskAction(newTask));
                    }} className='ml-2'><i className='fa fa-plus'></i> Add Task</Button>
                    {
                        this.state.disabled ? <Button disabled onClick={()=>{
                            this.props.dispatch(updateTask(this.state.taskName))
                        }} className='ml-2'><i className='fa fa-upload'></i> Update Task</Button> 
                        : 
                        <Button onClick={()=>{
                            let {taskName} = this.state;
                            this.setState({
                                disabled:true,
                                taskName:''
                            },()=>{
                                this.props.dispatch(updateTask(taskName))
                            })

                           
                        }} className='ml-2'><i className='fa fa-upload'></i> Update Task</Button>
                    }
                   
                    <hr />
                    <Heading3>Task to do</Heading3>
                    <Table>
                        <Thead>
                        {this.renderTaskToDo()}
                        </Thead>
                    </Table>
                    <Heading3>Task compeleted</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskCompleted()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        )
    }
    //Đây là LifeCycle trả về props cũ và state cũ của component trước khi render
    //LifeCycle này chạy sau render
    componentDidUpdate(prevProps, prevState){
        //So sánh nếu như props trước đó (taskEdit) trước mà khác taskEdit hiện tại thì mình mới setState
        if(prevProps.taskEdit.id !== this.props.taskEdit.id)
        {
            this.setState({
                taskName: this.props.taskEdit.taskName
            })
        }
     
    }
}
const mapStateToProps = state =>{
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit
    }
}
export default connect(mapStateToProps)(ToDoList)