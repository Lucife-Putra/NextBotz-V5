import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${wm};;;\nFN:${wm}\nORG:${wm}\nTITLE:\nitem1.TEL;waid=${nomorown}:${nomorownv2}\nitem1.X-ABLabel:AbiDev\nX-WA-BIZ-DESCRIPTION:Ada Yang Bisa Saya Bantu?\nX-WA-BIZ-NAME:${wm}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }},)
  }
  }
handler.help = ['pengembang']
handler.tags = ['info']

handler.command = /^(pengembang)$/i

export default handler