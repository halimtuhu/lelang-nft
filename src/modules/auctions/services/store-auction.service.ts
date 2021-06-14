import {
    AuctionModelDto,
    StoreAuctionRequestDto,
} from '../dto/store-auction.dto';

export class StoreAuctionService {
    async store(request: StoreAuctionRequestDto): Promise<AuctionModelDto> {
        return Promise.resolve({
            id: Math.ceil(Math.random() * 10 ** 8),
            ...request,
            closedAt: null,
            claimedAt: null,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }
}
