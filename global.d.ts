export declare global {
  var _mongoClientPromise: Promise<MongoClient>;
  var mongoose: {
    conn: Promise<MongoClient> | null;
    promise: Promise<MongoClient> | null;
  };
}
