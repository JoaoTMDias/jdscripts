#!/usr/bin/env node
import React from "react";
import { Box, Text } from "ink";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import packageJSON from "../../../package.json";

function StaticTitle() {
	return (
		<Box flexDirection="column" margin={2}>
			<Gradient name="cristal">
				<BigText text="jdscripts" />
			</Gradient>
			<Text>{`v${packageJSON.version}`}</Text>
		</Box>
	);
}

export default StaticTitle;
