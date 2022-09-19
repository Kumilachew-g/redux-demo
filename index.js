const redux = require('redux')
const createStore =redux.createStore

const cakeOrdered = 'cakeOrdered';


function orderCake() {
return {
    type : cakeOrdered,
    quantity: 1,
  }
}

// 
const initialState = {
    numOfCakes :10,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case cakeOrdered:
            return{
                ...state,
                numOfCakes: state.numOfCakes -1,
            }
            default:
                return state
    }
}
const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()