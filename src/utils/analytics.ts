export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, data);
  }
};