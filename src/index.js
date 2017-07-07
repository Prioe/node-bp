/* @flow */

import { userInfo, hostname, platform } from 'os'

const { username } = userInfo()

console.log(`Hello ${username} on ${hostname()} running ${platform()}!`)
