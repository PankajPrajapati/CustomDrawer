import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import FoodItem from './FoodItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const { height, width } = Dimensions.get('window');


const foodList = [
  {
    key: 0,
    title: 'Earth Plates',
    address: '#12 cross road, Devauram complex',
    city: 'Baroda',
    status: 'Open now',
    rating: 5,
    image: require('../../../assests/detail/img_food11.jpg'),
    backgroundColor: '#59b2ab',

    arrImages: [require('../../../assests/detail/img_food11.jpg'), require('../../../assests/detail/img_food9.jpg'), require('../../../assests/home/img_food5.jpg'), require('../../../assests/detail/img_food6.jpg')],
    name: 'Caprese Salad with Pesto Sauce',
    detail: 'Nothing like a fresh tomato salad in summers! A great antipasto bite to start your meal with. This combination of juicy tomatoes and mozzarella cheese salad topped with freshly made pesto sauce is a distinct yet simple one. It offers a twist to the classic caprese salad.',
    delivery: 10,
    phone: 9012345623,
    amount: 34.0
  },
  {
    key: 1,
    title: 'Kabir Kitchen',
    address: '#109, Devauram complex',
    city: 'Ahmedabad',
    status: 'Open now',
    rating: 4,
    image: require('../../../assests/home/img_food3.jpg'),
    backgroundColor: '#febe29',

    arrImages: [require('../../../assests/detail/img_food12.jpg'), require('../../../assests/detail/img_food10.jpg'), require('../../../assests/home/img_food4.jpg'), require('../../../assests/detail/img_food6.jpg')],
    name: 'Pasta Con Pomodoro E Basilico',
    detail: 'This is the most basic and simplest cooked pasta sauce, hence it is the benchmark of a good Italian home cook. This one boats of being among the original Italian recipes of pasta. easy and quick, this pasta recipe can be made under half an hour. Serve as a breakfast, pack for kids tiffin or savour as an evening snack. You can even cook this for a casual and lazy dinner and pair this up with red wine',
    delivery: 11,
    phone: 9090901811,
    amount: 56.0
  },
  {
    key: 2,
    title: 'Pizza Points',
    address: '#1 first floor,Iscon Avenue',
    city: 'Ahmedabad',
    status: 'Closed',
    rating: 4,
    image: require('../../../assests/home/img_food4.jpg'),
    backgroundColor: '#22bcb5',

    arrImages: [require('../../../assests/detail/img_food13.jpg'), require('../../../assests/home/img_food5.jpg'), require('../../../assests/home/img_food4.jpg'), require('../../../assests/detail/img_food9.jpg')],
    name: 'Tiramisu - The pick-me-up cake',
    detail: 'The delightful tiramisu recipe with sponge fingers soaked in coffee, layered around and smeared with a creamy mascarpone mixture. The word tiramisu in Italian means pick-me-up. Owing to its caffeine kick it sure does!',
    delivery: 5,
    phone: 8989898989,
    amount: 23.0
  },
  {
    key: 3,
    title: 'Earth Plates',
    address: '#12 cross road, Devauram complex',
    city: 'Baroda',
    status: 'Open now',
    rating: 5,
    image: require('../../../assests/home/img_food5.jpg'),
    backgroundColor: '#59b2ab',

    arrImages: [require('../../../assests/home/img_food5.jpg'), require('../../../assests/detail/img_food9.jpg'), require('../../../assests/detail/img_food11.jpg'), require('../../../assests/detail/img_food6.jpg')],
    name: 'Caprese Salad with Pesto Sauce',
    detail: 'Nothing like a fresh tomato salad in summers! A great antipasto bite to start your meal with. This combination of juicy tomatoes and mozzarella cheese salad topped with freshly made pesto sauce is a distinct yet simple one. It offers a twist to the classic caprese salad.',
    delivery: 10,
    phone: 9012345623,
    amount: 299.0
  }
];


class FoodList extends Component {

  static navigationOptions = {
    header: null
  }

  sendToFoodDetail(index) {

    const item = foodList[index];

    this.props.navigation.push('FoodDetail', { item: foodList[index] })
  }

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title');

    return (
      <View>
        <StatusBar barStyle='light-content' />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={styles.headerText}>
              {title}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.onMenuPress()}>
              < MaterialCommunityIcons name='menu' size={35} style={{ paddingLeft: 10, color: 'black' }} />
            </TouchableOpacity>
            <Text style={styles.headerText}>My Favourite</Text>
          </View>
          <View style={styles.searchContainer}>
            <Image source={require('../../../assests/home/img_seach.png')} style={styles.searchIcon} />
            <TextInput style={styles.textInput}
              placeholderTextColor='#a9a9a9'
              placeholder='Seach foods you like...'
            />
          </View>
          <View style={styles.flatListContainer}>
            <FlatList
              data={foodList}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity onPress={this.sendToFoodDetail.bind(this, index)}>
                    <FoodItem item={item} />
                  </TouchableOpacity>
                );
              }
              }
            />
          </View>
        </View>
      </View>
    );
  }
  onMenuPress() {
    this.props.navigation.openDrawer();
  }
}

const renderCustomItems = (item, index) => {
  return (
    <FoodItem item={item} />
  );
};



const styles = {
  container: {
    height: height,
    width: width,
    backgroundColor: 'white',
  },
  flatListContainer: {
    height: height - 170,
    width: width,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 60
  },
  searchIcon: {
    marginLeft: 10,
    height: 25,
    width: 25,
    marginTop: 8
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5
  },
  searchContainer: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: { height: 1.0, width: 0 },
    shadowColor: '#dddddd'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '400',
    paddingLeft: 20,
    textTransform: 'capitalize'
  }
};

export default FoodList;