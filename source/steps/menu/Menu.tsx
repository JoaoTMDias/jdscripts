/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */
import React, { useCallback } from "react";
import { Box, Text } from "ink";
import { useNavigate } from "react-router";
import SelectInput from "ink-select-input";
import { Item } from "ink-select-input/build/SelectInput";

const items = [
	{
		label: "Configure a project",
		value: "/configuration",
	},
	{
		label: "Typecheck",
		value: "/run-typecheck",
	},
	{
		label: "Lint files",
		value: "/run-linting",
	},
	{
		label: "Run Tests",
		value: "/run-tests",
	},
];

function Menu(): JSX.Element {
	const navigate = useNavigate();

	const handleSelect = useCallback(
		(item: Item<string>) => {
			if (item.value.startsWith("/")) {
				navigate(item.value);
			}
		},
		[navigate]
	);

	return (
		<Box flexDirection="column">
			<Box flexDirection="column" margin={2}>
				<Text bold>What do you fancy doing today?</Text>
				<Text italic>(Use up and down arrows to navigate between items)</Text>
			</Box>
			<SelectInput items={items} onSelect={handleSelect} />
		</Box>
	);
}

export default Menu;
