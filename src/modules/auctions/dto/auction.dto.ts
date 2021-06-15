import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
    IsDateString,
    IsEnum,
    IsEthereumAddress,
    IsNotEmpty,
    IsNumber,
} from 'class-validator';
import { TokenTypeEnum } from 'src/common/enums/auction.enum';
import { IsAfterDateField } from 'src/common/rules/is-after-date-field.rule';
import { IsAfterDate } from 'src/common/rules/is-after-date.rule';
import { IsTokenNotOnAuction } from 'src/common/rules/is-token-not-on-auction';
import { AuctionModel } from 'src/entities/dblocaltest';

export class StoreAuctionRequestDto {
    @IsNotEmpty()
    @IsEnum(TokenTypeEnum)
    @ApiProperty({ name: 'token_type' })
    @Expose({ name: 'token_type' })
    tokenType: TokenTypeEnum;

    @IsNotEmpty()
    @IsNumber()
    @IsTokenNotOnAuction()
    @ApiProperty({ name: 'token_id' })
    @Expose({ name: 'token_id' })
    tokenId: number;

    @IsNotEmpty()
    @IsEthereumAddress()
    @IsTokenNotOnAuction()
    @ApiProperty({ name: 'token_address' })
    @Expose({ name: 'token_address' })
    tokenAddress: string;

    @IsNotEmpty()
    @IsEthereumAddress()
    @ApiProperty({ name: 'seller_address' })
    @Expose({ name: 'seller_address' })
    sellerAddress: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ name: 'starting_price' })
    @Expose({ name: 'starting_price' })
    startingPrice: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ name: 'bid_increment' })
    @Expose({ name: 'bid_increment' })
    bidIncrement: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ name: 'reserved_price' })
    @Expose({ name: 'reserved_price' })
    reservedPrice: number;

    @IsNotEmpty()
    @IsDateString()
    @IsAfterDate(new Date())
    @ApiProperty({ name: 'started_at' })
    @Expose({ name: 'started_at' })
    startedAt: Date;

    @IsNotEmpty()
    @IsDateString()
    @IsAfterDateField('startedAt')
    @ApiProperty({ name: 'ended_at' })
    @Expose({ name: 'ended_at' })
    endedAt: Date;

    @IsNotEmpty()
    signature: string;

    generate(auction: AuctionModel): AuctionModelDto {
        return {
            id: auction.id,
            tokenType: auction.tokenType,
            tokenAddress: auction.tokenAddress,
            tokenId: auction.tokenId,
            sellerAddress: auction.sellerAddress,
            startingPrice: auction.startingPrice,
            bidIncrement: auction.bidIncrement,
            reservedPrice: auction.reservedPrice,
            startedAt: auction.startedAt,
            endedAt: auction.endedAt,
            closedAt: auction.closedAt ?? null,
            claimedAt: auction.closedAt ?? null,
            createdAt: auction.createdAt ?? null,
            updatedAt: auction.updatedAt ?? null,
        };
    }
}

export class AuctionModelDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    tokenType: TokenTypeEnum;

    @ApiProperty()
    tokenId: number;

    @ApiProperty()
    tokenAddress: string;

    @ApiProperty()
    sellerAddress: string;

    @ApiProperty()
    startingPrice: number;

    @ApiProperty()
    bidIncrement: number;

    @ApiProperty()
    reservedPrice: number;

    @ApiProperty()
    startedAt: Date;

    @ApiProperty()
    endedAt: Date;

    @ApiProperty()
    closedAt: Date;

    @ApiProperty()
    claimedAt: Date;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
