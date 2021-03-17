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
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        // granted means hascamerapermission true, otherwise it should be false
        this.setState({
            hasCameraPermissions: status === 'granted',
            buttonState: ' clicked',
            scanned:false
        })
    }