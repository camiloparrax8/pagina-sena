import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import useGlobalContext from '../../hooks/use-context';
import { getLanguage, getTranslation } from '../../utils/i18n';

const Sidebar = () => {
    const { showSidebar, setShowSidebar } = useGlobalContext();
    const [home, setHome] = useState(false);
    const [shop, setShop] = useState(false);
    const [productPages, setProductPages] = useState(false);
    const [otherPages, setOtherPages] = useState(false);
    const [blog, setBlog] = useState(false);

    const language = getLanguage();

    return (
        <>
            <div className="fix">
                <div className={`side-info ${showSidebar ? 'info-open' : ''}`}>
                    <div className="side-info-content">
                        <div className="offset-widget offset-logo mb-40">
                            <div className="row align-items-center">
                                <div className="col-9">
                                    <Link href="/"><a><img src="/assets/img/logo/logo-bl.png" alt="Logo" /></a></Link>
                                </div>
                                <div className="col-3 text-end"><button className="side-info-close" onClick={() => setShowSidebar(false)}><i className="fal fa-times"></i></button></div>
                            </div>
                        </div>
                        {/* <!-- side-mobile-menu start --> */}
                        <nav className="side-mobile-menu d-block d-xl-none mm-menu">
                            <ul>
                                <li> <Link href="/">{getTranslation(language, 'header.menu.home')}</Link> </li>
                                <li> <Link href="/about">{getTranslation(language, 'header.menu.about')}</Link> </li>
                                <li> <Link href="/process">{getTranslation(language, 'header.menu.process')}</Link> </li>
                                <li> <Link href="/blog">{getTranslation(language, 'header.menu.blog')}</Link> </li>
                                <li> <Link href="/contact">{getTranslation(language, 'header.menu.contact')}</Link> </li>
                            </ul>
                        </nav>
                        <div className="offset-widget offset-social mb-30">
                            <div className="footer-social">
                                <span>{getTranslation(language, 'header.menu.connect')}</span>
                                <div className="social-links">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setShowSidebar(false)} className={`offcanvas-overlay ${showSidebar ? 'overlay-open' : ''}`}></div>
        </>
    );
};

export default Sidebar;