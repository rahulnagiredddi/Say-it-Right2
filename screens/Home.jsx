import { View, Text, Pressable, Image, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import UserProfile from '../assets/images/UserProfile.png'
import searchIcon from '../assets/images/searchIcon.png'
import rightChevron from '../assets/images/rightChevron.png'

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

const Home = (props) => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.header}>Groups</Text>
                <Pressable onPress={() => props.navigation.navigate('UserProfile')}>
                    <Image style={styles.image} source={UserProfile} />
                </Pressable>
            </View>
            <View>
                <TextInput style={styles.search} placeholder="Search Public Groups" />
                <Image style={[styles.icon ,styles.searchIcon]} source={searchIcon} />
                
            </View>
            <ScrollView>
                <View style={styles.scrollParent}>
                    {
                        arr.map((item, index) => {
                            return (
                                <Pressable onPress={() => props.navigation.navigate('GroupList')} key={index} >
                                    <View style={styles.group} key={index}>
                                        <Image style={[styles.icon, styles.groupImage]} source={UserProfile} />
                                        <View style={styles.groupInfo}>
                                            <View style={styles.groupNameContainer}>
                                                <Text style={styles.groupNameText}>Group Name</Text>
                                                <Text style={styles.admin}>Admin</Text>
                                            </View>
                                            <Text style={styles.groupDescription}>Group Description</Text>
                                        </View>
                                        <View style={styles.fullWidth}>
                                            <Image style={[styles.icon ,styles.groupIcon]} source={rightChevron} />
                                        </View>
                                    </View>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </ScrollView>
            <View style={styles.floatingButtonContainer}>
                <Pressable style={styles.floatingButton} onPress={() => this.props.navigation.navigate('Group')}>
                    <Text style={styles.plusButton}>+</Text>
                    <Text style={styles.floatingButtonText}>Create a Group</Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        marginTop: 20,
        padding: 30,
        position: 'relative',
        flex: 1,
    },
    image: {
        width: 40,
        height: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
    },
    header: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    search: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        padding: 10,
        paddingLeft: 35,
        marginTop: 20,
    },
    searchIcon: {
        position: 'absolute',
        marginTop: 30,
        marginLeft: 7,
    },
    icon: {
        width: 25,
        height: 25,
    }, group: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#969FAA',
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
        fontWeight: 'bold',
    },
    groupImage: {
        marginTop: 10,
        width: 35,
        height: 35,
    },
    groupIcon: {
        marginTop: 10,
        marginRight: 10,
    },
    fullWidth: {
        flex: 1,
        flexDirection: 'row-reverse',
    }, admin: {
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 1,
        paddingBottom: 1,
        borderWidth: 1,
        borderColor: '#8492A6',
        borderRadius: 4,
        marginLeft: 10,
        marginTop: 5,
        color: '#47525E',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, groupNameContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    }, scrollParent: {
        // flex: 1,
        // height: '50%',
    }, floatingButtonContainer: {
        // position: 'absolute',
        // bottom: 20,
        // right: 20,
        marginTop: 20,
        justifyContent: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    plusButton: {
        fontSize: 15,
        color: '#FFFFFF',
        marginRight: 5,
    },
})

export default Home