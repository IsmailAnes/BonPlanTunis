/**
 * © 2022 The Project My GAT
 * Authors Reactit
 *
 */

import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import useStyles from './style';

export function Input(props) {
  const {
    source,
    style,
    register,
    size,
    edit,
    show,
    filter,
    rightIcon,
    styleRightIcon,
    inputStyle,
    activeOpacity,
    selectedRightIcon,
    editable = true,
    ...rest
  } = props;
  const [showPassword, setshowPassword] = useState(true);
  const {colors} = useTheme();
  const styles = useStyles(colors, register, size, editable);
  return (
    <View style={[styles.container, style]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {source && (
          <Image source={source} style={styles.logo} resizeMode={'contain'} />
        )}
        <TextInput
          editable={editable}
          {...rest}
          style={[styles.input, inputStyle]}
          placeholderTextColor={colors.text}
          secureTextEntry={show ? showPassword : false}
        />
      </View>
      {show && (
        <TouchableOpacity
          onPress={() => setshowPassword(!showPassword)}
          style={styles.rightIconContainer}>
          <Image
            source={
              showPassword
                ? require('../../assets/logo/eye.png')
                : require('../../assets/logo/eye_off.png')
            }
            style={styles.edit}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
      {rightIcon && (
        <TouchableOpacity
          activeOpacity={activeOpacity ? activeOpacity : 1}
          onPress={() => props.onPress && props.onPress()}
          style={styles.rightIconContainer}>
          <View
            style={{
              padding: 5,
              borderWidth: selectedRightIcon ? 0.4 : 0,
              borderRadius: 100,
              borderColor: colors.primary,
            }}>
            {selectedRightIcon && (
              <View
                style={{
                  height: 5,
                  width: 5,
                  borderRadius: 5,
                  backgroundColor: colors.primary,
                  position: 'absolute',
                  right: 5,
                }}
              />
            )}
            <Image
              source={rightIcon}
              style={[styles.edit, styleRightIcon]}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
