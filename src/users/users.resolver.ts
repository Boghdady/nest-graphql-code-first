import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Resolver()
export class UsersResolver {
  @Query(() => [User], { description: 'users' })
  async findAll() {
    return [];
  }

  @Query(() => User, { description: 'user' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return null;
  }

  @Mutation(() => User, { name: 'createUser' })
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return null;
  }
}
