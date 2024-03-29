newGame = {
  "version": "0.0.2 a0.2",
  "tickspeed": 100,

  "money": {
    "name": "€",
    "amount": new Decimal(0),
    "gainPerSec": new Decimal(0),
    "clickPower": new Decimal(1)
  },

  "notes": {
    "name": "Notes",
    "amount": new Decimal(0),
    "gainPerSec": new Decimal(0),
    "cost": 10,
    "buyCurrency": "creativity",
    "isPartOf": "phrases"
  },

  "phrases": {
    "name": "Phrases",
    "amount": new Decimal(0),
    "gainPerSec": new Decimal(0),
    "cost": 160,
    "buyCurrency": "creativity",
    "isPartOf": "chains",
    "buys": 16,
    "requiresLower": 16
  },

  "chains": {
    "name": "Chains",
    "amount": new Decimal(0),
    "gainPerSec": new Decimal(0),
    "cost": 16,
    "buyCurrency": "phrases",
    "isPartOf": "songs",
    "buys": 256,
    "requiresLower": 16
  },

  "songs": {
    "name": "Songs",
    "amount": new Decimal(0),
    "gainPerSec": new Decimal(0),
    "cost": 10,
    "buyCurrency": "chains",
    "buys": 2560,
    "requiresLower": 10,
    "generates": "money",
    "power": new Decimal(1)
  },

  "weed": {
    "name": "Weed",
    "amount": new Decimal(0),
    "gainPerSec": new Decimal(0),
    "cost": 8,
    "buyCurrency": "money",
    "power": new Decimal(0.1),
    "generates": "creativity"
  },

  "creativity": {
    "name": "Creativity",
    "amount": new Decimal(0),
    "gainPerSec": new Decimal(0),
  },

  "weedPlants": {
    "name": "Weed plants",
    "amount": new Decimal(0),
    "gainPerSec": new Decimal(0),
    "cost": 100,
    "buyCurrency": "money",
    "power": new Decimal(0.1),
    "generates": "weed"
  },

  "noteGenerators": {
    "name": "Note generators",
    "amount": new Decimal(0),
    "gainPerSec": new Decimal(0),
    "consumesPerSec": 10,
    "consumes": "creativity",
    "cost": 0,
    "buyCurrency": "money",
    "power": new Decimal(1),
    "generates": "notes"
  }
};
