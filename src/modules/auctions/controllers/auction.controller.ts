import { Body, Controller, Post } from '@nestjs/common';
import { IApiResponse } from 'src/common/interface/response.interface';
import { StoreAuctionRequestDto } from '../dto/store-auction.dto';

@Controller('auctions')
export class AuctionController {
    @Post()
    store(@Body() request: StoreAuctionRequestDto): IApiResponse {
        return {
            message: 'Success store message',
            data: {
                id: Math.ceil(Math.random() * 10 ** 8),
                ...request,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        };
    }
}
