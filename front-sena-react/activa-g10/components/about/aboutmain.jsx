import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BrandSliderTwo from '../elements/brand/brand-slider-two';
import AboutFeatureSection from './about-feature-section';
import AboutTimeline from './about-timeline';
import AboutVideoSection from './about-video-section';
import AboutUsSection from './aboutus-section';
import { getLanguage, getTranslation } from '../../utils/i18n';
import ContactSectionThree from '../home-3/contact-section-three';


const AboutMain = () => {

    const language = getLanguage();

    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb breadTitle={getTranslation(language, 'about.title')} breadSubtitle={getTranslation(language, 'about.subtitle')} breadHome={'Home'} breadMenu={'about us'} />
                <AboutUsSection />
                <AboutFeatureSection />
                {/* <AboutVideoSection /> */}
                {/* <BrandSliderTwo /> */}
                <AboutTimeline />
                <ContactSectionThree />
            </main>
            <FooterOne />
        </>
    );
};

export default AboutMain;