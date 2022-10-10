import React, {useEffect} from 'react';
import AuthStack from './AuthStack/AuthStack';
import HomeStack from './HomeStack/HomeStack';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeRoute} from '../store/action/actions';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const route = useSelector(state => state.route.route);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userLogin');
      return jsonValue != null
        ? dispatch(changeRoute(2))
        : dispatch(changeRoute(1));
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {route == 1 && <AuthStack />}
      {route != 1 && <HomeStack />}
    </>
  );
};

export default MainNavigation;
