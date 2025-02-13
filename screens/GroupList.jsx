import { View, Text, StyleSheet, Button, Pressable, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import UserProfile from '../assets/images/UserProfile.png'
import leftChevron from '../assets/images/leftChevron.png'
import SpeakerIcon from '../assets/images/SpeakerIcon.png'

let arr = [
    {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }, {
        id: 1,
        name: 'Random',
        description: 'Random description',
    }
]

const GroupList = (props) => {
    return (
        <View style={styles.body}>
            <View style={styles.backButton}>
                <Pressable style={styles.homeButton} onPress={() => this.props.navigation.navigate('Home')}>
                    <Image style={styles.backIcon} source={leftChevron} />
                    <Text style={styles.backButtonText}>Back</Text>
                </Pressable>
            </View>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.header}>Group Name</Text>
                    <Text style={styles.subtitle}>Groups Description</Text>
                </View>
                <Pressable>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Class Schedule</Text>
                    </View>
                </Pressable>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.scrollParent}>
                    {
                        arr.map((item, index) => {
                            return (
                                <Pressable onPress={() => props.navigation.navigate('Home')} key={index} >
                                    <View style={styles.group} key={index}>
                                        <Image style={[styles.icon, styles.groupImage]} source={UserProfile} />
                                        <View style={styles.groupInfo}>
                                            <View style={styles.groupNameContainer}>
                                                <Text style={styles.groupNameText}>Member Name</Text>
                                                <Text style={styles.admin}>See More</Text>
                                            </View>
                                        </View>
                                        <View style={styles.fullWidth}>
                                            <Image style={[styles.icon, styles.groupIcon, styles.speakerIcon]} source={SpeakerIcon} />
                                        </View>
                                    </View>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </ScrollView>
            <View style={styles.floatingButtonContainer}>
                <Pressable style={styles.floatingButton} onPress={() => props.navigation.navigate('AddMembers')}>
                    <Text style={styles.plusButton}>+</Text>
                    <Text style={styles.floatingButtonText}>Add Members</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    backButton: {
        marginTop: 20,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
    },
    backIcon: {
        width: 20,
        height: 16,
    },
    homeButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 20,
        color: '#47525E',
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 5,
    },
    header:{
        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    subtitle:{
        fontSize: 12,
        color: '#47525E',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 5,
        marginRight: 25,
        height: 32  ,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    headerText:{
        marginLeft: 20,
    }, buttonText: {
        color: '#47525E',
    },
    scrollParent: {
        height: '50%',
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
    },
    group: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#969FAA',
        width: '100%',
    }, groupName: {
        fontSize: 20,
        fontWeight: 'bold',
    }, 
      groupInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
    }, groupNameText: {
        fontSize: 20,
    },
      groupImage: {
        marginTop: 10,
        width: 35,
        height: 35,
    },
      groupIcon: {
        marginTop: 10,
        marginRight: 10,
        display: 'flex',
    },
    speakerIcon: {
        display: 'flex',
        marginLeft: 'auto',
        flexDirection: 'row-reverse',
    },
    admin: {
        textDecorationLine: 'underline',
    },
    icon: {
        width: 25,
        height: 25,
    },
    groupIcon: {
        marginTop: 10,
        marginRight: 10,
    },
    fullWidth: {
        flexDirection: 'row-reverse',
        width: '100%',
    },
    floatingButtonContainer: {
        marginTop: 40,
        bottom: 20,
        right: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
    },
    floatingButton: {
        borderRadius: 5,
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
    },
    floatingButtonText: {
        color: '#FFFFFF',
    },
    floatingButtonIcon: {
        width: 25,
        height: 25,
        backgroundColor: 'white',
    },
    plusButton : {
        fontSize: 15,
        color: '#FFFFFF',
        marginRight: 5,
    },
});

export default GroupList