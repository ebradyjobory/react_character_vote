import alt from '../alt';
import FooterActions from  '../actions/FooterActions';

class FooterStore {

  constructor() {
    this.characters = [];
    this.bindActions(FooterActions);
  }

  onGetTopCharactersSuccess(data) {
    this.characters = data.slice(0, 5);
  }

  onGetTopCharactersFail(err) {
    toastr.error(err.responseJSON && err.responseJSON.message || err.responseText || err.statusText);
  }

}

export default alt.createStore(FooterStore);