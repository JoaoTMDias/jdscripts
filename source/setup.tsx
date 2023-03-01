#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import SetupProject, { ProjectType } from "./steps/setup/pick-type";

const cli = meow(
	`
	Usage
	  $ jdscripts setup

	Options
		--type  web/component/library

	Examples
	  $ jdscripts --type=web

		Will setup a Web-based project
`,
	{
		flags: {
			type: {
				type: "string",
			},
		},
	}
);

render(<SetupProject type={cli.flags.type as ProjectType} />);
