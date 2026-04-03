-- Pickleton Database Schema (SQL Server)

CREATE TABLE Users (
    UserId INT PRIMARY KEY IDENTITY(1,1),
    Email_Id NVARCHAR(255) UNIQUE NOT NULL,
    PasswordHash NVARCHAR(MAX) NOT NULL,
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    UpdatedAt DATETIME2 DEFAULT GETDATE()
);

CREATE TABLE Profiles (
    ProfileId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT UNIQUE NOT NULL,
    FullName NVARCHAR(255),
    Age NVARCHAR(50),
    Gender NVARCHAR(50),
    PlayingLevel NVARCHAR(50),
    Location NVARCHAR(255),
    StartedPlayingMonth NVARCHAR(50),
    StartedPlayingYear NVARCHAR(50),
    DuprLink NVARCHAR(MAX),
    FavoriteCourts NVARCHAR(MAX),
    CoverImage NVARCHAR(MAX),
    AvatarImage NVARCHAR(MAX),
    PlayStyle NVARCHAR(100),
    PreferredType NVARCHAR(100),
    DuprRating NVARCHAR(50),
    SelectedSkills NVARCHAR(MAX), -- Stored as JSON string
    Highlights NVARCHAR(MAX), -- Stored as JSON string
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    UpdatedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_Profiles_Users FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);

CREATE TABLE Tournaments (
    TournamentId INT PRIMARY KEY IDENTITY(1,1),
    OrganizerId INT NOT NULL,
    Title NVARCHAR(255) NOT NULL,
    Tagline NVARCHAR(255),
    Description NVARCHAR(MAX),
    CoverImage NVARCHAR(MAX),
    Logo NVARCHAR(MAX),
    DrawSize NVARCHAR(100),
    MatchFormat NVARCHAR(100),
    EntryFee DECIMAL(18, 2),
    ManualApproval BIT DEFAULT 0,
    AutomaticWaitlist BIT DEFAULT 1,
    Rules NVARCHAR(MAX),
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    UpdatedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_Tournaments_Users FOREIGN KEY (OrganizerId) REFERENCES Users(UserId)
);

CREATE TABLE TournamentGameTypes (
    TournamentId INT NOT NULL,
    GameType NVARCHAR(50) NOT NULL, -- Singles, Doubles, Mixed
    PRIMARY KEY (TournamentId, GameType),
    CONSTRAINT FK_GameTypes_Tournaments FOREIGN KEY (TournamentId) REFERENCES Tournaments(TournamentId) ON DELETE CASCADE
);

CREATE TABLE TournamentPaymentMethods (
    TournamentId INT NOT NULL,
    PaymentMethod NVARCHAR(100) NOT NULL, -- Stripe, PayPal, Venmo, In Person
    PRIMARY KEY (TournamentId, PaymentMethod),
    CONSTRAINT FK_PaymentMethods_Tournaments FOREIGN KEY (TournamentId) REFERENCES Tournaments(TournamentId) ON DELETE CASCADE
);

CREATE TABLE TournamentPrizes (
    PrizeId INT PRIMARY KEY IDENTITY(1,1),
    TournamentId INT NOT NULL,
    Rank NVARCHAR(100),
    Amount NVARCHAR(100),
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_Prizes_Tournaments FOREIGN KEY (TournamentId) REFERENCES Tournaments(TournamentId) ON DELETE CASCADE
);

CREATE TABLE TournamentSchedule (
    ScheduleId INT PRIMARY KEY IDENTITY(1,1),
    TournamentId INT NOT NULL,
    EventTime NVARCHAR(100),
    Title NVARCHAR(255),
    Location NVARCHAR(255),
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_Schedule_Tournaments FOREIGN KEY (TournamentId) REFERENCES Tournaments(TournamentId) ON DELETE CASCADE
);

CREATE TABLE Posts (
    PostId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT NOT NULL,
    Caption NVARCHAR(MAX),
    ImageUrl NVARCHAR(MAX),
    Visibility NVARCHAR(50) DEFAULT 'Public',
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    UpdatedAt DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_Posts_Users FOREIGN KEY (UserId) REFERENCES Users(UserId) ON DELETE CASCADE
);
