module Main where

import Prelude

import Data.Foldable (traverse_)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Jelly.Aff (awaitBody)
import Jelly.Component (class Component)
import Jelly.Element as JE
import Jelly.Hooks (runHooks_)
import Jelly.Hydrate (mount)
import Jelly.Prop ((:=))
-- import Jelly.Signal (Signal)

import Board (boardComponent)

main :: Effect Unit
main = launchAff_ do
  bodyMaybe <- awaitBody
  liftEffect $ traverse_ (runHooks_ <<< mount component) bodyMaybe

component :: forall m. Component m => m Unit
component =
  JE.div [ "class" := "game" ] do
    JE.div [ "class" := "game-board" ] do
      boardComponent
