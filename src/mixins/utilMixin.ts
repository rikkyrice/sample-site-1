import { Component, Vue } from 'vue-property-decorator';
import { deviceType, DeviceType } from '@/models/types/deviceType';

@Component
export default class UtilMixin extends Vue {
  deepCopyUtil<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }
  scrollVisibilityUtil(element: HTMLElement | null) {
    const elementTop = element
      ? element.getBoundingClientRect().top
      : window.innerHeight;
    const elementHeight = element
      ? element.getBoundingClientRect().height
      : window.innerHeight;
    return elementTop + elementHeight * 0.2 < window.innerHeight;
  }
  visibilityUtil(isVisible: boolean) {
    return isVisible ? 'visibility: visible;' : 'visibility: hidden;';
  }
  MdSmXsUtil(md: number | string, sm: number | string, xs: number | string) {
    return deviceType === DeviceType.DESKTOP
      ? md
      : deviceType === DeviceType.TABLET
      ? sm
      : xs;
  }
  fontSizeUtil(mdFontSize: number, smFontSize: number, xsFontSize: number) {
    return `font-size: ${this.MdSmXsUtil(
      mdFontSize,
      smFontSize,
      xsFontSize
    )}px;`;
  }
  maxWidthUtil(mdMaxWidth: string, smMaxWidth: string, xsMaxWidth: string) {
    return `max-width: ${this.MdSmXsUtil(mdMaxWidth, smMaxWidth, xsMaxWidth)};`;
  }
  openBrowserTabUtil(url: string) {
    window.open(url);
  }
  linkUtil(label: string, href: string) {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }
  sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));
}
