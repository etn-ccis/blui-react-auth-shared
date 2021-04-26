# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v3.1.0 (April 26, 2021)

### Added

-   Updated type definitions to allow for a custom success screen in the Registration flow.

## v3.0.0 (March 29, 2021)

### Added

-   Updated type definitions to allow for further customization of the elements on the Login screen.
-   Updated type definitions to allow for custom forms / data collection in the Registration flow.
-   Peer dependency support for React 17.

### Removed

-   Phone number is no longer part of the default registration properties (you must add it to your custom forms to collect this data)
-   Unused `title` prop from `AuthUIContextProvider`.
-   Highcharts formatting functions — these have been moved to [@pxblue/highcharts](https://www.npmjs.com/package/@pxblue/highcharts).

## v2.1.0 (November 10, 2020)

### Added

-   `phoneContactLink` to `AuthUIContextProviderProps` to allow specification of tel URI details while keeping `phoneContact` for human-readable UI display of the same number

## v2.0.1 (August 28, 2020)

### Added

-   New translation strings for React applications using `<Trans>` component.

## v2.0.0 (August 10, 2020)

### Removed

-   default export from i18n utilities
    -   This will be implemented in [@pxblue/react-native-auth-workflow](https://www.npmjs.com/package/@pxblue/react-native-auth-workflow) and [@pxblue/react-auth-workflow](https://www.npmjs.com/package/@pxblue/react-auth-workflow) separately.
-   DismissKeyboardView component
    -   Moved to @pxblue/react-native-auth-workflow

### Changed

-   Type for `projectImage` has changed from `ImageSourcePropType` to `number | string` to support React Native _and_ React projects.

## v1.0.1 (July 16, 2020)

### Changed

-   Moved re-usable react logic from @pxblue/react-native-auth-workflow to @pxblue/react-auth-shared
