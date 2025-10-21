import {describe, expect, test} from "vitest";
import {gamePlay, Throw} from "../main/Game";

describe('test', () => {
  test("player1がグー(ROCK)でplayer2がチョキ(SCISSORS)のときplayer1が勝つ", () => {
    const player1 = Throw.ROCK
    const player2 = Throw.SCISSORS
    const result = gamePlay(player1, player2)

    expect(result).toEqual('P1_WINS')
  })
});