import connection from "../database/database.js";
import {QueryResult} from "pg";
import { MovieType } from "../protocols/movie";

export function getMoviesRepo(): Promise<QueryResult<MovieType>>{
    return connection.query('SELECT * FROM movie');
}