const Discord = require('discord.js');
const B = new Discord.Client();
const D = ['460976885036220426'];
const A = "#";
const P = "#";
//---------------------------------------------------------
B.on('error', (err) => console.log(err));
B.on('ready', () => console.log(`Launching...`))
//---------------------------------------------------------
B.on('ready', () => {
    console.log("|-----------------------------|")
    console.log("|        BOT IS ONLINE        |")
    console.log("|-----------------------------|")
});
//---------------------------------------------------------
B.on('message', M => {
    var R = M.content.split(' ').slice(1).join(' ');
    var MEGA = M.content.toLowerCase();
    if (!D.includes(M.author.id)) return;
    if (MEGA.startsWith(A + 'setw')) {
        B.user.setActivity(R, {type:'WATCHING'});
            M.channel.send(`**Bot Activity Now Is :** \`Watching ${R}\``)
    } else 
    if (MEGA.startsWith(A + 'setl')) {
        B.user.setActivity(R , {type:'LISTENING'});
            M.channel.send(`**Bot Activity Now Is :** \`Listening ${R}\``)
    } else 
    if (MEGA.startsWith(A + 'setp')) {
        B.user.setActivity(R , {type:'PLAYING'});
            M.channel.send(`**Bot Activity Now Is :** \`Playing ${R}\``)
    } else 
    if (MEGA.startsWith(A + 'sets')) {
        B.user.setGame(R, "https://www.twitch.tv/osama_gmt");
            M.channel.send(`**Bot Activity Now Is :** \`Streaming ${R}\``)
    } else
    if (MEGA.startsWith(A + 'setn')) {
        B.user.setUsername(R).then
            M.channel.send(`**Bot UserName Changed To :** \` ${R}\``)
    } else
    if (MEGA.startsWith(A + 'seta')) {
        B.user.setAvatar(R);
            M.channel.send(`**Bot Avatar Changed To :** \` ${R}\``)
}});
//---------------------------------------------------------
B.on('message', M =>{
	var MEGA = M.content.toLowerCase();
    if (MEGA.startsWith(P + 'ping')) {
    let S = Date.now(); M.channel.send('pong').then(M => { 
        M.edit(`\`\`\`javascript
Time taken: ${Date.now() - S} ms
Discord API: ${B.ping.toFixed(0)} ms\`\`\``);
})}});
//---------------------------------------------------------
B.on('message', M => {
  if(!M.channel.guild) return;
  if(M.content.startsWith(P + 'Rainbow')) {
  let role = M.guild.roles.find('name', 'Rainbow')
  if(role) return 
  M.channel.send(`This Step Already Completed !`)
  if(!role){
   rainbow = M.guild.createRole({
   name: "Rainbow",
   color: "#000000",
   permissions:[]
})}
   M.channel.send('Done The Rainbow Role Setup Has Been Completed')
}})
//---------------------------------------------------------
B.on('ready', () => {
  setInterval(function(){
  B.guilds.forEach(g => {
  var role = g.roles.find('name', 'Rainbow');
  if (role) {
  role.edit({color : "RANDOM" });
}})},5000);
})

B.login(process.env.BOT_TOKEN3);
