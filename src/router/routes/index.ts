import type { RouteRecordRaw } from 'vue-router'

import { Root } from './Root'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { ForgetPassword } from './ForgetPassword'

export const routes: RouteRecordRaw[] = [Root, SignIn, SignUp, ForgetPassword]
