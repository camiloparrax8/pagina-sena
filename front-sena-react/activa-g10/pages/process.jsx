import AboutProcess from '../components/about/about-process';
import AboutMain from '../components/about/aboutmain';
import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutProcess/>
    </Wrapper>
  );
};

export default index;