/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */
import React from "react";
import { rootPath } from "get-root-path";
import path from "path";
import { Box, Text, useApp } from "ink";
import config from "config";
import { runCommands } from "../../helpers/run-command";
import { JDScriptsConfig } from "../../typings/config";

function Typecheck(): JSX.Element {
	const [output, setOutput] = React.useState("");
	const { exit } = useApp();

	React.useEffect(() => {
		const PROJECT_ROOT = path.resolve(rootPath);
		const PROJECT_CONFIG: JDScriptsConfig["typescript"] =
			config.get("typescript");

		// check if package.json has typescript entry on the devDependency entry
		const packageJson = require(`${PROJECT_ROOT}/package.json`);
		const HAS_TYPESCRIPT_INSTALLED = Boolean(
			"typescript" in packageJson.devDependencies
		);
		const COMMAND = `${!HAS_TYPESCRIPT_INSTALLED ? "npx" : ""} tsc --project ${
			PROJECT_CONFIG.tsconfig ?? "./tsconfig.json"
		}`;

		runCommands([
			{
				log: "📃 Checking Types",
				command: COMMAND,
				err: "Could not check types",
			},
		])
			.then(() => {
				exit();
			})
			.catch((error) => console.error(error));
	}, [setOutput]);

	return (
		<Box flexDirection="column" padding={1}>
			<Text>Сommand output:</Text>
			<Box marginTop={1}>
				<Text>{output}</Text>
			</Box>
		</Box>
	);
}

export default Typecheck;
