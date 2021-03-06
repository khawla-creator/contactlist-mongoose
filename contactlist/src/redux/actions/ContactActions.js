import axios from 'axios'
import {GET_CONTACTS, TOGGLE_TRUE, TOGGLE_FALSE,GET_CONTACT} from '../constants/contactTypes';





export const getContacts =()=> async(dispatch)=>{
                    try{
                                        const res= await axios.get('/api/contacts')
                                        dispatch({type:GET_CONTACTS,payload:res.data.contacts})
                    }catch(error){
                                        console.log(error)
                    }

}


export const addContact =(newContact)=> async(dispatch)=>{
                    try {
                    await axios.post('/api/contacts',newContact)
                    dispatch(getContacts())
                    } catch (error) {
                    console.log(error)
                    }
}


export const deleteContact = (id)=> async(dispatch)=>{
                    try {
                    await axios.delete(`/api/contacts/${id}`)
                    dispatch(getContacts())                   
                    } catch (error) {
                    console.log(error)
                    }
}

export const toggleTrue=()=> {
                    return {
                    type:TOGGLE_TRUE
                    }
}
export const togglefalse=()=> {
                    return {
                    type:TOGGLE_FALSE
                    }
}

export const getContact =(id)=>async(disptach)=>{
                    try{
                    const res = await axios.get(`/api/contacts/${id}`)
                    console.log(res.data)
                    disptach({type:GET_CONTACT,payload:res.data.contact})
                    }catch(error){
                                        console.log(error)
                    }
}


export const editContact=(id,newValue)=>async(dispatch)=>{
                    try{ 
                                        await axios.put(`/api/contacts/${id}`,newValue)
                                        dispatch(getContacts())
                    } catch (error){
                    console.log(error)
                    }
}