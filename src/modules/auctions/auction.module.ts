import { Module } from '@nestjs/common';
import { AuctionController } from './controllers/auction.controller';
import { StoreAuctionService } from './services/store-auction.service';

@Module({
    controllers: [AuctionController],
    providers: [StoreAuctionService],
})
export class AuctionModule {}
