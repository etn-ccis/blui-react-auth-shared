# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v3.8.0 (October 12, 2023)

### Added

-   Ability to hide the CreatePassword screen
-   Ability to hide the login form in the Login screen.

### Changed

-   Changed resend email button's text label on the email verification screen.

## v3.7.4 (November 30, 2022)

### Changed

-   Update `AccountDetailsFormProps` `ref` type definition to be `React.RefObject<any>`.

## v3.7.3 (October 28, 2022)

### Fixed

-   Refactor functions that use regex named capture groups to fix conflicts with hermes engine.

## v3.7.2 (September 7, 2022)

### Added

-   Add `USERNAME_ENTRY_ERROR` translations.
-   Add `USERNAME_REGEX` constant for validating username entries.
-   Add optional `ref` prop to `AccountDetailsFormProps`.

## v3.7.1 (August 4, 2022)

### Added

-   Add `VERIFICATION_CODE_PROMPT` translations.

### Fixed

-   Fix Portuguese translation issues ([#74](https://github.com/etn-ccis/blui-react-auth-shared/issues/74)).

## v3.7.0 (April 26, 2022)

### Added

-   `disablePagerAnimation` prop to `AuthUIContextProvider` to disable pager animations.

## v3.6.2 (April 14, 2022)

### Added

-   Support for React 18.

## v3.6.1 (April 1, 2022)

### Fixed

-   Fixed non-bold text on Forgot Password screen when using Portuguese translations ([#59](https://github.com/etn-ccis/blui-react-auth-shared/issues/59)).

## v3.6.0 (December 9, 2021)

### Added

-   Support for Portuguese translations.
-   Type checking for errors.

## v3.5.0 (November 11, 2021)

### Changed

-   Changed package namespace from `@pxblue` to `@brightlayer-ui`.

## Package Migration Notice

Previous versions listed after this indicator refer to our deprecated `@pxblue` packages.

---

## v3.5.0 (August 13, 2021)

### Added

-   `loginErrorDisplayConfig` prop to `AuthUIContextProvider` to customize how errors are displayed on the login screen.

## v3.4.0 (July 21, 2021)

### Added

-   `registrationConfig` prop to `AuthUIContextProvider` to customize the character limits for first and last name text fields in the registration workflow.

## v3.3.0 (June 22, 2021)

### Added

-   New type for LoginType.
-   New translations for "username".

## v3.2.1 (May 18, 2021)

### Fixed

-   Corrected some Spanish translations.
-   Missing space in support strings for spanish translation file.

## v3.2.0 (April 29, 2021)

### Added

-   Support for Spanish and Chinese translations.
-   Strong typings for translation files.
-   Updated type definition for `registrationSuccessScreen`.

### Fixed

-   Incorrect key name in French translation file.

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
-   Highcharts formatting functions — these have been moved to [@brightlayer-ui/highcharts](https://www.npmjs.com/package/@brightlayer-ui/highcharts).

## v2.1.0 (November 10, 2020)

### Added

-   `phoneContactLink` to `AuthUIContextProviderProps` to allow specification of tel URI details while keeping `phoneContact` for human-readable UI display of the same number.

## v2.0.1 (August 28, 2020)

### Added

-   New translation strings for React applications using `<Trans>` component.

## v2.0.0 (August 10, 2020)

### Removed

-   default export from i18n utilities
    -   This will be implemented in [@brightlayer-ui/react-native-auth-workflow](https://www.npmjs.com/package/@brightlayer-ui/react-native-auth-workflow) and [@brightlayer-ui/react-auth-workflow](https://www.npmjs.com/package/@brightlayer-ui/react-auth-workflow) separately.
-   DismissKeyboardView component
    -   Moved to @brightlayer-ui/react-native-auth-workflow

### Changed

-   Type for `projectImage` has changed from `ImageSourcePropType` to `number | string` to support React Native _and_ React projects.

## v1.0.1 (July 16, 2020)

### Changed

-   Moved re-usable react logic from @brightlayer-ui/react-native-auth-workflow to @brightlayer-ui/react-auth-shared.
