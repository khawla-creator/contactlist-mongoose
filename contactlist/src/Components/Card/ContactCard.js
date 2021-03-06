import React from 'react';
import styled from 'styled-components';
import ctc from '../Header/assets/contact.png'
import editContact  from '../Header/assets/editContact.png';
import deletectc  from '../Header/assets/deletecontact.png';
import {Link} from 'react-router-dom'
import { deleteContact, getContact, toggleTrue } from '../../redux/actions/ContactActions';
import { useDispatch } from 'react-redux';




const CardStyled= styled.div`
display : flex;
justify-content: space-around;
flex-direction: column;
padding-left: 30px;
background-color : rgba(206,225,242, 0.7);
border-radius: 25px;
border-left: 3px #0023c4 solid;
border-right: 3px #0023c4 solid;
margin: 20px ; 
width : 35rem;
color :#0023c4 ;
&:hover{
                    box-shadow: 10px 5px 20px #e1e1f7;
}
`
const IllustrationStyled = styled.img `
height: 100px;
padding : 10px 20px ;
border-radius: 10px;
border-right: 2px #0023c4 solid;
`

const ContactStyled = styled.div`
display: flex ; 
align-items: center; 
padding: 20px 10px 40px 10px ;
border-bottom:2px solid pink;

`
const HomeStyled = styled.img`
height: 50px;
padding : 12px;
margin:10px;
border-radius: 10px;
border-right: 2px #0023c4 solid;
border-left: 2px #0023c4 solid;
&:hover{
                    cursor: pointer;
}
`
const AddDelete=  styled.div ` 
display: flex; 
flex-direction: column;
justify-content: space-around;

`




export default function ContactCard({contact}) {

                    const dispatch=useDispatch();
                    
                    return (            
                                       <ContactStyled> 
                                        <IllustrationStyled src ={ctc}/>
                                        <CardStyled>
                                        <h3> Name : {contact.name} </h3>
                                        <h3> Email :  {contact.email} </h3>
                                        <h3> Age : {contact.age} </h3>
                                        </CardStyled>
                                        <AddDelete>
                                        <Link to = '/editcontact'><HomeStyled  src = {editContact} title = 'edit contact' onClick={()=>{dispatch(toggleTrue());dispatch(getContact(contact._id))}}/> </Link>
                                        <HomeStyled src = {deletectc} title=' delete contact' onClick={()=>dispatch(deleteContact(contact._id))} />
                                        </AddDelete>
                                        </ContactStyled>
                                        
                    )
}
