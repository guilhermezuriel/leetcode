export function execute(tests: Array<any>, callback: Function) {
  for (let test of tests) {
    console.log(`TEST (${test}) =>`, callback(test));
  }
}
