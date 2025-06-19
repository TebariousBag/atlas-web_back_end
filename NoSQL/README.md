# NOSQL
📘 General Concepts: NoSQL and MongoDB
🔹 What does NoSQL mean?
NoSQL stands for "Not Only SQL." It's a type of database that doesn't use traditional relational tables with rows and columns. Instead, it allows flexible data models, like documents or key-value pairs. It's great for handling unstructured or semi-structured data.

🔹 What is the difference between SQL and NoSQL?
Feature	SQL (Relational)	NoSQL (Non-relational)
Data structure	Tables (rows and columns)	Flexible formats (documents, key-values)
Schema	Fixed (defined in advance)	Dynamic (can change per document)
Scalability	Vertical (scale-up)	Horizontal (scale-out)
Examples	MySQL, PostgreSQL	MongoDB, Redis, Cassandra
Ideal for	Structured data, complex queries	Big data, real-time apps, varied formats

🔹 What is ACID?
ACID ensures data reliability in transactions:

A — Atomicity: All operations in a transaction succeed or none do.

C — Consistency: The database remains in a valid state.

I — Isolation: Transactions don’t interfere with each other.

D — Durability: Once committed, changes persist even after a crash.

Note: Not all NoSQL databases are fully ACID-compliant — many prioritize flexibility and speed.

🔹 What is document storage?
Document storage is a way of storing data as structured documents, often in JSON or BSON format. Each document can contain nested fields, arrays, and more.

MongoDB is a popular document-based NoSQL database.

🔹 What are the types of NoSQL databases?
Document stores – e.g., MongoDB

Key-value stores – e.g., Redis

Column-family stores – e.g., Cassandra

Graph databases – e.g., Neo4j

Each type is suited to different use cases.

🔹 What are the benefits of a NoSQL database?
Flexible schemas — adapt quickly to changes in data structure

High performance with large volumes of data

Horizontal scalability (easily add more servers)

Better fit for unstructured or semi-structured data (e.g., logs, JSON)

