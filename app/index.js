import 'jquery';

import { getCarouselInfo, getSemiNavInfo, getSiteNavInfo, getUtilityNavInfo, getContentWrapperInfo } from './element-info';

$(function () {
  adjustPageSections();
  setStickyNav();
  window.addEventListener('resize', adjustPageSections);
  window.addEventListener('scroll', setStickyNav);
});

const setStickyNav = () => {
  const semiNavInfo = getSemiNavInfo();
  // const contentWrapper = document.querySelector('.js-contentWrapper');
  const contentWrapper = getContentWrapperInfo().elem;

  // Only invoke when semiNav is displayed:
  if (!!semiNavInfo.displayed && !!contentWrapper) {

    const utilityNavInfo = getUtilityNavInfo();
    const siteNavInfo = getSiteNavInfo();
    const carouselInfo = getCarouselInfo();
    const contentWrapperTop = contentWrapper.getBoundingClientRect().top;
    const topGap = utilityNavInfo.height + siteNavInfo.height;

    // check if the scolling reaches the triger 
    if (contentWrapperTop <= topGap) { 
      moveElemVertically(utilityNavInfo.elem, (-1) * utilityNavInfo.height, 0);
      moveElemVertically(semiNavInfo.elem, 0, 1);
      moveElemVertically(siteNavInfo.elem, (-3) * siteNavInfo.height, 0);
      moveElemVertically(carouselInfo.elem, (-3) * carouselInfo.height, 0);
    } 
    else {
      moveElemVertically(utilityNavInfo.elem, 0);
      moveElemVertically(semiNavInfo.elem, (-3) * semiNavInfo.height, 0);
      moveElemVertically(siteNavInfo.elem, 0);
      moveElemVertically(carouselInfo.elem, 0);
    }
  }
}

const moveElemVertically = (elem, pos, opacity = 1) => {
  if (!!elem) {
    elem.style.WebkitTransform = `translate3d(0, ${pos}px, 0)`;
    elem.style.msTransform = `translate3d(0, ${pos}px, 0`;
    elem.style.transform = `translate3d(0, ${pos}px, 0)`;
    elem.style.opacity = opacity;
  }
}

const adjustPageSections = () => {
  const utilityNavInfo = getUtilityNavInfo();
  const siteNavInfo = getSiteNavInfo();
  const carouselInfo = getCarouselInfo();

  setSiteNav(utilityNavInfo.height);
  setCarousel(utilityNavInfo, siteNavInfo, carouselInfo)
  setContentWrapper()
  // setContentWrapper(utilityNavInfo, siteNavInfo, carouselInfo)
}

const setContentWrapper = () => {
  const elem = getContentWrapperInfo.elem;
  if (!!elem) {

    const carouselInfo = getCarouselInfo();
    const utilityNavInfo = getUtilityNavInfo();
    const siteNavInfo = getSiteNavInfo();

    if (getCarouselInfo.positionFixed || !carouselInfo.displayed) {
      const targetMarginTop = utilityNavInfo.height + siteNavInfo.height + carouselInfo.height;
      elem.style.marginTop = `${targetMarginTop}px`;
    }
    else {
      elem.style.marginTop = `0`;
    }
  }
}

const setCarousel = (utilityNavInfo, siteNavInfo, carouselInfo) => {
  const elem = document.querySelector('.js-carousel');
  if (!!elem) {
    const heightOfElementsOnTop = utilityNavInfo.height + siteNavInfo.height;
    const heightZero = 0;

    if (carouselInfo.positionFixed) {
      elem.style.top = `${heightOfElementsOnTop}px`;
      elem.style.marginTop = `${heightZero}px`;
    }
    else {
      elem.style.top = `${heightZero}px`;
      elem.style.marginTop = `${heightOfElementsOnTop}px`;
    }
  }
}

const setSiteNav = (targetHeight) => {
  // const elem = document.querySelector('.js-sitenav');
  const elem = getSiteNavInfo().elem;
  if (!!elem) {
    elem.style.top = `${targetHeight}px`;
  }
}

