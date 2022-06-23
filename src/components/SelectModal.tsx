import React, { useState } from 'react';
import { FlatList, Platform, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../shared/Theme/Colors';
import AppText, { defaultStyle } from './AppText';
import ButtonOne from './ButtonOne';
interface Props {
    isVisible: boolean,
    onClose(): void,
    onSelect(value: any): void,
    items: SelectModalItem[],
    value?: any,
    searchEnabled?: boolean,
}

export interface SelectModalItem {
    name: string,
    value: any,
}

const SelectModal = (props: Props) => {
    const {
        isVisible, onClose,
        items = [], value, onSelect, searchEnabled = true,
    } = props;

    const [searchValue, setSearchValue] = useState("");
    const [searchItems, setSearchItems] = useState<SelectModalItem[]>([]);
    const [isSearch, setIsSearch] = useState(false);
    const search = (str: string) => {
        const result = items.filter((el: SelectModalItem) => el.name.toLowerCase().includes(str.toLowerCase()));
        setSearchItems(result);
    }
    const onBeforeClose = () => {
        setSearchValue("");
        setSearchItems([]);
        setIsSearch(false);
        onClose();
    }
    return (
        <Modal
            isVisible={isVisible}
            backdropColor="rgba(0,0,0, .2)"
            animationIn="fadeInUp"
            animationOut="fadeOut"
            onBackdropPress={onBeforeClose}
        >

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <View
                    style={{
                        width: wp(80),
                        borderRadius: 10,
                        paddingVertical: 15,
                        backgroundColor: Colors.White,
                        alignItems: 'center'
                    }}>
                    {
                        searchEnabled && (
                            <View
                                style={{
                                    height: 40,
                                    width: '80%',

                                }}>
                                <TextInput
                                    onChange={(value) => {
                                        const val = value.nativeEvent.text;
                                        if (val) {
                                            setSearchValue(val);
                                            setIsSearch(true);
                                            search(val);
                                        } else {
                                            setSearchValue(val);
                                            setIsSearch(false);
                                        }
                                    }}
                                    value={searchValue}
                                    placeholder="🔎 Search"
                                    onSubmitEditing={() => {

                                    }}
                                    style={{
                                        ...defaultStyle.root,
                                        fontSize: 12,
                                        width: "100%",
                                        borderRadius: 20,
                                        color: Colors.Black,
                                        backgroundColor: Colors.MyGrey,
                                        paddingHorizontal: 15,
                                        paddingVertical: Platform.OS == 'ios' ? 10 : 0
                                        // textAlign: 'center'
                                    }}

                                    placeholderTextColor={Colors.Black}
                                />

                            </View>
                        )
                    }

                    <View style={{
                        marginTop: 10,
                        maxHeight: heightPercentageToDP(40),
                        width: '80%',
                    }}>

                        <FlatList
                        keyboardShouldPersistTaps="handled"
                            data={isSearch ? searchItems : items}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {

                                            onBeforeClose();
                                            onSelect(item.value);
                                        }}
                                        style={{
                                            paddingVertical: 5,
                                        }}>
                                        <AppText style={{
                                            textAlign: 'center',
                                            fontWeight: value == item.value ? 'bold' : '500',
                                        }}>{item.name}</AppText>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item) => item.value}
                        />

                    </View>


                    <View style={{
                        marginHorizontal: 20,
                        marginTop: 5,
                    }}>
                        <ButtonOne
                            text="Cancel"
                            onPress={() => {
                                onBeforeClose();
                            }}
                            containerStyle={{
                                backgroundColor: Colors.White,
                            }}
                            textStyle={{
                                color: Colors.Red,
                            }}
                        />
                    </View>

                </View>
            </View>

        </Modal>
    );
}

export default SelectModal;