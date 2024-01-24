import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

const reader = new CsvFileReader('football.csv');
const matchreader = new MatchReader(reader);
matchreader.load();
// console.log(matchreader.matches);

let manUnitedWins = 0;
for (let match of matchreader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games.`);
