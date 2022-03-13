import classNames from 'classnames';
import { NextPage } from 'next';
import BaseTemplate from '../templates/BaseTemplate';

const HomePage: NextPage = () => {
  return (
    <BaseTemplate>
      <div className={classNames('container')}>
        <h1>Home Page</h1>
      </div>
    </BaseTemplate>
  );
};

export default HomePage;
