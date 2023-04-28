const { Router, response } = require('express');
const axios = require('axios');
const router = Router();


const getChampions = async () => {
    const url = 'http://ddragon.leagueoflegends.com/cdn/13.5.1/data/en_US/champion.json';
    const response = await axios.get(url);
    return response.data.data;
};

router.get('/champions', async (req, res) => {
    try {
        const championsData = await getChampions();
        const champions = Object.entries(championsData).map(([key, champion]) => ({
            name: champion.name,
            title: champion.title,
            image: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${key}_0.jpg`,
        }));
        res.send(champions);
    } catch (error) {
        console.error(error);
        res.status(500).send('SeguiParticipando');
    }
});



module.exports = router;