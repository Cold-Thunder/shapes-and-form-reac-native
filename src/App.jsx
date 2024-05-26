import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { getRequest, postRequest } from './methods/requestMeth'
import { Formik, useFormik } from 'formik'

const App = () => {
  const [userData, setUserData] = useState(null)
  const formik = useFormik({
    initialValues: {
      id: new Date().getTime(),
      name: '',
      email: ''
    },
    onSubmit: (values, { resetForm }) => {
      setUserData(pre => pre = values);
      resetForm({ values: '' })
    }
  })

  useEffect(() => {
    if (userData != null) {
      dataReq()
    }
  }, [userData])

  const user = {
    id: new Date().getTime(),
    name: 'mohammad hemal',
  }
  const dataReq = async () => {
    const datas = await postRequest(userData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }


  return (
    <View style={[styles.main, styles.center]}>
      <Text style={styles.heading}>Shapes</Text>
      <View style={[styles.center, styles.container]}>
        <View style={styles.tri} />
        <Formik onSubmit={formik.handleSubmit}>
          <View style={[styles.center, styles.formSec]}>
            <View style={[styles.inpSec]}>
              <TextInput style={styles.inp} value={formik.values.name} onChangeText={formik.handleChange('name')} placeholder="name" placeholderTextColor={'gray'}></TextInput>
            </View>
            <View style={styles.inpSec}>
              <TextInput style={styles.inp} value={formik.values.email} onChangeText={formik.handleChange('email')} placeholder="email" placeholderTextColor={'gray'}></TextInput>
            </View>
            <TouchableOpacity style={[styles.center, styles.btn]} onPress={formik.handleSubmit}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </Formik>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },
  heading: {
    color: 'black',
    fontSize: 38,
    fontWeight: 'bold'
  },
  container: {
    width: '100%'
  },
  tri: {
    height: 0,
    width: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'blue',
    transform: [{ rotateZ: '90deg' }],
  },
  formSec: {
    marginTop: 20,
    width: '90%',
  },
  inp: {
    marginVertical: 5,
    paddingHorizontal: 10,
    height: 50,
    width: 300,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    fontSize: 28,
    color: 'gray'
  },
  btn: {
    marginVertical: 10,
    height: 50,
    width: 200,
    backgroundColor: 'green',
    borderRadius: 10
  },
  btnText: {
    fontSize: 30,
    color: 'white',
  }
})