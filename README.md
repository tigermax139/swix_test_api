## Local Setup

1. Create file `.env`
2. Fill values by example `.env.example`
3. Run `npm i` for install all packages
4. Run `npm start` for server running
5. OR Run `npm run dev` for start with enable hot-reload


## Endpoints
1. `/sbevents` - return all events by query
2. `/sbeventsen` - return only only contains English translations events by query

### Query Schema
```json5
{
  "keywords": "string", // REQUIRED
  "live": "true", // Optional
  "started": "true", // Optional
  "and": "true", // Optional
}
```