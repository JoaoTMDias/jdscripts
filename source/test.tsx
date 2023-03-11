import React from "react";
import chalk from "chalk";
import test from "ava";
import { render } from "ink-testing-library";
import { Start } from "./steps";

test("greet unknown user", (t) => {
	const { lastFrame } = render(<Start />);

	t.is(lastFrame(), chalk`Hello, {green Stranger}`);
});
