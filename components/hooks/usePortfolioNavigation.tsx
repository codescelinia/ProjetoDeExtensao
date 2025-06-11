import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Index: { id?: string | number };
  PortfolioInicial: { id?: string | number };
  Tatuagens: { id?: string | number };
  Piercings: { id?: string | number };
};

type PortfolioNavigationProps = StackNavigationProp<RootStackParamList, 'PortfolioInicial'>;

export const usePortfolioNavigation = () => {
  const navigation = useNavigation<PortfolioNavigationProps>();

  const navigateToPortfolio = (id: string) => {
    navigation.navigate('PortfolioInicial', { id });
  };

  return navigateToPortfolio;
};