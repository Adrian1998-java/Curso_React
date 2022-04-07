
//Primer objeto
const initialState = [{
    id:1,
    todo: 'Comprar pan',
    done: false
}];
//inicializo reducer
const todoReducer = ( state = initialState,  action ) => {
    
    if( action?.type === 'agregar' ){
        return [...state, action.payload]
    }

    return state;
}
//LLamado
let todos = todoReducer();
//nuevo objeto
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}
//Action (no tiene porque llamarse así)
const action = {
    type: 'agregar',
    payload: newTodo
}
//Agregamos el elemento
todos = todoReducer( todos, action );

//Lo mostramos en consola
console.log(todos)