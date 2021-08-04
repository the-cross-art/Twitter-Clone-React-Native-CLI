import React from 'react';
import {View, Text, Switch, Image, TouchableOpacity} from 'react-native';
import Container from '../common/container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
// import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import colors from '../../assets/themes/colors';
// import ImagePicker from '../common/ImagePicker';

const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  setForm,
  onSubmit,
  toggleValueChange,
  form,
  sheetRef,
  openSheet,
  localFile,
  onFileSelected,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          width={150}
          height={150}
          source={{uri: localFile?.path || localFile || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        {/* <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose image</Text>
        </TouchableOpacity> */}
        <Input
          onChangeText={value => {
            onChangeText({name: 'tweet_name', value: value});
          }}
          label="Tweet Heading"
          value={form.tweet_name || ''}
          placeholder="Enter Tweet Heading"
          error={error?.tweet_name?.[0]}
        />
        <Input
          error={error?.tweet?.[0]}
          onChangeText={value => {
            onChangeText({name: 'tweet', value: value});
          }}
          value={form.tweet || ''}
          label="Enter tweet"
          placeholder="Enter tweet"
        />
        {/* <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, phoneCode, countryCode: cCode});
              }}
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          value={form.phoneNumber || ''}
          error={error?.phone_number?.[0]}
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
          label="Phone Number"
          placeholder="Enter phone number"
        /> */}

        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 17}}>Add to favorites</Text>

          <Switch
            trackColor={{false: 'blue', true: colors.primary}}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View> */}
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>

      {/* <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} /> */}
    </View>
  );
};

export default CreateContactComponent;
