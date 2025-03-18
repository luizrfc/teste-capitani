import {Button, Icon, Input, Modal, Text} from '@src/components';
import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import useToDoHook from './useTodo';
import {colors} from '@src/styles/theme';
import {useConfig} from '@src/context/config.context';
import {useTranslation} from 'react-i18next';
import {SubTaskDTO, TodoDTO} from '@src/shared/interfaces/todo.dto';

interface NewToDoProps {
  onPress?: (data: TodoDTO | SubTaskDTO) => Promise<void>;
  subtask?: boolean;
}

function NewToDo({onPress, subtask}: NewToDoProps) {
  const {control, isValid, handleSubmit, onSubmit, resetFields, data} =
    useToDoHook();
  const {handleModal, modal} = useConfig();
  const {t} = useTranslation();

  useEffect(() => {
    if (modal) {
      resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  return (
    <Modal position="bottom" style={{width: '100%', paddingBottom: 36}}>
      <View style={{gap: 32}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text fontSize={24} fontWeight="bold">
            {subtask ? t('todo.subtask.title') : t('todo.title')}
          </Text>
          <TouchableOpacity onPress={() => handleModal(false)}>
            <Icon name="clear" size={24} color={colors.greyDark} />
          </TouchableOpacity>
        </View>
        <View style={{gap: 16}}>
          <Input
            control={control}
            name="title"
            placeholder={t('todo.form.title-placeholder')}
            label={t('todo.form.title')}
          />
          <Input
            control={control}
            name="description"
            placeholder={t('todo.form.description-placeholder')}
            label={t('todo.form.description')}
            multiline
            numberOfLines={4}
          />
        </View>
        <View
          style={{
            gap: 8,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          {subtask ? (
            <Button
              title={t('todo.form.btn-subtask')}
              onPress={() => onPress?.(data)}
              disabled={!isValid}
            />
          ) : (
            <Button
              title={t('todo.form.btn-add')}
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid}
            />
          )}
          <Button
            variant="transparent"
            title={t('todo.form.btn-cancel')}
            onPress={() => handleModal(false)}
          />
        </View>
      </View>
    </Modal>
  );
}

export default NewToDo;
