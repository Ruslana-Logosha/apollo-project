import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class CreateTripDto {
  @Field(() => ID)
  readonly id: string;
}
