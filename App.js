/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/*<View style={{ flexDirection: 'row',marginTop:20,marginBottom:10,marginLeft:10}}>
    <RadioForm
  radio_props={radio_props}
  initial={0}
  formHorizontal={true}
  onPress={(value) => {this.setState({value:value})}}
/>
</View>


<View style={styles.textinput}>
<Text style={styles.tee}>Card type</Text>


<View style={{ flexDirection: 'row',marginTop:20}}>
    <RadioForm
  radio_props={radio_prop}
  initial={0}
  formHorizontal={true}
  onPress={(value) => {this.setState({value:value})}}
/>
          
          
</View> 
</View>





*/
//import React from 'react';
import React, { Component } from 'react';
import { View, StyleSheet,Alert ,useState, Dimensions ,Icon,Text,CheckBox,isSelected,onRemove,setSelection,TextInput,value, SafeAreaView ,Image,TouchableOpacity,Button} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DatePicker from 'react-native-datepicker';
//import RadioForm,{
//RadioButton,
//RadioButtonInputs,
//RadioButtonLabel

//} from 'react-natine-simple-radio-button';



var cardtype=[
{label:"visa card", value:0},
{label:"master card",value:1}


];


var card=[
  {label:"credit card", value:0},
  {label:"debit card",value:1}
  
  
  ];

  //const[name,setAc] = useState('');
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }
  render(){
    return (
//<View><Text>ab</Text></View>


<View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
 <View style={styles.textinput}>
<RadioForm
radio_props={cardtype}
initial={-1}
onPress={(value) => {}}
selectedLabelColor={"green"}


buttonSize={20}
selectedButtonColor={"green"}

/>


 </View> 

 <View style={styles.textinput}>
 <Text style={styles.tee}>Card type</Text>
<RadioForm
radio_props={card}
initial={-1}
onPress={(value) => {}}
selectedLabelColor={"green"}


buttonSize={20}
selectedButtonColor={"green"}

/>


 </View>
    
<View style={styles.textinput}><Text style={styles.tee}>Card Number</Text>
<TextInput
      style={{ height: 40, borderColor: 'grey', borderWidth: 1 ,textDecorationColor:'blue',borderRadius:10}}
      //onChangeText={text => onChangeText(text)}
      //value={this.state.myNumber}
      keyboardType='numeric'
      value={value}
      maxLength={16}
      placeholderTextColor="#60605e"
    />
</View>




<View  style={styles.textinput}><Text style={styles.tee}>Expiration Date</Text>



<View>
<DatePicker



        style={{width: 200,borderRadius:10 , height: 40, borderColor: 'grey', borderWidth: 1 ,textDecorationColor:'blue'}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        //format="YYYY-MM-DD"
        //minDate="2016-05-01"
        //maxDate="2016-06-01"
        format="YYYY-MM"
        minDate="2021-01"
        maxDate="2025-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
</View>
</View>







<View  style={styles.textinput}>
<Text style={styles.tee}>CVN</Text>

<Text style={{color:"#0E0476"}}>This code is a three or four digit number printed on the back or front of  credit cards</Text>
<TextInput
      style={{ height: 40, borderColor: 'grey', borderWidth: 1,width:50 ,borderRadius:10}}
      //onChangeText={text => onChangeText(text)}
      value={value}
      keyboardType='numeric'
      //value={value}
      maxLength={3}
      placeholderTextColor="#60605e"
    />



<View><Text></Text></View>
</View>










<View style={{ flexDirection: 'row',marginTop:45}}>
<View>
        <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={styles.cancel}
                    >
                      <Text style={{ color:'#fff',marginTop:5,marginBottom:5,marginLeft:5,marginRight:5}}>cash payment</Text>
                    </TouchableOpacity>


                    </View>
         
<View style={{ marginLeft:120}}>
<TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={styles.pay} >
                      <Text   style={{ color:'#fff',marginTop:5,marginBottom:5,marginLeft:5,marginRight:5}}>online payment</Text>
                    </TouchableOpacity>
</View> 
        </View>
</View>





    );};


}


const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tee:{fontSize: 15,fontWeight: 'bold',color:'#003399'},

  image:{
    width:124,height:121,borderRadius:20,alignItems: 'center',
    justifyContent: 'center',marginLeft:30,marginTop:30,
  },





  images:{
    width:124,height:121,borderRadius:20,alignItems: 'center'
    ,marginLeft:30,marginTop:40,
  },

  c:{marginTop:32},

  titleSelection:{




    marginLeft:16,
    backgroundColor:'#808080',
    marginRight:10,
  },




  imon: {
    width: 124,
    height:121,
  },
  imtw: {
    width: 124,
    height:121,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    
  },
  cardPrice: {
    fontSize: 15,
    color: '#444',
    fontWeight: 'bold',
  },


  green:{alignItems: 'center',marginTop:40,},
  total:{backgroundColor:'#0099FF',height:50,width:300,alignContent:'center',marginLeft:50,marginBottom:90,borderRadius:20,alignItems:'center'},
  totaltext:{fontSize:22,fontWeight:'bold'},
  checkout:{backgroundColor:'#0099FF',height:50,marginBottom:10},
  textinput:{marginLeft:10 , marginBottom:10 , marginTop:10},
  cancel:{marginLeft:10,width:100,color:'#003399'},
  pay:{marginLeft:10,width:100,marginRight:10,color:'#003399'} ,





  cancel:{borderWidth: 1,borderColor: '#2c3e50',backgroundColor:'#062157',marginRight:60},


  pay:{borderWidth: 1,borderColor: '#2c3e50',backgroundColor:'#062157',marginLeft:30}

},







);



//npm install --save react-native -simple-radio-button

//expiration date
/*
<View style={{ flexDirection: 'row'}}>
<TextInput
      style={{ height: 30, borderColor: 'grey', borderWidth: 1,width:40 ,borderRadius:10 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
<View style={{width:10}}></View>
    <TextInput
      style={{ height: 30,width:50, borderColor: 'grey', borderWidth: 1 ,borderRadius:10 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    /> 

</View>


*/