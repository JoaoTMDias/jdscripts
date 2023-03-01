#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import { MemoryRouter } from "react-router";
import { Start, StaticTitle } from "./steps";

function Shell() {
	return (
		<MemoryRouter>
			<StaticTitle />
			<Start />
		</MemoryRouter>
	);
}

render(<Shell />);
