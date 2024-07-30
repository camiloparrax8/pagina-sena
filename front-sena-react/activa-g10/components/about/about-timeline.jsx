import React from 'react';
import timelineList from '../../data/timeline-data';
import { getLanguage, getTranslation } from '../../utils/i18n';

const AboutTimeline = () => {

   const language = getLanguage();

   return (
      <section className="history-area pt-120 pb-120 mt-80">
         <div className="container">
            <div className="history-chart wow fadeInUp" data-wow-delay=".3s">
               <div className=""></div>
               <div className="single-year-wrapper first-year" >
                  <div className="single-year">
                     <div className="history-year">{getTranslation(language, 'about.timeline.first.date')}</div>
                     <div className="history-thumb">
                        <img src={"/assets/img/view-woman-working-agricultural-sector-celebrate-labour-day-women.jpg"} alt="" />
                     </div>
                     <div className="history-content-wrapper">
                        <div className="history-content">
                           <h4 className="history-title">{getTranslation(language, 'about.timeline.first.title')}</h4>
                           <p>{getTranslation(language, 'about.timeline.first.description')}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="single-year-wrapper" >
                  <div className="single-year">
                     <div className="history-year">{getTranslation(language, 'about.timeline.second.date')}</div>
                     <div className="history-thumb">
                        <img src={"/assets/img/view-woman-working-agricultural-sector-celebrate-labour-day-women.jpg"} alt="" />
                     </div>
                     <div className="history-content-wrapper">
                        <div className="history-content">
                           <h4 className="history-title">{getTranslation(language, 'about.timeline.second.title')}</h4>
                           <p>{getTranslation(language, 'about.timeline.second.description')}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="single-year-wrapper" >
                  <div className="single-year">
                     <div className="history-year">{getTranslation(language, 'about.timeline.third.date')}</div>
                     <div className="history-thumb">
                        <img src={"/assets/img/view-woman-working-agricultural-sector-celebrate-labour-day-women.jpg"} alt="" />
                     </div>
                     <div className="history-content-wrapper">
                        <div className="history-content">
                           <h4 className="history-title">{getTranslation(language, 'about.timeline.third.title')}</h4>
                           <p>{getTranslation(language, 'about.timeline.third.description')}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutTimeline;