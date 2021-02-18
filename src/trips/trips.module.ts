import { TripsService } from './trips.service';
import { TripsSchema } from './trips.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TripsResolver } from './trips.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Trips', schema: TripsSchema }]),
  ],
  providers: [TripsResolver, TripsService],
})
export class TripsModule {}
