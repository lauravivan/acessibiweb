import { Module } from '@nestjs/common';
import { DeficiencesController } from './deficiences.controller';
import { DeficiencesService } from './deficiences.service';

@Module({
  controllers: [DeficiencesController],
  providers: [DeficiencesService],
  exports: [DeficiencesService],
})
export class DeficiencesModule {}
