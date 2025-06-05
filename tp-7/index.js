import { format } from 'date-fns';
import chalk from 'chalk';

const hoy = new Date();
console.log(chalk.green("Hola, soy Ailín Salas, Valentino Gorno, Matias Marucci, Priscilla Aguirre, Thiago Vergara"));

console.log(chalk.blue(format(hoy, "dd/MM/yyyy")));

import { isBefore, parse } from 'date-fns';

const fechaEntrega = parse("07/06/2025", "dd/MM/yyyy", new Date());

if (isBefore(hoy, fechaEntrega)) {
  console.log(chalk.yellow("La entrega es el 07/06/2025"));
} else {
  console.log(chalk.red("La entrega fue el 07/06/2025"));
}
