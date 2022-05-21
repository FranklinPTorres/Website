    var numbers, roll_sum, rolls, string_lost, roll_value, string_play, string_won, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


numbers = [1, 2, 3, 4, 5, 6];
rolls = [];
string_lost = 'YOU LOST!';
string_play = 'Keep Playing!';
string_won = 'YOU WON!';


document.getElementById('button_remove').addEventListener('click', (event) => {
  if (roll_sum > 11) {
    rolls.shift();
    let element_list = document.getElementById('list');
    element_list.replaceChildren();
    rolls.forEach((item) => {
      let new_li = document.createElement('li');
      new_li.innerText = item;

      element_list.appendChild(new_li);
    });
    roll_sum = randomMember(rolls);
    let element_total = document.getElementById('total');
    element_total.innerText = roll_sum;
    let element_info = document.getElementById('info');
    element_info.innerText = string_play;
  }

});

document.getElementById('button_roll').addEventListener('click', (event) => {
  roll_sum = rolls.reduce((a,b) => a+b, 0);
  if (roll_sum < 11) {
    roll_value = randomMember(numbers);
    rolls.unshift(roll_value);
    roll_sum = rolls.reduce((a,b) => a+b, 0);
    let element_list2 = document.getElementById('list');
    let new_li2 = document.createElement('li');
    new_li2.innerText = roll_value;

    element_list2.appendChild(new_li2);
    let element_total2 = document.getElementById('total');
    element_total2.innerText = roll_sum;
    let element_info2 = document.getElementById('info');
    element_info2.innerText = string_play;
    if (roll_sum > 11) {
      let element_info3 = document.getElementById('info');
      element_info3.innerText = string_lost;
    }
    if (roll_sum == 11) {
      let element_info4 = document.getElementById('info');
      element_info4.innerText = string_won;
    }
  }

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  let element_info5 = document.getElementById('info');
  element_info5.innerText = string_play;
  rolls = [];
  let element_total3 = document.getElementById('total');
  element_total3.innerText = rolls.reduce((a,b) => a+b, 0);

});
