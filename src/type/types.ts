export interface Window {
  onSpotifyIframeApiReady: (API: SpotifyIFrameAPI) => void;
}

export interface SpotifyIFrameAPI {
  createController: (
    element: HTMLElement,
    options: {
      uri: string;
      width: string;
      heigth: string;
    },
    callback: (controller: any) => void,
  ) => void;
}

export type HostType = {
  name: string;
  imgeURl?: string;
  jobtitle: string;
  linkedInLink: string;
};

export type buttonType = {
  otherStyle?: string;
  title: string;
  secondary?: boolean;
  route?: string;
  icon?: boolean;
  iconType?: string;
  onClick?: (e:MouseEvent) => void;
};
