import { Text } from './text';

export interface BeginQuest {
    quest: number
    completed: boolean
}

export interface ItemRequirement {
    item: number
    count: number
}

export interface Quest {
    id: number
    name: Text
    type: string
    repeatable: boolean
    removable: boolean
    partyShare: boolean
    parent: number
    beginNPC: number
    minLevel: number
    maxLevel: number
    beginClasses: number[]
    beginQuests: BeginQuest[]
    beginReceiveItems: ItemRequirement[]
    endNPC: number
    endNeededItems: ItemRequirement[]
    endTimeLimit: number
    endTalkNPC: number
    endVisitPlace: any
    endKillMonsters: any
    endRemoveItems: any
    endReceiveGold: any
    endReceiveExperience: number[]
    endReceiveInventorySpaces: number
    endReceiveSkillPoints: number
    endReceiveKarma: number
    endReceiveItems: any
    description: Text
    descriptionComplete: Text
    dialogsBegin: Text[]
    dialogsAccept: Text[]
    dialogsDecline: Text[]
    dialogsComplete: Text[]
    dialogsFail: Text[]
}