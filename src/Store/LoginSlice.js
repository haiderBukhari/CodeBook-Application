const {createSlice} = require("@reduxjs/toolkit");
const user_name = localStorage.getItem('name')?JSON.parse(localStorage.getItem('name')):'Anonymous';
const user_email = localStorage.getItem('email')?JSON.parse(localStorage.getItem('email')):'anonymous@gmail.com';
const user_login = localStorage.getItem('islogin')?JSON.parse(localStorage.getItem('islogin')):false;

const loginSlice = createSlice({
    name: 'logins',
    initialState: {
        name: user_name,
        email: user_email,
        islogin: user_login,
    },
    reducers:{
        remove_user(state, action){
            localStorage.setItem('name', JSON.stringify('Anonymous'))
            localStorage.setItem('email', JSON.stringify('anonymous@gmail.com'))
            localStorage.setItem('islogin', JSON.stringify(false))
            return {name: 'Anonymous', email:'anonymous@gmail.com', islogin:false}
        },
        add_user(state, action){
            localStorage.setItem('name', JSON.stringify(action.payload.name?action.payload.name:''))
            localStorage.setItem('email', JSON.stringify(action.payload.email?action.payload.email:''))
            localStorage.setItem('islogin', JSON.stringify(true))
            return {name: action.payload.name, email: action.payload.email, islogin:true}
        },
    }
});
export const {add_user, remove_user} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;