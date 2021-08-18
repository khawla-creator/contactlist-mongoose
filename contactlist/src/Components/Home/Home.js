import React from 'react';
import styled from 'styled-components';
import ContactCard from './../Card/ContactCard';


const HomeStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
`
const StyledHome= styled.div`
display:flex;
justify-content: space-between;
margin-right:10rem;
`



const SpanStyled = styled.span`
  background-color: #cee1f2;
  border-right: 2px solid blue;
  padding:40px 30px 100% 20px;
  margin-right: 30px;
  width: 20rem;
  line-height: 40px;
`


function Home() {
                    return (
                                        <StyledHome>
                                        <SpanStyled> hey...👋🏼! welcom in my contact list ✨ , i hope that make you happy🤩🤓 , so enjoy to add or remove contacts🗑... </SpanStyled>
                                                            <HomeStyled>
                                                                                <ContactCard/>
                                                                                <ContactCard/>
                                                                                <ContactCard/>
                                                                                <ContactCard/>
                                                                                <ContactCard/>
                                                            </HomeStyled>
                                        </StyledHome>
                    )
}

export default Home
