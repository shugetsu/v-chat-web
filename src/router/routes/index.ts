import type { RouteRecordRaw } from 'vue-router'

import { Root } from './Root'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export const routes: RouteRecordRaw[] = [Root, SignIn, SignUp]
