import styles from './Home.module.scss';
import { useState } from 'react';
import FormSubscribe from '../forms/FormSubscribe';
import Message from '../message/Message';

function App() {
   const [isSuccess, setIsSuccess] = useState(false);

   const setIsSuccessTrue = () => setIsSuccess(true);
   const setIsSuccessFalse = () => setIsSuccess(false);
   const messageSuccessfully = 'Application sent successfully!';

   return (
      <div className={styles.homeWrapper}>
         {
            isSuccess
               ? <Message message={messageSuccessfully} setIsSuccessFalse={setIsSuccessFalse} />
               : <FormSubscribe setIsSuccessTrue={setIsSuccessTrue} />
         }
      </div>
   )
}

export default App;
