const seedDataUsers = [
  {
	name: "Madison Holtcombe",
	username: 'holtcombe',
	dod_number: '7842931253'
  },
  {
	name: "Anne MacCloskey",
	username: 'macCloskey',
	dod_number: '1690369484'
  },
  {
	name: "Fujita Yukaharo",
	username: 'yukaharo',
	dod_number: '1578897975'
  },
  {
	name: "Antonis Koumoundouros",
	username: 'koumoundouros',
	dod_number: '5632474568'
  },
  {
	name: "Phegeus Baptiste",
	username: 'baptiste',
	dod_number: '2159602608'
  }
]

const seedDataMedical = [
  {
	id: 1,
	status: true,
	checkup: '4/9/2023',
	immunization: true
  },
  {
	id: 2,
	status: true,
	checkup: '2/8/2003', 
	immunization: false
  },
  {
	id: 3,
	status: true,
	checkup: '8/7/2002',
	immunization: true
  },
  {
	id: 4,
	status: false,
	checkup: '11/11/2021',
	immunization: false
  },
  {
	id: 5,
	status: true,
	checkup: '6/18/2000',
	immunization: true
  }
]

const seedDataTraining = [
  {
	id: 1,
	required: false,
	status: true,
	training_type: 3,
	date_completed: '10/29/2007'
  },
  {
	id: 2,
	required: true,
	status: true,
	training_type: 2,
	date_completed: '4/17/2011'
  },
  {
	id: 3,
	required: true,
	status: true,
	training_type: 4,
	date_completed: '10/22/2001'
  },
  {
	id: 4,
	required: false,
	status: true,
	training_type: 1,
	date_completed: '1/9/2007'
  },
  {
	id: 5,
	required: true,
	status: false,
	training_type: 3,
	date_completed: '2/13/2020'
  }
]

const seedDataTrainingTypes = [
  {
	name: "Religious Training",
	description: "Understanding the first amendment."
  },
  {
	name: "FTX",
	description: "Weapons and field training."
  },
  {
	name:  "ROTC",
	description: "Basic and physical training."
  },
  {
	name:  "Mission Briefing",
	description: "Mission overview and planning with commanding officer."
  },
  {
	name:  "Survival Training",
	description: "How to survive as a MIA or POW."
  }
]