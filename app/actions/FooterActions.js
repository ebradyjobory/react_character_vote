import alt from '../alt';

class FooterActions {

  constructor() {
    this.generateActions(
      'getTopCharactersSuccess',
      'getTopCharactersFail'
    )
  }

  getTopCharacters() {
    $.ajax({ url: '/api/charactor/top'})
      .done((data) => {
        this.actions.getTopCharactersSuccess(data);
      })
      .fail((err) => {
        this.actions.getTopCharactersFail(err);
      });
  }
}

export default alt.createActions(FooterActions);

// NOTE:

// getTopCharactersSuccess(payload) {
//   this.dispatch(payload);
// }

// getTopCharactersFail(payload) {
//   this.dispatch(payload);
// }

// // Equivalent to this...
// this.generateActions(
//   'getTopCharactersSuccess',
//   'getTopCharactersFail'
// );
