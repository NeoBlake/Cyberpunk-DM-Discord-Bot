const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require("discord.js");
const chalk = require("chalk");
async function stattemplates(interaction) {
    console.log("stattemplates has started")
    const Data = require("../../../models/temp");
    Data.findOne({
        userID: interaction.user.id
      }, async (err, data) => {      
        const { save } = require("../../save");
        const userRole = data.userRole.toLowerCase();
        if(data.statSelect === 1){
            //rockerboy role
                if(userRole === "rockerboy"){console.log("rockerboy stats selcted")
                    const { rockerboy } = require("./streetratstats/rockerboy")
                    rockerboy(interaction)
                    return
                };
            //solo role
                if(userRole === "solo"){console.log("solo stats selcted")
                    const { solo } = require("./streetratstats/solo")
                    solo(interaction)
                    return
                };
            //netrunner role
                if(userRole === "netrunner"){console.log("netrunner stats selcted")
                    const { netrunner } = require("./streetratstats/netrunner")
                    netrunner(interaction)
                    return
                };
            //tech role
                if(userRole === "tech"){console.log("tech stats selcted")
                    const { tech } = require("./streetratstats/tech")
                    tech(interaction)
                    return
                };
            //medtech role
                if(userRole === "medtech"){console.log("medtech stats selcted")
                    const { medtech } = require("./streetratstats/medtech")
                    medtech(interaction)
                    return
                };
            //Media role
                if(userRole === "media"){console.log("media stats selcted")
                    const { media } = require("./streetratstats/media")
                    media(interaction)
                    return
                };
            //lawman role
                if(userRole === "lawman"){console.log("lawman stats selcted")
                    const { lawman } = require("./streetratstats/lawman")
                    lawman(interaction)
                    return
                };
            //exec role
                if(userRole === "exec"){console.log("exec stats selcted")
                    const { exec } = require("./streetratstats/exec")
                    exec(interaction)
                    return
                };
            //fixer role
                if(userRole === "fixer"){console.log("fixer stats selcted")
                    const { fixer } = require("./streetratstats/fixer")
                    fixer(interaction)
                    return
                };
            //nomad
                if(userRole === "nomad"){console.log("nomad stats selcted")
                    const { nomad } = require("./streetratstats/nomad")
                    nomad(interaction)
                    return
                }else{
                    console.log("Stat creation failed")
                    const embed = new MessageEmbed()
                        embed.setTitle(`Error`);
                        embed.setDescription(`Creation of stats has fail.`)
                        await interaction.followUp( { embeds: [embed] } );
                    return
                }
        }
        if(data.statSelect === 2){
            //rockerboy
                if(userRole === "rockerboy"){console.log("rockerboy stats selcted")
                    const { rockerboy } = require("./edgerunnerstats/rockerboy")
                    rockerboy(interaction)
                    return
                };
            //solo role
                if(userRole === "solo"){console.log("solo stats selcted")
                    const { solo } = require("./edgerunnerstats/solo")
                    solo(interaction)
                    return
                };
            //netrunner role
                if(userRole === "netrunner"){console.log("netrunner stats selcted")
                    const { netrunner } = require("./edgerunnerstats/netrunner")
                    netrunner(interaction)
                    return
                };
            //tech role
                if(userRole === "tech"){console.log("tech stats selcted")
                    const { tech } = require("./edgerunnerstats/tech")
                    tech(interaction)
                    return
                };
            //medtech role
                if(userRole === "medtech"){console.log("medtech stats selcted")
                    const { medtech } = require("./edgerunnerstats/medtech")
                    medtech(interaction)
                    return
                };
            //Media role
                if(userRole === "media"){console.log("media stats selcted")
                    const { media } = require("./edgerunnerstats/media")
                    media(interaction)
                    return
                };
            //lawman role
                if(userRole === "lawman"){console.log("lawman stats selcted")
                    const { lawman } = require("./edgerunnerstats/lawman")
                    lawman(interaction)
                    return
                };
            //exec role
                if(userRole === "exec"){console.log("exec stats selcted")
                    const { exec } = require("./edgerunnerstats/exec")
                    exec(interaction)
                    return
                };
            //fixer role
                if(userRole === "fixer"){console.log("fixer stats selcted")
                    const { fixer } = require("./edgerunnerstats/fixer")
                    fixer(interaction)
                    return
                };
            //nomad
                if(userRole === "nomad"){console.log("nomad stats selcted")
                    const { nomad } = require("./edgerunnerstats/nomad")
                    nomad(interaction)
                    return
                }else{
                    console.log("Stat creation failed")
                    const embed = new MessageEmbed()
                        embed.setTitle(`Error`);
                        embed.setDescription(`Creation of stats has fail.`)
                        await interaction.followUp( { embeds: [embed] } );
                    return
                }
        }
        if(data.statSelect === 3){
        const embed = new MessageEmbed()
                embed.setTitle(`Error`);
                embed.setDescription(`Not setup.\nPlease run again.`)
                await interaction.followUp( { embeds: [embed] } );
                data.statSelect = data.statSelect - 1
                data.save()
            return
        //     const { compstats } = require("./completestats/compstats")
        //     compstats(interaction)
        //     return
        }
        else{
            console.log("Stat creation failed")
            const embed = new MessageEmbed()
                embed.setTitle(`Error`);
                embed.setDescription(`Creation of stats has fail.`)
                await interaction.followUp( { embeds: [embed] } );
            return
        }
        console.log("stattemplates has ended you souldn't see this")
    })};
module.exports = {
    stattemplates
}