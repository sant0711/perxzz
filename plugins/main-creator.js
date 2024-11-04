let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Perzz 🥷🏻;;\nFN:Perzz 🥷🏻\nORG:Perzz 🥷🏻\nTITLE:\nitem1.TEL;waid=529612683719:529612683719\nitem1.X-ABLabel:Perzz 🥷🏻\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Perzz 🥷🏻\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
