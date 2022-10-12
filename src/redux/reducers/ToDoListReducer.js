import { ToDoListDarkTheme } from "../../JSS_StyleComponent/Themes/ToDoListDarkTheme"
import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../types/ToDoListTypes"
import { arrTheme } from "../../JSS_StyleComponent/Themes/ThemeManager"
const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList:[
        {id:'task-1', taskName:'Task 1', done:true},
        {id:'task-2', taskName:'Task 2', done:false},
        {id:'task-3', taskName:'Task 3', done:true},
        {id:'task-4', taskName:'Task 4', done:false}
    ],
    taskEdit:{id:'-1', taskName:'', done:false}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task:{
        if(action.newTask.taskName.trim() === ''){
            alert('Task name is required');
            return{...state}
        }
        let taskListUpdate = [...state.taskList];
        let index = taskListUpdate.findIndex(task=>task.taskName === action.newTask.taskName);
        if(index !== -1){
            alert('task name already exists !')
            return {...state};
        }

        taskListUpdate.push(action.newTask);

        state.taskList = taskListUpdate;
        return {...state};
    }
    case change_theme:{
        let theme = arrTheme.find(theme=>theme.id == action.themeId);
        if(theme){
            //set lại theme cho state
            state.themeToDoList = {...theme.theme};
        }
        return {...state};
    }
    case done_task:{
        let taskListUpdate = [...state.taskList]
        let index = taskListUpdate.findIndex(task => task.id === action.taskId)
        if(index !== -1)
        {
            taskListUpdate[index].done = true;
        }
        // state.taskList = taskListUpdate;
        // return {...state}
        return {...state, taskList: taskListUpdate}
    }
    case delete_task:{
        let taskListUpdate = [...state.taskList];
        //Cách xóa lấy nó gắn cho chính nó mà không có phần tử này
        taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId);
        return {...state, taskList: taskListUpdate}

        // //Cách ngắn gọn
        // return {...state, taskList: state.taskList.filter(task => task.id !== action.taskId)}
    }
    case edit_task:{
     
        return{...state, taskEdit:action.task}
    }

    case update_task :{
        //Chỉnh sửa lại taskName của taskEdit
         state.taskEdit = {...state.taskEdit, taskName: action.taskName};

         //Tìm trong taskList cập nhật lại taskEdit người dùng update
         let taskListUpdate = [...state.taskList];

         let index = taskListUpdate.findIndex(task=>task.id === state.taskEdit.id); 

         if(index!==-1)
         {
            taskListUpdate[index] = state.taskEdit;
         }
         state.taskList = taskListUpdate;
         state.taskEdit.id = {id:'-1', taskName:'', done:false};
         state.taskEdit.taskName='';
         return {...state}
    }
  default:
  return {...state}
  
  }
}
