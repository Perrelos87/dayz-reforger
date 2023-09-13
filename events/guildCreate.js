const { GuildChannelManager } = require("discord.js");

module.exports = async (client, guild) => {
  try {
    // Registra los comandos de Slash en el servidor
    await require("../util/RegisterSlashCommands").RegisterGuildCommands(client, guild.id);

    const category = await guild.channels.create({
      name: "📋 𝐓𝐡𝐞 𝐋𝐚𝐬𝐭 𝐃𝐞𝐚𝐭𝐡 𝐟𝐞𝐞𝐝𝐬",
      type: "4",
      reason: "Creación de categoría para feeds",
    });

    const categoryId = category.id;

    const createChannel = async (name) => {
      await guild.channels.create({
        name: name,
        type: '0',
        parent: categoryId,
        permissionOverwrites: [{
          id: guild.roles.everyone.id,
          allow: ['1024', '2048', '8192'],
          deny: ['8']
        }]
      });
    }

    await createChannel("➖》online");
    await createChannel("➖》🚪-conexion");
    await createChannel("➖》💀-killfeed");
    await createChannel("➖》📡-gps");
    await createChannel("➖》👀-hitsfeed");
    await createChannel("➖》☠-Pvefeed");
    await createChannel("➖》🔨-Buildfeed");

    console.log("Canales y carpeta creados correctamente.");

  } catch (error) {
    console.error("Error al crear los canales y carpeta:", error);
  }
};
