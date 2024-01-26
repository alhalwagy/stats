import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { ConsoleTargets } from './reportTargets/ConsoleReporter';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchreader = new MatchReader(csvFileReader);
matchreader.load();
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleTargets()
);

summary.buildAndPrintReport(matchreader.matches);
// console.log(matchreader.matches);
