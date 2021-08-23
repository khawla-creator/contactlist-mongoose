import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import {FaPlusCircle} from 'react-icons/fa'
import {FaUserEdit} from 'react-icons/fa'
import flower from './flower.svg'
import flowerBlue from './flowerBlue.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact } from '../../redux/actions/ContactActions'




const StyledAdd = styled.form `
display: flex;
flex-direction : column;
align-items:center;
justify-content: center;
padding : 20px;
margin : 50px 130px 20px 130px;
background: #cee1f2;
border-radius: 20px 0 ;
`

const StyledLabel= styled.label `
padding-buttom:10px;
color: blue;
margin-right:400px;

`


const StyledInput = styled.input `
width: 30rem;
height : 30px;
padding : 7px;
margin: 10px 0 10px 0;
border : none;
border-radius: 10px;
`

const StyledButton= styled.button`
padding-top:10px;
color: blue;
font-size:35px;
border:none;
background:none;
cursor:pointer;
`

const IllustrationPink = styled.img `
height:324px;
background-image: red;
position: absolute;
right:138px;
top:184px;
`
const IllustrationBlue = styled.img `
height:180px;
position: absolute;
bottom:95px;
left:138px;
`





export default function AddContact({history}) {
                    const [contact,setContact]=useState({name:"",email:"",age:0});
                    
                    const edit = useSelector(state=>state.contactReducer.edit)
                    const editcontact =useSelector(state=>state.contactReducer.contact);

                    useEffect(()=>{
                                        edit? setContact(editcontact): setContact({name:"",email:"",age:0})
                    },[edit,editcontact])
                    
                    const handleChange=(e)=> {
                                        setContact({...contact,[e.target.name]:e.target.value})
                    }

                    const dispatch=useDispatch()

                    return (
                                        <div>
                                        <StyledAdd >
                                                            <IllustrationPink src={flower} alt=' flower' />
                                                            {/* ici j'ai remplacée for par forhtml pour enlever le warnig au niveau de console */}
                                                            <StyledLabel forhtml = 'userName'>  Name * </StyledLabel>
                                                            <StyledInput type= 'text' name='name' id = 'userName' placeholder= " write your name" onChange={handleChange} value={contact.name}/>
                                                            
                                                            <StyledLabel forhtml= 'userEmail'>  email * </StyledLabel> 
                                                            <StyledInput  type= 'email' name='email' id = 'userEmail' placeholder= " write your email" onChange={handleChange} value={contact.email}/>

                                                            <StyledLabel forhtml  = 'userAge'> Age * </StyledLabel> 
                                                            <StyledInput type= 'number' name='age' id = 'userAge' placeholder= " write your age" onChange={handleChange} value={contact.age}/>
                                                            
                                                            {
                                                                                edit ? <StyledButton > <FaUserEdit onClick={()=>{dispatch(editContact(editcontact._id,contact));history.push('/')}}/> </StyledButton>
                                                                                :
                                                                                <StyledButton > <FaPlusCircle onClick={()=>{dispatch(addContact(contact));history.push('/')}} /> </StyledButton> 
                                                            }

                                                            

                                                            <IllustrationBlue src={flowerBlue} alt=' flower' />
                                        </StyledAdd>
                                        <p> * : is required </p>
                                        </div>

                    )
}
