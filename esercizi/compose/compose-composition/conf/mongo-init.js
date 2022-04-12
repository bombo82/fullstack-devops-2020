db.createUser(
        {
            user: "app-user",
            pwd: "app-user-password",
            roles: [
                {
                    role: "readWrite",
                    db: "my-quotes-app"
                }
            ]
        }
);

