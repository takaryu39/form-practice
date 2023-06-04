import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, Schema } from '@/validations/scheme';
const Contact: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    //バリデーションルールを定義
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<Schema> = (data) => {
    setIsSubmitting(true);
    console.log(data);
    // 送信処理（例えば、APIへのPOST）を書く
    // ...
    // setIsSubmitting(false);
  };
  console.log(isSubmitting);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex items-center space-x-2">
        <label htmlFor="firstName" className="font-bold">
          First Name
        </label>
        <input
          id="firstName"
          {...register('firstName')}
          className="border p-2"
        />
      </div>
      {errors.firstName?.message && (
        <p className="text-red-500">{errors.firstName?.message}</p>
      )}

      <div className="flex items-center space-x-2">
        <label htmlFor="lastName" className="font-bold">
          Last Name
        </label>
        <input id="lastName" {...register('lastName')} className="border p-2" />
      </div>
      {errors.lastName?.message && (
        <p className="text-red-500">{errors.lastName?.message}</p>
      )}

      <div className="flex items-center space-x-2">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input id="email" {...register('email')} className="border p-2" />
      </div>
      {errors.email?.message && (
        <p className="text-red-500">{errors.email?.message}</p>
      )}

      <div className="flex items-center space-x-2">
        <label htmlFor="age" className="font-bold">
          Age
        </label>
        <input
          id="age"
          type="number"
          {...register('age')}
          className="border p-2"
        />
      </div>
      {errors.age?.message && (
        <p className="text-red-500">{errors.age?.message}</p>
      )}
      <input
        type="submit"
        className={`${
          isSubmitting ? 'bg-gray-500' : 'bg-blue-500'
        } text-white p-2 rounded`}
        disabled={isSubmitting}
      />
    </form>
  );
};

export default Contact;
