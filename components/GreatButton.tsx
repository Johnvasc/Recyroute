import { StyleSheet } from 'react-native';

import {
  Button,
  ButtonText,
  ButtonIcon,
} from "@/components/ui/button";

type GreatButtonProps = {
    className: string;
    icon: React.ElementType;
    text: string;
};

export function GreatButton({ className, icon, text}: GreatButtonProps) {
  return (
    <Button className={className} // Aplica estilos com base na variante
      size="lg"
      variant="solid"
      action="primary"
      style={{
        backgroundColor: 'white',
        borderRadius: 0
      }}
    >
      <ButtonIcon className='text-sm text-gray-600' as={icon}/>
      <ButtonText style={{ color: '#525252', fontSize: 14, fontWeight: '300' }}>{text}</ButtonText>
    </Button>
  );
}

