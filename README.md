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

Extra installation (until its properly added in tera-data)

included is the def C_GUARDIAN_TP (name is wip, I think the final name will be something like C_REQUEST_FIELD_EVENT_TELEPORT)

Place the def inside `tera-proxy/node_modules/tera-data/protocol` NOT THE node_modules FOLDER INSIDE BIN

Place the below opcode for your region in your opcode maps in `tera-proxy/node_modules/tera-data/map` 

NA = protocol.326439.map

NA OPCODE
`C_GUARDIAN_TP = 54316`
