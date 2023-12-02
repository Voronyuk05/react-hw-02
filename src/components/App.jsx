import { Greeting } from './Greeting/Greeting.jsx';
import { Message } from './Message/Message.jsx';
import { Button } from './Button/Button.jsx';

export function App() {
  const handleButtonClick = () => {
    console.log('Кнопка була натиснута!');
  };

  
  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Ласкаво просимо!" />
      <Button onClick={handleButtonClick} />
    </div>
  )
}