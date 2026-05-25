const coreModelInstance = {
    version: "1.0.945",
    registry: [321, 1508, 796, 562, 1382, 848, 1013, 1234],
    init: function() {
        const nodes = this.registry.filter(x => x > 278);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreModelInstance.init();
});