import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'

function Item(props) {
  return (
    <View style={styles.item}>
      <Text>{props.item}</Text>
    </View>
  )
}



export default function FlatList() {

  const [data, setData] = useState([
    'Ewoud',
    'Ozgur',
    'Emiel'
  ])

  useEffect(() => {

    fetchData()
    async function fetchData() {
      try {
        const result = await axios.get('https://api.chucknorris.io/jokes/categories')
        console.log(result)
        setData(result.data)
      } catch (error) {
        console.log(error)
      }


    }

  }, [])

  const renderItem = ({ item }) => {
    return (
      <Item item={item} />
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 2
  }
})
