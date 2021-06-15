import { BadRequestException } from '@nestjs/common';
import { AuctionModel } from 'src/entities/dblocaltest';
import { AuctionModelDto, StoreAuctionRequestDto } from '../dto/auction.dto';

export class StoreAuctionService {
    async store(dto: StoreAuctionRequestDto): Promise<AuctionModelDto> {
        if (dto.tokenId === 500)
            throw new BadRequestException('Token id must not in exact 500');

        const auction: AuctionModel = new AuctionModel();
        auction.set({ ...dto });
        await auction.save();

        return dto.generate(auction);
    }
}
