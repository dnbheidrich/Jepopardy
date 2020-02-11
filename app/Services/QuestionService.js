import _store from "../store.js"
import Question from "../Models/Question.js"

const _api = axios.create({
  baseURL: "http://jservice.io/api/random",
  timeout: 3000
});

class QuestionService {
  constructor(){

  }
  getApiQuestion(){
    _api.get("").then(res =>{

      let question = new Question(res.data[0]);
      
      _store.commit("questions", question)
      console.log(question);
      
    })
    .catch(error => {
      console.error(error);
    })
  }
}



const SERVICE = new QuestionService();
export default SERVICE;


