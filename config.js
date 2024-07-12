const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "Strava"
global.ownerName = "✘ᴸᴼᴿᴰᴛᴀɪʀᴀ✘"
global.botNumber = "218912417014"
global.devNumber = ["2347080968564"]

global.Auto_Typing = false // auto typing
global.Auto_Recording = true // auto recording
global.Auto_ReadPesan = false // auto read messages

global.domain = "https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "LECCYOFC" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
