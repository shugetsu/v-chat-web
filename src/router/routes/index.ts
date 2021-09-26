import type { RouteRecordRaw } from 'vue-router'

import { Root } from './Root'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { ForgetPassword } from './ForgetPassword'
import { IM } from './IM'

export const routes: RouteRecordRaw[] = [Root, SignIn, SignUp, ForgetPassword, IM]
