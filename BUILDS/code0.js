gdjs.load_32sceneCode = {};
gdjs.load_32sceneCode.GDclickableObjects1= [];
gdjs.load_32sceneCode.GDclickableObjects2= [];
gdjs.load_32sceneCode.GDmiddleObjectObjects1= [];
gdjs.load_32sceneCode.GDmiddleObjectObjects2= [];
gdjs.load_32sceneCode.GDloadScreenObjects1= [];
gdjs.load_32sceneCode.GDloadScreenObjects2= [];
gdjs.load_32sceneCode.GDTitleObjects1= [];
gdjs.load_32sceneCode.GDTitleObjects2= [];
gdjs.load_32sceneCode.GDarrowObjects1= [];
gdjs.load_32sceneCode.GDarrowObjects2= [];

gdjs.load_32sceneCode.conditionTrue_0 = {val:false};
gdjs.load_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.load_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.load_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.load_32sceneCode.mapOfGDgdjs_46load_9532sceneCode_46GDarrowObjects1Objects = Hashtable.newFrom({"arrow": gdjs.load_32sceneCode.GDarrowObjects1});
gdjs.load_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("arrow"), gdjs.load_32sceneCode.GDarrowObjects1);

gdjs.load_32sceneCode.condition0IsTrue_0.val = false;
gdjs.load_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.load_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.load_32sceneCode.mapOfGDgdjs_46load_9532sceneCode_46GDarrowObjects1Objects, runtimeScene, true, false);
}if ( gdjs.load_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.load_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.load_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "room1", false);
}}

}


};

gdjs.load_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.load_32sceneCode.GDclickableObjects1.length = 0;
gdjs.load_32sceneCode.GDclickableObjects2.length = 0;
gdjs.load_32sceneCode.GDmiddleObjectObjects1.length = 0;
gdjs.load_32sceneCode.GDmiddleObjectObjects2.length = 0;
gdjs.load_32sceneCode.GDloadScreenObjects1.length = 0;
gdjs.load_32sceneCode.GDloadScreenObjects2.length = 0;
gdjs.load_32sceneCode.GDTitleObjects1.length = 0;
gdjs.load_32sceneCode.GDTitleObjects2.length = 0;
gdjs.load_32sceneCode.GDarrowObjects1.length = 0;
gdjs.load_32sceneCode.GDarrowObjects2.length = 0;

gdjs.load_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['load_32sceneCode'] = gdjs.load_32sceneCode;
