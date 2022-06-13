import {
    enablePromise,
    openDatabase,
} from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
    return openDatabase({name: 'progress-data.db', location: 'default'});
};

export const createProgressTable = async db => {
    const query = 'CREATE TABLE IF NOT EXISTS progress (date INTEGER, summary TEXT, category_id INTEGER NOT NULL, progressType TEXT, weight INTEGER)';
    await db.executeSql(query);
};

export const createTransaction = async (db, transaction) => {
    const {transationDate, summary, category, transactionType, amount } = transaction;

    const timestamp = parseInt((transactionDate.getTime() / 1000).toFixed(0));
    const insertQuery = 'INSERT INTO transactions(transactionDate, summary, category_id, transactionType, amount) VALUES("${timestamp}", "${summary}, "${category}", "${transactionType}", "${amount}")';
    return db.executeSql(insertQuery);
};