import singletonCounter from '@/components/singleton/counter';
import {counter} from '@/components/singleton/simpleCounter';
export const RedButton = () => {
  return (
    <button id="blue" onClick={() => console.log('Counter total: ', singletonCounter.increment())}>
      RedButton
    </button>
  );
};

export const SimpleRedButton = () => {
  return (<button id="red" onClick={()=>console.log('Counter total: ', counter.increment())}>simple redButton</button>);
};