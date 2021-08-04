import React from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import colors from '../../assets/themes/colors';
import AppModal from '../common/AppModal/index';
import {CONTACT_DETAIL, CREATE_CONTACT} from '../../constants/routeNames';
import CustomButton from '../common/CustomButton';
import Message from '../common/message/index';
import Icon from '../common/Icon';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 100,
    height: 75,
    alignSelf: 'center',
  },
  floatingActionButton: {
    backgroundColor: 'blue',
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 45,
    right: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ContactsComponent = ({modalVisible, data, loading, setModalVisible}) => {
  const {navigate} = useNavigation();
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No tweets to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {_id, tweet_name, tweet, createdAt, updatedAt} = item;
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/thumbnails/000/251/590/small/mountain-landscape-first-person-vector-illustration.jpg',
            }}
          />
          <Text style={{color: 'blue'}}>{`Tweet Heading : ${tweet_name}`}</Text>
        </View>
        <View>
          <Text>{`Tweet :>> ${tweet}`}</Text>
          <Text>{`created At :>> ${createdAt}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View>
        <AppModal
          modalFooter={<></>}
          modalBody={<View></View>}
          title="My @Username"
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />

        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}

        {!loading && (
          <View style={[{paddingVertical: 20}]}>
            <FlatList
              renderItem={renderItem}
              data={data}
              ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: 'blue'}}></View>
              )}
              keyExtractor={item => String(item._id)}
              ListEmptyComponent={ListEmptyComponent}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon name="plus" size={21} color={colors.white} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
