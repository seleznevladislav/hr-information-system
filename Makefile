setup:
	npm install && \
	cd frontend && npm install \
	cd ../server && npm install

start-dev: 
	cd server && npm run dev

start: 
	cd server && npm run start
