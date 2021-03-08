/**
 * @packageDocumentation
 * @module AuthUIContextProvider
 */

import { AuthUIActions } from './authTypes';
import { RegistrationUIActions } from './registrationTypes';
import { PasswordRequirement } from '../../types/ResetPasswordParams';
import { ComponentType } from 'react';
import { AccountDetailsFormProps } from '../../types/AccountDetails';

/**
 * The application provides various action functions and properties
 * to the authentication user interface. These properties are set
 * from this type.
 */
type AuthUIContextProviderProps = {
    /**
     * Provides application actions for the user's authentication needs.
     */
    authActions: () => AuthUIActions;
    /**
     * Provides application actions for the user's registration needs.
     */
    registrationActions: () => RegistrationUIActions;
    /**
     * When true, shows the Create Account button to allow for self registration.
     *
     * Default: true
     */
    showSelfRegistration?: boolean;
    /**
     * When true, the invitation-based deep routes will be activated.
     *
     * Default: true
     */
    enableInviteRegistration?: boolean;
    /**
     * When true, the Forgot Password link will be visible on the login screen.
     *
     * Default: true
     */
    showForgotPassword?: boolean;
    /**
     * When true, the Contact Support link will be visible on the login screen.
     *
     * Default: true
     */
    showContactSupport?: boolean;
    /**
     * When true, the Reset Password deep routes will be activated.
     *
     * Default: true
     */
    enableResetPassword?: boolean;
    /**
     * When true, the Remember Me button will be available on the login screen.
     *
     * Default: true
     */
    showRememberMe?: boolean;
    /**
     * When true, presents a button to access link based flows.
     *
     * Default: false
     */
    allowDebugMode?: boolean;
    /**
     * Title of the application.
     */
    title?: string;
    /**
     * Array of password strength requirements.
     */
    passwordRequirements?: PasswordRequirement[];
    /**
     * Project image shown on splash screen and login screen.
     *
     * Dimensions of the image should be 534w x 152h with a transparent background.
     * Differently sized images may not render properly on all devices.
     *
     * Default: Provides an example project image.
     */
    projectImage?: number | string;
    /**
     * Image shown behind the workflow cards for the authentication and registration workflows.
     *
     * Default: Isometric triangles image.
     */
    background?: {
        backgroundColor?: string;
        backgroundImage?: string;
        backgroundSize?: string;
        backgroundRepeat?: boolean;
    };
    /**
     * Contact email to be shown for support.
     *
     * Default: Provides a fake email.
     */
    contactEmail?: string;
    /**
     * Contact phone number to be shown for support.
     *
     * Default: Provides a fake phone number.
     */
    contactPhone?: string;
    /**
     * Custom Regular Expression for validating email addresses.
     *
     * Default: any valid email
     */
    emailValidator?: RegExp;
    /**
     * Allow the EULA to be displayed as HTML or Text
     *
     * Default: Displays as html
     */
    htmlEula?: boolean;
    /**
     * Disable EULA checkbox until the content has been scrolled to the bottom.
     *
     * Default: false
     */
    //  eulaScrollLock?: boolean; // TODO
    // TODO
    customAccountDetails?: Array<ComponentType<AccountDetailsFormProps> | null>;
};

export type { AuthUIContextProviderProps, AuthUIActions, RegistrationUIActions };
