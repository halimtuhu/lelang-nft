import { Body, Controller, Post } from '@nestjs/common';
import { IApiResponse } from 'src/common/interface/response.interface';
import { StoreAuctionRequestDto } from '../dto/store-auction.dto';
import { StoreAuctionService } from '../services/store-auction.service';

@Controller('auctions')
export class AuctionController {
    constructor(private readonly storeAuctionService: StoreAuctionService) {}

    @Post()
    async store(
        @Body() request: StoreAuctionRequestDto,
    ): Promise<IApiResponse> {
        return {
            message: 'Success store message',
            data: await this.storeAuctionService.store(request),
        };
    }
}
