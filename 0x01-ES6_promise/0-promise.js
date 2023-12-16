export default function getResponseFromAPI() {
  const success = true;
  const result = new Promise((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
  return result;
}
