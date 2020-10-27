const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search states.json and filter it
const searchStates = async searchText => {
  const res = await fetch('../data/states.json');
  const states = await res.json();

  
  // Get matches to current text input
  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex)
  });

  console.log(matches);
};

search.addEventListener('input', () => searchStates(search.value));