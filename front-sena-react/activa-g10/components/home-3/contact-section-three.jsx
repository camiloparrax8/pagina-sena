import React from 'react';
import { getLanguage, getTranslation } from '../../utils/i18n';

const ContactSectionThree = () => {

    const language = getLanguage();

    return (
        <section className="contact-info-area style-2">
            <div className="contact-info-shape style-2">
                <img className="contact-img-1" src="/assets/img/Tierraltaimagen_ce.jpg" alt="" />
                <img className="contact-img-2" src="/assets/img/tierralta-jrn1883.jpg" alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <span className="section-subtitle">{getTranslation(language, 'about.location.title')}</span>
                            <h2 className="section-main-title mb-45">{getTranslation(language, 'about.location.city')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-4">
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3427091862054!2d-76.07068642009278!3d8.168185880909885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5af4bc2e562ce9%3A0x836f9398814a18a5!2sCra.%2029A%2C%20Tierralta%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sco!4v1720297034454!5m2!1sen!2sco"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="info-item-wrapper info-wrapper-media">
                            <div className="info-contact">
                                <ul>
                                    <li>
                                        <div className="single-contact">
                                            <div className="contact-icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <p><a href="tel:1-800-700-600">1-800-700-600</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact">
                                            <div className="contact-icon">
                                                <i className="fas fa-envelope-open"></i>
                                            </div>
                                            <p><a href="mailto:info@bdevs-email.com">info@bdevs-email.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact">
                                            <div className="contact-icon">
                                                <i className="fas fa-map-marked-alt"></i>
                                            </div>
                                            <p><a href="#">{getTranslation(language, 'about.location.address')}</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="info-item-wrapper info-wrapper-time">
                            <h4 className="contact-info-title">{getTranslation(language, 'about.location.features-title')}</h4>
                            <div className="info-contact-time">
                                <ul>
                                    <li>
                                        <div className="info-date">
                                            <span>{getTranslation(language, 'about.location.feature-one')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info-date">
                                            <span>{getTranslation(language, 'about.location.feature-two')}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info-date">
                                            <span>{getTranslation(language, 'about.location.feature-three')}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSectionThree;