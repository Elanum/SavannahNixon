import { NextPage } from 'next';
import BaseTemplate from '../templates/BaseTemplate';

const PortfolioPage: NextPage = () => {
  return <BaseTemplate seo={{ title: 'Portfolio' }}>Portfolio</BaseTemplate>;
};

export default PortfolioPage;
