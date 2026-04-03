-- Pickleton Stored Procedures (SQL Server)

-- 1. Profile Upsert
CREATE OR ALTER PROCEDURE sp_UpsertProfile
    @UserId INT,
    @FullName NVARCHAR(255),
    @Age NVARCHAR(50),
    @Gender NVARCHAR(50),
    @PlayingLevel NVARCHAR(50),
    @Location NVARCHAR(255),
    @StartedPlayingMonth NVARCHAR(50),
    @StartedPlayingYear NVARCHAR(50),
    @DuprLink NVARCHAR(MAX),
    @FavoriteCourts NVARCHAR(MAX),
    @CoverImage NVARCHAR(MAX),
    @AvatarImage NVARCHAR(MAX),
    @PlayStyle NVARCHAR(100),
    @PreferredType NVARCHAR(100),
    @DuprRating NVARCHAR(50),
    @SelectedSkills NVARCHAR(MAX),
    @Highlights NVARCHAR(MAX)
AS
BEGIN
    IF EXISTS (SELECT 1 FROM Profiles WHERE UserId = @UserId)
    BEGIN
        UPDATE Profiles
        SET FullName = @FullName,
            Age = @Age,
            Gender = @Gender,
            PlayingLevel = @PlayingLevel,
            Location = @Location,
            StartedPlayingMonth = @StartedPlayingMonth,
            StartedPlayingYear = @StartedPlayingYear,
            DuprLink = @DuprLink,
            FavoriteCourts = @FavoriteCourts,
            CoverImage = @CoverImage,
            AvatarImage = @AvatarImage,
            PlayStyle = @PlayStyle,
            PreferredType = @PreferredType,
            DuprRating = @DuprRating,
            SelectedSkills = @SelectedSkills,
            Highlights = @Highlights,
            UpdatedAt = GETDATE()
        WHERE UserId = @UserId;
    END
    ELSE
    BEGIN
        INSERT INTO Profiles (UserId, FullName, Age, Gender, PlayingLevel, Location, StartedPlayingMonth, StartedPlayingYear, DuprLink, FavoriteCourts, CoverImage, AvatarImage, PlayStyle, PreferredType, DuprRating, SelectedSkills, Highlights)
        VALUES (@UserId, @FullName, @Age, @Gender, @PlayingLevel, @Location, @StartedPlayingMonth, @StartedPlayingYear, @DuprLink, @FavoriteCourts, @CoverImage, @AvatarImage, @PlayStyle, @PreferredType, @DuprRating, @SelectedSkills, @Highlights);
    END
END;
GO

-- 2. Create Tournament
CREATE OR ALTER PROCEDURE sp_CreateTournament
    @OrganizerId INT,
    @Title NVARCHAR(255),
    @Tagline NVARCHAR(255),
    @Description NVARCHAR(MAX),
    @CoverImage NVARCHAR(MAX),
    @Logo NVARCHAR(MAX),
    @DrawSize NVARCHAR(100),
    @MatchFormat NVARCHAR(100),
    @EntryFee DECIMAL(18, 2),
    @ManualApproval BIT,
    @AutomaticWaitlist BIT,
    @Rules NVARCHAR(MAX),
    @NewTournamentId INT OUTPUT
AS
BEGIN
    INSERT INTO Tournaments (OrganizerId, Title, Tagline, Description, CoverImage, Logo, DrawSize, MatchFormat, EntryFee, ManualApproval, AutomaticWaitlist, Rules)
    VALUES (@OrganizerId, @Title, @Tagline, @Description, @CoverImage, @Logo, @DrawSize, @MatchFormat, @EntryFee, @ManualApproval, @AutomaticWaitlist, @Rules);
    
    SET @NewTournamentId = SCOPE_IDENTITY();
END;
GO

-- 3. Get Tournament Details
CREATE OR ALTER PROCEDURE sp_GetTournamentDetails
    @TournamentId INT
AS
BEGIN
    -- Select Main Tournament Info
    SELECT * FROM Tournaments WHERE TournamentId = @TournamentId;

    -- Select Prizes
    SELECT * FROM TournamentPrizes WHERE TournamentId = @TournamentId;

    -- Select Schedule
    SELECT * FROM TournamentSchedule WHERE TournamentId = @TournamentId;

    -- Select Game Types
    SELECT GameType FROM TournamentGameTypes WHERE TournamentId = @TournamentId;

    -- Select Payment Methods
    SELECT PaymentMethod FROM TournamentPaymentMethods WHERE TournamentId = @TournamentId;
END;
GO

-- 4. Update Tournament Prizes (Bulk)
CREATE OR ALTER PROCEDURE sp_UpdateTournamentPrizes
    @TournamentId INT,
    @PrizesJson NVARCHAR(MAX) -- Array of { rank, amount }
AS
BEGIN
    DELETE FROM TournamentPrizes WHERE TournamentId = @TournamentId;

    INSERT INTO TournamentPrizes (TournamentId, Rank, Amount)
    SELECT @TournamentId, [rank], [amount]
    FROM OPENJSON(@PrizesJson)
    WITH (
        [rank] NVARCHAR(100),
        [amount] NVARCHAR(100)
    );
END;
GO

-- 5. Update Tournament Schedule (Bulk)
CREATE OR ALTER PROCEDURE sp_UpdateTournamentSchedule
    @TournamentId INT,
    @ScheduleJson NVARCHAR(MAX) -- Array of { time, title, location }
AS
BEGIN
    DELETE FROM TournamentSchedule WHERE TournamentId = @TournamentId;

    INSERT INTO TournamentSchedule (TournamentId, EventTime, Title, Location)
    SELECT @TournamentId, [time], [title], [location]
    FROM OPENJSON(@ScheduleJson)
    WITH (
        [time] NVARCHAR(100),
        [title] NVARCHAR(255),
        [location] NVARCHAR(255)
    );
END;
GO
