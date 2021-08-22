import styled from "styled-components"

export const ContainerWrapper = styled.div`
  padding-left: ${props => props.theme.spacings.medium};
  padding-right: ${props => props.theme.spacings.medium};
  margin: 0 auto;
`

export const ContainerWrapperLg = styled(ContainerWrapper)`
  max-width: ${props => props.theme.containers.large};
`

export const ContainerWrapperMedium = styled(ContainerWrapper)`
  max-width: ${props => props.theme.containers.medium};
`