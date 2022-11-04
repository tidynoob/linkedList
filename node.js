const node = (value = null, next = null) => {
  return {
    value,
    next,
    // adjustValue: (newValue) => {
    //   this.value = newValue;
    // },
  };
};

export default node;
