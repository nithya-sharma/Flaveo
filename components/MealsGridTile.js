import { Pressable, View, StyleSheet,Text, Dimensions, TouchableOpacity, ImageBackground } from "react-native";

function MealsGridTile({title, color,uri,onPress}) {
    return(
        
    <TouchableOpacity 
    style = {[styles.gridItem, {backgroundColor: color}]} 
    onPress={onPress}>
        <View style={styles.button}>
        <ImageBackground 
                    source={{ uri: uri }} 
                    style={styles.bgImage}
                    blurRadius={1}
                    imageStyle={styles.imageStyle} 
                >
              <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>  
            </ImageBackground>
            
        </View>
    </TouchableOpacity>
    );
}

export default MealsGridTile;

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        backgroundColor: 'white',
        borderRadius: deviceWidth < 380 ? 4 : 8,
        height: deviceWidth < 380 ? 75 : 150,
        elevation: 10,

    },
    button:{
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        fontFamily:'Sansita-Bold',
        fontSize: 30,
        color: 'black',
        margin: 10,
        padding: 5,
        borderRadius:10,
        backgroundColor: 'rgba(255, 255, 255, 0.21)'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center', 
    },
    imageStyle: {
        borderRadius: deviceWidth < 380 ? 4 : 8, 
    }

});