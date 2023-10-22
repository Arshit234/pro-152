AFRAME.registerComponent("move-sphere-on-click", {
    schema: {
        moveY: { type: "number", default: 1 }
    },
    tick: function () {
        window.addEventListener("click", (e) => {
            this.data.moveY = this.data.moveY + 0.005;
        })
        var pos = this.el.getAttribute("position");
        pos.y = this.data.moveY;
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    }
})