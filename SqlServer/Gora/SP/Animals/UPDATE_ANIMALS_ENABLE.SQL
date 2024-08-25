CREATE PROCEDURE UPDATE_ANIMALS_ENABLE
    @AnimalID uniqueidentifier,
    @Enable BIT
AS
BEGIN
    UPDATE [ANIMALS]
    SET 
        [ANIMALS_ENABLE] = @Enable
    WHERE 
        [ANIMALS_ID] = @AnimalID;
END