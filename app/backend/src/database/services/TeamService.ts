import Teams from '../models/TeamModel';

const allTeams = async () => {
  const allTeam = await Teams.findAll();
  return allTeam;
};

const onlyTeam = async (id: number) => {
  const oneTeam = await Teams.findByPk(id);
  return oneTeam;
};

const TeamService = {
  allTeams,
  onlyTeam,
};

export default TeamService;
