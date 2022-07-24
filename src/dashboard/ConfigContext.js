import { createContext, useMemo, useState, useContext } from "react";

const defaultValue = {
	setConfig:         () => null,
	setSelectedPageId: () => null,
	pages:             [],
	selectedPageId:    null,
	selectedPage:      {},
	pageWidgets: [],
}

const ConfigContext = createContext (defaultValue);

const ConfigContextProvider = ( { children } ) => {
	const [config, setConfig]                 = useState ([]);
	const [selectedPageId, setSelectedPageId] = useState ();
	
	const pages = useMemo (() => config.map (( { id, name } ) => ( { id, name } )) || [], [config]);
	
	const pageWidgets = useMemo (() => {
		if (!selectedPageId) return [];
		return config.find (page => page.id === selectedPageId).rows.map (row => row.widgets).flat ()
	}, [config, selectedPageId]);
	// const pageWidgets = useMemo (() => config.find (page => page.id === selectedPageId).rows.map (row => row.widgets).flat (), [config, selectedPageId]);
	
	const selectedPage = useMemo (() => {
		const page = config.find (page => page.id === selectedPageId);
		return page ? { ...page, rows: page.rows.map (row => row.id) } : null;
	}, [config, selectedPageId]);
	
	const value = useMemo (() => ( {
		setConfig,
		setSelectedPageId,
		pages,
		selectedPageId,
		selectedPage,
		pageWidgets,
	} ), [
		setConfig,
		setSelectedPageId,
		pages,
		selectedPageId,
		selectedPage,
		pageWidgets,
	]);
	
	return <ConfigContext.Provider value={ value }>
		{ children }
	</ConfigContext.Provider>
}

const useConfigContext = () => {
	const context = useContext (ConfigContext);
	if ( context === undefined ) {
		throw new Error (
			'useConfigContext must be used within a ConfigContextProvider',
		);
	}
	return context;
}

export { useConfigContext, ConfigContextProvider }