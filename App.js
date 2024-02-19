import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground, Alert, Dimensions, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        inputValue: 'Search Menu Here'
    };

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>
            
                <View style={styles.topContainer}>
                    <View style={[{justifyContent:'flex-end',marginRight: 0.2*(deviceWidth/5.9),},styles.rowTop]}>
                        <TextInput
                            value={this.state.inputValue}
                            onChangeText={this._handleTextChange}
                            style={{ width:(3*(deviceWidth/5.9)), height: (0.5*(deviceHeight/10.5))}}
                        ></TextInput>
                        
                        
                        <TouchableHighlight
                            onPress={() => {
                                alert('Search Menu for ' + this.state.inputValue)
                            }}
                        >
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/a731808a98209a282e76355a41813d7b' }}
                                style={{ height: (0.5*(deviceHeight/10.5)), width:(0.5*(deviceHeight/10.5))}}
                            ></Image>
                        </TouchableHighlight>
                    </View>
                    
                    <Text style={styles.orderText}>
                        Order
                    </Text>
                    
                    <View style={[{justifyContent:'center',marginLeft:-0.23*(deviceWidth/5.9)},styles.rowTop]}>
                        <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator = "false">
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Go to Menu screen')
                                }}
                            >
                                <View style={[{borderBottomColor:'#bababb',borderBottomWidth:1},styles.buttons]}>
                                    <Text style={[{color: '#706f6f'},styles.buttonsText]}>
                                        Menu
                                    </Text>
                                </View>        
                            </TouchableHighlight>
                            
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Stay on Featured screen')
                                }}
                            >
                                <View style={[{borderBottomColor:'#00aa59',borderBottomWidth:3},styles.buttons]}>
                                    <Text style={[{color: '#212120'},styles.buttonsText]}>
                                        Featured
                                    </Text>
                                </View>      
                            </TouchableHighlight>
                            
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Go to Previous screen')
                                }}
                            >
                                <View style={[{borderBottomColor:'#bababb',borderBottomWidth:1},styles.buttons]}>
                                    <Text style={[{color: '#706f6f'},styles.buttonsText]}>
                                        Previous
                                    </Text>
                                </View>    
                            </TouchableHighlight>
                
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Go to Favourites screen')
                                }}
                            >
                                <View style={[{borderBottomColor:'#bababb',borderBottomWidth:1},styles.buttons]}>
                                    <Text style={[{color: '#706f6f'},styles.buttonsText]}>
                                        Favourites
                                    </Text>
                                </View>    
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                </View>  
                

                <View style={styles.middleContainer}>
                    <View style={styles.drinksContainer}>
                        <Text style={styles.drinksText}>
                            Featured Drinks
                        </Text>
                        
                        <TouchableHighlight
                            onPress={() => {
                                alert('Show all 6 options')
                            }}
                        >
                            <Text style={styles.seeAllText}>
                                See all 6
                            </Text>
                        </TouchableHighlight>
                        <View style={styles.rowContainer}>
                            
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Order Option')
                                }}
                            >
                                 <View style={styles.columnContainer}>
                                    <Image
                                        source={{ uri: 'https://codehs.com/uploads/568ed7ce6fb852ec3adf26feb9096b46'}}
                                        style={{ height: 2.3*(deviceHeight/10.5), width: 2.3*(deviceWidth/5.9),borderRadius: 60}}
                                    />
                                    <Text style={styles.drinkNameText}>
                                        Vanilla Sweet Cream Cold Brew
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Order Option')
                                }}
                            >
                                 <View style={styles.columnContainer}>
                                    <Image
                                        source={{ uri: 'https://codehs.com/uploads/f70c9cb26a540636b662e91e86835bf2'}}
                                        style={{ height: 2.3*(deviceHeight/10.5), width: 2.3*(deviceWidth/5.9),borderRadius: 140}}
                                    />
                                    <Text style={styles.drinkNameText}>
                                        Salted Caramel Cream Cold Brew
                                    </Text>
                                </View>
                            </TouchableHighlight>
                           
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Order Option')
                                }}
                            >
                                 <View style={styles.columnContainer}>
                                    <Image
                                        source={{ uri: 'https://codehs.com/uploads/f70c9cb26a540636b662e91e86835bf2'}}
                                        style={{ height: 2.3*(deviceHeight/10.5), width: 2.3*(deviceWidth/5.9),borderRadius: 140}}
                                    />
                                    <Text style={styles.drinkNameText}>
                                        Salted Caramel Cream Cold Brew
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                
                
                <View style={styles.bottomContainer}>
                    <View style={styles.pickupBar}>
                        <View style = {styles.rowContainer}>
                            
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Pick a different store')
                                }}
                            >
                                <View style={styles.pickupTextContainer}>
                                    <Text style={styles.pickupText}>
                                        Pickup Store
                                    </Text>
                                    <Text style={styles.storeText}>
                                        Finding Closest Store 
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/bac041acc32cf85cf839d6865477c62f' }}
                                style={{ height: 0.5*(deviceHeight/10.5), width:1.4*(deviceWidth/5.9), marginTop:0.1*(deviceHeight/10.5),marginRight:0.1*(deviceWidth/5.9)}}
                            />
                        </View>
                    </View>
                
                    <View style={styles.appBar}>
                        <View style = {styles.rowContainer}>
                            
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Go to Home Screen')
                                }}
                            >
                                <View style = {[{paddingLeft: 0.2*(deviceWidth/5.9)},styles.columnContainer]}>
                                    <Image
                                        source={{ uri: 'https://codehs.com/uploads/54ce335a8f008d0d70266df110a0360a' }}
                                        style={{ height:  0.5*(deviceHeight/10.5), width:  0.5*(deviceHeight/10.5)}}
                                    />
                                    <Text style={[{color:'#818986'},styles.menuText]}>
                                        Home
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Go to Scan Screen')
                                }}
                            >
                                <View style = {[{paddingLeft: 0.3*(deviceWidth/5.9)},styles.columnContainer]}>
                                    <Image
                                        source={{ uri: 'https://codehs.com/uploads/ca096fc6030652a96de1e37db7868205' }}
                                        style={{ height:  0.5*(deviceHeight/10.5), width:  0.5*(deviceHeight/10.5)}}
                                    />
                                    <Text style={[{color:'#818986'},styles.menuText]}>
                                        Scan
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Stay on Order Screen')
                                }}
                            >
                                <View style = {[{paddingLeft: 0.3*(deviceWidth/5.9)},styles.columnContainer]}>
                                    <Image
                                        source={{ uri: 'https://codehs.com/uploads/58fa8582833d1bd0603468dc32e1ac5d'}}
                                        style={{ height:  0.5*(deviceHeight/10.5), width:  0.5*(deviceHeight/10.5) }}
                                    />
                                    <Text style={[{color:'#00ab5b'},styles.menuText]}>
                                        Order
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Go to Gift Screen')
                                }}
                            >
                                <View style = {[{paddingLeft: 0.3*(deviceWidth/5.9)},styles.columnContainer]}>
                                    <Image
                                        source={{ uri: 'https://codehs.com/uploads/b58b36d4acd44571e50686fa94858545'}}
                                        style={{ height:  0.5*(deviceHeight/10.5), width:  0.5*(deviceHeight/10.5)}}
                                    />
                                    <Text style={[{color:'#818986'},styles.menuText]}>
                                        Gift
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            <TouchableHighlight
                                onPress={() => {
                                    alert('Go to Offers Screen')
                                }}
                            >
                                <View style = {[{paddingLeft: 0.3*(deviceWidth/5.9),marginRight: 0.3*(deviceWidth/5.9)},styles.columnContainer]}>
                                    <Image
                                        source={{ uri: 'https://codehs.com/uploads/434539591bdc89cb83b425bcf5b7cb29'}}
                                        style={{ height:  0.5*(deviceHeight/10.5), width:  0.5*(deviceHeight/10.5)}}
                                    />
                                    <Text style={[{color:'#818986'},styles.menuText]}>
                                        Offers
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        flex:1,
    },

    topContainer:{
        flex: 2.6*(deviceHeight/10.5),
        backgroundColor:'#fefefe',
    },
    
    rowTop:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: 0.5*(deviceHeight/10.5),
    },
    
    orderText:{
        fontSize: 0.5*(deviceHeight/10.5),
        fontFamily: 'ArialRoundedMTBold',
        marginLeft:0.3*(deviceWidth/5.9),
    },

    buttons:{
        height: 0.6*(deviceHeight/10.5),
        width: 1.7*(deviceWidth/5.9),
        alignItems:'center',
        justifyContent:'center',
    },
    buttonsText:{
        fontSize: 0.3*(deviceHeight/10.5),
        fontFamily: 'ArialRoundedMTBold',
    },
    
    
    
    middleContainer:{
        flex: 6.12*(deviceHeight/10.5),
        backgroundColor:'#f6f6f6',
    },
    
    drinksContainer:{
        height: 5.4*(deviceHeight/10.5),
        borderBottomWidth:1,
        borderBottomColor:'#bababb',
    },
    
    drinksText:{
        fontSize: 0.5*(deviceHeight/10.5),
        fontWeight:'bold',
        fontFamily: 'Apple SD Gothic Neo',
        
        marginLeft: 0.3*(deviceWidth/5.9),
        marginTop: 0.86*(deviceHeight/10.5),
    },
    
    seeAllText:{
        color: '#008541',
        fontSize: 0.35*(deviceHeight/10.5),
        fontFamily: 'ArialRoundedMTBold',
        
        marginLeft:  4.2*(deviceWidth/5.9),
        marginBottom: 0.5*(deviceHeight/10.5),
        
    },
     columnContainer:{
        flexDirection:'column',
        alignItems:'center',
        marginLeft: 0.3*(deviceWidth/5.9),
    },
    
    rowContainer:{
        flexDirection:'row',
    },
    
    drinkNameText:{
        width: 2.2*(deviceWidth/5.9),
        fontSize: 0.25*(deviceHeight/10.5),
        fontWeight:'bold',
        fontFamily: 'Apple SD Gothic Neo',
        color:'#000100',
        
        textAlign:'center',
        marginTop: 0.2*(deviceHeight/10.5),
    },
    
    bottomContainer:{
        flex: 1.7*(deviceHeight/10.5),
    },
    
    pickupBar:{
       backgroundColor: '#133a32', 
       flex: 0.85*(deviceHeight/10.5),
       paddingLeft: 0.3*(deviceWidth/5.9),
       paddingTop: 0.1*(deviceHeight/10.5),
    },
    pickupTextContainer:{
        width: 4.3*(deviceWidth/5.9),
        borderBottomWidth:1,
        borderBottomColor:'#30514b',
    },
    pickupText:{
        color:'#b9c3c1',
        fontSize: deviceHeight/40,
        fontFamily: 'Apple SD Gothic Neo',
    },
    
    storeText:{
        color:'white',
        fontSize: 0.32*(deviceHeight/10.5),
        fontFamily: 'Apple SD Gothic Neo',
    },
    
    appBar:{
        backgroundColor: '#cfd5d3', 
        flex: 0.85*(deviceHeight/10.5),
        alignItems:'center',
        justifyContent: 'flex-end',
    },
    menuText:{
        fontSize: 0.25*(deviceHeight/10.5),
        fontFamily: 'Apple SD Gothic Neo',
    },
});