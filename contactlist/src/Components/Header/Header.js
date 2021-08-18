import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import comment  from './assets/comment.png';
import addContact  from './assets/addContact.png';
import like  from './assets/like.png';
import notification from './assets/notification.png'
import contactList from './assets/list.png'
import { useDispatch } from 'react-redux';  
import { getContacts, togglefalse } from '../../redux/actions/ContactActions';




const HeaderStyled = styled.div `
display: flex;
justify-content : space-between;
align-items: center;
border-bottom: 2px  #0f30c7 solid;

`
const TitleStyled = styled(Link)` 
text-decoration: none;
color : #f24da8;
padding-left: 20px;
font-size:2em;
`


const NavStyled = styled.div`
display: flex;
justify-content: space-between;
padding: 20px ;
margin:10px;
margin-left:20px;
width: 25rem;

`
const HomeStyled = styled.img`
height: 50px;
padding : 5px;
border-radius: 10px;
&:hover {
                    height: 55px;
                    padding:0px;
  }
`



function Header () {
const dispatch = useDispatch()
                    return (
                                        <HeaderStyled>
                                        <TitleStyled to = '/'> My Contact List </TitleStyled>
                                        <NavStyled>
                                        <Link to='/'> <HomeStyled src = {contactList}  onClick={()=>dispatch(getContacts())}/> </Link> {/* get data */}
                                        <Link to='/AddContact'> <HomeStyled src = {addContact} onClick={()=>dispatch(togglefalse())} /> </Link>
                                        <Link to = '/others'><HomeStyled src = {comment} /></Link>
                                        <Link to = '/others'> <HomeStyled  src = {like}/></Link>
                                        <Link to = '/others'> <HomeStyled  src = {notification}/></Link>
                                        </NavStyled>
                                        </HeaderStyled>
                    )
}
export default Header;



