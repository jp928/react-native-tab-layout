import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-tab-layout' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type TabLayoutProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'TabLayoutView';

export const TabLayoutView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<TabLayoutProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
