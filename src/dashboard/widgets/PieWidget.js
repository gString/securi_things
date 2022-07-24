import { PieChart } from "react-minimal-pie-chart";
import { Fragment, useMemo } from "react";
import styled from "styled-components";
import { Container, Desc, PieWrapper, Text, Title } from "./styles";

const COLORS = ['#E38627', '#C13C37', '#6A2135'];

const StyledContainer = styled(Container)`
  position: absolute;
  top: 30px;
  left: 15px;
  bottom: 0;
  width: ${props => props.size === 1 ? 39 : 70}%;
  flex: 1 1 auto;
  padding: 20px;
`;

const StyledTitle = styled(Title)`
	margin: 0 0 5px 0;
`;


const PieWidget = ( { widget } ) => {
	const { value, name, title, widgetSize, from, to, description } = widget;
	const pieData   = useMemo (() => value?.map (( item, index ) => ( { ...item, color: COLORS[ index ] } )), [widget]);
	
	return <Fragment>
		<StyledContainer size={widgetSize}>
			<StyledTitle>{title}</StyledTitle>
			<Text bold>Name:</Text>
			<Text>{name}</Text>
			<Text bold>Start Date:</Text>
			<Text>{from.toLocaleDateString()}</Text>
			<Text bold>End Date:</Text>
			<Text>{to.toLocaleDateString()}</Text>
			{ (widgetSize > 1) && <Desc><Text bold>Description: </Text> {description}</Desc> }
		</StyledContainer>
		<PieWrapper>
		<PieChart data={ pieData } radius={ 40 } rounded paddingAngle={ 24 } lineWidth={ 30 } viewBoxSize={[107, 107]} center={[50, 60]}
				  labelPosition={ 50 } label={ ( { dataEntry } ) => dataEntry.title }
				  labelStyle={ ( index ) => ( {
					  fill:       COLORS[ index ],
					  fontSize:   '7px',
					  fontFamily: 'sans-serif',
				  } ) }/>
		</PieWrapper>
	</Fragment>
};

export { PieWidget };