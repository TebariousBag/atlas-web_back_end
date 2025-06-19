# Redis Basic
💡 What is Redis?
Redis (short for Remote Dictionary Server) is an open-source, in-memory data store that can be used as a:

Database

Cache

Message broker

It’s blazing fast and is often used in applications that need real-time performance.

🔍 Key Features
## In-Memory Storage
Stores data in RAM, making read/write operations extremely fast.

Data can be optionally saved to disk for persistence.

## Key-Value Store
Works like a giant dictionary (or Python dict):

bash
Copy
Edit
SET name "Alice"
GET name
## Supports Complex Data Types
Redis can store more than just strings:

Strings → SET key value

Lists → LPUSH, LRANGE

Hashes → like dictionaries (HSET, HGET)

Sets, Sorted Sets, Bitmaps, HyperLogLogs, Streams

## Common Use Cases
Use Case	Example
Caching	Store frequently accessed data (e.g., user sessions)
Real-time Analytics	Count page views, likes, etc. instantly
Queues & Messaging	With LIST or STREAM types
Leaderboards	Using sorted sets (ZADD, ZRANGE)
Rate Limiting	Count requests per IP per minute

## Why is Redis So Fast?
Data is in memory (not on disk)

Simple data access patterns

Single-threaded event loop (no locking overhead)

## Sample Commands
bash
Copy
Edit
SET user:1 "Tristian"
GET user:1

HSET user:2 name "Alice" age 25
HGETALL user:2

LPUSH tasks "task1"
LRANGE tasks 0 -1
## Does Redis Persist Data?
Yes — it can save data to disk in two ways:

RDB snapshots (point-in-time)

AOF (Append-Only File) for full command logs

But persistence is optional, so Redis is also used as a pure cache in many setups.
