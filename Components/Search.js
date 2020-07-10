// Components/Search.js
import React from 'react'
import { ActivityIndicator, StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText} from '../API/TMDBApi' 
import { connect } from 'react-redux'
import FilmList from './FilmList'

class Search extends React.Component {

  constructor(props)
  {
    super(props)
      this.searchedText = "" 
      this.page = 0
      this.totalPages = 0
      this.state = {
       films :[] ,
       isLoading : false }
      this._loadFilms = this._loadFilms.bind(this)
  }
  _displayDetailForFilm = (idFilm) => {
      console.log("Display Film with id" + idFilm)
      this.props.navigation.navigate("FilmDetail" , { idFilm: idFilm })
  }

  _searchTextInputChanged(text) 
  {
    this.searchedText = text  
  }

  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: [],
    }, () => {
        this._loadFilms()
    })
  }
  _displayDetailForFilm = (idFilm) => {
    console.log("Display film with id " + idFilm)
    this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _loadFilms()
  {
    if (this.searchedText.length > 0)
    {
      this.setState({isLoading : true}) //lancement de chargement
      getFilmsFromApiWithSearchedText(this.searchedText , this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
           films: [... this.state.films , ...data.results ],
          isLoading: false // Arret du chargement
        }) 
       })
    }
  }
  _displayLoading()
  {
    if (this.state.isLoading){
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
  
  render()
  {
      return (
          <View style={styles.main_container} >
            <TextInput
             placeholder='Titre du film' 
             style={styles.TextInput} 
             onChangeText={(text) => this._searchTextInputChanged(text)}
             onSubmitEditing={() => this._loadFilms()}
             />
            <Button title='Rechercher' onPress={() => this._searchFilms()} />
              
            <FilmList
              films={this.state.films}
              navigation={this.props.navigation}
              loadFilms={this._loadFilms}
              page={this.page}
              totalPages={this.totalPages}
              favoriteList={false}
            />
            {this._displayLoading()}
          </View>
      )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex:1,
  },  
  TextInput : {
    marginLeft: 5,
    marginRight: 5,
    height:50,
    borderColor: 'pink',
    borderWidth:1 ,
    paddingLeft:5
  },
    loading_container : {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
})

// On connecte le store Redux, ainsi que les films favoris du state de notre application, à notre component Search
const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Search)