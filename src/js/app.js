import GameSavingLoader from '../js/classes/GameSavingLoader'

(async () => {
  try {
  await GameSavingLoader.load()
  }
  catch(err) {
    alert(err)
  }
})();
