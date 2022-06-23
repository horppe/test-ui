/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { ExpandingDot } from 'react-native-animated-pagination-dots';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import AppText from '../../components/AppText';
import ArrowDownIcon from '../../components/icons/ArrowDownIcon';
import TextContainer from '../../components/TextContainer';
import Images from '../../shared/Images';
import Colors from '../../shared/Theme/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { RFPercentage } from 'react-native-responsive-fontsize';
import EllipseIcon from '../../components/icons/EllipseIcon';
import CalenderIcon from '../../components/icons/CalenderIcon';
import DatePickerModal from '../../components/DatePickerModal';
import SelectModal from '../../components/SelectModal';
import ButtonOne from '../../components/ButtonOne';
import SimpleToast from 'react-native-simple-toast';
import CommunityIcon from '../../components/icons/CommunityIcon';
import HospitalIcon from '../../components/icons/HospitalIcon';
import PharmacyIcon from '../../components/icons/PharmacyIcon';


const SLIDER_DATA = [
  {
    key: '1',
  },
  {
    key: '2',
  },
  {
    key: '3',
  },
];

const SPECIALITIES = [
  {
    name: 'Surgeon',
    value: 'Surgeon',
  },
  {
    name: 'Dentist',
    value: 'Dentist',
  }

];

const CATEGORIES = [
  {
    name: "Talk to a Doctor",
    icon: <CommunityIcon />
  },
  {
    name: "Hospital",
    icon: <HospitalIcon />
  },
  {
    name: "Pharmacy",
    icon: <PharmacyIcon />
  },
];

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.Primary : Colors.White,
  };

  const scrollX = React.useRef(new Animated.Value(0)).current;
  let swiperRef: Swiper | any = React.useRef();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSpecialityPicker, setShowSpecialityPicker] = useState(false);
  const [specialty, setSpecialty] = useState('')
  const [date, setDate] = useState<Date>(new Date());
  const [step, setStep] = useState(0);

  const validate: () => string | null = () => {
    if (!specialty) {
      return 'Please select speciality';
    }

    if (!date) {
      return 'Please select date';
    }
    return null;
  };

  const submit = () => {
    const result = validate();
    if (result) showToast(result);
    else {

    }
  };

  const showToast = (msg: string) => {
    SimpleToast.show(msg, SimpleToast.LONG);
  };


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        // contentInsetAdjustmentBehavior="automatic"
        
        >
        <View
          style={{
            height: heightPercentageToDP(30),
            width: '100%',
            // backgroundColor: 'green'
          }}>
          <Swiper
            ref={ref => swiperRef = ref}
            showsPagination={false}
            autoplay={true}
            autoplayDirection={true}
            autoplayTimeout={10}
            loop={false}
            onIndexChanged={index => {
              setStep(index);
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            containerStyle={{
              height: heightPercentageToDP(30)
            }}
          >

            <Image
              style={styles.swiperImage}
              source={Images.Lady}
              resizeMode="cover"
            />
            <Image
              style={styles.swiperImage}
              source={Images.Lady}
              resizeMode="cover"
            />
            <Image
              style={styles.swiperImage}
              source={Images.Lady}
              resizeMode="cover"
            />
          </Swiper>

        </View>
        <View style={{
          bottom: -heightPercentageToDP(4),
          alignSelf: 'center',
        }}>
          <ExpandingDot
            data={SLIDER_DATA}
            expandingDotWidth={30}
            scrollX={scrollX}
            inActiveDotOpacity={0.3}
            activeDotColor={Colors.Primary}
            dotStyle={{
              width: 7,
              height: 7,
              backgroundColor: Colors.MyGrey,
              borderRadius: 5,
              marginHorizontal: 5
            }}

            containerStyle={{
            }}
          />
        </View>
        <View
          style={{
            height: 25
          }} />
        <View
          style={{
            flexDirection: "row",
            alignItems: 'center',
            marginLeft: "5%",
            // marginTop: "-20%",
            // backgroundColor: 'red'
          }}>
          <AppText style={{
          }}>Video/Audio Consultation</AppText>
          <ArrowDownIcon style={{
            marginLeft: "1%"
          }} />
        </View>

        <TextContainer
          leftIcon={<EllipseIcon circleProps={{
            scale: "1.2"
          }} />}
          containerStyle={{
            width: '90%',
            height: heightPercentageToDP(6),
            alignSelf: 'center',
            alignItems: 'flex-start',
            paddingLeft: "9%",
            marginBottom: '1%',
            marginTop: 15
          }}

          child={<AppText
            props={{ numberOfLines: 1 }}

            style={{
              fontSize: RFPercentage(2),
              color: Colors.PlaceHolder,
              overflow: 'hidden',

            }}>Select Specialty</AppText>}
          onPress={() => {
            setShowSpecialityPicker(true);
          }}
        />

        <TextContainer
          leftIcon={<CalenderIcon
            pathProps={{
              // scale: "1.2"
            }} />}
          containerStyle={{
            width: '90%',
            height: heightPercentageToDP(6),
            alignSelf: 'center',
            alignItems: 'flex-start',
            paddingLeft: "9%",
            marginVertical: '2%'
          }}

          child={<AppText
            props={{ numberOfLines: 1 }}

            style={{
              fontSize: RFPercentage(2),
              color: Colors.PlaceHolder,
              overflow: 'hidden',

            }}>Select Date</AppText>}
          onPress={() => {
            setShowDatePicker(true);
          }}
        />

        <ButtonOne
          text="Search"
          onPress={() => {
            submit();
          }}
          textStyle={{
            fontSize: RFPercentage(1.8)
          }}
          outerStyle={{
            marginTop: 'auto',
            width: '90%',
            alignSelf: 'center',
            paddingTop: 10,
            marginBottom: 20,
          }}
          containerStyle={{
            backgroundColor: Colors.Primary
          }}
        />

        <AppText style={{
          marginLeft: "5%",
        }}>Categories</AppText>
        <FlatList
          horizontal={true}
          keyboardShouldPersistTaps="handled"
          data={CATEGORIES}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: '3%',
            paddingRight: '5%',
            paddingBottom: '10%',
            marginTop: '4%',
          }}
          
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {

                }}
                style={{
                  paddingVertical: '10%',
                  paddingHorizontal: '5%',
                  width: widthPercentageToDP(28),
                  aspectRatio: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors.White,
                  borderRadius: 5,
                  elevation: 20,
                  shadowColor: 'grey',
                  shadowOpacity: 0.7,
                  shadowRadius: 15,
                  shadowOffset: {
                    height:100,
                    width: 0,
                  },
                  marginLeft: widthPercentageToDP(2),
                }}>
                {item.icon}
                <AppText style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: RFPercentage(1.5),
                  marginTop: '10%',
                }}>{item.name}</AppText>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />

        <View style={{
          height: heightPercentageToDP(10)
        }} />

      </ScrollView>
      <DatePickerModal
        value={date}
        isVisible={showDatePicker}
        onDateChange={(date: Date) => {
          setDate(date);
        }}
        onClose={() => {
          setShowDatePicker(false);
        }}
        // @ts-ignore onDateChange is already implemented
        pickerProps={{
          mode: 'date',
        }}
      />
      <SelectModal
        isVisible={showSpecialityPicker}
        items={SPECIALITIES}
        onClose={() => setShowSpecialityPicker(false)}
        onSelect={(value) => {
          setSpecialty(value);
        }}
        value={specialty}
      />


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  swiperImage: {
    width: '90%',
    height: heightPercentageToDP(27),
    alignSelf: 'center',
    borderRadius: 5,
  }
});

export default HomeScreen;
