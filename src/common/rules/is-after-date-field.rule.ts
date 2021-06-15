import { Injectable } from '@nestjs/common';
import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { StoreAuctionRequestDto } from 'src/modules/auctions/dto/auction.dto';

@ValidatorConstraint({ name: '' })
@Injectable()
export class IsAfterDateFieldConstraint
    implements ValidatorConstraintInterface
{
    validate(
        value: string,
        args?: ValidationArguments,
    ): boolean | Promise<boolean> {
        const propertyName = args.constraints[0];
        const propertyValue = (args.object as StoreAuctionRequestDto)[
            propertyName
        ];

        return new Date(value) > new Date(propertyValue);
    }

    defaultMessage?(args?: ValidationArguments): string {
        return `${args.property} must be after ${args.constraints[0]}`;
    }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function IsAfterDateField(
    otherPropertyName: string,
    validationOptions?: ValidationOptions,
): (object?: any, propertyName?: string) => void {
    return function (object?: any, propertyName?: string) {
        registerDecorator({
            name: 'IsAfterDateField',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: IsAfterDateFieldConstraint,
            constraints: [otherPropertyName],
        });
    };
}
