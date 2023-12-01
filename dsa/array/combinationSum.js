const combinationSum = (candidates, target) => {
  const buffer = [];
  const output = [];
  const helper = (startId) => {
    if (target < 0) return;
    if (target === 0) return output.push([...buffer]);
    while (candidates[startId]) {
      buffer.push(candidates[startId]);
      target = target - candidates[startId];
      helper(startId);
      target = target + candidates[startId];
      buffer.pop();
      startId++;
    }
  };
  helper(0);
  return output;
};
