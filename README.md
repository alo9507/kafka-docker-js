1. `npm install`
2. Run `docker-compose up` IN THE PROJECT ROOT in one terminal (you'll need [Docker Desktop](https://www.docker.com/products/docker-desktop) up and running for this step. It's worth getting.)
3. In a second terminal IN THE PROJECT ROOT, run `npm run start:producer`
4. In a third terminal IN THE PROJECT ROOT, run `npm run start:consumer`
5. Watch messages stream across from producer to consumer

6. Challenge: Can you containerize the Consumer and Producer processes and run this whole thing from a single docker-compose.yml?