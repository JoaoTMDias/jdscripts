import React, { useState } from "react";
import SelectInput from "ink-select-input";
import { useApp } from "ink";

interface ProjectItem<V> {
	key?: string;
	label: string;
	value: V;
}

export type ProjectType = "web" | "component" | "package";

interface Props {
	type?: ProjectType;
}

type ProjectItems = Array<ProjectItem<Props["type"]>>;

const PROJECT_TYPES: ProjectItems = [
	{
		key: "b27ae5c2-c714-4815-bcc9-d445f09ceb1e",
		label: "Web project",
		value: "web",
	},
	{
		key: "c134548e-9584-4951-bf91-47d2af567d52",
		label: "Component Library",
		value: "component",
	},
	{
		key: "5d13c2f5-fd00-41ab-b439-c4b71fe6ac39",
		label: "NPM package",
		value: "package",
	},
];

function getInitialType(
	type?: ProjectType
): ProjectItem<Props["type"]> | undefined {
	return PROJECT_TYPES.find((item) => item.value === type);
}

const PickType = ({ type }: Props) => {
	const { exit } = useApp();
	const [projectType, setProjectType] = useState(getInitialType(type));

	const handleSubmit = (chosenItem: ProjectItem<Props["type"]>) => {
		setProjectType(chosenItem);
		exit();
		// `items` = [{ label: 'First', value: 'first' }, { label: 'Third', value: 'third' }]
	};

	console.log(projectType);

	return <SelectInput items={PROJECT_TYPES} onSelect={handleSubmit} />;
};

module.exports = PickType;
export default PickType;
