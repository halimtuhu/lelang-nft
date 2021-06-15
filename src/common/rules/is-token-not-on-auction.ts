import { Injectable } from '@nestjs/common';
import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize';
import { AuctionModel } from 'src/entities/dblocaltest';
import { StoreAuctionRequestDto } from 'src/modules/auctions/dto/auction.dto';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsTokenNotOnAuctionContraint
    implements ValidatorConstraintInterface
{
    async validate(
        value: string | number,
        args?: ValidationArguments,
    ): Promise<boolean> {
        const dto = args.object as StoreAuctionRequestDto;
        const tokenId = dto.tokenId;
        const tokenAddress = dto.tokenAddress;

        const auction = await AuctionModel.findOne({
            where: {
                tokenId,
                tokenAddress,
                endedAt: { [Op.gte]: Sequelize.fn('NOW') },
                closedAt: null,
                claimedAt: null,
            },
        });

        return auction === null;
    }

    defaultMessage?(args?: ValidationArguments): string {
        return `${args.property} already on auction`;
    }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function IsTokenNotOnAuction(
    validationOptions?: ValidationOptions,
): (object?: any, propertyName?: string) => void {
    return function (object?: any, propertyName?: string) {
        registerDecorator({
            name: 'IsTokenNotOnAuction',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: IsTokenNotOnAuctionContraint,
        });
    };
}
