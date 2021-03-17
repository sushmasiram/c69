import * as React from 'react';
import { Text, View, StyleSheet, TextInput ,TouchableOpacity ,Image} from 'react-native';
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'


export default class BookTransaction extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions:  null,
            scanned: false,
            scannedData: '',
            buttonState:  'normal'
        }
    }

    handleBarCodeScanned = async({type, data})=>{
      
        this.setState({
            scanned:true,
            scannedData: data,
            buttonState: 'normal'
        })

    }
    getCameraPermissions = async()=>{
        console.log("camerapermissions")
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        // granted means hascamerapermission true, otherwise it should be false
        console.log(status === 'granted')
        this.setState({
            hasCameraPermissions: status === 'granted',
            buttonState: ' clicked',
            scanned:false
        })
        console.log(this.state)
    }
    
    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
  
        if (buttonState === "clicked" && hasCameraPermissions){
          return(
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          );
        }
  
        else if (buttonState === "normal"){
          return(
            <View >
  
            <Text >{
              hasCameraPermissions===true ? this.state.scannedData: "Request Camera Permission"
            }</Text>     
  
            <TouchableOpacity
              onPress={this.getCameraPermissions}
              >
              <Text >Scan QR Code</Text>
            </TouchableOpacity>
          </View>
          );
        }
      }
}