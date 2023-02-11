const db = async () => {
    const db = await open({
        filename: '/tmp/database.db',
        driver: sqlite3.Database
    })
};
