// UUID Raykon JSON file path

const statsFile = "../stats-api/uuids/raykon.json";

fetch(statsFile)
    .then(response => response.json())
    .then(data => {

        // Example: display the number of stone blocks mined

        const stoneMined =
            data.stats["minecraft:mined"]["minecraft:stone"];

        document.getElementById("stoneMined").textContent = stoneMined;
    })
    .catch(error => {
        console.error("Error cargando stats:", error);
    });
