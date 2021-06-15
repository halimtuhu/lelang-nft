import { BadRequestException } from '@nestjs/common';
import { AuctionModel } from 'src/entities/dblocaltest';
import { AuctionModelDto, StoreAuctionRequestDto } from '../dto/auction.dto';

export class StoreAuctionService {
    validateSignature(dto: StoreAuctionRequestDto): void {
        if (dto.signature !== 'thisisavalidsignature')
            throw new BadRequestException('Signature not valid');
    }

    async store(dto: StoreAuctionRequestDto): Promise<AuctionModelDto> {
        this.validateSignature(dto);

        const auction: AuctionModel = new AuctionModel();
        auction.set({ ...dto });
        await auction.save();

        return dto.generate(auction);
    }
}
