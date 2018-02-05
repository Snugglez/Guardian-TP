# Guardian-TP


Allows you to teleport to guardian missions via command
Saving time by not needing to open your map, click the quest, and click the confirm window

`!gut`
`!bleak`
`!eyes`
`!tu`
`!crab`
`!balder`
The commands should be pretty self explanatory

Exclude the "!" if used in /8 or proxy chat channel

Commands are also easily changed if need be in the script

for example if you would want `!gut` to be something like `!gtp1` just change
`command.add('gut', () => {`
to
`command.add('gtp1', () => {`
The same goes for any other command, as long as they don't conflict with another modules commands
