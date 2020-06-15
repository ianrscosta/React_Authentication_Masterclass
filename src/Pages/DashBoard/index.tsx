import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
      
    }
});

const DashBoard: React.FC = () => {
    const { signOut } = useContext(AuthContext);

    function handleSignOut() {
        signOut();
    }
    return (
        <View style={styles.container}>
            <Button title="SignOut"onPress={handleSignOut}/>
        </View>
    )
    
}

export default DashBoard;