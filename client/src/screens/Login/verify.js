import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

import {useFocusEffect} from '@react-navigation/native';
import React, {Component} from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import VerifyotpComponent from '../../components/Verifyotp';
import {LOGIN, REGISTER, VERIFY} from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import auth from '@react-native-firebase/auth';

// Handle the button press

// async function confirmCode() {
//   try {
//     await confirm.confirm(code);
//   } catch (error) {
//     console.log('Invalid code.');
//   }
// }

const verifyotp = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});
  const {params} = useRoute();

  // const [confirm, setConfirm] = useState(null);
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  ComponentDidMount = () => {
    // const confirmation = params.confirmation;
  };

  confirmCode = async () => {
    const {verifycode} = form;
    const {confirmation} = params;
    console.log(verifycode);
    ComponentDidMount();
    try {
      const result = await confirmation.confirm(verifycode);
      console.log(result);
      navigate(REGISTER);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a  first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)(response => {
        console.log('sent');
        navigate(LOGIN, {data: response});
      });
    }
  };

  return (
    <VerifyotpComponent
      onSubmit={confirmCode}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default verifyotp;
