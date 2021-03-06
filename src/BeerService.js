import axios from 'axios';

export default class BeerService{
  constructor(){
    this.service=axios.create({
      baseURL:"https://ironbeer-api.herokuapp.com/beers"
    });
  }
  getBeer= () =>{
    return this.service.get('/all')
    .then(data=>data.data)
  }

  getSingleBeer= id =>{
    console.log(id)
    return this.service.get(`/single/${id}`)
    .then(data=>data.data)
  }

  getRandomBeer= () =>{
    return this.service.get('/random')
    .then(data=>data.data)
  }


  newBeer = beer =>{
    return this.service.post('/new',{...beer})
    .then(newBeer=>newBeer)
  }
}


