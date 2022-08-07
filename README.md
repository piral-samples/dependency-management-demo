[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> Demos for doing dependency management with Piral.

:zap: Bundle or share dependencies with Piral.

Feel free to play around with the code using StackBlitz.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/piral-samples/dependency-management-demo)

You can visit this demo at [dependency-management.samples.piral.cloud/](https://dependency-management.samples.piral.cloud/).

## Getting Started

Install the dependencies:

```sh
yarn install
```

Now run the application:

```sh
yarn start:all
```

This will run all pilets.

## Bundled Dependencies

The first demo to look at is how to bundle dependencies. It can be started by running

```sh
yarn start:bundled
```

This will run the app shell, `pilet-1` and `pilet-2`. These pilets both use a library `lib`. Since they mention the dependency only in their `dependencies` and no where else it is just bundled into the micro frontends.

## Centrally Shared Dependencies

The second demo to look at is how to centrally share dependencies. It can be started by running

```sh
yarn start:central
```

This will run the app shell (which contains the shared dependency `swr`), `pilet-3` and `pilet-4`. These pilets have `swr` in their `peerDependencies` telling the `piral-cli` that the dependency is supposed to be provided by a consuming application.

## Distributed Shared Dependencies

The third demo to look at is how to scatter dependencies. It can be started by running

```sh
yarn start:scatter
```

This will run the app shell, `pilet-5` (providing / demanded `emojis-list@^3.0.0`), `pilet-6` (providing `emojis-list@3.0.0` while demanding `emojis-list@3.x`), and `pilet-7` (providing `emojis-list@2.0.0` while demanding `emojis-list@>=2.0.0`).

The idea behind this one is that all pilets may use the same dependency version, but they may still fall back to their version if nothing was provided already.

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
