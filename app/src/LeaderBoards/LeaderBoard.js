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
import ClassFilter from '../components/ClassFilter';

const useStyles = makeStyles({
  table: {
    minWidth: 950,
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
        <Table size="small" className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell size="small">Rank</TableCell>
              <TableCell size="small" >Name</TableCell>
              <TableCell size="small" >wins/lost</TableCell>
              <TableCell size="small" >Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow size="small" key={index}>
                <TableCell align="center">
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
                    iconSize={32}
                  />
                </TableCell>
                <TableCell size="small"  className="arena-progress">
                  <ArenaProgress
                    won={entry[bracket].won}
                    lost={entry[bracket].lost}
                    played={entry[bracket].played}
                  />
                </TableCell>
                <TableCell size="small"  className="rating is-capitalized has-text-weight-bold has-text-centered">
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
