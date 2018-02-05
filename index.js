const Command = require('command');
module.exports = function guardiantp(dispatch) {
const command = Command(dispatch)

command.add('gut', () => {
dispatch.toServer('C_GUARDIAN_TP', 1, {
zone: 7011,
type: 1
})})

command.add('bleak', () => {
dispatch.toServer('C_GUARDIAN_TP', 1, {
zone: 7012,
type: 1
})})

command.add('eyes', () => {
dispatch.toServer('C_GUARDIAN_TP', 1, {
zone: 7003,
type: 1
})})

command.add('tu', () => {
dispatch.toServer('C_GUARDIAN_TP', 1, {
zone: 7001,
type: 2
})})

command.add('crab', () => {
dispatch.toServer('C_GUARDIAN_TP', 1, {
zone: 7014,
type: 2
})})

command.add('balder', () => {
dispatch.toServer('C_GUARDIAN_TP', 1, {
zone: 7015,
type: 1
})})

}