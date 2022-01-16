
const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.initPhysicsDebug()
    }

    start () {
    }

    initPhysicsDebug():void{
          //绘制调试信息
          cc.director.getPhysicsManager().enabled = true;
          //16 = cc.PhysicsManager.e_centerOfMassBit
          cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit | 16 | cc.PhysicsManager.DrawBits.e_jointBit;
   
         //重力
         cc.director.getPhysicsManager().gravity = cc.v2(0,-320);
   
          // 开启物理步长的设置
         var manager = cc.director.getPhysicsManager();
         manager.enabledAccumulator = true;
         // 物理步长，默认 FIXED_TIME_STEP 是 1/60
         cc.PhysicsManager.FIXED_TIME_STEP = 1/60;
         // 每次更新物理系统处理速度的迭代次数，默认为 10
         cc.PhysicsManager.VELOCITY_ITERATIONS = 8;
         // 每次更新物理系统处理位置的迭代次数，默认为 10
         cc.PhysicsManager.POSITION_ITERATIONS = 8;
    }

    // update (dt) {}
}
