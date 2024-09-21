import { Ability } from "./pokemon/ability.interface"
import { Sprites } from "./pokemon/sprites.interface"

export interface Pokemon {
    abilities: Ability[]
    base_experience: number
    cries: Cries
    forms: Form[]
    game_indices: Index[]
    height: number
    held_items: HeldItem[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Mfe[]
    name: string
    order: number
    past_abilities: any[]
    past_types: any[]
    species: Species
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number
  }

  export interface Cries {
    latest: string
    legacy: string
  }
  
  export interface Form {
    name: string
    url: string
  }
  
  export interface Index {
    game_index: number
    version: Version
  }
  
  export interface Version {
    name: string
    url: string
  }
  
  export interface HeldItem {
    item: Item
    version_details: VersionDetail[]
  }
  
  export interface Item {
    name: string
    url: string
  }
  
  export interface VersionDetail {
    rarity: number
    version: Version2
  }
  
  export interface Version2 {
    name: string
    url: string
  }
  
  export interface Mfe {
    move: Move
    version_group_details: VersionGroupDetail[]
  }
  
  export interface Move {
    name: string
    url: string
  }
  
  export interface VersionGroupDetail {
    level_learned_at: number
    move_learn_method: MoveLearnMethod
    version_group: VersionGroup
  }
  
  export interface MoveLearnMethod {
    name: string
    url: string
  }
  
  export interface VersionGroup {
    name: string
    url: string
  }
  
  export interface Species {
    name: string
    url: string
  }
  
  
  export interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
  }
  
  export interface Stat2 {
    name: string
    url: string
  }
  
  export interface Type {
    slot: number
    type: Type2
  }
  
  export interface Type2 {
    name: string
    url: string
  }
  