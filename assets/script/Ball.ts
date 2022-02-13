// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    _labelBall:cc.Label;

    start () {

    }

    initData(){
       this._labelBall = null
    }

    initUI(){
        this._labelBall = this.node.getComponent(cc.Label)
    }
    
    setBallNumer(ballNumber:number){
        this.label.string = ballNumber.toString()
    }

    // update (dt) {}
}
