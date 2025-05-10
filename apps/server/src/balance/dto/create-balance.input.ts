import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBalanceInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  amount: number;
}
