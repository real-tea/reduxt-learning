export const addTodo = (data) =>{
    return {
        type : "ADD_ITEM",
        payload : {
            id : Math.floor(Math.random()*100),
            data : data,
        }
    }
}

export const deleteTodo = () =>{
    return{
        type : "REMOVE_ITEM"
    }
}

export const removeTodo = () =>{
    return{
        type : "REMOVE_TODO"
    }
}
 