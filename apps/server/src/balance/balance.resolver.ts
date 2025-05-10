import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BalanceService } from './balance.service';
import { Balance } from './entities/balance.entity';
import { CreateBalanceInput } from './dto/create-balance.input';
import { UpdateBalanceInput } from './dto/update-balance.input';

@Resolver(() => Balance)
export class BalanceResolver {
  constructor(private readonly balanceService: BalanceService) {}

  @Mutation(() => Balance)
  createBalance(@Args('input') input: CreateBalanceInput) {
    return this.balanceService.create(input);
  }

  @Query(() => [Balance], { name: 'balance' })
  findAll() {
    return this.balanceService.findAll();
  }

  @Query(() => Balance, { name: 'balance' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.balanceService.findOne(id);
  }

  @Mutation(() => Balance)
  updateBalance(
    @Args('updateBalanceInput') updateBalanceInput: UpdateBalanceInput,
  ) {
    return this.balanceService.update(
      updateBalanceInput.id,
      updateBalanceInput,
    );
  }

  @Mutation(() => Balance)
  removeBalance(@Args('id', { type: () => Int }) id: number) {
    return this.balanceService.remove(id);
  }
}
