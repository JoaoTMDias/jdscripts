#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import { MemoryRouter } from "react-router";
import { Start } from "./steps";

function Shell() {
	return (
		<MemoryRouter>
			<Start />
		</MemoryRouter>
	);
}

render(<Shell />);
