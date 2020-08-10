# React Auth Shared

![npm (scoped)](https://img.shields.io/npm/v/@pxblue/react-auth-shared)

The React Auth Shared package provides extracts the common logic shared by [@pxblue/react-native-auth-workflow](https://www.npmjs.com/package/@pxblue/react-native-auth-workflow) and [@pxblue/react-auth-workflow](https://www.npmjs.com/package/@pxblue/react-auth-workflow). This package must be used in combination with workflow screen definitions (either by using one of the packages above, or by building your own and integrating them yourself).

# Installation

To install the latest version of this package, run:

```shell
npm install --save @pxblue/react-auth-shared
// or
yarn add @pxblue/react-auth-shared
```

You will also need to install all of the peer dependencies. You can get the latest version of them all by running:

```
npm install --save date-fns@^2.14.0 highcharts@^8.1.2 i18next@^19.3.4 react@^16.13.1 react-i18next@^11.3.4
// or
yarn add date-fns@^2.14.0 highcharts@^8.1.2 i18next@^19.3.4 react@^16.13.1 react-i18next@^11.3.4
```

# Usage

We recommend you use the [@pxblue/react-native-auth-workflow](https://www.npmjs.com/package/@pxblue/react-native-auth-workflow) or [@pxblue/react-auth-workflow](https://www.npmjs.com/package/@pxblue/react-auth-workflow) packages, which use this shared logic under the hood. If you want to build your own screens and connect to this shared log, please contact us.

# Documentation

More information about exported objects and functions can found in the [API](https://github.com/pxblue/react-auth-shared/tree/master/docs/API.md) documentation.

# Contributors

To work on this package as a contributor, first clone down the repository:

```shell
git clone https://github.com/pxblue/react-auth-shared
cd react-auth-shared
```

You can build the library by running:

```shell
yarn build
```

You can run the Lint checks, prettier formatter, typescript validator, and unit tests by running:

```shell
yarn validate
```

You can update the auto-generated licenses.md file by running:

```shell
yarn generate:licenses
```
