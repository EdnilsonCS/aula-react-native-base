import { colors } from '@styles/index';
import React, {
  forwardRef,
  useState,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { TextInputProps, TextInput, View } from 'react-native';
import { TextError, Container } from './styles';
import { Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  control: Control;
  errors: FieldErrors;
}

interface InputRef {
  focus(): void;
}
const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, control, errors, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));
  return (
    <View style={{ marginBottom: 10 }}>
      <Container isFocused={isFocused} isErrored={!!errors[name]}>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ onChange, onBlur, value }) => (
            <TextInput
              ref={inputElementRef}
              keyboardAppearance="dark"
              placeholderTextColor={colors.gray060}
              onFocus={handleInputFocus}
              onBlur={() => {
                onBlur();
                handleInputBlur();
              }}
              value={value}
              onChangeText={valueText => {
                setIsFilled(!!valueText);
                onChange(valueText);
              }}
              {...rest}
            />
          )}
        />
        <Icon
          name={icon}
          size={20}
          color={isFocused || isFilled ? colors.black : '#666360'}
        />
      </Container>
      {errors[name] && <TextError>{errors[name].message}</TextError>}
    </View>
  );
};

export default forwardRef(Input);
