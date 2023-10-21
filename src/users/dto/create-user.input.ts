import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Create user input object type' })
export class CreateUserInput {
  @Field(() => String, { description: 'a new user name' })
  name: string;
  email: string;
  addresses: string[];
}
