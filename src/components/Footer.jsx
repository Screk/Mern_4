import styled from "styled-components"
import { StyledContainer4, StyledContainer6 } from "./ui/StyledContainer"
import { StyledButton } from "./Header"

const StyledFooter = styled.div`
    background-color: rgb(238, 238, 238);
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Footer = () => {
  return (
    <StyledFooter>
        <StyledContainer4>
            Copyright © 2024 Apple Inc. Todos los derechos reservados.
        </StyledContainer4>
        <StyledContainer6>
            <StyledButton>
                Politica de privacidad
            </StyledButton>
            <StyledButton>
                Uso de cookies
            </StyledButton>
            <StyledButton>
                Condiciones de uso
            </StyledButton>
            <StyledButton>
                Ventas y reembolsos
            </StyledButton>
            <StyledButton>
                Avisos legales
            </StyledButton>
            <StyledButton>
                Mapa del sitio
            </StyledButton>
        </StyledContainer6>
    </StyledFooter>
  )
}

export default Footer