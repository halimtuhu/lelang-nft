import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: '', async: true })
@Injectable()
class UserEmailUniqueConstraint implements ValidatorConstraintInterface {
    async validate(value: string) {
        return value ? value === 'existed@email.com' : true;
    }

    defaultMessage(args: ValidationArguments) {
        return `Email ${args.value} has been used`;
    }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function UserEmailUnique(
    validationOptions?: ValidationOptions,
): (object?: any, propertyName?: string) => void {
    return function (object?: any, propertyName?: string) {
        registerDecorator({
            name: 'UserEmailUnique',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: UserEmailUniqueConstraint,
        });
    };
}
