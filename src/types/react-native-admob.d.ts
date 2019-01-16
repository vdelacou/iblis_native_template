/* tslint:disable */
declare module "react-native-admob" {
  export class AdMobInterstitial {
    static requestAd: () => Promise<void>;
    static showAd: () => void;
    static setTestDevices: (testDevices?: string[]) => void;
    static setAdUnitID: (unitId: string) => void;
    static simulatorId: string;
  }
}
