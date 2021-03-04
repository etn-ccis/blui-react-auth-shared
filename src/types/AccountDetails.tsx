/**
 * Type to represent the input of the account details component.
 *
 * @param firstName  The first name string.
 * @param lastName  The last name string.
 * @param phone  The phone number string.
 */
export type AccountDetailInformation = {
    firstName: string;
    lastName: string;
    phone: string;
};

export type CustomAccountDetails = {
    [key: string]: string | number | boolean;
};

export type AccountDetailsFormProps = {
    onDetailsChanged: (details: CustomAccountDetails | null, valid: boolean) => void;
    initialDetails?: CustomAccountDetails;
    onSubmit?: () => void;
};
