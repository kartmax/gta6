import { string, object } from 'yup';
import { messageValidate } from './messagesValidate';


const reqEmail = new RegExp(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]{2,})/);
export const userSchema = object({
   name: string()
      .required(messageValidate.required)
      .min(3, 'Minimum 3 symbols'),
   email: string()
      .required(messageValidate.required)
      .matches(reqEmail, messageValidate.email)
 });