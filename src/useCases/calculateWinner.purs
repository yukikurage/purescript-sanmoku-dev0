module Usecases.Calculatewinner
  ( SquareValue(..)
  , calculateWinner
  , lines
  )
  where

import Data.Array
import Data.Show
import Prelude

import Data.Maybe (Maybe(..),isJust)
import Data.Traversable (for)

lines :: Array(Array Int)
lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

data SquareValue = X | O

derive instance Eq SquareValue

instance Show SquareValue where
  show X = "X"
  show O = "O"

type Board = Array (Maybe SquareValue)

calculateWinner :: Board -> Maybe SquareValue
calculateWinner boardArr =
  let
    -- | ある Line が同じ SquareValue で埋まっているかどうか判定する
    {-
      https://pursuit.purescript.org/packages/purescript-arrays/7.1.0/docs/Data.Array#v:all
    -}
    pred :: Array Int -> SquareValue -> Boolean
    pred line sv = all (\i -> boardArr !! i == Just (Just sv)) line

    -- | すべての Line, SquareValue の組み合わせについて pred を評価する
    checked :: Array (Maybe SquareValue)
    checked = do
      line <- lines
      sv <- [ X, O ]
      pure
        if pred line sv then
          Just sv
        else
          Nothing
  in
    join $ find isJust checked
    -- | checked の中で一番最初に Just が出てきたものを返す
    -- | find で帰ってくるのは Maybe (Maybe SquareValue) なので、join で一つ unwrap する
    {-
      find https://pursuit.purescript.org/packages/purescript-arrays/7.1.0/docs/Data.Array#v:find
      isJust
      https://pursuit.purescript.org/packages/purescript-maybe/6.0.0/docs/Data.Maybe#v:isJust
    -}
