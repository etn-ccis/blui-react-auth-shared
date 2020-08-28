# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v2.0.1

### Added

-   New translation strings for React applications using `<Trans>` component.

## v2.0.0

### Removed

-   default export from i18n utilities
    -   This will be implemented in [@pxblue/react-native-auth-workflow](https://www.npmjs.com/package/@pxblue/react-native-auth-workflow) and [@pxblue/react-auth-workflow](https://www.npmjs.com/package/@pxblue/react-auth-workflow) separately.
-   DismissKeyboardView component
    -   Moved to @pxblue/react-native-auth-workflow

### Changed

-   Type for `projectImage` has changed from `ImageSourcePropType` to `number | string` to support React Native _and_ React projects.

## v1.0.0

### Changed

-   Moved re-usable react logic from @pxblue/react-native-auth-workflow to @pxblue/react-auth-shared
