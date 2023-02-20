gdjs.room1Code = {};
gdjs.room1Code.GDclickableObjects1= [];
gdjs.room1Code.GDclickableObjects2= [];
gdjs.room1Code.GDclickableObjects3= [];
gdjs.room1Code.GDmiddleObjectObjects1= [];
gdjs.room1Code.GDmiddleObjectObjects2= [];
gdjs.room1Code.GDmiddleObjectObjects3= [];
gdjs.room1Code.GDdeskObjects1= [];
gdjs.room1Code.GDdeskObjects2= [];
gdjs.room1Code.GDdeskObjects3= [];
gdjs.room1Code.GDtextBackObjects1= [];
gdjs.room1Code.GDtextBackObjects2= [];
gdjs.room1Code.GDtextBackObjects3= [];
gdjs.room1Code.GDtextDisplayObjects1= [];
gdjs.room1Code.GDtextDisplayObjects2= [];
gdjs.room1Code.GDtextDisplayObjects3= [];
gdjs.room1Code.GDarrowRObjects1= [];
gdjs.room1Code.GDarrowRObjects2= [];
gdjs.room1Code.GDarrowRObjects3= [];
gdjs.room1Code.GDarrowLObjects1= [];
gdjs.room1Code.GDarrowLObjects2= [];
gdjs.room1Code.GDarrowLObjects3= [];
gdjs.room1Code.GDobjectiveRoomOneObjects1= [];
gdjs.room1Code.GDobjectiveRoomOneObjects2= [];
gdjs.room1Code.GDobjectiveRoomOneObjects3= [];

gdjs.room1Code.conditionTrue_0 = {val:false};
gdjs.room1Code.condition0IsTrue_0 = {val:false};
gdjs.room1Code.condition1IsTrue_0 = {val:false};
gdjs.room1Code.condition2IsTrue_0 = {val:false};


gdjs.room1Code.asyncCallback8088628 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("objectiveRoomOne"), gdjs.room1Code.GDobjectiveRoomOneObjects2);
{for(var i = 0, len = gdjs.room1Code.GDobjectiveRoomOneObjects2.length ;i < len;++i) {
    gdjs.room1Code.GDobjectiveRoomOneObjects2[i].hide();
}
}}
gdjs.room1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.room1Code.asyncCallback8088628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.room1Code.mapOfGDgdjs_46room1Code_46GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.room1Code.GDclickableObjects1});
gdjs.room1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.room1Code.GDclickableObjects1, gdjs.room1Code.GDclickableObjects2);


gdjs.room1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.room1Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room1Code.GDclickableObjects2[i].getVariableString(gdjs.room1Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "penStand" ) {
        gdjs.room1Code.condition0IsTrue_0.val = true;
        gdjs.room1Code.GDclickableObjects2[k] = gdjs.room1Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room1Code.GDclickableObjects2.length = k;}if (gdjs.room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("textDisplay"), gdjs.room1Code.GDtextDisplayObjects2);
{for(var i = 0, len = gdjs.room1Code.GDtextDisplayObjects2.length ;i < len;++i) {
    gdjs.room1Code.GDtextDisplayObjects2[i].setString("You clicked on penStand");
}
}}

}


{

gdjs.copyArray(gdjs.room1Code.GDclickableObjects1, gdjs.room1Code.GDclickableObjects2);


gdjs.room1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.room1Code.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.room1Code.GDclickableObjects2[i].getVariableString(gdjs.room1Code.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "book" ) {
        gdjs.room1Code.condition0IsTrue_0.val = true;
        gdjs.room1Code.GDclickableObjects2[k] = gdjs.room1Code.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.room1Code.GDclickableObjects2.length = k;}if (gdjs.room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("textDisplay"), gdjs.room1Code.GDtextDisplayObjects2);
{for(var i = 0, len = gdjs.room1Code.GDtextDisplayObjects2.length ;i < len;++i) {
    gdjs.room1Code.GDtextDisplayObjects2[i].setString("You clicked on a book");
}
}}

}


{

/* Reuse gdjs.room1Code.GDclickableObjects1 */

gdjs.room1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.room1Code.GDclickableObjects1.length;i<l;++i) {
    if ( gdjs.room1Code.GDclickableObjects1[i].getVariableString(gdjs.room1Code.GDclickableObjects1[i].getVariables().getFromIndex(0)) == "desktop" ) {
        gdjs.room1Code.condition0IsTrue_0.val = true;
        gdjs.room1Code.GDclickableObjects1[k] = gdjs.room1Code.GDclickableObjects1[i];
        ++k;
    }
}
gdjs.room1Code.GDclickableObjects1.length = k;}if (gdjs.room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("textDisplay"), gdjs.room1Code.GDtextDisplayObjects1);
{for(var i = 0, len = gdjs.room1Code.GDtextDisplayObjects1.length ;i < len;++i) {
    gdjs.room1Code.GDtextDisplayObjects1[i].setString("You clicked on a desktop");
}
}}

}


};gdjs.room1Code.eventsList2 = function(runtimeScene) {

{


gdjs.room1Code.condition0IsTrue_0.val = false;
{
gdjs.room1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.room1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.room1Code.GDclickableObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "external layout", 0, 0);
}{for(var i = 0, len = gdjs.room1Code.GDclickableObjects1.length ;i < len;++i) {
    gdjs.room1Code.GDclickableObjects1[i].hide();
}
}
{ //Subevents
gdjs.room1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.room1Code.GDclickableObjects1);

gdjs.room1Code.condition0IsTrue_0.val = false;
gdjs.room1Code.condition1IsTrue_0.val = false;
{
gdjs.room1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.room1Code.mapOfGDgdjs_46room1Code_46GDclickableObjects1Objects, runtimeScene, true, false);
}if ( gdjs.room1Code.condition0IsTrue_0.val ) {
{
gdjs.room1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.room1Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.room1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.room1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.room1Code.GDclickableObjects1.length = 0;
gdjs.room1Code.GDclickableObjects2.length = 0;
gdjs.room1Code.GDclickableObjects3.length = 0;
gdjs.room1Code.GDmiddleObjectObjects1.length = 0;
gdjs.room1Code.GDmiddleObjectObjects2.length = 0;
gdjs.room1Code.GDmiddleObjectObjects3.length = 0;
gdjs.room1Code.GDdeskObjects1.length = 0;
gdjs.room1Code.GDdeskObjects2.length = 0;
gdjs.room1Code.GDdeskObjects3.length = 0;
gdjs.room1Code.GDtextBackObjects1.length = 0;
gdjs.room1Code.GDtextBackObjects2.length = 0;
gdjs.room1Code.GDtextBackObjects3.length = 0;
gdjs.room1Code.GDtextDisplayObjects1.length = 0;
gdjs.room1Code.GDtextDisplayObjects2.length = 0;
gdjs.room1Code.GDtextDisplayObjects3.length = 0;
gdjs.room1Code.GDarrowRObjects1.length = 0;
gdjs.room1Code.GDarrowRObjects2.length = 0;
gdjs.room1Code.GDarrowRObjects3.length = 0;
gdjs.room1Code.GDarrowLObjects1.length = 0;
gdjs.room1Code.GDarrowLObjects2.length = 0;
gdjs.room1Code.GDarrowLObjects3.length = 0;
gdjs.room1Code.GDobjectiveRoomOneObjects1.length = 0;
gdjs.room1Code.GDobjectiveRoomOneObjects2.length = 0;
gdjs.room1Code.GDobjectiveRoomOneObjects3.length = 0;

gdjs.room1Code.eventsList2(runtimeScene);

return;

}

gdjs['room1Code'] = gdjs.room1Code;
