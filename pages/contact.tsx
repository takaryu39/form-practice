import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, Schema } from '@/validations/scheme';
import useMailSend from '@/lib/useMailSend';
const Contact: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { sendMail } = useMailSend();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    //バリデーションルールを定義
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<Schema> = async (data) => {
    setIsSubmitting(true);
    await sendMail(data);
    // console.log(data);
  };
  console.log(isSubmitting);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex items-center space-x-2">
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <input id="name" {...register('name')} className="border p-2" />
      </div>
      {errors.name?.message && (
        <p className="text-red-500">{errors.name?.message}</p>
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
        <label htmlFor="message" className="font-bold">
          message
        </label>
        <input
          id="message"
          type="text"
          {...register('message')}
          className="border p-2"
        />
      </div>
      {errors.message?.message && (
        <p className="text-red-500">{errors.message?.message}</p>
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
