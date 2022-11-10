import connection from "../database/database.js";
import {QueryResult} from "pg";
import { MovieEntity, MovieUpdate, Platform } from "../protocols/movie";

export function getMoviesRepo(): Promise<QueryResult<MovieEntity>>{
    return connection.query('SELECT movie.id,movie.name,platform.name as "platform",genre.name as "genre",movie.status,movie.review,movie.grade FROM movie JOIN platform ON movie."platformId"=platform.id JOIN genre ON movie."genreId"=genre.id;');
}
export function getMoviesperplatformRepo(): Promise<QueryResult<{"platform": string,"numofmovies": number}>>{
    return connection.query('SELECT platform.name as "platform",COUNT(movie."platformId") as numofmovies FROM movie JOIN platform ON movie."platformId"=platform.id GROUP BY platform.name')
}
export function getMoviespergenreRepo(): Promise<QueryResult<{"genre": string,"numofmovies": number}>>{
    return connection.query('SELECT genre.name as "genre",COUNT(movie."genreId") as numofmovies FROM movie JOIN genre ON movie."genreId"=genre.id GROUP BY genre.name');
}

export function postPlatformRepo(obj: Platform): Promise<QueryResult>{
    return connection.query('INSERT INTO platform (name) VALUES ($1);',[obj.name]);
}

export function postGenreRepo(obj: Platform): Promise<QueryResult>{
    return connection.query('INSERT INTO genre (name) VALUES ($1);',[obj.name]);
}

export function postMovieRepo(obj: MovieUpdate): Promise<QueryResult>{
    return connection.query('INSERT INTO movie (name,"platformId","genreId") VALUES ($1,$2,$3);',[obj.name,obj.platformId,obj.genreId])
}

export function updateMovieRepo(obj: MovieUpdate): Promise<QueryResult>{
    return connection.query('UPDATE movie SET status=$1,grade=$2,review=$3 WHERE movie.id=$4;',[obj.status,obj.grade,obj.review,obj.id]);
}

export function selectMovieRepo(movieid: Number): Promise<QueryResult<MovieEntity>>{
    return connection.query('SELECT * FROM movie WHERE movie.id=$1',[movieid]);
}

export function deleteMovieRepo(movieid: Number): Promise<QueryResult>{
    return connection.query('DELETE FROM movie WHERE movie.id=$1;',[movieid]);
}