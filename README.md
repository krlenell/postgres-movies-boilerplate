# react-express-boilerplate

A sample boilerplate that has the [postgres movie rental database](https://www.postgresqltutorial.com/postgresql-sample-database/) to play with.

Requires Docker for use of PostgreSQL.

This is designed in part to resemble the standard boilerplates used for apps at LearningFuze. As an alumni, you should be able to understand all the tech here except for the `docker-compose.yml`. I have, however, split up some code into files which is usually contained in the `package.json` due to my own personal preference and for accessibility. 

This should also be very accessible to non- LFZ Alumni. 

#### To use:

```
cp .env.example.env
docker compose up
```

Go to `localhost:3000`

A page should appear. Try running the tests and then remove the code for them.

To not include movies database, remove the first volume here in the `docker-compose.yml`:
```
volumes:
      ~~- ./init.sql/:/docker-entrypoint-initdb.d/init.sql~~
      - ./db:/var/lib/postgresql/data
```


If you do not want to use PostgreSQL at all, you do not need docker and can just run `npm run dev`.

If you encounter any bugs, please leave an issue report.
