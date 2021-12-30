// getting the elements from the DOM
const cp = document.querySelector('#mark-c');
const dp = document.querySelector('#mark-d');
const cr = document.querySelector('#rank-c');
const dr = document.querySelector('#rank-d');
const crr = document.querySelector('#ranked-c');
const cpr = document.querySelector('#marked-c');
const tt = document.querySelector('#totalText');
const tt3 = document.querySelector('.totalText4');
var slider02 = document.getElementById("rangeText2");
const ttrw =document.querySelector('.rwtotalp');
const ttrt2 =document.querySelector('.rwtotalt2');
const ppt = document.querySelector('.pptext');
//getting the clicked text of the rank
const ranktxt = document.getElementById("totalText2");
const ranktxt2 = document.getElementById("totalText4");

// getting elements relating to the toggle options
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
const s4 = document.querySelector('#s4');
var rwprice = ttrw.textContent;
// defining a class to handle price finding
class Finder {
  finder = {
    // pricing
    // start of iron
    'Iron+I+Iron+I': {amap:0, bmap:0},
    'Iron+I+Iron+II': {amap:0, bmap:0},
    'Iron+I+Iron+III': {amap:0, bmap:0},
    'Iron+I+Iron+IV': {amap:0, bmap:0},
    'Iron+I+Bronze+I': {amap:11.5, bmap:4},
    'Iron+I+Bronze+II':{amap: 6.5, bmap:2},
    'Iron+I+Bronze+III':{amap: 5, bmap:2},
    'Iron+I+Bronze+IV':{amap: 1.5, bmap:2},
    'Iron+I+Silver+I':{amap: 29, bmap:8},
    'Iron+I+Silver+II':{amap: 24.5, bmap:8},
    'Iron+I+Silver+III':{amap: 19.8, bmap:6},
    'Iron+I+Silver+IV':{amap: 14.3, bmap:6},
    'Iron+I+Gold+I':{amap: 64, bmap:12},
    'Iron+I+Gold+II':{amap: 57, bmap:12},
    'Iron+I+Gold+III':{amap:48, bmap:10},
    'Iron+I+Gold+IV':{amap: 37.5, bmap:10},
    'Iron+I+Platinum+I':{amap: 111, bmap:12},
    'Iron+I+Platinum+II':{amap: 95, bmap:12},
    'Iron+I+Platinum+III':{amap: 92, bmap:12},
    'Iron+I+Platinum+IV':{amap: 80, bmap:12},
    'Iron+I+Emerald+I':{amap: 212, bmap:12},
    'Iron+I+Emerald+II':{amap: 182.7, bmap:12},
    'Iron+I+Emerald+III':{amap:154.4, bmap:12},
    'Iron+I+Emerald+IV':{amap: 132.3, bmap:12},
    'Iron+I+Diamond+I':{amap: 416.1, bmap:12},
    'Iron+I+Diamond+II':{amap: 354.4, bmap:12},
    'Iron+I+Diamond+III':{amap:292.6, bmap:12},
    'Iron+I+Diamond+IV':{amap: 238.7, bmap:12},
    'Iron+I+Master+I':{amap: 500, bmap:12},
    'Iron+I+Master+II':{amap: 500, bmap:12},
    'Iron+I+Master+III':{amap:500, bmap:12},
    'Iron+I+Master+IV':{amap: 500, bmap:12},
    'Iron+II+Iron+I':{amap: 1, bmap:2},
    'Iron+II+Iron+II':{amap: 0, bmap:0},
    'Iron+II+Iron+III':{amap: 0, bmap:0},
    'Iron+II+Iron+IV':{amap: 0, bmap:0},
    'Iron+II+Bronze+I':{amap: 12, bmap:6},
    'Iron+II+Bronze+II':{amap: 8.5, bmap:4},
    'Iron+II+Bronze+III':{amap: 6.5, bmap:2},
    'Iron+II+Bronze+IV':{amap: 2, bmap:2},
    'Iron+II+Silver+I':{amap: 31, bmap:10},
    'Iron+II+Silver+II':{amap: 26, bmap:8},
    'Iron+II+Silver+III':{amap: 21.5, bmap:8},
    'Iron+II+Silver+IV':{amap: 16.3, bmap:6},
    'Iron+II+Gold+I':{amap: 69.99, bmap:12},
    'Iron+II+Gold+II':{amap: 59, bmap:12},
    'Iron+II+Gold+III':{amap: 50.4, bmap:12},
    'Iron+II+Gold+IV':{amap: 41.4, bmap:10},
    'Iron+II+Platinum+I':{amap: 112, bmap:12},
    'Iron+II+Platinum+II':{amap: 102.4, bmap:12},
    'Iron+II+Platinum+III':{amap:95.3, bmap:12},
    'Iron+II+Platinum+IV':{amap: 84.1, bmap:12},
    'Iron+II+Emerald+I':{amap: 212, bmap:12},
    'Iron+II+Emerald+II':{amap: 187, bmap:12},
    'Iron+II+Emerald+III':{amap:157, bmap:12},
    'Iron+II+Emerald+IV':{amap: 132, bmap:12},
    'Iron+II+Diamond+I':{amap: 422, bmap:12},
    'Iron+II+Diamond+II':{amap: 352, bmap:12},
    'Iron+II+Diamond+III':{amap: 292, bmap:12},
    'Iron+II+Diamond+IV':{amap: 240, bmap:12},
    'Iron+II+Master+I':{amap: 506, bmap:12},
    'Iron+II+Master+II':{amap: 506, bmap:12},
    'Iron+II+Master+III':{amap: 506, bmap:12},
    'Iron+II+Master+IV':{amap: 506, bmap:12},
    'Iron+III+Iron+I':{amap: 2, bmap:2},
    'Iron+III+Iron+II':{amap: 1, bmap:2},
    'Iron+III+Iron+III':{amap: 0, bmap:0},
    'Iron+III+Iron+IV':{amap: 0, bmap:0},
    'Iron+III+Bronze+I':{amap: 14, bmap:6},
    'Iron+III+Bronze+II':{amap: 12, bmap:6},
    'Iron+III+Bronze+III':{amap: 7.5, bmap:4},
    'Iron+III+Bronze+IV':{amap: 5.5, bmap:2},
    'Iron+III+Silver+I':{amap: 34, bmap:10},
    'Iron+III+Silver+II':{amap: 29, bmap:10},
    'Iron+III+Silver+III':{amap: 23, bmap:8},
    'Iron+III+Silver+IV':{amap: 19, bmap:8},
    'Iron+III+Gold+I':{amap: 71, bmap:12},
    'Iron+III+Gold+II':{amap: 61, bmap:12},
    'Iron+III+Gold+III':{amap: 52, bmap:12},
    'Iron+III+Gold+IV':{amap: 43.5, bmap:12},
    'Iron+III+Platinum+I':{amap: 117, bmap:12},
    'Iron+III+Platinum+II':{amap: 102, bmap:12},
    'Iron+III+Platinum+III':{amap: 95, bmap:12},
    'Iron+III+Platinum+IV':{amap: 84, bmap:12},
    'Iron+III+Emerald+I':{amap: 212, bmap:12},
    'Iron+III+Emerald+II':{amap: 187, bmap:12},
    'Iron+III+Emerald+III':{amap:162, bmap:12},
    'Iron+III+Emerald+IV':{amap: 137, bmap:12},
    'Iron+III+Diamond+I':{amap: 422, bmap:12},
    'Iron+III+Diamond+II':{amap: 357, bmap:12},
    'Iron+III+Diamond+III':{amap: 294, bmap:12},
    'Iron+III+Diamond+IV':{amap: 244, bmap:12},
    'Iron+III+Master+I':{amap: 509, bmap:12},
    'Iron+III+Master+II':{amap: 509, bmap:12},
    'Iron+III+Master+III':{amap:509, bmap:12},
    'Iron+III+Master+IV':{amap: 509, bmap:12},
    'Iron+IV+Iron+I':{amap: 3, bmap:2},
    'Iron+IV+Iron+II':{amap: 2, bmap:2},
    'Iron+IV+Iron+III':{amap: 1, bmap:2},
    'Iron+IV+Iron+IV':{amap: 0, bmap:0},
    'Iron+IV+Bronze+I':{amap: 17, bmap:8},
    'Iron+IV+Bronze+II':{amap: 13, bmap:6},
    'Iron+IV+Bronze+III':{amap: 9, bmap:6},
    'Iron+IV+Bronze+IV':{amap: 7, bmap:4},
    'Iron+IV+Silver+I':{amap: 37, bmap:12},
    'Iron+IV+Silver+II':{amap: 32, bmap:10},
    'Iron+IV+Silver+III':{amap: 24.99, bmap:10},
    'Iron+IV+Silver+IV':{amap: 20, bmap:8},
    'Iron+IV+Gold+I':{amap: 73, bmap:12},
    'Iron+IV+Gold+II':{amap: 64, bmap:12},
    'Iron+IV+Gold+III':{amap: 54, bmap:12},
    'Iron+IV+Gold+IV':{amap: 45, bmap:12},
    'Iron+IV+Platinum+I':{amap: 117, bmap:12},
    'Iron+IV+Platinum+II':{amap: 107, bmap:12},
    'Iron+IV+Platinum+III':{amap:97, bmap:12},
    'Iron+IV+Platinum+IV':{amap: 87, bmap:12},
    'Iron+IV+Emerald+I':{amap: 217, bmap:12},
    'Iron+IV+Emerald+II':{amap: 192, bmap:12},
    'Iron+IV+Emerald+III':{amap:162, bmap:12},
    'Iron+IV+Emerald+IV':{amap: 139, bmap:12},
    'Iron+IV+Diamond+I':{amap: 426, bmap:12},
    'Iron+IV+Diamond+II':{amap: 356, bmap:12},
    'Iron+IV+Diamond+III':{amap:296, bmap:12},
    'Iron+IV+Diamond+IV':{amap: 246, bmap:12},
    'Iron+IV+Master':{amap: 512, bmap:12},
    'Iron+IV+Master':{amap: 512, bmap:12},
    'Iron+IV+Master':{amap:512, bmap:12},
    'Iron+IV+Master':{amap: 512, bmap:12},

    // end of iron
    // start of Bronze

    'Bronze+I+Bronze+I':{amap: 32, bmap:10},
    'Bronze+I+Bronze+II':{amap: 33, bmap:10},
    'Bronze+I+Bronze+III':{amap: 34, bmap:10},
    'Bronze+I+Bronze+IV':{amap: 35, bmap:10},
    'Bronze+I+Silver+I':{amap: 36, bmap:10},
    'Bronze+I+Silver+II':{amap: 37, bmap:10},
    'Bronze+I+Silver+III':{amap: 38, bmap:10},
    'Bronze+I+Silver+IV':{amap: 39, bmap:10},
    'Bronze+I+Gold+I':{amap: 40, bmap:10},
    'Bronze+I+Gold+II':{amap: 41, bmap:10},
    'Bronze+I+Gold+III':{amap:42, bmap:10},
    'Bronze+I+Gold+IV':{amap: 43, bmap:10},
    'Bronze+I+Platinum+I':{amap: 44, bmap:10},
    'Bronze+I+Platinum+II':{amap: 45, bmap:10},
    'Bronze+I+Platinum+III':{amap:46, bmap:10},
    'Bronze+I+Platinum+IV':{amap: 47, bmap:10},
    'Bronze+I+Emerald+I':{amap: 48, bmap:10},
    'Bronze+I+Emerald+II':{amap: 49, bmap:10},
    'Bronze+I+Emerald+III':{amap:50, bmap:10},
    'Bronze+I+Emerald+IV':{amap: 51, bmap:10},
    'Bronze+I+Diamond+I':{amap: 52, bmap:10},
    'Bronze+I+Diamond+II':{amap: 53, bmap:10},
    'Bronze+I+Diamond+III':{amap: 54, bmap:10},
    'Bronze+I+Diamond+IV':{amap: 55, bmap:10},
    'Bronze+I+Master+I':{amap: 56, bmap:10},
    'Bronze+I+Master+II':{amap: 57, bmap:10},
    'Bronze+I+Master+III':{amap:58, bmap:10},
    'Bronze+I+Master+IV':{amap: 59, bmap:10},
    'Bronze+II+Iron+I':{amap: 50, bmap:10},
    'Bronze+II+Iron+II':{amap: 0, bmap:10},
    'Bronze+II+Iron+III':{amap: 0, bmap:10},
    'Bronze+II+Iron+IV':{amap: 0, bmap:10},
    'Bronze+II+Bronze+I':{amap: 32, bmap:10},
    'Bronze+II+Bronze+II':{amap: 33, bmap:10},
    'Bronze+II+Bronze+III':{amap: 34, bmap:10},
    'Bronze+II+Bronze+IV':{amap: 35, bmap:10},
    'Bronze+II+Silver+I':{amap: 36, bmap:10},
    'Bronze+II+Silver+II':{amap: 37, bmap:10},
    'Bronze+II+Silver+III':{amap: 38, bmap:10},
    'Bronze+II+Silver+IV':{amap: 39, bmap:10},
    'Bronze+II+Gold+I':{amap: 40, bmap:10},
    'Bronze+II+Gold+II':{amap: 41, bmap:10},
    'Bronze+II+Gold+III':{amap:42, bmap:10},
    'Bronze+II+Gold+IV':{amap: 43, bmap:10},
    'Bronze+II+Platinum+I':{amap: 44, bmap:10},
    'Bronze+II+Platinum+II':{amap: 45, bmap:10},
    'Bronze+II+Platinum+III':{amap:46, bmap:10},
    'Bronze+II+Platinum+IV':{amap: 47, bmap:10},
    'Bronze+II+Emerald+I':{amap: 48, bmap:10},
    'Bronze+II+Emerald+II':{amap: 49, bmap:10},
    'Bronze+II+Emerald+III':{amap:50, bmap:10},
    'Bronze+II+Emerald+IV':{amap: 51, bmap:10},
    'Bronze+II+Diamond+I':{amap: 52, bmap:10},
    'Bronze+II+Diamond+II':{amap: 53, bmap:10},
    'Bronze+II+Diamond+III':{amap: 54, bmap:10},
    'Bronze+II+Diamond+IV':{amap: 55, bmap:10},
    'Bronze+II+Master+I':{amap: 56, bmap:10},
    'Bronze+II+Master+II':{amap: 57, bmap:10},
    'Bronze+II+Master+III':{amap:58, bmap:10},
    'Bronze+II+Master+IV':{amap: 59, bmap:10},
    'Bronze+III+Iron+I':{amap: 50, bmap:10},
    'Bronze+III+Iron+II':{amap: 0, bmap:10},
    'Bronze+III+Iron+III':{amap: 0, bmap:10},
    'Bronze+III+Iron+IV':{amap: 0, bmap:10},
    'Bronze+III+Bronze+I':{amap: 32, bmap:10},
    'Bronze+III+Bronze+II':{amap: 33, bmap:10},
    'Bronze+III+Bronze+III':{amap: 34, bmap:10},
    'Bronze+III+Bronze+IV':{amap: 35, bmap:10},
    'Bronze+III+Silver+I':{amap: 36, bmap:10},
    'Bronze+III+Silver+II':{amap: 37, bmap:10},
    'Bronze+III+Silver+III':{amap: 38, bmap:10},
    'Bronze+III+Silver+IV':{amap: 39, bmap:10},
    'Bronze+III+Gold+I':{amap: 40, bmap:10},
    'Bronze+III+Gold+II':{amap: 41, bmap:10},
    'Bronze+III+Gold+III':{amap:42, bmap:10},
    'Bronze+III+Gold+IV':{amap: 43, bmap:10},
    'Bronze+III+Platinum+I':{amap: 44, bmap:10},
    'Bronze+III+Platinum+II':{amap: 45, bmap:10},
    'Bronze+III+Platinum+III':{amap:46, bmap:10},
    'Bronze+III+Platinum+IV':{amap: 47, bmap:10},
    'Bronze+III+Emerald+I':{amap: 48, bmap:10},
    'Bronze+III+Emerald+II':{amap: 49, bmap:10},
    'Bronze+III+Emerald+III':{amap:50, bmap:10},
    'Bronze+III+Emerald+IV':{amap: 51, bmap:10},
    'Bronze+III+Diamond+I':{amap: 52, bmap:10},
    'Bronze+III+Diamond+II':{amap: 53, bmap:10},
    'Bronze+III+Diamond+III':{amap: 54, bmap:10},
    'Bronze+III+Diamond+IV':{amap: 55, bmap:10},
    'Bronze+III+Master+I':{amap: 56, bmap:10},
    'Bronze+III+Master+II':{amap: 57, bmap:10},
    'Bronze+III+Master+III':{amap:58, bmap:10},
    'Bronze+III+Master+IV':{amap: 59, bmap:10},
    'Bronze+IV+Iron+I':{amap: 50, bmap:10},
    'Bronze+IV+Iron+II':{amap: 0, bmap:10},
    'Bronze+IV+Iron+III':{amap: 0, bmap:10},
    'Bronze+IV+Iron+IV':{amap: 0, bmap:10},
    'Bronze+IV+Bronze+I':{amap: 32, bmap:10},
    'Bronze+IV+Bronze+II':{amap: 33, bmap:10},
    'Bronze+IV+Bronze+III':{amap: 34, bmap:10},
    'Bronze+IV+Bronze+IV':{amap: 35, bmap:10},
    'Bronze+IV+Silver+I':{amap: 36, bmap:10},
    'Bronze+IV+Silver+II':{amap: 37, bmap:10},
    'Bronze+IV+Silver+III':{amap: 38, bmap:10},
    'Bronze+IV+Silver+IV':{amap: 39, bmap:10},
    'Bronze+IV+Gold+I':{amap: 40, bmap:10},
    'Bronze+IV+Gold+II':{amap: 41, bmap:10},
    'Bronze+IV+Gold+III':{amap:42, bmap:10},
    'Bronze+IV+Gold+IV':{amap: 43, bmap:10},
    'Bronze+IV+Platinum+I':{amap: 44, bmap:10},
    'Bronze+IV+Platinum+II':{amap: 45, bmap:10},
    'Bronze+IV+Platinum+III':{amap:46, bmap:10},
    'Bronze+IV+Platinum+IV':{amap: 47, bmap:10},
    'Bronze+IV+Emerald+I':{amap: 48, bmap:10},
    'Bronze+IV+Emerald+II':{amap: 49, bmap:10},
    'Bronze+IV+Emerald+III':{amap:50, bmap:10},
    'Bronze+IV+Emerald+IV':{amap: 51, bmap:10},
    'Bronze+IV+Diamond+I':{amap: 52, bmap:10},
    'Bronze+IV+Diamond+II':{amap: 53, bmap:10},
    'Bronze+IV+Diamond+III':{amap: 54, bmap:10},
    'Bronze+IV+Diamond+IV':{amap: 55, bmap:10},
    'Bronze+IV+Master+I':{amap: 56, bmap:10},
    'Bronze+IV+Master+II':{amap: 57, bmap:10},
    'Bronze+IV+Master+III':{amap:58, bmap:10},
    'Bronze+IV+Master+IV':{amap: 59, bmap:10},
    //end of bronze


    //RANKEDWINS
    'Iron+I+1':{amap: 18.7, bmap:10},
    'Iron+I+2':{amap: 13.5, bmap:10},
    'Iron+I+3':{amap: 8.3, bmap:10},
    'Iron+I+4':{amap: 3.1, bmap:10},
    'Iron+I+5':{amap: 18.7, bmap:10},
    'Iron+I+6':{amap: 13.5, bmap:10},
    'Iron+I+7':{amap: 8.3, bmap:10},
    'Iron+I+8':{amap: 3.1, bmap:10},
    'Iron+I+9':{amap: 18.7, bmap:10},
    'Iron+I+10':{amap: 13.5, bmap:10},
    'Iron+I+11':{amap: 19.5, bmap:10},
    'Iron+I+12':{amap: 22.5, bmap:10},
    'Iron+I+13':{amap: 26.5, bmap:10},
    'Iron+I+14':{amap: 29.5, bmap:10},
    'Iron+I+15':{amap: 34.5, bmap:10},
    'Iron+II+1':{amap: 18.7, bmap:10},
    'Iron+II+2':{amap: 13.5, bmap:10},
    'Iron+II+3':{amap: 8.3, bmap:10},
    'Iron+II+4':{amap: 3.1, bmap:10},
    'Iron+II+5':{amap: 18.7, bmap:10},
    'Iron+II+6':{amap: 13.5, bmap:10},
    'Iron+II+7':{amap: 8.3, bmap:10},
    'Iron+II+8':{amap: 3.1, bmap:10},
    'Iron+II+9':{amap: 18.7, bmap:10},
    'Iron+II+10':{amap: 13.5, bmap:10},
    'Iron+II+11':{amap: 19.5, bmap:10},
    'Iron+II+12':{amap: 22.5, bmap:10},
    'Iron+II+13':{amap: 26.5, bmap:10},
    'Iron+II+14':{amap: 29.5, bmap:10},
    'Iron+II+15':{amap: 34.5, bmap:10},
    'Iron+III+1':{amap: 18.7, bmap:10},
    'Iron+III+2':{amap: 13.5, bmap:10},
    'Iron+III+3':{amap: 8.3, bmap:10},
    'Iron+III+4':{amap: 3.1, bmap:10},
    'Iron+III+5':{amap: 18.7, bmap:10},
    'Iron+III+6':{amap: 13.5, bmap:10},
    'Iron+III+7':{amap: 8.3, bmap:10},
    'Iron+III+8':{amap: 3.1, bmap:10},
    'Iron+III+9':{amap: 18.7, bmap:10},
    'Iron+III+10':{amap: 13.5, bmap:10},
    'Iron+III+11':{amap: 19.5, bmap:10},
    'Iron+III+12':{amap: 22.5, bmap:10},
    'Iron+III+13':{amap: 26.5, bmap:10},
    'Iron+III+14':{amap: 29.5, bmap:10},
    'Iron+III+15':{amap: 34.5, bmap:10},
    'Iron+IV+1':{amap: 18.7, bmap:10},
    'Iron+IV+2':{amap: 13.5, bmap:10},
    'Iron+IV+3':{amap: 8.3, bmap:10},
    'Iron+IV+4':{amap: 3.1, bmap:10},
    'Iron+IV+5':{amap: 18.7, bmap:10},
    'Iron+IV+6':{amap: 13.5, bmap:10},
    'Iron+IV+7':{amap: 8.3, bmap:10},
    'Iron+IV+8':{amap: 3.1, bmap:10},
    'Iron+IV+9':{amap: 18.7, bmap:10},
    'Iron+IV+10':{amap: 13.5, bmap:10},
    'Iron+IV+11':{amap: 19.5, bmap:10},
    'Iron+IV+12':{amap: 22.5, bmap:10},
    'Iron+IV+13':{amap: 26.5, bmap:10},
    'Iron+IV+14':{amap: 29.5, bmap:10},
    'Iron+IV+15':{amap: 34.5, bmap:10},

    '1games':{amap: 1, bmap:10},
    '2games':{amap: 2, bmap:10},
    '3games':{amap: 3, bmap:10},
    '4games':{amap: 4, bmap:10},
    '5games':{amap: 5, bmap:10},
    '6games':{amap: 6, bmap:10},
    '7games':{amap: 77, bmap:10},
    '8games':{amap: 8, bmap:10},
    '9games':{amap: 8.5, bmap:10},
    '10games':{amap: 9.5, bmap:10},
    '11games':{amap: 10.5, bmap:10},
    '12games':{amap: 11.5, bmap:10},
    '13games':{amap: 12.5, bmap:10},
    '14games':{amap: 13.5, bmap:10},
    '15games':{amap: 13, bmap:10},
    '16games':{amap: 14, bmap:10},
    '17games':{amap: 15, bmap:10},
    '18games':{amap: 16, bmap:10},
    '19games':{amap: 17, bmap:10},
    '20games':{amap: 18, bmap:10},
    '21games':{amap: 17.5, bmap:10},
    '22games':{amap: 18, bmap:10},
    '23games':{amap: 18.5, bmap:10},
    '24games':{amap: 19, bmap:10},
    '25games':{amap: 19.5, bmap:10},
    '26games':{amap: 20, bmap:10},
    '27games':{amap: 21.5, bmap:10},
    '28games':{amap: 22, bmap:10},
    '29games':{amap: 22.5, bmap:10},
    '30games':{amap: 23, bmap:10},

  };

  constructor() {}

  // for returning the price based on selection
  find(com) {
    return this.finder[com];
  }

  // for modifying the bgcolor of the division btn
  modClass(el) {
    const btns = el.querySelectorAll('button');
    btns.forEach((btn) => {
      if (btn.classList.contains('btn_active')) {
        btn.classList.remove('btn_active');
      }
    });
  }
}
var rbtime;
var rwtime;
var normaldate;
// invoking the Finder class
var finder = new Finder();

// current divsion selection state tracker
var csst;
// desired division selection state tracker
var dsst;
// current rank selection state tracker
var crst;
// desired rank selection state tracker
var drst;
// desired rank selection state tracker
var inputslider;
// Input slider state tracker

var slider3;
// // desired marked rank selection state tracker

// total price tracker
var gp;
// toggle increment tracker
var ti;
// listening for click function on current
var csst_cpr;
var crst_crr;
var rbprice;
cp.onclick = (e) => {
  if (e.target.classList.contains('mark-no')) {
    const btn = e.target;
    finder.modClass(cp);
    btn.classList.add('btn_active');
    csst = btn.innerText.trim(' ');
    if (dsst) {
      l = `${crst}+${csst}+${drst}+${dsst}`;
      li = `${crst} ${csst} to ${drst} ${dsst}`;
      l2 = `${crst} - rank ${csst} `;
      ranktxt.textContent = `${li}`;
      l = finder.find(l) || 0;
      rbprice = l.amap;
      rbtime = l.bmap;
      
      tt.innerText = `$${l.amap}`;
      
      gp = l;
    } else {
      console.log(drst);
      // you can perform any other operation here
      l = `${crst}+${csst}+${drst}+${dsst}`;
      rbprice = l.amap;
      rbtime = l.bmap;
      
    }
    
    if (crst) {
      l2 = `${crst} ${csst} `;
      ranktxt.textContent = `${l2}`;
      
      let l = `${crst}+${csst}+${drst}+${dsst}`;
      l = finder.find(l) || 0;
      rbprice = l.amap;
      rbtime = l.bmap;
    }
  }
};


cpr.onclick = (e) => {
  if (e.target.classList.contains('mark-no')) {
    const btn = e.target;
    finder.modClass(cpr);
    btn.classList.add('btn_active');
    inputslider = slider2.value;
    csst = btn.innerText.trim(' ');
    csst_cpr = csst;
    if (csst) {
      l = `${crst}+${csst}+${inputslider}`;
      l2 = `${crst} ${csst} with ${inputslider} ranked wins`;
      ttrt2.textContent = `${l2}`;
      l = finder.find(l) || 0;
      ttrw.innerText = `$${l.amap}`;
      rwtime = l.bmap;
      
      gp = l;
    } else {
      l = `${crst}+${csst}+${inputslider}`;
      l2 = `${crst} ${csst} with ${inputslider} ranked wins`;
      l = `${crst}+${csst}+${inputslider}`;
      rwtime = l.bmap;
      
    }
    
    if (crst) {
      l2 = `${crst} ${csst} with ${inputslider} ranked wins`;
      ttrt2.textContent = `${l2}`;
      let l = `${crst}+${csst}+${inputslider}`;
      l = finder.find(l) || 0;
      ttrw.innerText = `$${l.amap}`;
      rwtime = l.bmap;
    }
  }
};

// listening for click function on desired
dp.onclick = (e) => {
  if (e.target.classList.contains('mark-no')) {
    const btn = e.target;
    finder.modClass(dp);
    btn.classList.add('btn_active');
    dsst = btn.innerText.trim(' ');
    if (csst) {
      l = `${crst}+${csst}+${drst}+${dsst}`;
      l3 = `${drst} ${dsst}`;
      ranktxt2.textContent = `${l3}`;
      l = finder.find(l) || 0;
      tt.innerText = `$${l.amap}`;
      rbprice = l.amap;
            rbtime = l.bmap;

      gp = l;
    }  else {      console.log(drst);
      l3 = `${drst} ${dsst}`;
      ranktxt2.textContent = `${l3}`;
        l = `${crst}+${csst}+${drst}+${dsst}`;
        l = finder.find(l) || 0;
               tt.innerText = `$${l.amap}`;
        gp = l.amap;
        rbprice = l.amap;
              rbtime = l.bmap;

    }    
    
    if (dsst) {
      l3 = `${drst} ${dsst}`;
      ranktxt2.textContent = `${l3}`;
        let l = `${crst}+${csst}+${drst}+${dsst}`;
        l = finder.find(l) || 0;
      tt.innerText = `$${l.amap}`;
      gp = l.amap;
      rbprice = l.amap;
            rbtime = l.bmap;
      }
  }
};

cr.onclick = (e) => {
  if (e.target.tagName.toLowerCase() === 'img') {
    let btn = e.target.parentElement;
    finder.modClass(cr);
    btn.classList.add('btn_active');
    crst = btn.id;
    if (csst) {
      l2 = `${crst} ${csst} `;
      ranktxt.textContent = `${l2}`;
        let l = `${crst}+${csst}+${drst}+${dsst}`;
        l = finder.find(l) || 0;
        tt.innerText = `$${l.amap}`;
        gp = l.amap;
        rbprice = l.amap;
              rbtime = l.bmap;
    }
  } else if (e.target.tagName.toLowerCase() === 'button') {
    let btn = e.target;
    crst = btn.id;
    if (csst) {
      l2 = `${crst} ${csst} `;
      ranktxt.textContent = `${l2}`;
      let l = `${crst}+${csst}+${drst}+${dsst}`;
      l = finder.find(l) || 0;
      tt.innerText = `$${l.amap}`;
      gp = l.amap;
      rbprice = l.amap;
            rbtime = l.bmap;
    };
              rbtime = l.bmap;  }
};
crr.onclick = (e) => {
  if (e.target.tagName.toLowerCase() === 'img') {
    let btn = e.target.parentElement;
    finder.modClass(crr);
    btn.classList.add('btn_active');
    inputslider = slider2.value;
    crst = btn.id;
    crst_crr = crst
    if (csst) {
      l2 = `${crst} ${csst} with ${inputslider} ranked wins`;
      ttrt2.textContent = `${l2}`;
        let l = `${crst}+${csst}+${inputslider}`;
        l = finder.find(l) || 0;
        ttrw.innerText = `$${l.amap}`;
        gp = l.amap;
              rwtime = l.bmap;
    }
    else{
      l2 = `${crst} ${csst} with ${inputslider} ranked wins`;
      ttrt2.textContent = `${l2}`;
      let l = `${crst}+${csst}+${inputslider}`;
      l = finder.find(l) || 0;
      ttrw.innerText = `$${l.amap}`;
      gp = l.amap;
            rwtime = l.bmap;
    }
  } else if (e.target.tagName.toLowerCase() === 'button') {
    let btn = e.target;
    crst = btn.id;
    if (csst) {
      l2 = `${crst} ${csst} with ${inputslider} ranked wins`;
      ttrt2.textContent = `${l2}`;
      let l = `${crst}+${csst}+${inputslider}`;
      l = finder.find(l) || 0;
      ttrw.innerText = `$${l.amap}`;
      gp = l.amap;
            rwtime = l.bmap;
    }
    else{
      l2 = `${crst} ${csst} with ${inputslider} ranked wins`;
      ttrt2.textContent = `${l2}`;
      let l = `${crst}+${csst}+${inputslider}`;
      l = finder.find(l) || 0;
      ttrw.innerText = `$${l.amap}`;
      gp = l.amap;
            rwtime = l.bmap;
    }
  }
};

dr.onclick = (e) => {
  if (e.target.tagName.toLowerCase() === 'img') {
    let btn = e.target.parentElement;
    finder.modClass(dr);
    btn.classList.add('btn_active');
    drst = btn.id;
    if (dsst) {
      l3 = `${drst} ${dsst}`;
      ranktxt2.textContent = `${l3}`;
      let l = `${crst}+${csst}+${drst}+${dsst}`;
      l = finder.find(l) || 0;
      tt.innerText = `$${l.amap}`;
      gp = l.amap;
      rbprice = l.amap;
                  rbtime = l.bmap;
    }
  } else if (e.target.tagName.toLowerCase() === 'button') {
    let btn = e.target;
    drst = btn.id;
    if (dsst) {
      l3 = `${drst} ${dsst}`;
      ranktxt2.textContent = `${l3}`;
      let l = `${crst}+${csst}+${drst}+${dsst}`;
      l = finder.find(l) || 0;
      tt.innerText = `$${l.amap}`;
      gp = l.amap;
      rbprice = l.amap;
                  rbtime = l.bmap;
    }
  }
};


s1.onclick = (e) => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const el = e.target;
    const add = el.parentElement.querySelector('sup').innerText.trim();
    if (add != 'FREE') {
      if (el.checked) {
        const toggleans = {
          toggle2: 40,
          toggle3: 20,
          toggle4: 15
        }
        let l = `${crst}+${csst}+${drst}+${dsst}`;
        l = finder.find(l);
        const tope = el.id;
        const inc = toggleans[tope];
       let ti = Math.round((inc / 100) * l.amap);
        const cpr = tt.innerText.replace('$','');
        const npp = Math.round((Number(cpr) + ti) * 10) / 10;
        tt.innerText = `$${npp}`;
        gp = npp;
      } else {
        const toggleans = {
          toggle2: 40,
          toggle3: 20,
          toggle4: 15
        }
        let l = `${crst}+${csst}+${drst}+${dsst}`;
        l = finder.find(l);
        const tope = el.id;
        const inc = toggleans[tope];
       let ti = Math.round((inc / 100) * l.amap);
        const cpr = tt.innerText.replace('$','');
        const np =  Math.round((Number(cpr) - ti) * 10) / 10;
        tt.innerText = `$${np}`;
        gp = np;
      }
    }
  }
};


var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("rangeText3");
const tt38 = document.querySelector('.totalText4');
const ttnormal = document.querySelector('.ttnor');
output3.innerHTML = slider3.value;
var slider3calc;
slider3.oninput = function() {
  output3.innerHTML = this.value;
  ttnormal.innerHTML = `${this.value} games `;
  finder.modClass(slider3);
  let l = `${this.value}games`;
  l = finder.find(l) || 0;
  tt38.innerText = `$${l.amap}`;
  slider3calc = l.amap;
  gp = l.amap;
  normaldate = l.bmap;


}

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("rangeText2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
    finder.modClass(slider2);
   let inputslider = this.value;
    let l = `${crst || 0}+${csst || 0}+${inputslider}`;
    l = finder.find(l) || 0;
    ttrw.innerText = `$${l.amap}`;
    gp = l.amap;
    l2 = `${crst || null} ${csst || null} with ${inputslider} ranked wins`;
    ttrt2.textContent = `${l2}`;
}

// var slider1 = document.getElementById("myRange");
// var output1 = document.getElementById("rangeText");
// output1.innerHTML = slider1.value;

// slider1.oninput = function() {
//     output1.innerHTML = this.value;
//     ppt.textContent = this.value;
// }


// s2.onclick = (e) => {
//   if (e.target.tagName.toLowerCase() === 'input') {
//     const el = e.target;
//     const add = el.parentElement.querySelector('sup').innerText.trim();
//     if (add != 'FREE') {
//       if (el.checked) {
//         const toggleans = {
//           toggle2: 40,
//           toggle3: 20,
//           toggle4: 15
//         }
//         let l = `${crst}+${csst}+${drst}+${dsst}`;
//         l = finder.find(l);
//         const tope = el.id;
//         const inc = toggleans[tope];
//        let ti = Math.round((inc / 100) * l);
//         const cpr = tt.innerText.replace('$','');
//         const npp = Math.round((Number(cpr) + ti) * 10) / 10;
//         tt.innerText = `$${npp}`;
//         gp = npp;
//       } else {
//         const toggleans = {
//           toggle2: 40,
//           toggle3: 20,
//           toggle4: 15
//         }
//         let l = `${crst}+${csst}+${drst}+${dsst}`;
//         l = finder.find(l);
//         const tope = el.id;
//         const inc = toggleans[tope];
//        let ti = Math.round((inc / 100) * l);
//         const cpr = tt.innerText.replace('$','');
//         const np =  Math.round((Number(cpr) - ti) * 10) / 10;
//         tt.innerText = `$${np}`;
//         gp = np;
//       }
//     }
//   }
// };



s3.onclick = (e) => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const el = e.target;
    let inputslider = slider2.value;
    const add = el.parentElement.querySelector('sup').innerText.trim();
    if (add != 'FREE') {
      if (el.checked) {
        const toggleans = {
          toggle11: 40,
          toggle12: 20,
          toggle13: 15
        }
        let l = `${crst || 0}+${csst || 0}+${inputslider}`;
        l = finder.find(l);
        const tope = el.id;
        const inc = toggleans[tope];
        let ti = Math.round((inc / 100) * l.amap);
        const cpr = ttrw.innerText.replace('$','');
        const npp = Math.round((Number(cpr) + ti) * 10) / 10;
        ttrw.innerText = `$${npp}`;
        gp = npp;
      } else {
        const toggleans = {
          toggle11: 40,
          toggle12: 20,
          toggle13: 15
        }
        let l = `${crst || 0}+${csst || 0}+${inputslider}`;
        l = finder.find(l);
        const tope = el.id;
        const inc = toggleans[tope];
       let ti = Math.round((inc / 100) * l.amap);
        const cpr = ttrw.innerText.replace('$','');
        const np =  Math.round((Number(cpr) - ti) * 10) / 10;
        ttrw.innerText = `$${np}`;
        gp = np;
      }
    }
  }
};

s4.onclick = (e) => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const el = e.target;
    const add = el.parentElement.querySelector('sup').innerText.trim();
    if (add != 'FREE') {
      if (el.checked) {
        const toggleans = {
          toggle2: 40,
          toggle3: 20,
          toggle4: 15
        }
        // let l = `${crst}+${csst}+${drst}+${dsst}`;
        // l = finder.find(l);
        const tope = el.id;
        const inc = toggleans[tope];
       let ti = Math.round((inc / 100) * slider3calc);
        const cpr = tt.innerText.replace('$','');
        const npp = Math.round((Number(cpr) + ti) * 10) / 10;
        tt.innerText = `$${npp}`;
        gp = npp;
      } else {
        const toggleans = {
          toggle2: 40,
          toggle3: 20,
          toggle4: 15
        }
        // let l = `${crst}+${csst}+${drst}+${dsst}`;
        // l = finder.find(l);
        const tope = el.id;
        const inc = toggleans[tope];
       let ti = Math.round((inc / 100) * slider3calc);
        const cpr = tt.innerText.replace('$','');
        const np =  Math.round((Number(cpr) - ti) * 10) / 10;
        tt.innerText = `$${np}`;
        gp = np;
      }
    }
  }
};

