const leaderboardHome = `SELECT teams.team_name AS name,
    SUM(CASE
        WHEN matches.home_team_goals > matches.away_team_goals THEN 3
        WHEN matches.home_team_goals < matches.away_team_goals THEN 0
        ELSE 1
    END) AS totalPoints,
    COUNT(*) AS totalGames,
    SUM(matches.home_team_goals > matches.away_team_goals) AS totalVictories,
    SUM(matches.home_team_goals = matches.away_team_goals) AS totalDraws,
    SUM(matches.home_team_goals < matches.away_team_goals) AS totalLosses,
    SUM(matches.home_team_goals) AS goalsFavor,
    SUM(matches.away_team_goals) AS goalsOwn,
    SUM(matches.home_team_goals) - SUM(matches.away_team_goals) AS goalsBalance,
    ROUND(SUM(CASE
        WHEN matches.home_team_goals > matches.away_team_goals THEN 3
        WHEN matches.home_team_goals < matches.away_team_goals THEN 0
        ELSE 1
    END) / (COUNT(*) * 3) * 100,
    2) AS efficiency
    FROM TRYBE_FUTEBOL_CLUBE.teams AS teams
        INNER JOIN
    TRYBE_FUTEBOL_CLUBE.matches AS matches ON teams.id = matches.home_team_id
    WHERE
    matches.in_progress = FALSE
    GROUP BY name
    ORDER BY totalPoints DESC ,
    totalVictories DESC ,
    goalsBalance DESC ,
    goalsFavor DESC`;

const leaderboardAway = `SELECT teams.team_name AS name,
    SUM(CASE
        WHEN  matches.away_team_goals > matches.home_team_goals THEN 3
        WHEN  matches.away_team_goals < matches.home_team_goals THEN 0
        ELSE 1
    END) AS totalPoints,
    COUNT(*) AS totalGames,
    SUM(matches.away_team_goals > matches.home_team_goals ) AS totalVictories,
    SUM(matches.away_team_goals = matches.home_team_goals) AS totalDraws,
    SUM(matches.away_team_goals < matches.home_team_goals) AS totalLosses,
    SUM(matches.away_team_goals) AS goalsFavor,
    SUM(matches.home_team_goals) AS goalsOwn,
    SUM(matches.away_team_goals) - SUM(matches.home_team_goals) AS goalsBalance,
    ROUND(SUM(CASE
        WHEN matches.away_team_goals > matches.home_team_goals THEN 3
        WHEN matches.away_team_goals < matches.home_team_goals THEN 0
        ELSE 1
    END) / (COUNT(*) * 3) * 100,
    2) AS efficiency
    FROM
    TRYBE_FUTEBOL_CLUBE.teams AS teams
        INNER JOIN
    TRYBE_FUTEBOL_CLUBE.matches AS matches ON teams.id = matches.away_team_id
    WHERE
    matches.in_progress = FALSE
    GROUP BY name
    ORDER BY totalPoints DESC , 
    totalVictories DESC , 
    goalsBalance DESC , 
    goalsFavor DESC;`;

const queryLeaderboard = { leaderboardHome, leaderboardAway };

export default queryLeaderboard;
