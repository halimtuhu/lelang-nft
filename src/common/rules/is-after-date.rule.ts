import { Injectable } from '@nestjs/common';
import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: '' })
@Injectable()
export class IsAfterDateConstraint implements ValidatorConstraintInterface {
    validate(
        value: Date,
        args?: ValidationArguments,
    ): boolean | Promise<boolean> {
        const date: Date = args.constraints[0];

        return value instanceof Date ? value > date : new Date(value) > date;
    }

    defaultMessage?(args?: ValidationArguments): string {
        return `${args.property} must be after ${args.constraints[0]}`;
    }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function IsAfterDate(
    date: Date,
    validationOptions?: ValidationOptions,
): (object?: any, propertyName?: string) => void {
    return function (object?: any, propertyName?: string) {
        registerDecorator({
            name: 'IsAfterDate',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: IsAfterDateConstraint,
            constraints: [date],
        });
    };
}
