import React from 'react'

import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import * as Animatable from 'react-native-animatable'

export default function SignIn() {
    
    return (

        <View style= {styles.container}>
            
        <Animatable.View animation={"fadeInLeft"}  style= {styles.containerHeader}>

        <Text style={styles.message}>Bem Vindo(a) </Text>

        </Animatable.View>


        <Animatable.View animation={"fadeInUp"} styles={styles.containerForm}> 
        
        
        <Text style = {styles.title}> Email</Text>

            <TextInput placeholder='Digite um email' style={styles.input}></TextInput>


                
            <Text style = {styles.title}>Senha</Text>

        <TextInput placeholder='Digite uma Senha' style={styles.input}></TextInput>




        </Animatable.View>



        </View>


    )
}



const styles = StyleSheet.create({

    container: {


    }


})