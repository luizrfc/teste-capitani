import React, {useEffect, useState} from 'react';
import {type Control, Controller} from 'react-hook-form';
import {TextInput, View} from 'react-native';
import {Text} from '@src/components';
import Icon from './Icons';
import {colors} from '@src/styles/theme';
import {CheckBox as CheckBoxRN} from '@rneui/themed';

interface IInputController extends React.ComponentProps<typeof TextInput> {
  control: Control<any>;
  name: string;
  password?: boolean;
  placeholder?: string;
  label?: string;
  defaultChecked?: boolean;
  changeChecked?: (value: boolean) => void;
}

function CheckBox({
  control,
  name,
  label,
  defaultChecked = false,
  changeChecked,
}: IInputController) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (onChange: (value: boolean) => void) => {
    setChecked(!checked);
    onChange(!checked);
    changeChecked?.(!checked);
  };

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange}}) => {
          return (
            <CheckBoxRN
              checked={checked}
              onPress={() => handleChange(onChange)}
              iconType="material-community"
              checkedIcon={<Icon name="check_box" color={colors.secondary} />}
              uncheckedIcon={
                <Icon name="check_box_outline_blank" color={colors.greyLight} />
              }
            />
          );
        }}
      />
      <Text>{label}</Text>
    </View>
  );
}

export default CheckBox;
