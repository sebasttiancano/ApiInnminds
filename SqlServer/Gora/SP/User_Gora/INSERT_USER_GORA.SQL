CREATE PROCEDURE INSERT_USER_GORA

    @UserGora NVARCHAR(50),
    @TypeUserID uniqueidentifier,
    @UserEcommerceCognito uniqueidentifier
AS

BEGIN

    INSERT INTO [USER_GORA]

    ([USER_GORA], [TYPE_USER_ID], [USER_ECOMMERCE_COGNITO])

    VALUES

    (@UserGora, @TypeUserID, @UserEcommerceCognito);
    
END