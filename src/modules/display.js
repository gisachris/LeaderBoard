import scoreHolder from "../index.js";

let scoresList = document.querySelector('.scoresList');

const styling = () => {
  let listInstances = document.querySelectorAll('.listInstance');
  listInstances.forEach((instance) => {
    if(instance.getAttribute('data-index') % 2 === 0){
      instance.style.backgroundColor = 'white';
    }else {
      instance.style.backgroundColor = '#d5d5d5';
    }
  })  
}

const displayContent = () => {
  //const scoresList = document.querySelector('.scoresList');
  if (!scoresList) {
    console.error("Unable to find 'scoresList' element.");
    return;
  }

  scoresList.innerHTML = '';
  scoreHolder.forEach((obj) => {
    const li = document.createElement('li');
    li.classList.add('listInstance');
    li.setAttribute('data-index', obj.index);
    li.textContent = `${obj.name}: ${obj.score}`;
    scoresList.appendChild(li);
  });

  styling();
};

export default displayContent;
