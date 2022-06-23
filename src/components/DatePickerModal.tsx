import React from 'react';
import {
  View, TouchableHighlight, TouchableOpacity,
  Platform,
} from 'react-native';
import Modal from "react-native-modal";
import DatePicker, { DatePickerProps } from 'react-native-date-picker';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Colors from '../shared/Theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  onDateChange(date: Date): void,
  isVisible: boolean,
  onModalHide?: () => void,
  onClose: () => void,
  value: Date | undefined,
  pickerProps?: DatePickerProps,
}

const DatePickerModal = (props: Props) => {

  return (
    <Modal
      useNativeDriver={true}
      isVisible={props.isVisible}
      onModalHide={props.onModalHide}
      onBackdropPress={props.onClose}

    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            position: 'absolute',
            // top: hp(10),
            left: -wp(5),
            height: "100%",
            width: wp(100),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

          <View
            style={{
              height: "50%",
              width: '90%',
              borderRadius: 10,
              paddingVertical: 10,
              backgroundColor: 'white',
              // justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                // marginTop: 10,
              }}
            >
              <TouchableHighlight
                onPressOut={() => {
                  props.onClose()
                }}
                underlayColor="rgba(255,255,255, .5)"
                style={{
                  aspectRatio: 1,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}
                onPress={() => {

                }}>
                <Icon
                  name="md-close"
                  style={{
                    color: 'black',
                    marginBottom: Platform.OS === 'ios' ? -hp(1) : 0,
                    transform: [{ translateY: Platform.OS === 'ios' ? -hp(1) : 0 }]
                  }}
                />
              </TouchableHighlight>


            </View> */}
            <DatePicker
              date={props.value}
              onDateChange={props.onDateChange}
              {...props.pickerProps}
              style={{
                height: hp(20),
                marginTop: "10%",
              }}
            />

            <TouchableOpacity
              onPressOut={() => {
                props.onClose()
              }}
              style={{
                // padding: RFPercentage(5),
                aspectRatio: 1,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: "auto",
                marginBottom: 20,
              }}
              onPress={() => {

              }}>
              <AntDesign
                name="checkcircleo"
                style={{
                  color: Colors.Black,
                  fontSize: RFPercentage(7)
                }}
              />
            </TouchableOpacity>


          </View>

        </View>
      </View>

    </Modal>
  )
}


export default DatePickerModal;