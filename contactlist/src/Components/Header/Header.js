import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import comment  from './comment.png';
import addContact  from './addContact.png';
import like  from './like.png';
import notification from './notification.png'



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
padding: 20px;
margin:10px;
margin-left:10px;
width: 20rem;

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
                    return (
                                        <HeaderStyled>
                                        <TitleStyled to = '/'> My Contact List </TitleStyled>
                                        <NavStyled>
                                        <Link to='/AddContact'> <HomeStyled src = {addContact}/> </Link>
                                        <Link to = '/others'><HomeStyled src = {comment} /></Link>
                                        <Link to = '/others'> <HomeStyled  src = {like}/></Link>
                                        <Link to = '/others'> <HomeStyled  src = {notification}/></Link>
                                        </NavStyled>
                                        </HeaderStyled>
                    )
}
export default Header;



