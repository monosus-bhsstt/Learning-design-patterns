import singletonCounter from '@/components/singleton/counter';
import {counter} from '@/components/singleton/simpleCounter';

export const BlueButton = () => {
  return (<button id="blue" onClick={()=>console.log('Counter total: ', singletonCounter.increment())}>blueButton</button>);
};

export const SimpleBlueButton = () => {
  return (<button id="blue" onClick={()=>console.log('Counter total: ', counter.increment())}>simple blueButton</button>);
};


