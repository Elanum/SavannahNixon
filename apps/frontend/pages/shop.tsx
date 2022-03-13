import { NextPage } from 'next';
import BaseTemplate from '../templates/BaseTemplate';

const ShopPage: NextPage = () => {
  return <BaseTemplate seo={{ title: 'Shop' }}>Shop</BaseTemplate>;
};

export default ShopPage;
