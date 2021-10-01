const initialData = {
    list : [],
}

const todoReducers = (state = initialData,action) =>{
    switch(action.type){
        case 'ADD_ITEM':

        const { id,data } = action.payload;
        return{
            ...state,
            data : [
                ...state.list,
                {
                    id : id,
                    data : data
                }
            ]
        }
        
    }
}

export default todoReducers;