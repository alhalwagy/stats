import { OutputTarget } from '../Summary';

export class ConsoleTargets implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
