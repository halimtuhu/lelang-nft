import {
    IsDateString,
    IsEthereumAddress,
    IsIn,
    IsNotEmpty,
    IsNumber,
} from 'class-validator';
import { TokenTypeEnum } from 'src/common/enums/auction.enum';

export class StoreAuctionRequestDto {
    @IsNotEmpty()
    @IsIn([TokenTypeEnum.ERC1155, TokenTypeEnum.ERC721])
    tokenType: string;

    @IsNotEmpty()
    @IsNumber()
    tokenId: number;

    @IsNotEmpty()
    @IsEthereumAddress()
    tokenAddress: string;

    @IsNotEmpty()
    @IsEthereumAddress()
    sellerAddress: string;

    @IsNotEmpty()
    @IsNumber()
    startingPrice: bigint;

    @IsNotEmpty()
    @IsNumber()
    bidIncrement: bigint;

    @IsNotEmpty()
    @IsNumber()
    reservedPrice: bigint;

    @IsNotEmpty()
    @IsDateString()
    startedAt: Date;

    @IsNotEmpty()
    @IsDateString()
    endedAt: Date;
}

export class AuctionModelDto {
    id: number;
    tokenType: string;
    tokenId: number;
    tokenAddress: string;
    sellerAddress: string;
    startingPrice: bigint;
    bidIncrement: bigint;
    reservedPrice: bigint;
    startedAt: Date;
    endedAt: Date;
    closedAt: Date;
    claimedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
