# AGENTS.md

## Cursor Cloud specific instructions

This is an HTML/CSS educational project (`quixote-example`) where students write HTML/CSS to pass automated tests. There is no backend, no database, and no Docker.

### Services

| Service | Port | Command |
|---|---|---|
| Karma test server | 9876 | `node_modules/.bin/jake -f build/scripts/build.jakefile.js karma` |
| HTTP static server | 8080 | `npx http-server src -p 8080` |

### Lint

```sh
node_modules/.bin/jake -f build/scripts/build.jakefile.js lint
```

Note: `src/Assignment-6/assignment6_test.js` uses ES6 (`const`, arrow functions) which JSHint flags as errors with the current config. This is a pre-existing issue.

### Running Tests

1. Start Karma server: `node_modules/.bin/jake -f build/scripts/build.jakefile.js karma`
2. Run tests with Chrome Headless (requires `CHROME_BIN` env var):
   ```sh
   export CHROME_BIN=$(which google-chrome)
   loose=true capture=ChromeHeadless node_modules/.bin/jake -f build/scripts/build.jakefile.js test
   ```
3. Run tests for a specific assignment: `node_modules/.bin/karma run -- --grep="Assignment-1"`

Most assignment tests will fail by default because the HTML/CSS assignments are blank templates waiting for student work.

### Key Gotchas

- The shell scripts (`jake.sh`, `watch.sh`) need `chmod +x` after a fresh clone.
- `karma-chrome-launcher` is not in `package.json`; install it with `npm install --no-save karma-chrome-launcher` for headless testing in Cloud VMs.
- `package.json`'s `"dev"` script uses bare `jake` and `watch` commands that won't work on Unix without modification (see `readme.md`). Use the `node_modules/.bin/jake` commands above instead.
- The `shelljs` circular dependency warnings on Node 22 are cosmetic and do not affect functionality.
