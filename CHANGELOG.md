# Changelog

## 0.1.0-alpha.1 (2025-06-28)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/dcm31/fatebook-mcp/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **client:** add support for endpoint-specific base URLs ([0ec7356](https://github.com/dcm31/fatebook-mcp/commit/0ec7356d7d7d8645ce01e0d7d482657c99d1cd6c))
* **client:** add withOptions helper ([3178347](https://github.com/dcm31/fatebook-mcp/commit/3178347ca6e629ef9f15df252a201acbd03ae729))
* **mcp:** implement support for binary responses ([b4df963](https://github.com/dcm31/fatebook-mcp/commit/b4df9634b937a04910c34c1d49f0fd23bd2b095e))
* **mcp:** include http information in tools ([757323e](https://github.com/dcm31/fatebook-mcp/commit/757323e839b64a7c4ef54abdb3401353b64f6848))
* **mcp:** set X-Stainless-MCP header ([3b8129f](https://github.com/dcm31/fatebook-mcp/commit/3b8129f15056a3029a67529e810607b9854edf45))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([7d52045](https://github.com/dcm31/fatebook-mcp/commit/7d5204578f8fcf9bf7872480d25ccfc2ce7b3cb4))


### Bug Fixes

* **client:** always overwrite when merging headers ([b952d4b](https://github.com/dcm31/fatebook-mcp/commit/b952d4b504cdcea5e54aac93ba9f6929c9ef50cf))
* **client:** explicitly copy fetch in withOptions ([88c0cbf](https://github.com/dcm31/fatebook-mcp/commit/88c0cbff8ba4b671051e0d8f97e4326a27e25bd9))
* **client:** get fetchOptions type more reliably ([b909607](https://github.com/dcm31/fatebook-mcp/commit/b909607b4c0379c44497924aed74957c687295d8))
* compat with more runtimes ([9ef53ec](https://github.com/dcm31/fatebook-mcp/commit/9ef53ec979d28abf1e29d2fd885078f63cc921ec))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([79c1a94](https://github.com/dcm31/fatebook-mcp/commit/79c1a949e4abfa7ab7956bb0242c57942d386f6d))
* **mcp:** fix cursor schema transformation issue with recursive references ([3854c16](https://github.com/dcm31/fatebook-mcp/commit/3854c1692467e7b3517c52409dd3a79e84e56824))
* **mcp:** include description in dynamic tool search ([3b2a375](https://github.com/dcm31/fatebook-mcp/commit/3b2a3756a6dc7569c2441b9a7205c09419c2df15))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([ed8e69c](https://github.com/dcm31/fatebook-mcp/commit/ed8e69c5f7b0710b4043ee33821b5f808201e591))
* publish script — handle NPM errors correctly ([d9dfe71](https://github.com/dcm31/fatebook-mcp/commit/d9dfe7187756e4f2da0a5f602168b4185e2874dd))


### Chores

* adjust eslint.config.mjs ignore pattern ([e000bf5](https://github.com/dcm31/fatebook-mcp/commit/e000bf53d0a7edde3537fec260380323392e8916))
* avoid type error in certain environments ([4907ca5](https://github.com/dcm31/fatebook-mcp/commit/4907ca5c4e82907714f2e108f66993a1ad4e240b))
* **build:** automatically build subpackages if present ([42cc9b4](https://github.com/dcm31/fatebook-mcp/commit/42cc9b454a067861fb1e4da00d179c18b286d3e4))
* change publish docs url ([c30e8cb](https://github.com/dcm31/fatebook-mcp/commit/c30e8cb05491994782c4898972c790b1511b0105))
* **ci:** enable for pull requests ([5bd9242](https://github.com/dcm31/fatebook-mcp/commit/5bd9242ddf24d237c7c9dfc4fa8208a37384dd76))
* **ci:** only run for pushes and fork pull requests ([44cf5fd](https://github.com/dcm31/fatebook-mcp/commit/44cf5fd84bfc722901941166f4c3c47f727aa761))
* **client:** drop support for EOL node versions ([23ecb82](https://github.com/dcm31/fatebook-mcp/commit/23ecb8273234f23cbb13d9e496216bdd715629f7))
* **client:** refactor imports ([41a2c32](https://github.com/dcm31/fatebook-mcp/commit/41a2c32e5b9abcdca07773d082adc1debd32f8b6))
* configure new SDK language ([5a85dc3](https://github.com/dcm31/fatebook-mcp/commit/5a85dc30606e0ff1d197a500e73f20cb3797fbf0))
* **deps:** bump eslint-plugin-prettier ([ae6d1ef](https://github.com/dcm31/fatebook-mcp/commit/ae6d1efe15a266ed621adbf5f04cb2a90ae4433a))
* **docs:** grammar improvements ([647dcee](https://github.com/dcm31/fatebook-mcp/commit/647dcee80920b0b6799f7fdc0953de332f05dabd))
* **docs:** use top-level-await in example snippets ([2a601db](https://github.com/dcm31/fatebook-mcp/commit/2a601db05d4b5ed17ac61733945bdd8897f7f8fa))
* improve publish-npm script --latest tag logic ([b9ffcc8](https://github.com/dcm31/fatebook-mcp/commit/b9ffcc83abdc6cf4aff54be33df01df099ed565b))
* **internal:** add pure annotations, make base APIResource abstract ([0276b88](https://github.com/dcm31/fatebook-mcp/commit/0276b885d678cdec93ce9196e47aa89bee10a724))
* **internal:** codegen related update ([a9278b7](https://github.com/dcm31/fatebook-mcp/commit/a9278b7433dcb7fc7b87ee5fd9874ca781e5703f))
* **internal:** codegen related update ([c3c1c75](https://github.com/dcm31/fatebook-mcp/commit/c3c1c7530e9f4a90cf204e57bc135a5316255bc1))
* **internal:** codegen related update ([db2b6f8](https://github.com/dcm31/fatebook-mcp/commit/db2b6f8cbf6d1c0159cbdcfd92140985668089c6))
* **internal:** fix readablestream types in node 20 ([dda9584](https://github.com/dcm31/fatebook-mcp/commit/dda9584e32ae3cdedfcc5be59bde99a0452586ec))
* **internal:** share typescript helpers ([3455e09](https://github.com/dcm31/fatebook-mcp/commit/3455e09094cf5bf8ff543928a18772d658489747))
* **internal:** update jest config ([fcbe824](https://github.com/dcm31/fatebook-mcp/commit/fcbe82490cb3bbf49ad8bf8770fd0c1b51760440))
* **mcp:** provides high-level initMcpServer function and exports known clients ([6d69d26](https://github.com/dcm31/fatebook-mcp/commit/6d69d262348926c963c668fad84ad2a273286708))
* **mcp:** remove duplicate assignment ([dab281f](https://github.com/dcm31/fatebook-mcp/commit/dab281f6ec68051a3b319b3dd5311e5955aca4f6))
* **package:** remove engines ([4250823](https://github.com/dcm31/fatebook-mcp/commit/42508239a8a2107046b88a5a6ebc8d2944ef4f3b))
* **readme:** update badges ([e54957d](https://github.com/dcm31/fatebook-mcp/commit/e54957d79d1e6d1b21e7f775d9f90370dd492828))
* **readme:** use better example snippet for undocumented params ([7a275c7](https://github.com/dcm31/fatebook-mcp/commit/7a275c7ff527287181cd3170917289e18fc46c9b))
* **tests:** use node 22 for CI tests ([0c341a3](https://github.com/dcm31/fatebook-mcp/commit/0c341a3dfae28cdb5bccba4338d2ba9cc8b35f2c))
* update SDK settings ([8fc315b](https://github.com/dcm31/fatebook-mcp/commit/8fc315bbd63d9656553971ded65271c857d8a5b0))


### Documentation

* add examples to tsdocs ([4a47fb6](https://github.com/dcm31/fatebook-mcp/commit/4a47fb6df2d21139f7d6026e2390b3f5d480ca4b))
* **readme:** fix typo ([f6388f9](https://github.com/dcm31/fatebook-mcp/commit/f6388f929092399ea483a19112f9e33d3deb3f48))
