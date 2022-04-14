const INITIAL_STATE = {
    iduser: null,
    idaddress: null,
    username: "",
    email: "",
    imageurl: "",
    role: "",
    status: "", 
    fullname: "",
    age: "",
    gender: "",
    address: [],
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("DATA DARI ACTION PAYLOAD", action.payload)
            return {
                ...state,
                iduser: action.payload.iduser,
                idaddress: action.payload.idaddress,
                username: action.payload.username,
                email: action.payload.email,
                imageurl: action.payload.imageurl,
                role: action.payload.role,
                status: action.payload.status,
                fullname: action.payload.fullname,
                age: action.payload.age,
                gender: action.payload.gender,
                address: action.payload.address
            }
        case "LOGOUT":
            return INITIAL_STATE
        default:
            return state
    }
}