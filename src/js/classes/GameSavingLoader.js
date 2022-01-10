import read from '../modules/reader'

import json from '../modules/parser'

import GameSaving from './GameSaving'

export default class GameSavingLoader {
  static async load() {
    let result = await read()
    let resolve = await json(result)
    const data = JSON.parse(resolve);
    return new GameSaving(data);
  };
}

