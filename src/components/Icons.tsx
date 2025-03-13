import Icomoon from 'react-native-icomoon';
import type {IconMoonProps} from 'react-native-icomoon';
import json from '@src/assets/icons/selection.json';

type IconProps = Omit<IconMoonProps, 'iconSet'>;

export default function Icon({name, ...restProps}: IconProps) {
  // @ts-expect-error - TODO: dont have type for this iconSet
  return <Icomoon iconSet={json} name={name} {...restProps} />;
}
