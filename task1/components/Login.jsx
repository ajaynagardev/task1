import React, { useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, TextInput, Image, Alert, TouchableOpacity } from 'react-native'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler= async ()=>{
        const user_login = {email:email,password:password}
        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user_login)
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert('Login Successful', `Welcome ${email}`);
            } else {
                Alert.alert('Login Failed', data.error || 'Unable to login');
            }
        } catch (error) {
            Alert.alert('Login Fail', `Please Enter Valid Email`);
        }
    }
    return (
        <ScrollView>
            <View style={styles.loginContainer}>
                <View style={styles.loginWrapper}>
                    <View style={styles.loginTextConteiner}>
                    <View style={{alignItems: 'center',marginTop: 25}}>
                        <Image source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg'}}
       style={{width: 350, height: 250}} />
       </View>
                        <Text style={styles.loginText}>Login</Text>
                    </View>

                    <View style={styles.inputContainer}>

                        <TextInput style={styles.inputField}
                            placeholder="Email ID"
                            onChangeText={setEmail}
                            value={email} />

                        <TextInput style={styles.inputField}
                            placeholder="Password"
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            value={password} />
                    </View>
                    <Text style={styles.forgotText}>Forgot Password ?</Text>
                        <TouchableOpacity style={styles.loginButton} onPress={loginHandler}>
                            <Text style={{color:'white'}}>Login</Text> 
                        </TouchableOpacity>
                    <View style={styles.loginIconContaienr}>
                        <Text style={styles.loginIconText}>OR</Text>
                        <View style={styles.loginIcons}>

                              <Image source={require('./assets/google.png')}
       style={{width: 20, height: 20,marginTop:2}} />
       <Text style={styles.loginIconText}>
                         Login with Google</Text>
                        </View>
                    </View>

                    <Text onPress={()=>navigation.navigate('CreateAccount')} style={styles.backButton}>New to Logistics? <Text style={{color:'blue'}}>Registered</Text> </Text>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    loginContainer: {
         backgroundColor: 'white',
        height: 870,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginWrapper: {
        backgroundColor: 'white',
        height: 750,
        width: '100%',
        borderRadius: 25,
        padding: 30,
    },
    loginText: {
        fontSize: 35,
        color: 'black',
        fontWeight:'700'
    },
    inputContainer: {
        paddingTop: 20,
        gap:20
    },
    inputField: {
        borderBottomWidth: 2,
        borderColor: 'grey',
        marginBottom: 10,
        fontSize: 16,
        paddingBottom:10
    },
    forgotText: {
        fontSize: 14,
        marginLeft: 230,
        marginTop: 10,
        marginBottom: 20,
        color:'blue'
    },
    loginButton: {
        borderRadius: 10,
        alignItems: 'center',
        cursor:'pointer',
        backgroundColor: 'blue',
        padding:10,
    },
    loginIconContaienr:{
        flex:1,
        alignItems:'center',
        marginTop:25
    },
    loginIconText:{
        fontSize:18
    },
    loginIcons:{
        flexDirection:"row",
        marginTop:25,
        gap:15,
        padding:10,
        paddingHorizontal:80,
        backgroundColor:'#D2D0D0',
        borderRadius: 10,
    },
    backButton:{
        textAlign:'center',
        position:"relative",
        top:15,
        color:'grey',
        fontSize:17
    }

})

export default Login