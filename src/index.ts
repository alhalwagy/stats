import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchreader = MatchReader.fromCsv('football.csv');
matchreader.load();

const summary = Summary.WinsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchreader.matches);
