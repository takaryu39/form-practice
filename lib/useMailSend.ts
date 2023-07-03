import { Schema } from '@/validations/scheme';

const useMailSend = () => {
  const sendMail = async (data: Schema) => {
    // console.log(nameRef.current.value)

    await fetch('/api/nodemailerApi', {
      method: 'POST',
      headers: {
        Accept: 'application/json,text/plain',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == 200) {
        console.log('メール送信成功');
      }
    });
  };
  return { sendMail };
};

export default useMailSend;
