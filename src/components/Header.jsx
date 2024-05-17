import styled from 'styled-components';
import { useState } from 'react';
import '@testing-library/jest-dom' 

export { default as userEvent } from '@testing-library/user-event'

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 5vh;
    background-color: rgba(255, 255, 255, 0.5);
    gap: 30px;
    position: fixed;
    z-index: 1000;
    data-testid='Header'

`;

export const StyledButton = styled.button`
    background-color: rgba(255, 255, 255, 0);
    border: 0px;
    cursor: pointer;
    height: 5vh;
    overflow-x: hidden;
    overflow-y:hidden;
`;

const Menu = styled.div`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: row;
    position: absolute;
    top: 100%;
    left: 0;
    padding-top: 1rem;
    align-items: start;
    justify-content: center;
    gap: 40px;
    height: auto;
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    padding-bottom: 1rem;

`;

const StyledDiv1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 50vw;
    gap: 2rem;
    height: auto;
`

const StyledDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 1rem;
    margin-top: 10px;
    justify-content: start;
`

const StyledDiv3 = styled(StyledDiv1)`
    flex-direction: column;
`

const StyledDiv4 = styled.div`

    @media (max-width: 1083px) {
        display: none;
 }
`

const MenuItem1 = styled.a`
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    color: black;
    font-size: 25px;
    cursor: pointer;
    font-weight: bold;
`

const MenuItem2 = styled.a`
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
`

const MenuItem3 = styled.input`
    border: 0;
    border-bottom: 1px solid gray;
    padding: 10px;
    width: 50rem;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 95% center;
    background-size: 18px;
    font-size: 30px;
    color: #333333;
    outline: none; /* Evita el borde al enfocar */

    &::placeholder {
        color: rgba (255, 255, 255, 0.5);
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
    }
`

const MenuItem4 = styled(MenuItem2)`
    &:hover {
        background-color: rgb(235, 235, 235);
    }
`

const Logo = styled.img`
    height: 2vh;
`

const P = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    margin: 0;
`

const P2 = styled(P)`
    font-size: 13px;
`

export const MainContent = styled.div`
    filter: ${props => props.isOpen ? "blur(5px)" : "none"};
    flew-wrap: wrap;
`




const ButtonWithMenu = ({ buttonImg, buttonText, children, onSelect }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true)
    };

    const handleMouseLeave = () => {

        setIsOpen(false);
    };


    return (
        <StyledDiv4 onMouseLeave={handleMouseLeave}>
            <StyledButton onMouseEnter={handleMouseEnter}>
                {buttonImg && <img src={buttonImg} alt="buttonImg" style={{ height:'5vh' }}/>}
                {buttonText}
            </StyledButton>
            <Menu isOpen={isOpen} onMouseLeave={handleMouseLeave}>
                {children}
            </Menu>
        </StyledDiv4>
    );
};


const Header = () => {
    

    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [selectedOption4, setSelectedOption4] = useState(null);
    const [selectedOption5, setSelectedOption5] = useState(null);
    const [selectedOption6, setSelectedOption6] = useState(null);
    const [selectedOption7, setSelectedOption7] = useState(null);
    const [selectedOption8, setSelectedOption8] = useState(null);
    const [selectedOption9, setSelectedOption9] = useState(null);
    const [selectedOption10, setSelectedOption10] = useState(null);


  return (
    <StyledHeader>
        <a href=""><Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png" alt="Logo" /></a>

        <ButtonWithMenu 
            buttonText="Tienda "
            onSelect={setSelectedOption1}
        >
            <StyledDiv1>
                <StyledDiv2>
                    <MenuItem1 href='https://www.apple.com/es/shop/goto/store'>Comprar lo último</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/buy-mac'>Mac</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/buy-ipad'>IPad</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/buy-iphone'>IPhone</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/buy-watch'>Apple Watch</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/accessories/all'>Accesorios</MenuItem1>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://www.apple.com/es/retail/'>Encontrar una tienda</MenuItem2>
                    <MenuItem2 href='https://secure6.store.apple.com/es/shop/signIn/orders?ssi=1AAABj1n6P30gTssfyKvgZfTyKTrxptJ4ILDuE8uE3y55quGEdjEcD3wAAAA0aHR0cHM6Ly9zZWN1cmU2LnN0b3JlLmFwcGxlLmNvbS9lcy9zaG9wL29yZGVyL2xpc3R8fAACAYz-cVdsHuD5KQpVOBWMRp0iVnUXwaHvmC0tagVT2CUK'>Estado del pedido</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/trade-in'>Apple trade in</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/browse/finance/loan'>Financiacion</MenuItem2>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://www.apple.com/es/shop/refurbished'>Reacondicionados certificados</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/education-pricing'>Educacion</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/retail/business/'>Empresas</MenuItem2>
                </StyledDiv2>
            </StyledDiv1>    
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonText="Mac"
            onSelect={setSelectedOption2}
        >
            <StyledDiv1>
                <StyledDiv2>
                    <MenuItem1 href='https://www.apple.com/es/mac/'>Ver todos los Mac</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/macbook-air/'>MacBook Air</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/macbook-pro/'>MacBook Pro</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/imac/'>iMac</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/mac-mini/'>Mac mini</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/mac-studio/'>Mac Studio</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/mac-pro/'>Mac Pro</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/displays/'>Monitores</MenuItem1>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/buy_mac'>Comprar un Mac</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/mac/accessories'>Accesorios para el Mac</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/trade_in'>Apple Trade In</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/ww/financing'>Financiación</MenuItem2>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://support.apple.com/es-es/mac?cid=gn-ols-mac-psp-prodfly'>Soporte para el Mac</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/support/products/mac/'>AppleCare+ para el Mac</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/macos/sonoma/'>macOs Sonoma</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/apps/'>Apps de Apple</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/macos/continuity/'>Continuidad</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/icloud/'>iCloud+</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/business/mac/'>Mac para empresas</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/education/'>Educación</MenuItem2>
                </StyledDiv2>
            </StyledDiv1>
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonText="IPad"
            onSelect={setSelectedOption3}
        >
            <StyledDiv1>
                <StyledDiv2>
                    <MenuItem1 href='https://www.apple.com/es/ipad/'>Ver todos los iPad</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/ipad-pro/'>iPad Pro</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/ipad-air/'>iPad Air</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/ipad-10.9/'>iPad</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/ipad-mini/'>iPad mini</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-pencil/'>Apple Pencil</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/ipad-keyboards/'>Teclados</MenuItem1>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/buy_ipad'>Comprar un iPad</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/ipad/accessories'>Accesorios para el iPad</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/trade_in'>Apple Trade In</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/ww/financing'>Financiación</MenuItem2>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://support.apple.com/es-es/ipad?cid=gn-ols-ipad-psp-prodfly'>Soporte para el iPad</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/support/products/ipad/'>AppleCare+ para el iPad</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/support/products/ipad/'>iPadOs 17</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/apps/'>Apps de Apple</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/icloud/'>iCloud+</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/education/'>Educación</MenuItem2>
                </StyledDiv2>
            </StyledDiv1>
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonText="IPhone"
            onSelect={setSelectedOption4}
        >
            <StyledDiv1>
                <StyledDiv2>
                    <MenuItem1 href='https://www.apple.com/es/iphone/'>Ver todos los iPhone</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/iphone-15-pro/'>iPhone 15 Pro</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/iphone-15/'>iPhone 15</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/goto/buy_iphone/iphone_14'>iPhone 14</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/goto/buy_iphone/iphone_13'>iPhone 13</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/iphone-se/'>iPhone SE</MenuItem1>
                </StyledDiv2>
                <StyledDiv2>
                        <MenuItem2 href='https://www.apple.com/es/shop/goto/buy_iphone'>Comprar un iPhone</MenuItem2>
                        <MenuItem2 href='https://www.apple.com/es/shop/goto/iphone/accessories'>Accesorios para el iPhone</MenuItem2>
                        <MenuItem2 href='https://www.apple.com/es/shop/goto/trade_in'>Apple Trade In</MenuItem2>
                        <MenuItem2 href='https://www.apple.com/es/shop/goto/ww/financing'>Financiación</MenuItem2>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://support.apple.com/es-es/iphone?cid=gn-ols-iphone-psp-prodfly'>Soporte para el iPhone</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/support/products/iphone/'>ApppleCare+ para el Iphone</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/ios/ios-17/'>IOS 17</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/apps/'>Apps de Apple</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/privacy/'>Privacidad en el iPhone</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/icloud/'>iCloud+</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/apple-pay/'>Apple Pay</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/siri/'>Siri</MenuItem2>
                </StyledDiv2>
            </StyledDiv1>
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonText="Watch"
            onSelect={setSelectedOption5}
        >
            <StyledDiv1>
                <StyledDiv2>
                    <MenuItem1 href='https://www.apple.com/es/watch/'>Ver todo los Apple Watch</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-watch-series-9/'>Apple Watch Series 9</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-watch-ultra-2/'>Apple Watch Ultra 2</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-watch-se/'>Apple Watch SE</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-watch-nike/'>Apple Watch Nike</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-watch-hermes/'>Apple Watch Hermès</MenuItem1>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/buy_watch'>Comprar un Apple Watch</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/studio/apple_watch'>Apple Watch Studio</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/watch/bands'>Correas para el Apple Watch</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/watch/accessories'>Accesorios para el Apple Watch</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/trade_in'>Apple trade in</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/ww/financing'>Financiacion</MenuItem2>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://support.apple.com/es-es/watch?cid=gn-ols-watch-psp-prodfly'>Soporte para el Apple Watch</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/support/products/watch/'>AppleCare+</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/watchos/watchos-10/'>watchOS 10</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/apps/'>Apps de Apple</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/apple-fitness-plus/'>Apple Fitness+</MenuItem2>
                </StyledDiv2>
            </StyledDiv1>    
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonText="AirPods"
            onSelect={setSelectedOption6}
        >
            <StyledDiv1>
                <StyledDiv2>
                    <MenuItem1 href='https://www.apple.com/es/airpods/'>Ver todo los AirPods</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/airpods-pro/'>AirPods Pro (2.ª generación)</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/airpods-2nd-generation/'>AirPods (2.ª generación)</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/airpods-3rd-generation/'>AirPods (3.ª generación)</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/airpods-max/'>AirPods Max</MenuItem1>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/accessories/all_accessories/headphones_speakers?fh=47d1%2B3214%2B45aa%2B45ab&f=apple-overear-sport&page=1'>Comprar unos AirPods</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/accessories/all_accessories/headphones_speakers?fh=47d1%2Be62115&f=headphoneacc&page=1'>Accesorios para los AirPods</MenuItem2>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://support.apple.com/es-es/airpods?cid=gn-ols-airpods-psp-prodfly'>Soporte para los AirPods</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/support/products/headphones/'>AppleCare+ para auriculares</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/apple-music/'>Apple Music</MenuItem2>
                </StyledDiv2>
            </StyledDiv1>    
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonText="TV y Casa"
            onSelect={setSelectedOption7}
        >
            <StyledDiv1>
                <StyledDiv2>
                    <MenuItem1 href='https://www.apple.com/es/tv-home/'>Explorar TV y Casa</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-tv-4k/'>Apple TV 4K</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/homepod-2nd-generation/'>HomePod</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/homepod-mini/'>HomePod mini</MenuItem1>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/buy_tv/apple_tv_4k'>Comprar un Apple TV 4K</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/buy_homepod/homepod'>Comprar un HomePod</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/buy_homepod/homepod_mini'>Comprar un HomePod mini</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/product/MNC73'>Comprar un Siri Remote</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/smart_home/accessories'>Accesorios para el TV y Casa</MenuItem2>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://support.apple.com/es-es/apple-tv?cid=gn-ols-appletv-psp-prodfly'>Soporte para el Apple TV</MenuItem2>
                    <MenuItem2 href='https://support.apple.com/es-es/homepod?cid=gn-ols-homepod-psp-prodfly'>Soporte para el HomePod</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/support/products/'>AppleCare+</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/apple-tv-app/'>App Apple TV</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/apple-tv-plus/'>Apple TV+</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/home-app/'>App Casa</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/apple-music/'>Apple Music</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/siri/'>Siri</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/airplay/'>AirPlay</MenuItem2>
                </StyledDiv2>
            </StyledDiv1>    
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonText="Entretenimiento"
            onSelect={setSelectedOption8}
        >
            <StyledDiv1>
                <StyledDiv2>
                    <MenuItem1 href='https://www.apple.com/es/services/'>Explorar entretenimiento</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-one/'>Apple One</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-tv-plus/'>Apple TV+</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-music/'>Apple Music</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-arcade/'>Apple Arcade</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-fitness-plus/'>Apple Fitness+</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-podcasts/'>Apple Podcast</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/apple-books/'>Apple Books</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/app-store/'>App Store</MenuItem1>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://support.apple.com/es-es/tv?cid=gn-ols-tvplus-psp-prodfly'>Soporte para el Apple TV+</MenuItem2>
                    <MenuItem2 href='https://support.apple.com/es-es/music?cid=gn-ols-music-psp-prodfly'>Soporte para Apple Music</MenuItem2>
                </StyledDiv2>
            </StyledDiv1>    
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonText="Accesorios"
            onSelect={setSelectedOption8}
        >
            <StyledDiv1>
                <StyledDiv2>
                    <MenuItem1 href='https://www.apple.com/es/shop/goto/buy_accessories'>Ver todos los accesorios</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/goto/mac/accessories'>Mac</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/goto/ipad/accessories'>iPad</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/goto/iphone/accessories'>iPhone</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/goto/watch/accessories'>Apple Watch</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/goto/accessories/all_accessories/headphones_speakers?fh=47d1%2B3214%2B45aa%2B45ab&f=apple-overear-sport&page=1'>AirPods</MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/goto/smart_home/accessories'>TV y Casa</MenuItem1>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/accessories/all_accessories/made_by_apple'>Con el sello Apple</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/shop/goto/accessories/all_accessories/beats_featured'>Beats by Dr. Dre</MenuItem2>
                    <MenuItem2 href='https://www.apple.com/es/airtag/'>AirTag</MenuItem2>
                </StyledDiv2>
            </StyledDiv1>    
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonText="Soporte"
            onSelect={setSelectedOption8}
        >
            <StyledDiv1>
                <StyledDiv2>
                    <MenuItem1 href='https://support.apple.com/es-es/iphone?cid=gn-ols-iphone-psp-explore'>iPhone</MenuItem1>
                    <MenuItem1 href='https://support.apple.com/es-es/mac?cid=gn-ols-mac-psp-explore'>Mac</MenuItem1>
                    <MenuItem1 href='https://support.apple.com/es-es/ipad?cid=gn-ols-ipad-psp-explore'>iPad</MenuItem1>
                    <MenuItem1 href='https://support.apple.com/es-es/watch?cid=gn-ols-watch-psp-explore'>Watch</MenuItem1>
                    <MenuItem1 href='https://support.apple.com/es-es/airpods?cid=gn-ols-airpods-psp-explore'>AirPods</MenuItem1>
                    <MenuItem1 href='https://support.apple.com/es-es/music?cid=gn-ols-music-psp-explore'>Música</MenuItem1>
                    <MenuItem1 href='https://support.apple.com/es-es/tv?cid=gn-ols-tv-psp-explore'>TV</MenuItem1>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://communities.apple.com/es/welcome?cid=gn-com-community-lp-get_help'>Comunidad</MenuItem2>
                    <MenuItem2 href='https://checkcoverage.apple.com/es/es?cid=gn-ols-checkcoverage-lp-get_help'>Comprobar cobertura</MenuItem2>
                    <MenuItem2 href='https://support.apple.com/es-es/repair?cid=gn-ols-repair-lp-get_help'>Reparaciones</MenuItem2>
                    <MenuItem2 href='https://getsupport.apple.com/?caller=support.header&cid=gn-ols-contact-mgs_lp-get_help'>Contactar con Apple</MenuItem2>
                </StyledDiv2>
                <StyledDiv2>
                    <MenuItem2 href='https://www.apple.com/es/support/products/?cid=gn-ols-home-acpp-helpful_topics'>Contratar AppleCare+</MenuItem2>
                    <MenuItem2 href='https://support.apple.com/es-es/apple-id?cid=gn-ols-appleid-psp-helpful_topics'>ID de Apple y contraseña</MenuItem2>
                    <MenuItem2 href='https://support.apple.com/es-es/billing?cid=gn-ols-billing-collection-helpful_topics'>Facturacion y suscripciones</MenuItem2>
                    <MenuItem2 href='https://support.apple.com/es-es/find-my?cid=gn-ols-findmy-collection-helpful_topics'>Buscar</MenuItem2>
                    <MenuItem2 href='https://support.apple.com/es-es/accessibility?cid=gn-ols-accessibility-psp-helpful_topics'>Accesibilidad</MenuItem2>
                </StyledDiv2>
            </StyledDiv1>    
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonImg={'../Lupa3.png'}
            buttonText=""
            onSelect={setSelectedOption4}
        >   
            <StyledDiv3>
                <MenuItem3 type='text' placeholder='Buscar en apple.com' autoFocus/>
                <StyledDiv2>
                    <MenuItem4 href='https://www.apple.com/es/retail/'>Encontrar una tienda</MenuItem4>
                    <MenuItem4 href='https://www.apple.com/es/shop/goto/accessories/apple_accessories'>Accesorios</MenuItem4>
                    <MenuItem4 href='https://www.apple.com/es/airpods/'>AirPods</MenuItem4>
                    <MenuItem4 href='https://www.apple.com/es/airtag/'>AirTag</MenuItem4>
                    <MenuItem4 href='https://www.apple.com/es/shop/goto/trade_in'>Apple Trade In</MenuItem4>
                </StyledDiv2>
            </StyledDiv3>
        </ButtonWithMenu>
        <ButtonWithMenu 
            buttonImg={'../Bolsa2.png'}
            buttonText=""
            onSelect={setSelectedOption4}
        >
            <StyledDiv3>
                <StyledDiv2>
                    <P>Tu bolsa está vacía</P>
                    <P2><a href="https://secure7.store.apple.com/es/shop/signIn?ssi=1AAABj23S6pcgT7mm1yzEOAGK2bAYpgra6O5UbRzid_GX4cuLKhwmyq0AAAAbaHR0cHM6Ly93d3cuYXBwbGUuY29tL2VzL3x8AAIBIHhd6-NoWMH96Lqqb0wO3rz2veu4NzW_c4d3nu0GfZY">Inicia sesión</a> para ver si tienes algun producto guardado</P2>
                </StyledDiv2>
                <StyledDiv2>
                    <P2 style={{paddingLeft: '15px'}}>Mi perfil</P2>
                    <MenuItem1 href='https://secure7.store.apple.com/es/shop/order/list'><P2>Pedidos</ P2></MenuItem1>
                    <MenuItem1 href='https://www.apple.com/es/shop/yoursaves'><P2>Tus favoritos</ P2></MenuItem1>
                    <MenuItem1 href='https://secure7.store.apple.com/es/shop/account/home'><P2>Cuenta</ P2></MenuItem1>
                    <MenuItem1 href='https://secure7.store.apple.com/es/shop/signIn?ssi=1AAABj23S6pcgT7mm1yzEOAGK2bAYpgra6O5UbRzid_GX4cuLKhwmyq0AAAAbaHR0cHM6Ly93d3cuYXBwbGUuY29tL2VzL3x8AAIBIHhd6-NoWMH96Lqqb0wO3rz2veu4NzW_c4d3nu0GfZY'><P2>Iniciar sesión</ P2></MenuItem1>
                </StyledDiv2>
            </StyledDiv3>
        </ButtonWithMenu>
        <StyledButton></StyledButton>
    </StyledHeader>
  )
}

export default Header