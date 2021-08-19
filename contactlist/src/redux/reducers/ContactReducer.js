import { GET_CONTACTS, TOGGLE_TRUE, TOGGLE_FALSE, GET_CONTACT } from './../constants/contactTypes';

const initialState = {
                    contacts : [],
                    edit:false,
                    contact: {}
};

const contactReducer = (state=initialState,action) =>{
                    switch (action.type) {
                                        case GET_CONTACTS:
                                        return {...state,contacts:action.payload}
                                        case TOGGLE_TRUE:
                                        return {...state,edit:true}
                                        case TOGGLE_FALSE:
                                        return {...state,edit:false}
                                        case  GET_CONTACT:
                                        return {...state,contact:action.payload}
                                        default:
                                        return state
                    }
};

export default contactReducer;