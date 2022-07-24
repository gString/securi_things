import { useEffect } from "react";

import { useConfigContext } from "./ConfigContext";
import { getConfig } from "../fakeAPI/dashboardConfig";
import { Page } from "./Page";
import { StyledList, StyledRoot, StyledTrigger } from "./Dashboard.styles";

const Dashboard = () => {
	const { setConfig, pages, setSelectedPageId, selectedPageId } = useConfigContext ();
	
	useEffect (() => {
		const getConfiguration = async () => {
			const configuration = await getConfig ();
			setConfig (configuration);
		}
		if ( !selectedPageId ) getConfiguration ();
	}, []);
	
	useEffect (() => {
		if ( pages.length ) {
			setSelectedPageId (pages[ 0 ].id);
		}
	}, [pages]);
	
	const changeHandler = value => setSelectedPageId (value);
	
	return (
		<StyledRoot value={ selectedPageId } onValueChange={ changeHandler }>
			<StyledList>
				{ pages && pages.map (( { id, name } ) => <StyledTrigger
					isselected={ id === selectedPageId ? "true" : null }
					key={ id }
					value={ id }>{ name }</StyledTrigger>) }
			</StyledList>
			{ selectedPageId && <Page/> }
		</StyledRoot>
	);
};

export { Dashboard };