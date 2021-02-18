import { CreateTripDto } from './dto/create-trip.dto';
import { TripsService } from './trips.service';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Mutation } from 'type-graphql';
import { TripInput } from './inputs/trip.input';

@Resolver()
export class TripsResolver {
  constructor(private readonly tripsService: TripsService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [CreateTripDto])
  async trips() {
    return this.tripsService.findAll();
  }

  @Mutation(() => [CreateTripDto])
  async createTrip(@Args('input') input: TripInput) {
    return this.tripsService.create(input);
  }
}
