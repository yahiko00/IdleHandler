# IdleHandler #

Detect when a user is idle.

The event `idleuser` is sent when user is idle.


## Installation ##

	npm install --dev idlehandler


## Usage ##

```ts
import { IdleHandler } from "./IdleHandler";

const idleHandler = new IdleHandler(1000); // User is considered idle after 1 second (1000 ms) of inactivity

window.addEventListener("idleuser", () => {
	// Execute something...
})
```

## Build ##

Project settings are defined in `package.json`, `settings` section. Inside this section, set `debug` to `true` to debug the project with source maps, or set `debug` to `false` to build the project in the release mode.

Tasks are defined in the `gulpfile.js` script.

Commands should be run under a **bash** shell.

The following command builds the project and runs unit tests. If any change happens, it builds the project and runs units tests again.

	$> npm run watch

For more predefined commands, see `package.json`, item `scripts`.

Unit tests are logged in the `tests/` folder, file `tape.log`.

## Contributors ##

yahiko


## Licence ##

MIT
