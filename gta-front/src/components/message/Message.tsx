import styles from './Message.module.scss';
import classNames from 'classnames';

type propsType = {
   message: string
   setIsSuccessFalse: () => void
}

function Message (props:propsType) {
   const {
      message,
      setIsSuccessFalse
   } = props;

   return <div className={classNames( styles.message, styles.success )}>
      {message}
      <button className='btn' onClick={setIsSuccessFalse}>Submit form again</button>
   </div>;
}

export default Message;