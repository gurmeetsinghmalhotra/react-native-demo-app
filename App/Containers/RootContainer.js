import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StatusBar, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { fetchUsersList } from './../Redux/Actions/UsersListAction';

const RootContainer = ({ dispatch, usersList }) => {
    const users = usersList.usersList.users;
    useEffect(() => {
        dispatch(fetchUsersList());
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#e9ebee' barStyle='dark-content' />
            {!users.length ? <ActivityIndicator /> :
                (<FlatList
                    data={users}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.name}>{item.name}</Text>
                            <View style={styles.userAddress}>
                                <Text style={styles.address}>{`${item.address.street}, ${item.address.suite}`}</Text>
                                <Text style={styles.grayAddress}>{`${item.address.city}, ${item.address.zipcode}`}</Text>
                            </View>
                        </View>)}
                />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9ebee',
        paddingTop: 5,
        paddingBottom: 5,
    },
    name: {
        fontSize: 18,
        color: '#ff7900',
        marginBottom: 2
    },
    userAddress: {
        flexDirection: 'row',
        marginBottom: 2
    },
    address: {
        fontSize: 14,
        paddingRight: 15,
        flex: 1,
    },
    grayAddress: {
        fontSize: 14,
        color: 'gray',
        flex: 1,
        textAlign: 'right'
    },
    card: {
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#dddfe2'
    }
})

function mapStateToProps(state) {
    return {
        usersList: state
    }
}

export default connect(mapStateToProps)(RootContainer);