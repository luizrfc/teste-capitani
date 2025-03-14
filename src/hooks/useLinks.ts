import {StackParamList} from '@src/shared/types/navigation';
import {createRef} from 'react';

const navigationRef = createRef();

function navigateTo(name: keyof StackParamList, params?: any) {
  // @ts-ignore
  navigationRef.current?.navigate(name, params);
}

export {navigateTo, navigationRef};
