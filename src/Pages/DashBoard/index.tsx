import React, { useContext } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});

const DashBoard: React.FC = () => {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        signOut();
    }
    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title="SignOut"onPress={handleSignOut}/>
        </View>
    )
    
}

export default DashBoard;