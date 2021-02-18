import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class TripInput {
  @Field(() => ID)
  readonly id: string;
}
