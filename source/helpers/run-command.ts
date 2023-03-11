/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/
import chalk from "chalk";
import childProcess from "node:child_process";


export interface ICommand {
	command: string;
	log: string;
	err: string;
}

export function runCommands(commands: ICommand[]): Promise<void> {
	return new Promise((resolve, reject) => {
		commands.forEach((item, index) => {
			try {
				const currentItem = `${index + 1}/${commands.length}`;
				console.log(chalk.whiteBright.bgBlue(`${currentItem} ${item.log}`));

				childProcess.execSync(item.command, { stdio: "inherit" });
				resolve();
			} catch (error) {
				console.log(chalk.yellowBright(`⚠️ ${item.err}: ${error}`));
				reject(error);
			}
		});
	});
}
