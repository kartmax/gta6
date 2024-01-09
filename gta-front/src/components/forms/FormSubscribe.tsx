import styles from './FormSubscribe.module.scss'
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from './schemas';
import { UserAPI } from '../../../api/api';

export type InputsType = {
   name: string
   email: string
}

type propsType = {
   setIsSuccessTrue: () => void
}

function FormSubscribe(props:propsType) {
   const [isLoading, setIsLoading] = useState(false);

   const {register, handleSubmit, reset, formState: {errors}} = useForm<InputsType>({
      mode: "onChange",
      resolver: yupResolver(userSchema)
   });

   const onSubmit: SubmitHandler<InputsType> = data => {
      setIsLoading(true)
      UserAPI.createNewUser(data)
      .then(() => {
            setIsLoading(false);
            props.setIsSuccessTrue();
         })
         .catch (err => console.log(err));
      reset();
   };

   return (
      <form className={styles.homeForm} onSubmit={handleSubmit(onSubmit)}>
         <h1>GTA VI</h1>
         <h3>Leave a request</h3>

         <div className={styles.wrapInput}>
            <input
               {...register('name')}
               type="text"
               placeholder='Enter your name'
            />
            {<span className={styles.errorInput}>{errors.name?.message}</span>}
         </div>

         <div className={styles.wrapInput}>
            <input
               {...register('email')}
               type="email"
               placeholder='Enter your email'
            />
            {<span className={styles.errorInput}>{errors.email?.message}</span>}
         </div>

         <button className='btn' disabled={isLoading}>Send</button>
      </form>
   )
}

export default FormSubscribe;