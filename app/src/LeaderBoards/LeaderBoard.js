import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableFooter,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from '@material-ui/core';

import ArenaProgress from '../components/ArenaProgress';
import CharacterCard from '../components/CharacterCard';

const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});

function LeaderBoard({
  bracket,
  count,
  entries,
  history,
  limit,
  page,
  errorMessage,
  onChangePage,
}) {
  const classes = useStyles();
  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      {(!entries || !entries.length) && !errorMessage && (
        <div>Loading data ...</div>
      )}
    
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell size="small">Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>wins/lost</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell align="center" size="small">
                  {entry[bracket].rank}
                </TableCell>
                <TableCell size="small" className="name">
                  <CharacterCard
                    name={entry.name}
                    title={entry.title}
                    race={entry.race.name}
                    realm={entry.realm.name}
                    guild={entry.guild ? entry.guild.name : 'not in guild'}
                    characterClass={
                      entry.characterClass.name ? entry.characterClass.name : ''
                    }
                    itemLevel={entry.itemLevel}
                    iconSize={42}
                  />
                </TableCell>
                <TableCell className="arena-progress">
                  <ArenaProgress
                    won={entry[bracket].won}
                    lost={entry[bracket].lost}
                    played={entry[bracket].played}
                  />
                </TableCell>
                <TableCell className="rating is-capitalized has-text-weight-bold has-text-centered">
                  {entry[bracket].rating}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                count={count}
                colSpan={3}
                rowsPerPage={limit}
                onChangePage={onChangePage}
                page={page}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

export default LeaderBoard;
