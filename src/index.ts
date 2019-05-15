import express from "express";
const app = express();
const port = 8080; // default port to listen

app.get("/api/user-details", (req, res) => {
    res.status(200).json({id: "1", email: "test@test.com", firstName: "John Server", lastName: "Doe Server"});
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
