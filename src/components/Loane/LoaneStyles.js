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
export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
// place-items: center;
column-gap: 2rem;
row-gap: 3rem;
text-align: center;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`
export const BlogCard = styled.div`
  text-align: center;
  width: 500px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const CardInfoAbout = styled.p`
  width: 100%;
  // padding: 0 50px;
  color: black;
  font-style: 2rem;
  font-family: Roboto;
  line-height: 33px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;

export const ImgAbout = styled.img`
  width:120%;
  height:100%;
  object-fit: contain;
  overflow: hidden;
  margin-top: -390px;
`

export const ImgAbout1 = styled.img`
  width:13%;
  height:13%;
  object-fit: contain;
  overflow: hidden;
  margin-left: 14px;
  margin-top: 14px;
  margin-bottom: 14px;
`

export const ImgAbout2F = styled.img`
  width:60%;
  height:60%;
  object-fit: contain;
  overflow: hidden;
  margin-right: 30px;
`

export const ImgAbout2 = styled.img`
  width:38%;
  height:38%;
  object-fit: contain;
  overflow: hidden;
  margin-right: 30px;
`

export const ImgAbout3 = styled.img`
  width:20%;
  height:20%;
  object-fit: contain;
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
`

export const TitleContent = styled.div`
  text-align: left;
  font-family: Roboto;
  z-index: 20;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  display: flex;
`;

export const TitleContentSmall = styled.div`
  text-align: left;
  font-family: Roboto;
  // z-index: 20;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  display: flex;
`;

export const DescriptionContent = styled.div`
  text-align: left;
  font-family: Roboto;
  z-index: 20;
  font-size: 14px;
  width: 100%;
  display: flex;
`;

export const DescriptionContentSmall = styled.div`
  text-align: left;
  font-family: Roboto;
  // z-index: 20;
  width: 100%;
  // display: flex;
  font-size: 13px;
`;

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  // padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  padding: 3rem;
  margin: 0 auto;
  // max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`
// for images
export const Section1 = styled.section`
  // display: ${(props) => props.grid ? "grid" : "flex" };
  // flex-direction: ${(props) => props.row ? "row" : "column" };
  // padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  // padding: 2rem;
  margin: 0 auto;
  // max-width: 3000px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  background: #f5f5f5;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitleIntro = styled.h2`
  font-weight: 600;
  font-size: ${(props) => props.main ? '35px' : '35px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  color: #0857C3;
  font-style: italic;
  font-size: 15px;
  margin-bottom: 5px;
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

// for description
export const SectionTitleDescription = styled.h2`
  font-weight: 400;
  // font-size: ${(props) => props.main ? '35px' : '35px'};
  font-size: 14px;
  // line-height: ${(props) => props.main ? '72px' : '56px'};
  line-height: 33px;
  width: max-content;
  max-width: 100%;
  color: black;
  font-family: Roboto;
  margin-bottom: 16px;
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

export const Button = styled.button`
  height:66px;
  width:140px;
  border: 1px outset black;
  background-color: white;
  font-family: Roboto;
  font-style: italic;
  font-size: 23px;
  box-shadow: 6px 6px 0px;
  text-decoration: underline;
  &:hover {
    color: #0857C3;
    opacity: 1;
    box-shadow: 6px 6px 0px #0857C3;
    border: 1px outset #0857C3;
  }
`