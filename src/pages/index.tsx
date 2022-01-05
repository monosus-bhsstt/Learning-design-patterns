import {BlueButton,SimpleBlueButton} from '@/components/singleton/blueButton';
import {RedButton,SimpleRedButton} from '@/components/singleton/redButton';
const Home = (): JSX.Element => {
  return <div>Hello Next.js!

    <BlueButton />
    <RedButton />
    <SimpleBlueButton />
    <SimpleRedButton />
  </div>;
};

export default Home;
