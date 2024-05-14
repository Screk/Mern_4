import styled from "styled-components"
import { StyledContainer1, StyledContainer2, StyledContainer3, StyledContainer5 } from "./ui/StyledContainer"
import { MainContent } from "./Header";
import { useState } from "react";



const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Div2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr)
    }
`

const Div3 = styled(Div1)`
    gap: 0;
    align-items: center;
    justify-content: center;
    height: 25vh;
`

const Div4 = styled(Div1)`
    flex-direction: row;
`
const Div5 = styled(Div1)`
    justyfy-content: center;
    align-items: center;
    position: relative;
    top: 5rem;
`

const Div6 = styled(Div1)`
    flex-direction: row;
    position: absolute;
    top: 9rem;
`

const Div8 = styled(Div1)`
    flex-direction: row;
    position: absolute;
    top: 8rem;
`

const Div7 = styled(Div6)`
    top: 5rem;
`


const Img = styled.img`
    height: 45vh;
`

const Img2 = styled(Img)`
    width: 90rem;
    height: 20rem;
    padding-left: 30rem;
    padding-top: 2rem;

    @media (max-width:1083px) {
        width: 40rem;
        height: 10rem;
        padding-left: 20rem;
        padding-top: 5rem;
    }
`

const Img3 = styled(Img)`
    width: 60%;
    height: 15rem;
    margin-top: 15rem;

    @media (max-width:1083px) {
        width: 50rem;
    }
`
const Img4 = styled(Img)`
    width: 100%;
    height: 100%;
`

const AppleLink = styled.a`
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    font-size: 15px;
    background-color: #0071e3;
    border: 2px solid #0071e3;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 10rem;
    color: white;
    font-weight: bold;

    &:hover {
        background-color: transparent;
        color: #0071e3;
    }
    
`

const AppleLink2 = styled(AppleLink)`
    color: #0071e3;
    font-weight: bold;
    background-color: transparent;

    &:hover{
        background-color: #0071e3;
        color: white; 
    }
`
const AppleLink3 = styled(AppleLink)`

`


const H2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
`
const H3 = styled(H2)`
    font-size: 20px;
    
    @media (max-width: 1083px) {
        width: 20rem;
    }
`

const Titulos = styled.h2`
    font-size: 35px;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Roboto', sans-serif;
    background-color: transparent;

    @media (max-width: 1083px) {
        width: 15rem;
        display: flex;
        justify-content: center;
    }
`

const Titulos2 = styled(Titulos)`
    color: white;
`

const Titulos3 = styled.p`
    font-size: 15px;
    color: red;
    top: 3.5rem;
    font-weigth: 100;
    position: absolute;
    font-family: 'Roboto', sans-serif;
`

const Titulos4 = styled(Titulos2)`
    top: 5rem;
    font-size: 25px;

    @media (max-width: 1083px) {
        font-size: 15px;
        
    }
`

const Titulos5 = styled(Titulos3)`
    color: grey;
    font-size: 23px;
    width: 25rem;
    align-items: center;
`

const Main = () => {


  return (
    <>
        <MainContent>
            <Div1>
                <StyledContainer1>
                    <Img src="../AppleLogo.png" alt="" />
                    <Div3>
                        <H2>Evento de Apple</H2>
                        <H3>Sigue el evento mañana a las 16:00</H3>
                        <AppleLink href="https://www.apple.com/es/apple-events/">Mas Informacion</AppleLink>
                    </Div3>
                </StyledContainer1>
                <StyledContainer5>
                    <Div5>
                        <H2>iPhone 15</H2>
                        <H3>Nueva cámara. Nuevo diseño. Vente arriba.</H3>
                        <Div4>
                            <AppleLink href="https://www.apple.com/es/iphone-15/">Mas Informacion</AppleLink>
                            <AppleLink2 href="https://www.apple.com/es/shop/buy-iphone/iphone-15">Comprar</AppleLink2>
                        </Div4>
                    </Div5>
                    <Img3 src="../public/iPhone15-2.png" alt="" />
                </StyledContainer5>
                <StyledContainer2>
                    <Div3>
                        <H2>iPhone 15 Pro</H2>
                        <H3>Titanio. Tan robusto. Tan ligero. Tan pro.</H3>
                        <Div4>
                            <AppleLink href="https://www.apple.com/es/iphone-15-pro/">Mas Informacion</AppleLink>
                            <AppleLink2 href="https://www.apple.com/es/shop/buy-iphone/iphone-15-pro">Comprar</AppleLink2>
                        </Div4>
                    </Div3>
                    <Img2 src="../public/iPhone-15-pro.png" alt="" />
                </StyledContainer2>
            </Div1>
            <Div2>
                <StyledContainer3>
                    <Titulos>MacBook Air</Titulos>
                    <Titulos5>Potencia M3. Afilada al máximo.</Titulos5>
                    <Div8>
                        <AppleLink3 href="https://www.apple.com/es/macbook-air/">Mas Informacion</AppleLink3>
                        <AppleLink2 href="https://www.apple.com/es/shop/buy-mac/macbook-air">Comprar</AppleLink2>
                    </Div8>
                    <Img4 src="../public/Sin título3.png" alt="" />
                </StyledContainer3>
                <StyledContainer3>
                    <Titulos2>WATCH</Titulos2>
                    <Titulos3>SERIES 9</Titulos3>
                    <Titulos4>Una mente mas brillante</Titulos4>
                    <Div6>
                        <AppleLink3 href="https://www.apple.com/es/apple-watch-series-9/">Mas Informacion</AppleLink3>
                        <AppleLink2 href="https://www.apple.com/es/shop/goto/buy_watch/apple_watch_series_9">Comprar</AppleLink2>
                    </Div6>
                    <Img4 src="../public/Sin título4.png" alt="" />
                </StyledContainer3>
                <StyledContainer3>
                    <Titulos>iPad</Titulos>
                    <Div7>
                        <AppleLink3 href="https://www.apple.com/es/ipad/">Mas Informacion</AppleLink3>
                        <AppleLink2 href="https://www.apple.com/es/shop/buy-ipad">Comprar</AppleLink2>
                    </Div7>
                    <Img4 src="../public/Sin título5.png" alt="" />
                </StyledContainer3>
                <StyledContainer3>
                    <Titulos2>AirPods Pro</Titulos2>
                    <Titulos4>Audio adaptativo. Ahora te escucho.</Titulos4>
                    <Div6>
                        <AppleLink3 href="https://www.apple.com/es/airpods-pro/">Mas Informacion</AppleLink3>
                        <AppleLink2 href="https://www.apple.com/es/shop/goto/product/MTJV3">Comprar</AppleLink2>
                    </Div6>
                    <Img4 src="../public/Sin título6.png" alt="" />
                </StyledContainer3>
                <StyledContainer3>
                    <Titulos>HomePod mini</Titulos>
                    <Div7>
                        <AppleLink3 href="https://www.apple.com/es/homepod-mini/">Mas Informacion</AppleLink3>
                        <AppleLink2 href="https://www.apple.com/es/shop/goto/buy_homepod/homepod_mini">Comprar</AppleLink2>
                    </Div7>
                    <Img4 src="../public/Sin título7.png" alt="" />
                </StyledContainer3>
                <StyledContainer3>
                    <Titulos>Apple Trade In</Titulos>
                    <Titulos5>Consigue entre 150€ y 770€ al renovar tu iPhone 11 o posterior.</Titulos5>
                    <Div6>
                        <AppleLink3 href="https://www.apple.com/es/shop/goto/trade_in">Ver estimación</AppleLink3>
                    </Div6>
                    <Img4 src="../public/Sin título8.png" alt="" />
                </StyledContainer3>
            </Div2>
        </MainContent>
    </>
  )
}

export default Main