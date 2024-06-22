import { Fragment } from 'react';
import Header from '../components/Layout/Header';
import HomepageImage from '../components/Layout/HomepageImage';

const HeaderPage = () => {
  return(
    <Fragment>
      <Header/>
      <HomepageImage/>
    </Fragment>
  )
}

export default HeaderPage;