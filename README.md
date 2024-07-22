Installazione

<!-- Backend -->

1-*  Naviga nella cartella "backend".
2-*  Esegui "npm install" per installare le dipendenze.
3-* Esegui "node server.js" per avviare il server.
4-* Puoi vedere la risposta su "http://localhost:3001/api/tweets"

<!-- Frontend -->

1-* Naviga nella cartella "frontend".

2-* Esegui "npm install" per installare le dipendenze.

3-* Esegui "npm run dev" per avviare l'applicazione Next.js.

<!-- per utilizzare l'app -->

Apri il tuo browser e naviga su "http://localhost:3000".

Usa il modulo per pubblicare un nuovo tweet.

Metti "mi piace" ai tweet esistenti.

Usa il pulsante "Elimina" per cancellare un tweet.


Claro, aquí tienes la traducción al italiano:

Installazione
Backend
Naviga nella cartella "backend".
Esegui "npm install" per installare le dipendenze.
Esegui "node server.js" per avviare il server.
Puoi vedere la risposta su "http://localhost:3001/api/tweets"
Frontend
Naviga nella cartella "frontend".

Esegui "npm install" per installare le dipendenze.

Esegui "npm run dev" per avviare l'applicazione Next.js.

per utilizzare l'app

Apri il tuo browser e naviga su "http://localhost:3000".

Usa il modulo per pubblicare un nuovo tweet.

Metti "mi piace" ai tweet esistenti.

Usa il pulsante "Elimina" per cancellare un tweet.

Endpoints API
http://localhost:3001/api/tweets

GET /tweets
Restituisce tutti i tweet esistenti.

restituisce
un array di oggetti
[
{
"id": 1,
"username": "user1",
"content": "Hello, world!",
"likes": 0
},
...
]

POST /tweets
invia:

{
"username": "user1",
"content": "Hello, world!"
}

POST /tweets
invia incrementando il contatore dei likes

{
"id": 1,
"username": "user1",
"content": "Hello, world!",
"likes": 1
}

<!-- FRONTEND -->

<!-- per il frontend ho utilizzato React con Next.js per la capacità di renderizzare lato server e la sua facile configurazione, ho utilizzato axios per gestire le chiamate API, e anche tailwindcss
 -->

 <!-- BACKEND -->

 <!-- ho utilizzato express, con cors e nodemon per il server e supporta per costruire API, per l'archiviazione in memoria, i tweet e i "mi piace" sono stati memorizzati in una struttura di dati in memoria poiché è solo per un test
e ho creato gli endpoint necessari come GET, POST, DELETE per fornire le funzionalità
 -->