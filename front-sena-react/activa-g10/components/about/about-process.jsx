import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BrandSliderTwo from '../elements/brand/brand-slider-two';
import AboutFeatureSection from './about-feature-section';
import AboutTimeline from './about-timeline';
import AboutVideoSection from './about-video-section';
import AboutUsSection from './aboutus-section';
import ProcessTimeline from './process-timeline';


const AboutProcess = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb breadTitle={'about us'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'about us'} />
                <AboutUsSection />
                <AboutFeatureSection />
                <AboutVideoSection />
                <BrandSliderTwo />
                <ProcessTimeline/>
            </main>
            <FooterOne />
        </>
    );
};

export default AboutProcess;