import { faker } from "@faker-js/faker";

const randomize       = ( min, max ) => min + Math.round (Math.random () * ( max - min ));
const random10to77    = () => randomize (10, 77);
const valueObj        = () => ( { "id": faker.database.mongodbObjectId (), "title": faker.commerce.productAdjective (), "value": random10to77 () } );
const valuesArray     = () => [valueObj (), valueObj (), valueObj ()];
const rowCompositions = [
	["1 / span 1", "2 / span 1", "3 / span 1"],
	["1 / span 1", "2 / span 2"],
	["1 / span 2", "3 / span 1"],
];
const widgetTypes     = ["progress", "pie"];

const dashboard = () => {
	const numberOfPages = randomize (2, 4);
	return Array.apply (null, Array (numberOfPages)).map (n => page ());
}

const page = () => {
	const numberOfRows = randomize (2, 3);
	
	return ( {
		"id":   faker.database.mongodbObjectId (),
		"name": faker.commerce.department (),
		"rows": Array.apply (null, Array (numberOfRows)).map (n => row ())
	} )
}

const row = () => {
	const composition = rowCompositions[ randomize (0, 2) ];
	return ( {
		"id": faker.database.mongodbObjectId (),
		"widgets":  composition.map (size => widget (size))
	} );
}

const widget = size => {
	const type = widgetTypes[ randomize (0, 1) ];
	const val  = type === "progress" ? [valueObj ()] : valuesArray ();
	
	return ( {
		"id":          faker.database.mongodbObjectId (),
		"widgetType":  type,
		"widgetSize":  size,
		"name":        faker.commerce.productName (),
		"title":       faker.lorem.words (randomize (2, 6)),
		"description": faker.lorem.sentences (),
		"from":        faker.date.recent (),
		"to":          faker.date.soon (),
		"value":       val,
	} )
}

export const getConfig = () => {
	return new Promise (( resolve ) => {
		resolve (dashboard ());
	})
}