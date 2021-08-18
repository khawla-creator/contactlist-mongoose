import React from 'react';
import styled from 'styled-components';
import ContactCard from './../Card/ContactCard';
import { useSelector } from 'react-redux';

const HomeStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const StyledHome= styled.div`
display:flex;
justify-content: space-round;
margin-right:10rem;
`

const SpanStyled = styled.span`
  background-color: #cee1f2;
  border-right: 2px solid blue;
  padding:40px 30px 100% 20px;
  margin-right: 30px;
  width: 200px;
  line-height: 40px;
`


function Home() {
  const contacts= useSelector(state => state.contactReducer.contacts);
                    return (
                                        <StyledHome>
                                        <SpanStyled> hey...👋🏼! welcom in my contact list ✨ , i hope that make you happy🤩🤓 , so enjoy to add or remove contacts🗑... </SpanStyled>
                                                            <HomeStyled>
                                                                                {
                                                                                  contacts.map(contact=> <ContactCard contact={contact} key={contact._id}/>)
                                                                                }
                                                                                  
                                                            </HomeStyled>
                                        </StyledHome>
                    )
}

export default Home
