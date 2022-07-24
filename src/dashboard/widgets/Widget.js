import styled from "styled-components";
import { PieWidget } from "./PieWidget";
import { ProgressWidget } from "./ProgressWidget";

const Wrapper = styled.div`
  height: 200px;
  padding: 5px;
  grid-column: ${ props => props.col };
  position: relative;
`;

const Title = styled.h3`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  text-align: left;
  color: #E38627;
  margin: 0;
  padding-left: 25px;
  font-size: 14px;
`;


const Widget = ( { widget } ) => {
	const size            = widget.widgetSize.includes ("span 1") ? 1 : 2;
	const processedWidget = { ...widget, widgetSize: size }
	
	return (
		<Wrapper col={ widget.widgetSize }>
			<Title>{ widget.name }</Title>
			{ widget.widgetType === "pie" ? <PieWidget widget={ processedWidget }/> :
				<ProgressWidget widget={ processedWidget }/> }
		</Wrapper>
	);
};

export { Widget };