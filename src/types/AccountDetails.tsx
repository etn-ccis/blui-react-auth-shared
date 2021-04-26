/**
 * Type to represent the input of the account details component.
 *
 * @param firstName  The first name string.
 * @param lastName  The last name string.
 */
export type AccountDetailInformation = {
    firstName: string;
    lastName: string;
};

export type CustomAccountDetails = {
    [key: string]: string | number | boolean;
};

export type AccountDetailsFormProps = {
    onDetailsChanged: (details: CustomAccountDetails | null, valid: boolean) => void;
    initialDetails?: CustomAccountDetails;
    onSubmit?: () => void;
};

export type RegistrationData = {
    accountDetails?: AccountDetailInformation | null | undefined;
    email?: string;
};
