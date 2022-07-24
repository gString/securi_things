import styled from "styled-components";
import { Indicator, ProgressBar, ProgressWrapper, Title, Container, Text, Desc } from "./styles";

const StyledContainer = styled(Container)`
  flex: 1 1 auto;
  align-self: stretch;
  margin-top: 20px;
  height: 80px;
  padding: 20px;
  position: relative;
`;

const BarWrapper = styled.div`
	display: flex;
  
  span {
	color: darkolivegreen;
	line-height: 30px;
	margin-left: 20px;
  }
`;

const StyledTitle = styled(Title)`
	margin: 0;
`;

const Value = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  bottom: 0;
  width: 100px;
  text-align: center;
  color: darkgray;
  
  span {
	display: block;
  }
`;

const BigNumber = styled.span`
	font-size: 50px;
`;

const StyledDesc = styled(Desc)`
  right: 85px;
  -webkit-line-clamp: 3;
`;


const ProgressWidget = ( { widget } ) => {
	const { value, name, title, widgetSize, from, to, description } = widget;
	
	return (
		<ProgressWrapper>
			<BarWrapper>
				<ProgressBar size={widgetSize}><Indicator  size={widgetSize} value={ value[0].value }/></ProgressBar><span>{value[0].title}</span>
			</BarWrapper>
			<StyledContainer size={widgetSize}>
				<StyledTitle>{title}</StyledTitle>
				<Text bold>Name:</Text>
				<Text>{name}</Text>
				<Text bold>{from.toLocaleDateString()} - {to.toLocaleDateString()}</Text>
				{ (widgetSize > 1) && <StyledDesc><Text bold>Description: </Text> {description}</StyledDesc> }
				<Value>
					<BigNumber>{value[0].value}</BigNumber>
				</Value>
			</StyledContainer>
		</ProgressWrapper>
	);
};

export { ProgressWidget };