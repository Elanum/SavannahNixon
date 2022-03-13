import { NextPage } from 'next';
import BaseTemplate from '../templates/BaseTemplate';

const AboutMePage: NextPage = () => {
  return <BaseTemplate seo={{ title: 'AboutMe' }}>AboutMe</BaseTemplate>;
};

export default AboutMePage;
