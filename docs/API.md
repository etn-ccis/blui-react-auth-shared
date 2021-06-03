# API

This document outlines the various exports and configuration options for the @pxblue/react-auth-shared package.

## Context Providers

### AuthUIContextProvider

The AuthUIContextProvider allows for application code to pass in middleware actions that result from the Authentication and Registration user interface. Often the actions will be the local storage and API calls satisfying AuthUIActions and RegistrationUIActions. UI configuration properties are also passed in.

#### Usage

```tsx
import { AuthUIContextProvider } from '@pxblue/react-native-auth-workflow';

<AuthUIContextProvider>{/* ...contents */}</AuthUIContextProvider>;
```

#### Available Props

-   **accountAlreadyExistsScreen**: (optional) _`JSX.Element | (navigation: any) => JSX.Element`_
    -   Custom content to use as the success screen for Registration flows when a user already has an account.
-   **allowDebugMode** (optional): _`boolean`_
    -   When true, presents a debug button on the login screen to allow access to deep link-based screens/flows
    -   Default: false
-   **authActions**: _`() => AuthUIActions`_
    -   Provides application actions for the user's authentication needs.
-   **background**: (optional) _`Pick<CSSProperties, 'backgroundImage' | 'backgroundColor' | 'backgroundPosition' | 'backgroundSize' | 'backgroundRepeat'>`_
    -   Allows you to override the styles used for the workflow background
-   **contactEmail** (optional): _`string`_
    -   Contact email address to be shown on the support screen
    -   Default: provides a fake email address
-   **contactPhone** (optional): _`string`_
    -   Contact phone number to be shown on the support screen (human-readable for display only).
    -   Default: provides a fake phone number
-   **contactPhoneLink** (optional): _`string`_
    -   Contact phone number to be dialed on the support screen
    -   Default: provides a fake phone number
-   **customAccountDetails**: (optional) _`Array<CustomRegistrationForm | null>`_
    -   Custom forms to add to the user registration process
-   **enableInviteRegistration**: (optional) _`boolean`_
    -   When true, the invitation-based workflow screens will be accessible
    -   Default: true
-   **enableResetPassword**: (optional) _`boolean`_
    -   When true, the Forgot Password and Reset Password workflow screens will be accessible
    -   Default: true
-   **htmlEula** (optional): _`boolean`_
    -   Set to true if your EULA needs to be rendered as HTML
    -   Default: false
-   **loginActions** (optional): _`JSX.Element | (navigation: any) => JSX.Element`_
    -   Custom content to render below the login button and above the registration links. For React Native projects, the navigation prop will be provided as an argument to allow you to navigate to other screens if needed.
    -   Default: Shows the `projectImage`
-   **loginFooter** (optional): _`JSX.Element | (navigation: any) => JSX.Element`_
    -   Custom content to render below the login form. For React Native projects, the navigation prop will be provided as an argument to allow you to navigate to other screens if needed.
-   **loginHeader** (optional): _`JSX.Element | (navigation: any) => JSX.Element`_
    -   Custom content to render above the login form. For React Native projects, the navigation prop will be provided as an argument to allow you to navigate to other screens if needed.
    -   Default: Shows the `projectImage`
-   **loginType** (optional): _`"email" | "username"`_
    -   Type of input to use for login. (Currently available for use with @pxblue/react-auth-workflow@2.2.0 and above)
    -   Default: "email
-   **passwordRequirements** (optional): _`PasswordRequirement[]`_
    -   An array of `PasswordRequirement`s that must be satisfied when creating or changing a password.
    -   Default: Passwords must contain a number, uppercase letter, lowercase letter, special character, and be between 8 and 16 characters in length
-   **projectImage** (optional): _`number | string`_
    -   Project image shown on splash screen and login screen.
    -   Dimensions of the image should be 534w x 152h with a transparent background. Differently sized images may not render properly on all devices.
    -   Default: Provides an example project image.
-   **registrationActions**: _`() => RegistrationUIActions`_
    -   Provides application actions for the user's registration needs.
-   **registrationSuccessScreen**: (optional) _`JSX.Element | (navigation: any, registrationData?: RegistrationData) => JSX.Element | (registrationData?: RegistrationData) => JSX.Element`_
    -   Custom content to use as the success screen for Registration flows
-   **showContactSupport**: _`boolean`_
    -   When true, shows the Contact Support button on the login screen.
    -   Default: true
-   **showCybersecurityBadge**: _`boolean`_
    -   When true, shows the Cybersecurity Certified badge on the login screen.
    -   Default: true
-   **showRememberMe**: _`boolean`_
    -   When true, shows the Remember Me checkbox on the login screen.
    -   Default: true
-   **showSelfRegistration**: _`boolean`_
    -   When true, shows the Create Account button to allow for self registration.
    -   Default: true

### SecurityContextProvider

SecurityContextProvider provides a single source of state for the state of user authentication. It is not meant to authenticate the user or hold credential information. Its purpose is to control access to authenticated or non-authenticated sections of the application (as well as change password for a currently authenticated user).

> Note: the `SecurityContextProvider` should come before the `AuthUIContextProvider` in your application hierarchy.

#### Usage

```tsx
import { SecurityContextProvider } from '@pxblue/react-native-auth-workflow';

<SecurityContextProvider>
    <AuthUIContextProvider {...props}>{/* ...contents */}</AuthUIContextProvider>
</SecurityContextProvider>;
```

## Hooks

### useAccountUIActions

Hook for using the global AccountUIActions actions (i.e. logIn, forgotPassword, etc.) which change the global AccountUIState.

#### Usage

```tsx
import { useAccountUIActions } from '@pxblue/react-native-auth-workflow';

const accountUIActions: AuthUIActions = useAccountUIActions();
```

### useAccountUIState

Hook for using the global account state for account-related global `AccountUIState` state changes (i.e. login, forgot password, set password, verify reset code).

#### Usage

```tsx
import { useAccountUIState } from '@pxblue/react-native-auth-workflow';

const accountUIState: AccountUIState = useAccountUIState();
```

### useRegistrationUIActions

Hook for using the global RegistrationUIActions actions (i.e. loadEULA, completeRegistration, etc.) which change the global RegistrationUIState.

#### Usage

```tsx
import { useRegistrationUIActions } from '@pxblue/react-native-auth-workflow';

const registrationActions: RegistrationUIActions = useRegistrationUIActions();
```

### useRegistrationUIState

Hook for using the global account state for account-related global RegistrationUIState state changes (i.e. loading EULA, registration via invite).

#### Usage

```tsx
import { useRegistrationUIState } from '@pxblue/react-native-auth-workflow';

const registrationState: RegistrationUIState = useRegistrationUIState();
```

### useSecurityActions

A hook to get the security actions (on authenticated / on not authenticated).

> Note: Must be used inside of a `SecurityContextProvider`.

#### Usage

```tsx
import { useSecurityActions } from '@pxblue/react-native-auth-workflow';

const securityActions: SecurityContextActions = useSecurityAction();
```

### useSecurityState

A hook to get the security state (authenticated / not authenticated).

> Note: Must be used inside of a `SecurityContextProvider`.

#### Usage

```tsx
import { useSecurityState } from '@pxblue/react-native-auth-workflow';

const securityState: SecurityContextState = useSecurityState();
```

# Type Definitions

## AccountDetailInformation

Type to represent the input of the account details component.

### Type Declaration

-   **firstName**: _`string`_
    -   The user's first name
-   **lastName**: _`string`_
    -   The user's last name / surname.

## RegistrationData

Type to represent the input of the account details component for use with the `registrationSuccessScreen` prop on the `AuthUIContextProvider`.

### Type Declaration

-   **accountDetails**: (optional) _`AccountDetailInformation | null | undefined`_
    -   The user's first name and last name / surname.
-   **email**: (optional) _`string`_
    -   The user's email.

## AccountUIState

Global state for authentication-related activities and forgotten password retrieval.

### Type Declaration

-   **email**: _`string | null`_
    -   The email of the current user.
-   **forgotPassword**: _`ForgotPasswordState`_
    -   State of a forgot password request (which then sends an email to the user's account).
-   **login**: _`LoginState`_
    -   State of authentication for the current user, including transit state of the call.
-   **setPassword**: _`SetPasswordState`_
    -   State of the setPassword request, after a user begins resetting a forgotten password using the deep link token from their email.
-   **userToken**: _`string | null`_
    -   The current user's authentication token.

## AuthUIActions

Authentication Actions to be performed based on the user's UI actions. The application will create appropriate actions (often api calls, local network storage, credential updates, etc.) and update the global security state based on the actionable needs of the user. A MockAuthUIActions implementation is provided in the examples folder for getting started with during development.

### Type Declaration

-   **changePassword**: _`(oldPassword: string, newPassword: string) => Promise<void>)`_

    -   An authenticated user wants to change their password. The application should try to change the user's password. Upon completion, the user will be logged out of the application. Upon cancellation, the user will be taken back to the application's home screen.

    -   **Parameters**:

        -   **oldPassword**: _`string`_
            -   The user's current password as entered into the UI.
        -   **newPassword**: _`string`_
            -   The user's new password as entered into the UI.

    -   **Returns**: _`Promise<void>`_
        -   Resolve if successful, otherwise reject with an error message.

-   **forgotPassword**: _`(email: string) => Promise<void>)`_

    -   The user has forgotten their password and wants help. The application generally should call an API which will then send a password reset link to the user's email.

    -   **Parameters**:

        -   **email**: _`string`_
            -   Email address the user uses to log in to the application.

    -   **Returns**: _`Promise<void>`_
        -   Resolve if email is sent successfully, reject otherwise.

-   **initiateSecurity**: _`() => Promise<void>)`_

    -   Initialize the application security state. This will involve reading any local storage, validating existing credentials (token expiration, for example). At the end of validation, the SecurityContextActions should be called with either: onUserAuthenticated (which will present the application), or onUserNotAuthenticated (which will present the Auth UI).

        > Note: Until this method returns, the applications Splash screen will be presented.

    -   **Returns**: _`Promise<void>`_
        -   Should always resolve, never throw.

-   **login**: _`(email: string, password: string, rememberMe: boolean) => Promise<void>)`_

    -   The user wants to log into the application. Perform a login with the user's credentials. The application should provide the user's email and password to the authentication server. In the case of valid credentials, the applications code should store the returned data (such as token, user information, etc.). Then the onUserAuthenticated function should be called on the SecurityContextActions object.

    -   **Parameters**:

        -   **email**: _`string`_
            -   Email address the user entered into the UI.
        -   **password**: _`string`_
            -   Password the user entered into the UI.
        -   **rememberMe**: _`boolean`_
            -   Indicates whether the user's email should be remembered on success.

    -   **Returns**: _`Promise<void>`_
        -   Resolve if code is credentials are valid, otherwise reject.

-   **setPassword**: _`(code: string, password: string, email?: string) => Promise<void>)`_

    -   A user who has previously used "forgotPassword" now has a valid password reset code and has entered a new password. The application should take the user's password reset code and the newly entered password and then reset the user's password.

        > Note: Upon success, the user will be taken to the Login screen

    -   **Parameters**:

        -   **code**: _`string`_
            -   Password reset code from a link
        -   **password**: _`string`_
            -   New Password the user entered into the UI
        -   **email**: (optional) _`string`_
            -   Email address if it was passed from the reset link

    -   **Returns**: _`Promise<void>`_
        -   Resolve if successful, otherwise reject with an error message.

-   **verifyResetCode**: _`(code: string, email?: string) => Promise<void>)`_

    -   The user has tapped on an email with a password reset link, which they received after requesting help for forgetting their password. The application should take the password reset code and then verify that it is still valid.

    -   **Parameters**:

        -   **code**: _`string`_
            -   Password reset code from a reset password link
        -   **email**: (optional) _`string`_
            -   Email address if it was passed from the reset link

    -   **Returns**: _`Promise<void>`_
        -   Resolve if code is valid, otherwise reject.

## ForgotPasswordState

Network state and email for a user requesting forgot password. Extends `TransitState`.

### Type Declaration

-   **email**: _`string | null`_
    -   The email belonging to the account for which a user is doing a forgot password request.

## InviteRegistrationState

Network state and returned email and organization for a user who was invited to register within the app (deep link token from their email).

### Type Declaration

-   **codeRequestTransit**: _`TransitState`_
    -   Network state for initiating user registration (sending verification email).
-   **email**: _`string | null`_
    -   The email belonging to the user who was invited to register through the app.
-   **organizationName**: _`string | null`_
    -   The organization of the user who was invited to register through the app.
-   **registrationTransit**: _`TransitState`_
    -   Network state for completing registration of the invited user.
-   **validationTransit**: _`TransitState`_
    -   Network state for validating the invited user's invite token (the deep link token from their email).

## LoginState

Network state and email for a user attempting to authenticate into the app. Extends `TransitState`.

### Type Declaration

-   **email**: _`string | null`_
    -   The email with which a user is attempting to authenticate into the app.

## PasswordRequirement

Definition for a security/complexity requirement for application passwords.

### Type Declaration

-   **description**: _`string`_
    -   The text description of the requirement (e.g., 'contains an uppercase letter')
-   **regex**: _`RegExp`_
    -   A regular expression the defines the complexity requirement (e.g., `/[A-Z]+/`)

## RegistrationUIActions

Registration Actions to be performed based on the user's actions. The application will create appropriate actions (often API calls, local network storage, credential updates, etc.) based on the actionable needs of the user. A MockRegistrationUIActions implementation is provided in the examples to start with during development.

### Type Declaration

-   **completeRegistration**: _`(userData: { accountDetails: AccountDetailInformation & CustomAccountDetails, password: string }, validationCode: string, validationEmail?: string) => Promise<{ email: string, organizationName: string }>)`_

    -   The user has been invited to register and has entered the necessary account and password information. The application should now complete the registration process given the user's data.

        > Note: Upon resolution, the user will be brought back to the Login screen.

    -   **Parameters**:

        -   **userData**: _`{ accountDetails: AccountDetailInformation, password: string }`_
            -   Account details and password entered by the user.
        -   **validationCode**: _`string`_
            -   Registration code provided from the invitation email link.
        -   **validationEmail**: (optional) _`string`_
            -   Email provided from the invitation email link (optional) `?email=addr%40domain.com`.

    -   **Returns**: _`Promise<{ email: string, organizationName: string }>`_
        -   Resolve when account creation succeeds, otherwise reject with an error message.

-   **loadEULA**: _`(language: string) => Promise<string>)`_

    -   The user wants to complete an action but must first accept the EULA. The application should retrieve an application-specific EULA for the user.

    -   **Parameters**:

        -   **language**: _`string`_
            -   The i18n language the user is requesting for the EULA text.

    -   **Returns**: _`Promise<string>`_
        -   Resolve with EULA, otherwise reject with an error message.

-   **requestRegistrationCode**: _`(email: string) => Promise<void>)`_

    -   The user entered their email address and accepted the EULA. The API should now send them an email with the validation code.

    -   **Parameters**:

        -   **email**: _`string`_
            -   The email address for the registering user.

    -   **Returns**: _`Promise<void>`_
        -   Resolve when the server has accepted the request.

-   **validateUserRegistrationRequest**: _`(validationCode: string, validationEmail?: string) => Promise<boolean>)`_

    -   The user has tapped on an email link inviting them to register with the application. The application should validate the code provided by the link.

    -   **Parameters**:

        -   **validationCode**: _`string`_
            -   Registration code provided from the link.
        -   **validationEmail**: (optional) _`string`_
            -   Email provided from the invitation email link (optional) `?email=addr%40domain.com`.

    -   **Returns**: _`Promise<boolean>`_
        -   Resolves when the code is valid. True if registration is complete, False if account information is needed. If the code is not valid a rejection will occur with an error message.

## RegistrationUIState

Global state for registration-related activities and loading the EULA for newly registering users

### Type Declaration

-   **eulaTransit**: _`TransitState`_
    -   Network state for fetching a remote EULA.
-   **inviteRegistration**: _`InviteRegistrationState`_
    -   Network and returned values state for registration of anew user via invitation.

## SecurityContextActions

Actions that change the security state of the application.

### Type Declaration

-   **hideChangePassword**: _`() => void`_

    -   Close the Change Password screen. This is most often called from within the Change Password screen. If the user has successfully changed their password, then hiding Change Password will take to the Authentication User Interface. If the user cancels changing their password, hiding Change Password will take the user back to the application's main screen.

    -   **Returns**: _`void`_

-   **onUserAuthenticated**: _`(args: { email: string, rememberMe: boolean, userId: string }) => void`_

    -   If the user has been authenticated, this function should be called. Most likely, this should be called within the initiateSecurity or logIn actions of the `AuthUIActions` provided to the `AuthUIContextProvider`. Once called, the application will be shown.

    -   **Parameters**:

        -   **args**: _`{ email: string, rememberMe: boolean, userId: string }`_
            -   **email**: _`string`_
                -   Email with which the user authenticate
            -   **rememberMe**: _`boolean`_
                -   Whether the user's email should be visible upon logout.
            -   **userId**: _`string`_
                -   UserId of the authenticated user (may be email).

    -   **Returns**: _`void`_

-   **onUserNotAuthenticated**: _`( clearRememberMe?: boolean, overrideRememberMeEmail?: string) => void`_

    -   If the user has been de-authenticated (either because they logged out or app started with no credentials), this function should be called. Most likely, this should be called within the `initiateSecurity` action of the `AuthUIActions` provided to the `AuthUIContextProvider`, or from a logout event within the application. Once called, the Authentication User Interface will be shown.

    -   **Parameters**:

        -   **clearRememberMe**: (optional) _`boolean`_
            -   If true, clear any "remember me" data upon logout.
        -   **overrideRememberMeEmail**: (optional) _`string`_ - If a value is provided, the `SecurityContextState`'s rememberMe will be set to true and this email will be shown in the email field of Login upon logout.

    -   **Returns**: _`void`_

-   **showChangePassword**: _`() => void`_

    -   Present the Change Password screen to the user (if the user is authenticated). The application will be unmounted.

    -   **Returns**: _`void`_

## SecurityContextState

Basic state upon which to make application security decisions.

### Type Declaration

-   **setPasswordTransit**: _`TransitState`_
    -   Network state for setting a new password for a user who has made a forgot password request.
-   **verifyResetCodeTransit**: _`TransitState`_
    -   Network state for verifying the reset password code for a user who has made a forgot password request.

## SetPasswordState

Network state for a user attempting to set a new password using a verify reset code after requesting forgot password.

### Type Declaration

-   **email**: (optional) _`string`_
    -   Email of the authenticated user.
-   **isAuthenticatedUser**: _`boolean`_
    -   True: The user is authenticated and the application is shown (or the Change Password interface).
    -   False: The user is not authenticated and the Authentication User Interface is shown.
-   **isLoading**: _`boolean`_
    -   True: The security state is being loaded (all other fields are invalid).
    -   False: The security state has been loaded.
-   **isShowingChangePassword**: _`boolean`_
    -   True: The Change Password screen is currently visible.
    -   False: The Change Password screen is not currently visible.
-   **isSignOut**: _`boolean`_
    -   Used for animation purposes only.
    -   True: The user is logged in currently and a change will be the result of logging out.
    -   False: The user is likely logging in if authentication state changes.
-   **rememberMeDetails**: _`{ email?: string, rememberMe?: boolean }`_
    -   Information for a user who wants to be remembered upon logout.
    -   **email**: (optional) _`string`_
        -   Email address to show in the email field of Login after logout.
    -   **rememberMe**: (optional) _`boolean`_
        -   When true, the user's email will be in the email field of Login.
-   **userId**: (optional) _`string`_
    -   UserId of the authenticated user (may be an email).

## TransitState

Keeps track of the state of a network call.

### Type Declaration

-   **transitComplete**: _`boolean`_
    -   Returns true if a network call has completed, either successfully or unsuccessfully.
-   **transitErrorMessage**: _`string | null`_
    -   An error message describing the failure of the last network call, or null if the last call was a success.
-   **transitId**: _`number | null`_
    -   The identifier for a specific network call. Can be used to ignore an old return if a modal dismisses or another action fires.
-   **transitInProgress**: _`boolean`_
    -   Returns true if the network call is currently active and awaiting a response.
-   **transitSuccess**: _`boolean`_
    -   Returns true if the previously completed network call returned without error.

# Other Type Definitions

Other useful types.

## CustomRegistrationForm

Used when passing additional custom form elements into the Registration workflow.

### Type Declaration

-   **title**: (optional) _`string`_
    -   Title to use for the page.
    -   Default: 'Account Details'
-   **instructions**:(optional) _`string`_
    -   Instructions / information to display above the form
    -   Default: same as built-in form page
-   **component**: _`ComponentType<AccountDetailsFormProps>`_
    -   Form component to render.

## AccountDetailsFormProps

Custom forms passed into the registration workflow must adhere to this type definition.

### Type Declaration

-   **onDetailsChanged**: _`(details: CustomAccountDetails | null, valid: boolean) => void`_
    -   A function that you must call whenever any of your form values changes (valid should be true if the current state of the form values is valid to proceed).
-   **initialDetails**: _`CustomAccountDetails`_
    -   Values used to initialize your custom form fields.
-   **onSubmit**: _`() => void`_
    -   Callback function to call when the Enter key is pressed in the last field of your custom form.

## CustomAccountDetails

Format used to track values for custom form elements in the Registration workflow.

### TypeDeclaration

-   **[key: string]**: (optional) _`string | number | boolean`_
    -   A custom value that you want to capture during registration
