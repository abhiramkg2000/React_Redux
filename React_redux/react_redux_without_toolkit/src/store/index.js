import {legacy_createStore as createStore,combineReducers} from 'redux'

const initialCount={counter:0}

const counterReducer=(state=initialCount,action)=>{
    if(action.type==="increment")
    {
        return{
            counter:state.counter+1,
            
        }
    }
    if(action.type==="decrement")
    {
        return{
            counter:state.counter-1,
           
        }
    }
    if(action.type==="reset")
    {
        return{
            counter:0,
            
        }
    }
    if(action.type==="toggle")
    {
        return{
            counter:state.counter,
            
        }
    }
    return state;
}

const toggleReducer=(state={istoggle:true},action)=>{
    if(action.type==="toggle")
    {
        return{
            istoggle:!state.istoggle
        }
    }
    return state;
}
const rootReducer=combineReducers({counterReducer,toggleReducer})

const store=createStore(rootReducer);

export default store;