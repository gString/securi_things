import styled from "styled-components";
import { useConfigContext } from "./ConfigContext";
import { Widget } from "./widgets/Widget";

const Wrapper = styled.div`
  flex: 1 1 auto;
  background-color: wheat;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: inline-grid;
  grid-template-columns: 33% 33% 33%;
  row-gap: 40px;
  justify-content: center;
  align-content: start;
`;


const Page = () => {
	const { selectedPage, pageWidgets } = useConfigContext ();
	
	return (
		<Wrapper>
			<Container>
				<h3>{ selectedPage.name }</h3>
				{ pageWidgets.map (widget => <Widget key={ widget.id } widget={ widget }/>) }
			</Container>
		</Wrapper>
	);
};

export { Page };