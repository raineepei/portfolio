import styled from 'styled-components'

// for intro
export const LoaneTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '28px' : '35px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  color: #0857C3;
  margin-bottom: 10px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }
  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  	display: grid;
	grid-template-columns: repeat(5, minmax(85px, 220px));
	gap: 40px;
  	padding: 40px 0 28px;
	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}
	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`

export const LinkTitle = styled.h4`
    font-family: Roboto Mono;
    font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	// text-transform: uppercase;
	color: black;
	margin-bottom: 16px;
	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`

export const BackgroundInfo = styled.p`
  font-size: 12px;
  line-height: 40px;
  font-family: Roboto Mono;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: black;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`
