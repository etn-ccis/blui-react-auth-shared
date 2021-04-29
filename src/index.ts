/**
 * General docs
 *
 * @packageDocumentation
 * @module  @etn-sst/react-native-auth-ui
 * @preferred
 */

import { english, french, spanish } from './data/translations';

export * from './constants';

export * from './contexts/AccountUIContext';
export * from './contexts/SecurityContextProvider';
export { AuthUIContextProvider } from './contexts/AuthUIContextProvider';
export type {
    AuthUIContextProviderProps,
    RegistrationUIActions,
    AuthUIActions,
    CustomRegistrationForm,
} from './contexts/AuthUIContextProvider';
export { useInjectedUIContext } from './contexts/AuthUIContextProvider';
export type { SecurityContextActions } from './contexts/SecurityContextProvider';
export * from './contexts/RegistrationUIContext';

export * from './contexts/TransitState';
export * from './hooks';
export * from './lib';

export { AuthUIInternalStore } from './stores/AuthUIInternalStore';
export * from './types';

export const translations = {
    english: english,
    french: french,
    spanish: spanish,
};

export * from './helpers/parseTextForJSX';
