const Skill = require('./models/Skill')

const skills = [
  {name: 'skill1'},
  {name: 'skill2'},
  {name: 'skill3'},
  {name: 'skill4'},
  {name: 'skill5'},
  {name: 'skill6'},
  {name: 'skill7'},
  {name: 'skill8'},
  {name: 'skill9'},
  {name: 'skill0'},
  {name: 'skill11'},
  {name: 'skill12'},
  {name: 'skill13'},
  {name: 'skill14'},
  {name: 'skill15'},
  {name: 'skill16'},
  {name: 'skill17'},
  {name: 'skill18'},
  {name: 'skill19'},
  {name: 'skill20'},
  {name: 'skill21'},
  {name: 'skill22'},
  {name: 'skill23'},
  {name: 'skill24'},
  {name: 'skill25'},
  {name: 'skill26'},
  {name: 'skill27'},
  {name: 'skill28'},
  {name: 'skill29'},
  {name: 'skill30'},
  {name: 'skill31'},
  {name: 'skill32'},
  {name: 'skill33'},
  {name: 'skill34'},
  {name: 'skill35'},
  {name: 'skill36'},
  {name: 'skill37'},
  {name: 'skill38'},
  {name: 'skill39'},
  {name: 'skill40'},
  {name: 'skill41'},
  {name: 'skill42'},
  {name: 'skill43'},
  {name: 'skill44'},
  {name: 'skill45'},
  {name: 'skill46'},
  {name: 'skill47'},
  {name: 'skill48'},
  {name: 'skill49'},
  {name: 'skill50'},
  {name: 'skill51'},
  {name: 'skill52'},
  {name: 'skill53'},
  {name: 'skill54'},
  {name: 'skill55'},
  {name: 'skill56'},
  {name: 'skill57'},
  {name: 'skill58'},
  {name: 'skill59'},
  {name: 'skill60'},
  {name: 'skill61'},
  {name: 'skill62'},
  {name: 'skill63'},
  {name: 'skill64'},
  {name: 'skill65'},
  {name: 'skill66'},
  {name: 'skill67'},
  {name: 'skill68'},
  {name: 'skill69'},
  {name: 'skill70'},
  {name: 'skill71'},
  {name: 'skill72'},
  {name: 'skill73'},
  {name: 'skill74'},
  {name: 'skill75'},
  {name: 'skill76'},
  {name: 'skill77'},
  {name: 'skill78'},
  {name: 'skill79'},
  {name: 'skill80'},
  {name: 'skill81'},
  {name: 'skill82'},
  {name: 'skill83'},
  {name: 'skill84'},
  {name: 'skill85'},
  {name: 'skill86'},
  {name: 'skill87'},
  {name: 'skill88'},
  {name: 'skill89'},
  {name: 'skill90'},
  {name: 'skill91'},
  {name: 'skill92'},
  {name: 'skill93'},
  {name: 'skill94'},
  {name: 'skill95'},
  {name: 'skill96'},
  {name: 'skill97'},
  {name: 'skill98'},
  {name: 'skill99'},
  {name: 'skill100'}
]

module.exports = function () {
  Skill.insertMany(skills, (err, res) => {
    console.log(err)
    console.log(res)
  })
}
