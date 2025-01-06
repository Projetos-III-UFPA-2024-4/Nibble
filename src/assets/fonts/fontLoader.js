import { useFonts } from 'expo-font';

export const useFredokaFonts = () => {
  const [fontsLoaded] = useFonts({
    'Fredoka-Light': require('./Fredoka-Light.ttf'),
    'Fredoka-Regular': require('./Fredoka-Regular.ttf'),
    'Fredoka-Medium': require('./Fredoka-Medium.ttf'),
    'Fredoka-Semibold': require('./Fredoka-SemiBold.ttf'),
    'Fredoka-Bold': require('./Fredoka-Bold.ttf'),
  });

  return fontsLoaded;
};
