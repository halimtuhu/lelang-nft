import { Body, Controller, Post } from '@nestjs/common';
import { ApiExtraModels } from '@nestjs/swagger';
import { IApiResponse } from 'src/common/interface/response.interface';
import { ApiSuccessResponse } from 'src/common/utils/swagger.util';
import { AuctionModelDto, StoreAuctionRequestDto } from '../dto/auction.dto';
import { StoreAuctionService } from '../services/store-auction.service';

@Controller('auctions')
@ApiExtraModels(AuctionModelDto)
export class AuctionController {
    constructor(private readonly storeAuctionService: StoreAuctionService) {}

    @Post()
    @ApiSuccessResponse(AuctionModelDto)
    async store(
        @Body() request: StoreAuctionRequestDto,
    ): Promise<IApiResponse> {
        return {
            message: 'Success store message',
            data: await this.storeAuctionService.store(request),
        };
    }
}
