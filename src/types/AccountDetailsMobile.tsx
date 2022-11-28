import { TextInput } from 'react-native';
import { AccountDetailsFormProps } from './AccountDetails';

export type AccountDetailsFormMobileProps = AccountDetailsFormProps & {
    ref?: React.RefObject<TextInput>;
};
