import ora from "ora";

function startSpinner(spinnerMessage) {
  const spinner = ora(spinnerMessage).start();
  return spinner;
}

export { startSpinner };