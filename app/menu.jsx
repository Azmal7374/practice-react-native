import { Appearance, StyleSheet, Platform,SafeAreaView, FlatList,View, Text,Image } from "react-native";

import { Colors } from "@/constants/Colors";
import {MENU_ITEMS} from "@/constants/MenuItems"
import MENU_IMAGES from "@/constants/MenuImages"
import { ScrollView } from "react-native-gesture-handler";

export default function MenuScreen() {
    const colorSchema = Appearance.getColorScheme()

    const theme = colorSchema === 'light' ? Colors.dark : Colors.light

    const styles =createStyles(theme, colorSchema)

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    const separatorComponent = <View style={styles.separator}/>
    // const headerComponent =<Text>Top Of List</Text>
    const footerComponent =<Text style= {{color:theme.text}}>End Of Menu</Text>

    return (
        <Container>
        <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle = {styles.contetContainer}
        ItemSeparatorComponent={separatorComponent}
        // ListHeaderComponent={headerComponent}
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footerComponent}
        ListEmptyComponent={<Text>No Itmes</Text>}
        renderItem={({item}) =>(
           <View style={styles.row}>
           <View style={styles.menuTextRow}>
           <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
           <Text style={styles. menuItemText}>{item.description}</Text>
           </View>
           <Image  source={MENU_IMAGES[item.id -1]} style = {styles.menuImage}/>
           </View>
        )}
        />
        </Container>
    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
      contetContainer:{
        paddingTop:10,
        paddingBottom:20,
        paddingHorizontal:12,
        backgroundColor:theme.background,
      },
      separator:{
        height:1,
        backgroundColor:colorScheme === 'dark'? 'papayawhip': "#000",
        width:'50%',
        maxWidth:300,
        marginHorizontal: 'auto',
        marginBottom: 10,
      },
      footerComponent:{
        color:theme.text,
      marginHorizontal:'auto',
      },
      row:{
       flexDirection:'row',
       width: '100%',
       maxWidth:600,
       height: 100,
       marginBottom:10,
       borderStyle:'solid',
       vorderColor: colorScheme === "dark"? 'papayawhip' : '#000',
       borderWidth:1,
       borderRadius:20,
       overflow: 'hidden',
       marginHorizontal:'auto',
      },
      menuTextRow:{
        width:'65%',
        paddingTop:10,
        paddingLeft:10,
        paddingRight:5,
        flexGrow:1,
      },
      menuItemTitle:{
        fontSize:18,
        textDecorationLine: 'underline',
      },
      menuItemText:{
        color: theme.text,
      },
      menuImage:{
        width:100,
        height:100,
      }
    })
}