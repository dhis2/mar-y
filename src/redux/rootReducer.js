import { combineReducers } from 'redux'

import { dataElements } from './dataElements/reducer'
import { navigation } from './navigation'
import { schemas } from './schemas'
import { systemSettings } from './systemSettings'
import { userAuthorities } from './userAuthority'

export const rootReducer = combineReducers({
    navigation,
    schemas,
    systemSettings,
    userAuthorities,
    dataElements,
})
