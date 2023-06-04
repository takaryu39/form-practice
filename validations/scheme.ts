import { z } from 'zod';

export const schema = z.object({
  firstName: z.string().nonempty({ message: '必須項目です' }).max(50),
  lastName: z.string().nonempty({ message: '必須項目です' }).max(50),
  email: z
    .string()
    .email({ message: '正しい形式でメールアドレスを入力してください' })
    .min(1, { message: '必須項目です' }),
  age: z.string(),
});

//上記のスキーマをもとに型を定義
export type Schema = z.infer<typeof schema>;
