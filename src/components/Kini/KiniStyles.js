import styled from 'styled-components'

// for intro
export const KiniTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '28px' : '35px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  color: #D82682;
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
	grid-template-columns: repeat(4, minmax(85px, 220px));
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
export const ImgOver = styled.img`
  width:100%;
  height:100%;
  object-fit: contain;
  overflow: hidden;
`

export const ImgSurvey = styled.img`
  width:90%;
  height:90%;
  object-fit: contain;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 30px;
`

export const SectionTitleIntro = styled.h2`
  font-weight: 600;
  font-size: ${(props) => props.main ? '35px' : '35px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  color: #D82682;
  font-style: italic;
  font-size: 20px;
  margin-bottom: 5px;
  margin-top: 20px;
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

export const SectionTitleIntroProblem = styled.h2`
  font-weight: 600;
  font-size: ${(props) => props.main ? '35px' : '35px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  color: #D82682;
  font-size: 13px;
  margin-left: 30px;
  margin-bottom: -10px;
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
export const SectionTitleDescription1 = styled.h2`
  font-weight: 400;
  // font-size: ${(props) => props.main ? '35px' : '35px'};
  font-size: 14px;
  // line-height: ${(props) => props.main ? '72px' : '56px'};
  line-height: 33px;
  width: max-content;
  max-width: 100%;
  color: black;
  font-family: Roboto;
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

// for problem statements
export const SectionTitleDescriptionProblem = styled.h2`
  font-weight: 400;
  // font-size: ${(props) => props.main ? '35px' : '35px'};
  font-size: 13px;
  // line-height: ${(props) => props.main ? '72px' : '56px'};
  line-height: 33px;
  width: max-content;
  max-width: 100%;
  color: black;
  font-family: Roboto;
  margin-left: 30px;
  margin-bottom: 12px;
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

// pink background for problem statements
export const SectionProblem = styled.section`
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
  background: #FCEBF1;
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