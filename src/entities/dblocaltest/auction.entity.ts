import {
    Column,
    CreatedAt,
    DataType,
    DeletedAt,
    Model,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';
import { TokenTypeEnum } from 'src/common/enums/auction.enum';

export interface IAuctionModel {
    id?: number;
    tokenType: TokenTypeEnum;
    tokenId: number;
    tokenAddress: string;
    sellerAddress: string;
    startingPrice: bigint;
    bidIncrement: bigint;
    reservedPrice: bigint;
    startedAt: Date;
    endedAt: Date;
    closedAt?: Date;
    claimedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({ tableName: 'auctions', paranoid: true })
export class AuctionModel
    extends Model<IAuctionModel, IAuctionModel>
    implements IAuctionModel
{
    @Column({
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        type: DataType.BIGINT,
    })
    id?: number;

    @Column({
        field: 'token_type',
        type: DataType.ENUM(TokenTypeEnum.ERC721, TokenTypeEnum.ERC1155),
    })
    tokenType: TokenTypeEnum;

    @Column({ field: 'token_id', type: DataType.INTEGER })
    tokenId: number;

    @Column({ field: 'token_address', type: DataType.STRING })
    tokenAddress: string;

    @Column({ field: 'seller_address', type: DataType.STRING })
    sellerAddress: string;

    @Column({ field: 'starting_price', type: DataType.BIGINT })
    startingPrice: bigint;

    @Column({ field: 'bid_increment', type: DataType.BIGINT })
    bidIncrement: bigint;

    @Column({ field: 'reserved_price', type: DataType.BIGINT })
    reservedPrice: bigint;

    @Column({ field: 'started_at', type: DataType.DATE })
    startedAt: Date;

    @Column({ field: 'ended_at', type: DataType.DATE })
    endedAt: Date;

    @Column({ field: 'closed_at', type: DataType.DATE })
    closedAt?: Date;

    @Column({ field: 'claimed_at', type: DataType.DATE })
    claimedAt?: Date;

    @Column({ field: 'created_at', type: DataType.DATE })
    @CreatedAt
    createdAt?: Date;

    @Column({ field: 'updated_at', type: DataType.DATE })
    @UpdatedAt
    updatedAt?: Date;

    @Column({ field: 'deleted_at', type: DataType.DATE })
    @DeletedAt
    deletedAt?: Date;
}
