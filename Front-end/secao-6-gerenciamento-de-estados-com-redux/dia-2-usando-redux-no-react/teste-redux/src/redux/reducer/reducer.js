const INITIAL_STATE = { count: 0 }

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
          return { count: state.count + action.payload };
        // case 'INCREMENT_COUNTER5':
        // return { count: state.count + 5 };
        default:
          return state;
      }
};

export default reducer;