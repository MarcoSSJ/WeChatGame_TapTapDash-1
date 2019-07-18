// 人物驱动


cc.Class({
    extends: cc.Component,
    properties: {

    },
    onLoad() {
        // 人物静止，永远不动
        this.path = this.node.parent.getChildByName('path')
        this.playerPosition = {
            x: this.node.x - this.path.x,
            y: this.node.y - this.path.y
        }
        this.player = this.getComponent(cc.Animation)
        this.player.play('txy')

        // 正在跳高
        this.jumpStart = false
            // 跳跃结束
        this.jumpend = false
            // Y向跳跃
        this.AxisY = false
        this.AxisXM = false
        this.AxisXP = false
<<<<<<< HEAD
        this.jumpSpan = 275
        this.timeSpan = 0.029
        this.schedule(function() {
            this.jumpY()
            this.jumpXM()
            this.jumpXP()
        }, this.timeSpan)
=======
        this.jumpSpan = 290
        this.timeSpan = 0.028
        this.schedule(function(){
           this.jumpY()
           this.jumpXM()
           this.jumpXP()
        },this.timeSpan)
>>>>>>> 56ba3e133f4fbcee70a6f22349c97b24d84428bf
    },
    // 检查人物的坐标是否越过了方块
    checkPosition: function(exist) {
        // 获取人物相对于路径原点的坐标
        this.playerPosition = {
            x: this.node.x - this.path.x,
            y: this.node.y - this.path.y
        }
        let curblockPosition = this.path.getComponent('Path').getPosition()
            // 人物未脱离砖块范围
        if ((Math.abs(curblockPosition.x - this.playerPosition.x) < 120 ||
<<<<<<< HEAD
                Math.abs(curblockPosition.y - this.playerPosition.y) < 120) && exist === true) {
            return true
        } else if (exist === false && (this.AxisXM || this.AxisXP || this.AxisY)) {
=======
            Math.abs(curblockPosition.y - this.playerPosition.y) < 120) && exist === true) {
            return true
        } else if(exist === false && (this.AxisXM || this.AxisXP || this.AxisY)){ 
>>>>>>> 56ba3e133f4fbcee70a6f22349c97b24d84428bf
            // 虽然不存在但是正在跳跃
            return true
        } else {
            // 那只有一死
            return false
        }
    },
<<<<<<< HEAD
    rotatePlayer: function(direct) {
        if (direct != false) {
            this.jumpStart = false
            this.jumpend = false
        }
        // 人物有6个状态
        if (direct === 'vertical')
            this.node.setRotation(0)
        else if (direct === 'left')
            this.node.setRotation(-90)
        else if (direct === 'right')
            this.node.setRotation(90)
        else if (direct === 'jumpY' || direct === 'jumpXM' || direct === 'jumpXP') {
            this.jumpStart = true
            if (direct === 'jumpY') {
                this.AxisY = true
                this.AxisXM = false
                this.AxisXP = false
            } else if (direct === 'jumpXM') {
                this.AxisXM = true
                this.AxisY = false
                this.AxisXP = false
            } else if (direct === 'jumpXP') {
                this.AxisXP = true
                this.AxisY = false
                this.AxisXM = false
            }
        }
=======
    rotatePlayer:function(direct){
       if(direct != false) {
           this.jumpStart = false
           this.jumpend = false
       }
       // 人物有6个状态
       if(direct === 'vertical')
        this.node.setRotation(0)
       else if(direct === 'left')
       this.node.setRotation(-90)
       else if(direct === 'right')
       this.node.setRotation(90)
       else if(direct === 'jumpY' || direct === 'jumpXM' || direct === 'jumpXP'){
         this.jumpStart = true
         if(direct === 'jumpY'){
              this.AxisY = true
              this.AxisXM = false
              this.AxisXP = false
         } else if(direct === 'jumpXM'){
             this.AxisXM = true
             this.AxisY = false
             this.AxisXP = false
         } else if(direct === 'jumpXP'){
            this.AxisXP = true
            this.AxisY = false
            this.AxisXM = false
         }
       }
>>>>>>> 56ba3e133f4fbcee70a6f22349c97b24d84428bf
    },
    pausePlayer: function() {
        this.player.pause()
    },
<<<<<<< HEAD
    jumpY: function() {
        if (this.AxisXM === true || this.AxisXP === true) return

        if (this.jumpStart && this.node.y < this.jumpSpan) {
            this.node.setPosition(this.node.x, this.node.y + 30)
        } else if (this.jumpStart && this.node.y >= this.jumpSpan) {
            this.jumpStart = false
        } else if (this.jumpend == false && this.node.y > 0) {
            this.node.setPosition(this.node.x, this.node.y - 30)
        } else if (this.jumpend == false && this.node.y <= 0) {
            this.AxisY = false
            return
        }
    },
    jumpXP: function() {
        if (this.AxisXM === true || this.AxisY === true) return

        if (this.jumpStart && this.node.x < this.jumpSpan) {
            this.node.setPosition(this.node.x + 30, this.node.y)
=======
    jumpY:function(){
        if(this.AxisXM === true || this.AxisXP === true) return

       if(this.jumpStart && this.node.y < this.jumpSpan){
           this.node.setPosition(this.node.x,this.node.y + 30)
       } else if (this.jumpStart && this.node.y >= this.jumpSpan) {
           this.jumpStart = false
       } else if (this.jumpend == false && this.node.y > 0) {
          this.node.setPosition(this.node.x,this.node.y - 30)
       } else if (this.jumpend == false && this.node.y <= 0) {
           this.AxisY = false
           return
       }
    },
    jumpXP:function(){
        if(this.AxisXM === true || this.AxisY === true) return

        if(this.jumpStart && this.node.x < this.jumpSpan){
            this.node.setPosition(this.node.x + 30,this.node.y)
>>>>>>> 56ba3e133f4fbcee70a6f22349c97b24d84428bf
        } else if (this.jumpStart && this.node.x >= this.jumpSpan) {
            this.jumpStart = false
        } else if (this.jumpend == false && this.node.x > 0) {
            this.node.setPosition(this.node.x - 30, this.node.y)
        } else if (this.jumpend == false && this.node.x <= 0) {
            this.AxisXP = false
            return
        }
    },
<<<<<<< HEAD
    jumpXM: function() {
        if (this.AxisY === true || this.AxisXP === true) return

        if (this.jumpStart && this.node.x > -this.jumpSpan) {
            this.node.setPosition(this.node.x - 30, this.node.y)
        } else if (this.jumpStart && this.node.x <= -this.jumpSpan) {
            this.jumpStart = false
        } else if (this.jumpend == false && this.node.x < 0) {
            this.node.setPosition(this.node.x + 30, this.node.y)
=======
    jumpXM:function(){
        if(this.AxisY === true || this.AxisXP === true) return

        if(this.jumpStart && this.node.x > -this.jumpSpan){
            this.node.setPosition(this.node.x - 30,this.node.y)
        } else if (this.jumpStart && this.node.x <= -this.jumpSpan) {
            this.jumpStart = false
        } else if (this.jumpend == false && this.node.x < 0) {
           this.node.setPosition(this.node.x + 30,this.node.y)
>>>>>>> 56ba3e133f4fbcee70a6f22349c97b24d84428bf
        } else if (this.jumpend == false && this.node.x >= 0) {
            this.AxisXM = false
            return
        }
    }
});