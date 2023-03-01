/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */
import React from "react";
import { Text, useInput, useApp } from "ink";
import { Routes, Route, useNavigate } from "react-router";
import { Menu } from "../menu";

function Start(): JSX.Element {
	const navigate = useNavigate();
	const { exit } = useApp();

	useInput((_, key) => {
		const IS_ON_START = location.pathname === "/";

		if (key.escape) {
			if (IS_ON_START) {
				exit();
			} else {
				navigate("/");
			}
		}
	});

	return (
		<>
			<Routes>
				<Route path="/" element={<Menu />} />
				<Route path="/configuration" element={<Text>Setup goes here</Text>} />
				<Route path="/run-typecheck" element={<Text>Runs typecheck</Text>} />
				<Route path="/run-linting" element={<Text>Run Linting</Text>} />
				<Route path="/run-tests" element={<Text>Run tests</Text>} />
			</Routes>
		</>
	);
}

export default Start;
