// getting the elements from the DOM
const cp = document.querySelector('#mark-c');
const dp = document.querySelector('#mark-d');
const cr = document.querySelector('#rank-c');
const dr = document.querySelector('#rank-d');
const crr = document.querySelector('#ranked-c');
const drr = document.querySelector('#marked-c');
const tt = document.querySelector('#totalText');

// getting elements relating to the toggle options
const s1 = document.querySelector('#s1');

// defining a class to handle price finding
class Finder {
  finder = {
    // pricing
    'iron+I+0/2+iron+I': 0,

    // start of iron
    // 'Iron+I+Iron+I': 0,
    // 'iron+I+iron+II': 1,
    // 'iron+I+iron+III': 2,
    // 'iron+I+iron+IV': 3,
    // 'iron+I+bronze+I': 4,
    // 'iron+I+bronze+II': 5,
    // 'iron+I+bronze+III': 6,
    // 'iron+I+bronze+IV': 7,
    // 'iron+I+silver+I': 8,
    // 'iron+I+silver+II': 9,
    // 'iron+I+silver+III': 10,
    // 'iron+I+silver+IV': 11,
    // 'iron+I+Gold+I': 12,
    // 'iron+I+Gold+II': 12.6,
    // 'iron+I+Gold+III':13,
    // 'iron+I+Gold+IV': 14,
    // 'iron+I+Platinum+I': 15,
    // 'iron+I+Platinum+II': 16,
    // 'iron+I+Platinum+III':17,
    // 'iron+I+Platinum+IV': 18.6,
    // 'iron+I+Emerald+I': 16,
    // 'iron+I+Emerald+II': 17,
    // 'iron+I+Emerald+III':18,
    // 'iron+I+Emerald+IV': 19,
    // 'iron+I+Diamond+I': 20,
    // 'iron+I+Diamond+II': 21,
    // 'iron+I+Diamond+III':22,
    // 'iron+I+Diamond+IV': 23,
    // 'iron+I+Master+I': 24,
    // 'iron+I+Master+II': 25,
    // 'iron+I+Master+III':26,
    // 'iron+I+Master+IV': 27,

    // end of iron
    // start of bronze
    // 'Bronze+I+iron+I': 28,
    // 'Bronze+II+iron+II': 29,
    // 'Bronze+III+iron+III': 30,
    // 'Bronze+IV+iron+IV': 31,
    // 'Bronze+I+bronze+I': 32,
    // 'Bronze+II+bronze+II': 33,
    // 'Bronze+III+bronze+III': 34,
    // 'Bronze+IV+bronze+IV': 35,
    // 'Bronze+I+silver+I': 36,
    // 'Bronze+II+silver+II': 37,
    // 'Bronze+III+silver+III': 38,
    // 'Bronze+IV+silver+IV': 39,
    // 'Bronze+I+Gold+I': 40,
    // 'Bronze+II+Gold+II': 41,
    // 'Bronze+III+Gold+III':42,
    // 'Bronze+IV+Gold+IV': 43,
    // 'Bronze+I+Platinum+I': 44,
    // 'Bronze+II+Platinum+II': 45,
    // 'Bronze+III+Platinum+III':46,
    // 'Bronze+IV+Platinum+IV': 47,
    // 'Bronze+I+Emerald+I': 48,
    // 'Bronze+II+Emerald+II': 49,
    // 'Bronze+III+Emerald+III':50,
    // 'Bronze+IV+Emerald+IV': 51,
    // 'Bronze+I+Diamond+I': 52,
    // 'Bronze+II+Diamond+II': 53,
    // 'Bronze+III+Diamond+III': 54,
    // 'Bronze+IV+Diamond+IV': 55,
    // 'Bronze+I+Master+I': 56,
    // 'Bronze+II+Master+II': 57,
    // 'Bronze+III+Master+III':58,
    // 'Bronze+IV+Master+IV': 59,
    //end of bronze
    'I+I': 5,
    'I+II': 10,
    'I+III': 15,
    'I+IV': 20,
    'II+I': 25,
    'II+II': 30,
    'II+III': 35,
    'II+IV': 40,
    'III+I': 45,
    'III+II': 50,
    'III+III': 55,
    'III+IV': 60,
    'IV+I': 65,
    'IV+II': 70,
    'IV+III': 75,
    'IV+IV': 80,
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

// invoking the Finder class
finder = new Finder();

// current divsion selection state tracker
var csst;
// desired division selection state tracker
var dsst;
// current rank selection state tracker
var crst;
// desired rank selection state tracker
var drst;
// desired rank selection state tracker
var crrst;
// current ranked rank selection state tracker
var drrst;
// current marked rank selection state tracker

// total price tracker
var gp;
// toggle increment tracker
var ti;

// listening for click function on current
cp.onclick = (e) => {
  if (e.target.classList.contains('mark-no')) {
    const btn = e.target;
    finder.modClass(cp);
    btn.classList.add('btn_active');
    csst = btn.innerText.trim(' ');
    if (dsst) {
      l = `${csst}+${dsst}`;
      console.log(l);
      // you can display the price here
      l = finder.find(l);
      tt.innerText = `$${l}`;
      gp = l;
    } else {
      // you can perform any other operation here
    }

    if (crst) {
      let l = `${crst}+${csst}`;
      console.log(l);
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
      l = `${csst}+${dsst}`;
      console.log(l);
      // you can display the price here
      l = finder.find(l);
      tt.innerText = `$${l}`;
      gp = l;
    } else {
    }
  }
};

// listening for click function on current rank
cr.onclick = (e) => {
  console.log();
  if (e.target.tagName.toLowerCase() === 'img') {
    let btn = e.target.parentElement;
    finder.modClass(cr);
    btn.classList.add('btn_active');
    crst = btn.id;
    if (csst) {
      let l = `${crst}+${csst}`;
      console.log(l);
    }
  } else if (e.target.tagName.toLowerCase() === 'button') {
    let btn = e.target;
    crst = btn.id;
    if (csst) {
      let l = `${crst}+${csst}`;
      console.log(l);
    }
  }
};

dr.onclick = (e) => {
  console.log();
  if (e.target.tagName.toLowerCase() === 'img') {
    let btn = e.target.parentElement;
    finder.modClass(dr);
    btn.classList.add('btn_active');
    drst = btn.id;
    if (dsst) {
      let l = `${drst}+${dsst}`;
      console.log(l);
    }
  } else if (e.target.tagName.toLowerCase() === 'button') {
    let btn = e.target;
    drst = btn.id;
    if (dsst) {
      let l = `${drst}+${dsst}`;
      console.log(l);
    }
  }
};

crr.onclick = (e) => {
  console.log();
  if (e.target.tagName.toLowerCase() === 'img') {
    let btn = e.target.parentElement;
    finder.modClass(crr);
    btn.classList.add('btn_active');
    crrst = btn.id;
    if (csst) {
      let l = `${crrst}+${csst}`;
      console.log(l);
    }
  } else if (e.target.tagName.toLowerCase() === 'button') {
    let btn = e.target;
    crrst = btn.id;
    if (csst) {
      let l = `${crrst}+${csst}`;
      console.log(l);
    }
  }
};

drr.onclick = (e) => {
  if (e.target.classList.contains('mark-no')) {
    const btn = e.target;
    finder.modClass(drr);
    btn.classList.add('btn_active');
    dsst = btn.innerText.trim(' ');
    if (csst) {
      l = `${csst}+${dsst}`;
      console.log(l);
      // you can display the price here
      l = finder.find(l);
      tt.innerText = `$${l}`;
      gp = l;
    } else {
    }
  }
};

// listening for even on s1 -- the first toggle box
s1.onclick = (e) => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const el = e.target;
    const add = el.parentElement.querySelector('sup').innerText.trim();
    if (add != 'FREE') {
      if (el.checked) {
        // extracting number out of the string
        const top = Number(add.match(/(\d+)/)[0]);
        // tracking the increment
        ti = gp * (top / 100);
        const np = gp + ti;
        tt.innerText = `$${np}`;
        gp = np;
      } else {
        // extracting number out of the string
        const top = Number(add.match(/(\d+)/)[0]);
        const np = gp - ti;
        tt.innerText = `$${np}`;
        gp = np;
      }
    }
  }
};
