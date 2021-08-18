import React from 'react'
import styled from 'styled-components'
import flower from './flowerOthers.svg'

const OtherStyle = styled.div ` 
display: flex;
justify-content: center;
align-items:center;
text-align:center;
font-family: 'Indie Flower', cursive;
color :blue;
padding : 20px;
margin: 150px 60px 0 60px;
background: #cee1f2;
border-radius: 20px ;

`

const Illustration = styled.img `
position: absolute;
height:100px;
right: 25px;
top:352px;

`




export default function Others() {
                    return (
                                        <OtherStyle>
                                                            <Illustration src = {flower} alt = 'flower' />
                                                            <h1> there is nothing here it's just for fun 😁😋🤗</h1>
                                        </OtherStyle>
                    )
}
