import { Module } from '@nestjs/common';
import { AuctionController } from './controllers/auction.controller';

@Module({
    controllers: [AuctionController],
})
export class AuctionModule {}
