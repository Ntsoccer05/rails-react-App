import { useState } from 'react';

const ContactForm = () => {
 const [isSubmitted, setIsSubmitted] = useState(false);
 const [lastName, setLastName] = useState('');
 const [firstName, setFirstName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
   setLastName(e.target.value);
 };

 const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
   setFirstName(e.target.value);
 };

 const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
   setEmail(e.target.value);
 };

 const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
   setMessage(e.target.value);
 };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   if (lastName !== '' &&
   firstName !== '' &&
   email !== '' &&
   message !== ''
   ) {
     // Send post request to backend
    //  API.post('/contact_form/handle_contact_form/', {
    //    'last_name': lastName,
    //    'first_name': firstName,
    //    email,
    //    message
    //  }).then(() => {
    //    setIsSubmitted(true);
    //    // reset forms
    //    setLastName(' ');
    //    setFirstName(' ');
    //    setEmail(' ');
    //    setMessage(' ');
    //  }).catch((error) => {
    //    console.log(error);
    //  })
   }
 };

 return (
   <>
     <div className="container mx-auto px-5 md:px-10 min-h-screen">
       <h1 className="mt-10 mb-2 ml-5 text-3xl font-bold text-center">
        お問合わせ
       </h1>
       <section className="mb-10">
         <div className="rounded-lg shadow-xl bg-white p-6">
             <form className="w-full" onSubmit={handleSubmit}>
               <div className="flex flex-wrap -mx-3 mb-6">
                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                     苗字
                   </label>
                   <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                     type="text"
                     placeholder="山田"
                     value={lastName}
                     onChange={onChangeLastName}
                   />
                   {lastName === '' && (
                     <p className="text-red-500 text-xs italic">
                       苗字を入力してください。
                     </p>
                   )}
                 </div>
                 <div className="w-full md:w-1/2 px-3">
                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                     名前
                   </label>
                   <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     type="text"
                     placeholder="太郎"
                     value={firstName}
                     onChange={onChangeFirstName}
                   />
                   {firstName === '' && (
                     <p className="text-red-500 text-xs italic">
                       名前を入力してください。
                     </p>
                   )}
                 </div>
               </div>
               <div className="flex flex-wrap -mx-3 mb-6">
                 <div className="w-full px-3">
                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                     メールアドレス
                   </label>
                   <input
                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     type="email"
                     placeholder="example@yahoo.co.jp"
                     value={email}
                     onChange={onChangeEmail}
                   />
                   {email === '' && (
                     <p className="text-red-500 text-xs italic">
                       メールアドレスを入力してください。
                     </p>
                   )}
                 </div>
               </div>
               <div className="flex flex-wrap -mx-3 mb-10">
                 <div className="w-full px-3">
                   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                     お問い合わせ内容
                   </label>
                   <textarea
                     value={message}
                     onChange={onChangeMessage}
                     className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-64 resize-none"
                   ></textarea>
                   {message === '' && (
                     <p className="text-red-500 text-xs italic">
                       お問合せ内容を入力してください。
                     </p>
                   )}
                 </div>
               </div>
               <div className="mb-5 text-center">
                  <button
                    className="shadow bg-yellow-500 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded"
                    type="submit"
                  >
                    送信
                  </button>
               </div>
                 {isSubmitted && (
                   <p className="text-green-400 text-lg text-bold">
                     ありがとうございます。お問合せ内容を受け付けました。
                   </p>
                 )}
             </form>
         </div>
       </section>
     </div>
   </>
 );
};

export default ContactForm;