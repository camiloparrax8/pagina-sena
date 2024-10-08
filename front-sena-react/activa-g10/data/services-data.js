import { getLanguage, getTranslation } from "../utils/i18n";

const language = getLanguage();


const ServicesList = [
    // {
    //     id:1,
    //     serviceImg:'/assets/img/service/service-img-st2-1.jpg',
    //     serviceIcon:'flaticon-gardening-1',
    //     serviceTitle:'landscaping',
    //     serviceBadge:'',
    //     serviceDesc:'Get expert advice on how to design a garden.',

    // },
    // {
    //     id:2,
    //     serviceImg:'/assets/img/service/service-img-st2-2.jpg',
    //     serviceIcon:'flaticon-house',
    //     serviceTitle:'Urban',
    //     serviceBadge:'',
    //     serviceDesc:'Plants are expensive and need to be looked after.',

    // },
    // {
    //     id:3,
    //     serviceImg:'/assets/img/service/service-img-st2-3.jpg',
    //     serviceIcon:'flaticon-farming-and-gardening',
    //     serviceTitle:'Maintenance',
    //     serviceBadge:'',
    //     serviceDesc:'Keep your green garden low maintenance.',

    // },
    // {
    //     id:4,
    //     serviceImg:'/assets/img/service/service-img-st2-4.jpg',
    //     serviceIcon:'flaticon-flower-with-rounded-petals',
    //     serviceTitle:'Events',
    //     serviceBadge:'',
    //     serviceDesc:'We at The Gardeny are proud to offer',
    // },
    // //home one service end
    // {
    //     id:5,
    //     serviceImg:'/assets/img/service/service-img-st2-1.jpg',
    //     serviceIcon:'/assets/img/icon/s-icon1.png',
    //     serviceTitle:'Garden landscaping',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    // {
    //     id:6,
    //     serviceImg:'/assets/img/service/service-img-st2-2.jpg',
    //     serviceIcon:'/assets/img/icon/s-icon2.png',
    //     serviceTitle:'soil making & carbo',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    // {
    //     id:7,
    //     serviceImg:'/assets/img/service/service-img-st2-3.jpg',
    //     serviceIcon:'/assets/img/icon/s-icon3.png',
    //     serviceTitle:'planting plants',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    // //home two service end
    // {
    //     id:8,
    //     serviceImg:'/assets/img/service/service-3-img1.jpg',
    //     serviceIcon:'flaticon-farmer',
    //     serviceTitle:'Garden landscaping',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    // {
    //     id:9,
    //     serviceImg:'/assets/img/service/service-3-img2.jpg',
    //     serviceIcon:'flaticon-gardening',
    //     serviceTitle:'commercial planting',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    // {
    //     id:10,
    //     serviceImg:'/assets/img/service/service-3-img3.jpg',
    //     serviceIcon:'flaticon-farming-and-gardening',
    //     serviceTitle:'soil making & solutions',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    //home three service end
    {
        id:11,
        serviceImg:'',
        serviceIcon:'/assets/img/icon/s-icon1.png',
        serviceTitle: getTranslation(language, 'home.service-section.item-1.title'),
        serviceBadge: getTranslation(language, 'home.service-section.item-1.badge'),
        serviceDesc:getTranslation(language, 'home.service-section.item-1.description'),
        serviceBtn:getTranslation(language, 'home.service-section.item-1.button'),
        
    },
    {
        id:12,
        serviceImg:'',
        serviceIcon:'/assets/img/icon/s-icon2.png',
        serviceTitle:getTranslation(language, 'home.service-section.item-2.title'),
        serviceBadge:getTranslation(language, 'home.service-section.item-2.badge'),
        serviceDesc:getTranslation(language, 'home.service-section.item-2.description'),
        serviceBtn:getTranslation(language, 'home.service-section.item-2.button'),
       
    },
    {
        id:13,
        serviceImg:'',
        serviceIcon:'/assets/img/icon/s-icon7.png',
        serviceTitle:getTranslation(language, 'home.service-section.item-3.title'),
        serviceBadge:getTranslation(language, 'home.service-section.item-3.badge'),
        serviceDesc:getTranslation(language, 'home.service-section.item-3.description'),
        serviceBtn:getTranslation(language, 'home.service-section.item-3.button'),
        
    },
    //home four service end
    // {
    //     id:14,
    //     serviceImg:'',
    //     serviceIcon:'/assets/img/icon/feature-product-icon-1.png',
    //     serviceTitle:'ORDER ONLINE',
    //     serviceBadge:'',
    //     serviceDesc:'Content is information produce directed at an end-user',
    //     serviceBtn:'',
    // },
    // {
    //     id:15,
    //     serviceImg:'',
    //     serviceIcon:'/assets/img/icon/feature-product-icon-2.png',
    //     serviceTitle:'FAST PAYMENT',
    //     serviceBadge:'',
    //     serviceDesc:'Content is information produce directed at an end-user',
    //     serviceBtn:'',
    // },
    // {
    //     id:16,
    //     serviceImg:'',
    //     serviceIcon:'/assets/img/icon/feature-product-icon-3.png',
    //     serviceTitle:'quick DELIVERY',
    //     serviceBadge:'',
    //     serviceDesc:'Content is information produce directed at an end-user',
    //     serviceBtn:'',
    // },
    // {
    //     id:17,
    //     serviceImg:'',
    //     serviceIcon:'/assets/img/icon/feature-product-icon-4.png',
    //     serviceTitle:'global SHIPPINg',
    //     serviceBadge:'',
    //     serviceDesc:'Content is information produce directed at an end-user',
    //     serviceBtn:'',
    // },
    // //home five service end
    // {
    //     id:18,
    //     serviceImg:'',
    //     serviceIcon:'/assets/img/icon/s-icon1.png',
    //     serviceTitle:'Garden landscaping',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    // {
    //     id:19,
    //     serviceImg:'',
    //     serviceIcon:'/assets/img/icon/s-icon2.png',
    //     serviceTitle:'soil making & carbo',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    // {
    //     id:20,
    //     serviceImg:'',
    //     serviceIcon:'/assets/img/icon/s-icon3.png',
    //     serviceTitle:'planting plants',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    // {
    //     id:21,
    //     serviceImg:'',
    //     serviceIcon:'/assets/img/icon/s-icon4.png',
    //     serviceTitle:'new plant seeds',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    // {
    //     id:22,
    //     serviceImg:'',
    //     serviceIcon:'/assets/img/icon/s-icon5.png',
    //     serviceTitle:'butterfly solution',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // },
    // {
    //     id:23,
    //     serviceImg:'',
    //     serviceIcon:'/assets/img/icon/s-icon6.png',
    //     serviceTitle:'garden take care',
    //     serviceBadge:'',
    //     serviceDesc:'The laying out and care of a plot of ground devoted partially or wholly.',
    //     serviceBtn:'read more',
    // }
    //service page end
  ]
  
  export default ServicesList;