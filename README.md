# react-express-boilerplate

A sample boilerplate that has the [postgres movie rental database](https://www.postgresqltutorial.com/postgresql-sample-database/) to play with.

Requires Docker for use of PostgreSQL.

To use:

```
cp .env.example.env
docker compose up
```

Go to `localhost:3000`

To not include movies database, remove the first volume here in the `docker-compose.yml`:
```
volumes:
      ~~- ./init.sql/:/docker-entrypoint-initdb.d/init.sql~~
      - ./db:/var/lib/postgresql/data
```

You will need to delete the folder `db` if you ran `docker compose up` already and want to use without the movies DB. `/api/db/test/` will also no longer work.

This will be simplified in the future.
