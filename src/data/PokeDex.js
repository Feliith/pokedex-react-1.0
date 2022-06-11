
const PokeDex = [
    {id: 'start'},
    {
        id: '001',
        name: 'Bulbasaur',
        gender: 'MF',
        data: {
            M: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
            F: 'While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.'
        },
        type: [5, 6],
        evolutions: [1, 2, 3]
    },
    {
        id: '002',
        name: 'Ivysaur',
        gender: 'MF',
        data: {
            M: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
            F: 'Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.'
        },
        type: [5, 6],
        evolutions: [1, 2, 3]
    },
    {
        id: '003',
        name: 'Venusaur',
        gender: 'MF',
        data: {
            M: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
            F: 'A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle.'
        },
        type: [5, 6],
        evolutions: [1, 2, 3]
    },
    {
        id: '004',
        name: 'Charmander',
        gender: 'MF',
        data: {
            M: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
            F: 'From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.'
        },
        type: [1],
        evolutions: [4, 5, 6]
    },
    {
        id: '005',
        name: 'Charmeleon',
        gender: 'MF',
        data: {
            M: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
            F: 'If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.'
        },
        type: [1],
        evolutions: [4, 5, 6]
    },
    {
        id: '006',
        name: 'Charizard',
        gender: 'MF',
        data: {
            M: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
            F: 'Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures.'
        },
        type: [1, 4],
        evolutions: [4, 5, 6]
    },
    {
        id: '007',
        name: 'Squirtle',
        gender: 'MF',
        data: {
            M: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
            F: 'When it feels threatened, it draws its limbs inside its shell and sprays water from its mouth.'
        },
        type: [3],
        evolutions: [7, 8, 9]
    },
    {
        id: '008',
        name: 'Wartortle',
        gender: 'MF',
        data: {
            M: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
            F: 'It cleverly controls its furry ears and tail to maintain its balance while swimming.'
        },
        type: [3],
        evolutions: [7, 8, 9]
    },
    {
        id: '009',
        name: 'Blastoise',
        gender: 'MF',
        data: {
            M: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
            F: 'The rocket cannons on its shell fire jets of water capable of punching holes through thick steel.'
        },
        type: [3],
        evolutions: [7, 8, 9]
    },
    {
        id: '010',
        name: 'Caterpie',
        gender: 'MF',
        data: {
            M: 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
            F: 'Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.'
        },
        type: [12],
        evolutions: [10, 11, 12]
    },
    {
        id: '011',
        name: 'Metapod',
        gender: 'MF',
        data: {
            M: 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.',
            F: 'Even though it is encased in a sturdy shell, the body inside is tender. It can’t withstand a harsh attack.'
        },
        type: [12],
        evolutions: [10, 11, 12]
    },
    {
        id: '012',
        name: 'Butterfree',
        gender: 'MF',
        data: {
            M: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
            F: 'It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest.'
        },
        type: [12, 4],
        evolutions: [10, 11, 12]
    },
    {
        id: '013',
        name: 'Weedle',
        gender: 'MF',
        data: {
            M: 'Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.',
            F: 'Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.'
        },
        type: [4, 6],
        evolutions: [13, 14, 15]
    },
    {
        id: '014',
        name: 'Kakuna',
        gender: 'MF',
        data: {
            M: 'Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.',
            F: 'Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.'
        },
        type: [4, 6],
        evolutions: [13, 14, 15]
    },
    {
        id: '015',
        name: 'Beedrill',
        gender: 'MF',
        data: {
            M: 'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.',
            F: 'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.'
        },
        type: [4, 6],
        evolutions: [13, 14, 15]
    },
    {
        id: '016',
        name: 'Pidgey',
        gender: 'MF',
        data: {
            M: 'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.',
            F: 'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.'
        },
        type: [0, 4],
        evolutions: [16, 17, 18]
    },
    {
        id: '017',
        name: 'Pidgeotto',
        gender: 'MF',
        data: {
            M: 'This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.',
            F: 'This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.'
        },
        type: [0, 4],
        evolutions: [16, 17, 18]
    },
    {
        id: '018',
        name: 'Pidgeot',
        gender: 'MF',
        data: {
            M: 'This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.',
            F: 'This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.'
        },
        type: [0, 4],
        evolutions: [16, 17, 18]
    },
    {
        id: '019',
        name: 'Rattata',
        gender: 'MF',
        data: {
            M: 'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.',
            F: 'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.'
        },
        type: [0],
        evolutions: [19, 20]
    },
    {
        id: '020',
        name: 'Raticate',
        gender: 'MF',
        data: {
            M: 'Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.',
            F: 'Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.'
        },
        type: [0],
        evolutions: [19, 20]
    },
    {
        id: '021',
        name: 'Spearow',
        gender: 'MF',
        data: {
            M: 'Inept at flying high. However, it can fly around very fast to protect its territory.',
            F: 'Inept at flying high. However, it can fly around very fast to protect its territory.'
        },
        type: [0, 4],
        evolutions: [21, 22]
    },
    {
        id: '022',
        name: 'Fearow',
        gender: 'MF',
        data: {
            M: 'A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.',
            F: 'A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.'
        },
        type: [0, 4],
        evolutions: [21, 22]
    },
    {
        id: '023',
        name: 'Ekans',
        gender: 'MF',
        data: {
            M: 'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.',
            F: 'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.'
        },
        type: [6],
        evolutions: [23, 24]
    },
    {
        id: '024',
        name: 'Arbok',
        gender: 'MF',
        data: {
            M: 'The frightening patterns on its belly have been studied. Six variations have been confirmed.',
            F: 'The frightening patterns on its belly have been studied. Six variations have been confirmed.'
        },
        type: [6],
        evolutions: [23, 24]
    },
    {
        id: '025',
        name: 'Pikachu',
        gender: 'MF',
        data: {
            M: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
            F: 'When Pikachu meet, they’ll touch their tails together and exchange electricity through them as a form of greeting.'
        },
        type: [7],
        evolutions: [25, 26]
    },
    {
        id: '026',
        name: 'Raichu',
        gender: 'MF',
        data: {
            M: 'Its long tail serves as a ground to protect itself from its own high-voltage power.',
            F: 'If its electric pouches run empty, it raises its tail to gather electricity from the atmosphere.'
        },
        type: [7],
        evolutions: [25, 26]
    },
    {
        id: '027',
        name: 'Sandshrew',
        gender: 'MF',
        data: {
            M: 'It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.',
            F: 'It burrows into the ground to create its nest. If hard stones impede its tunneling, it uses its sharp claws to shatter them and then carries on digging.'
        },
        type: [8],
        evolutions: [27, 28]
    },
    {
        id: '028',
        name: 'Sandslash',
        gender: 'MF',
        data: {
            M: 'The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched.',
            F: 'It climbs trees by hooking on with its sharp claws. Sandslash shares the berries it gathers, dropping them down to Sandshrew waiting below the tree.'
        },
        type: [8],
        evolutions: [27, 28]
    },
    {
        id: '029',
        name: 'Nidoran ♀',
        gender: 'F',
        data: {
            F: 'Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.'
        },
        type: [6],
        evolutions: [29, 30, 31]
    },
    {
        id: '030',
        name: 'Nidorina',
        gender: 'F',
        data: {
            F: 'The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.'
        },
        type: [6],
        evolutions: [29, 30, 31]
    },
    {
        id: '031',
        name: 'Nidoqueen',
        gender: 'F',
        data: {
            F: 'Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.'
        },
        type: [6, 8],
        evolutions: [29, 30, 31]
    },
    {
        id: '032',
        name: 'Nidoran ♂',
        gender: 'M',
        data: {
            M: 'The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.'
        },
        type: [6],
        evolutions: [32, 33, 34]
    },
    {
        id: '033',
        name: 'Nidorino',
        gender: 'M',
        data: {
            M: 'With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.'
        },
        type: [6],
        evolutions: [32, 33, 34]
    },
    {
        id: '034',
        name: 'Nidoking',
        gender: 'M',
        data: {
            M: 'When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.'
        },
        type: [6, 8],
        evolutions: [32, 33, 34]
    },
    {
        id: '035',
        name: 'Clefairy',
        gender: 'MF',
        data: {
            M: 'It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.',
            F: 'Its adorable behavior and cry make it highly popular. However, this cute Pokémon is rarely found.'
        },
        type: [17],
        evolutions: [35, 36]
    },
    {
        id: '036',
        name: 'Clefable',
        gender: 'MF',
        data: {
            M: 'A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.',
            F: 'Their ears are sensitive enough to hear a pin drop from over a mile away, so they’re usually found in quiet places.'
        },
        type: [17],
        evolutions: [35, 36]
    },
    {
        id: '037',
        name: 'Vulpix',
        gender: 'MF',
        data: {
            M: 'While young, it has six gorgeous tails. When it grows, several new tails are sprouted.',
            F: 'As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm.'
        },
        type: [1],
        evolutions: [37, 38]
    },
    {
        id: '038',
        name: 'Ninetales',
        gender: 'MF',
        data: {
            M: 'It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.',
            F: 'Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.'
        },
        type: [1],
        evolutions: [37, 38]
    },
    {
        id: '039',
        name: 'Jigglypuff',
        gender: 'MF',
        data: {
            M: 'Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.',
            F: 'By freely changing the wavelength of its voice, Jigglypuff sings a mysterious melody sure to make any listener sleepy.'
        },
        type: [0, 17],
        evolutions: [39, 40]
    },
    {
        id: '040',
        name: 'Wigglytuff',
        gender: 'MF',
        data: {
            M: 'The more air it takes in, the more it inflates. If opponents catch it in a bad mood, it will inflate itself to an enormous size to intimidate them.',
            F: 'It’s proud of its fur, which is fine and delicate. In particular, the curl on its forehead has a texture that’s perfectly heavenly.'
        },
        type: [0, 17],
        evolutions: [39, 40]
    },
    {
        id: '041',
        name: 'Zubat',
        gender: 'MF',
        data: {
            M: 'It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.',
            F: 'Zubat live in caves, down where the sun’s light won’t reach. In the morning, they gather together to keep each other warm as they sleep.'
        },
        type: [6, 4],
        evolutions: [41, 42]
    },
    {
        id: '042',
        name: 'Golbat',
        gender: 'MF',
        data: {
            M: 'It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.',
            F: 'Its feet are tiny, but this Pokémon walks skillfully. It sneaks up on sleeping prey before sinking in its fangs and slurping up blood.'
        },
        type: [6, 4],
        evolutions: [41, 42]
    },
    {
        id: '043',
        name: 'Oddish',
        gender: 'MF',
        data: {
            M: 'If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.',
            F: 'During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight.'
        },
        type: [5, 6],
        evolutions: [43, 44, 45]
    },
    {
        id: '044',
        name: 'Gloom',
        gender: 'MF',
        data: {
            M: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.',
            F: 'What appears to be drool is actually sweet honey. It is very sticky and clings stubbornly if touched.'
        },
        type: [5, 6],
        evolutions: [43, 44, 45]
    },
    {
        id: '045',
        name: 'Vileplume',
        gender: 'MF',
        data: {
            M: 'It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.',
            F: 'The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.'
        },
        type: [5, 6],
        evolutions: [43, 44, 45]
    },
    {
        id: '046',
        name: 'Paras',
        gender: 'MF',
        data: {
            M: 'Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.',
            F: 'Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.'
        },
        type: [12, 5],
        evolutions: [46, 47]
    },
    {
        id: '047',
        name: 'Parasect',
        gender: 'MF',
        data: {
            M: 'The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.',
            F: 'The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.'
        },
        type: [12, 5],
        evolutions: [46, 47]
    },
    {
        id: '048',
        name: 'Venonat',
        gender: 'MF',
        data: {
            M: 'Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.',
            F: 'Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.'
        },
        type: [12, 6],
        evolutions: [48, 49]
    },
    {
        id: '049',
        name: 'Venomoth',
        gender: 'MF',
        data: {
            M: 'The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.',
            F: 'The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.'
        },
        type: [12, 6],
        evolutions: [48, 49]
    },
    {
        id: '050',
        name: 'Diglett',
        gender: 'MF',
        data: {
            M: 'If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.',
            F: 'It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.'
        },
        type: [8],
        evolutions: [50, 51]
    },
    {
        id: '051',
        name: 'Dugtrio',
        gender: 'MF',
        data: {
            M: 'A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.',
            F: 'These Diglett triplets dig over 60 miles below sea level. No one knows what it’s like underground.'
        },
        type: [8],
        evolutions: [50, 51]
    },
    {
        id: '052',
        name: 'Meowth',
        gender: 'MF',
        data: {
            M: 'It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures.',
            F: 'It washes its face regularly to keep the coin on its forehead spotless. It doesn’t get along with Galarian Meowth.'
        },
        type: [0],
        evolutions: [52, 53]
    },
    {
        id: '053',
        name: 'Persian',
        gender: 'MF',
        data: {
            M: 'Getting this prideful Pokémon to warm up to you takes a lot of effort, and it will claw at you the moment it gets annoyed.',
            F: 'Its elegant and refined behavior clashes with that of the barbaric Perrserker. The relationship between the two is one of mutual disdain.'
        },
        type: [0],
        evolutions: [52, 53]
    },
    {
        id: '054',
        name: 'Psyduck',
        gender: 'MF',
        data: {
            M: 'Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.',
            F: 'As Psyduck gets stressed out, its headache gets progressively worse. It uses intense psychic energy to overwhelm those around it.'
        },
        type: [3],
        evolutions: [54, 55]
    },
    {
        id: '055',
        name: 'Golduck',
        gender: 'MF',
        data: {
            M: 'This Pokémon lives in gently flowing rivers. It paddles through the water with its long limbs, putting its graceful swimming skills on display.',
            F: 'Old tales tell of Golduck punishing those that defiled its river. The guilty were dragged into the water and taken away.'
        },
        type: [3],
        evolutions: [54, 55]
    },
    {
        id: '056',
        name: 'Mankey',
        gender: 'MF',
        data: {
            M: 'An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.',
            F: 'An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.'
        },
        type: [2],
        evolutions: [56, 57]
    },
    {
        id: '057',
        name: 'Primeape',
        gender: 'MF',
        data: {
            M: 'It stops being angry only when nobody else is around. To view this moment is very difficult.',
            F: 'It stops being angry only when nobody else is around. To view this moment is very difficult.'
        },
        type: [2],
        evolutions: [56, 57]
    },
    {
        id: '058',
        name: 'Growlithe',
        gender: 'MF',
        data: {
            M: 'It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.',
            F: 'Extremely loyal, it will fearlessly bark at any opponent to protect its own Trainer from harm.'
        },
        type: [1],
        evolutions: [58, 59]
    },
    {
        id: '059',
        name: 'Arcanine',
        gender: 'MF',
        data: {
            M: 'The sight of it running over 6,200 miles in a single day and night has captivated many people.',
            F: 'A Pokémon that has long been admired for its beauty. It runs agilely as if on wings.'
        },
        type: [1],
        evolutions: [58, 59]
    },
    {
        id: '060',
        name: 'Poliwag',
        gender: 'MF',
        data: {
            M: 'For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.',
            F: 'In rivers with fast-flowing water, this Pokémon will cling to a rock by using its thick lips, which act like a suction cup.'
        },
        type: [3],
        evolutions: [60, 61, 62]
    },
    {
        id: '061',
        name: 'Poliwhirl',
        gender: 'MF',
        data: {
            M: 'Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl’s has been used in place of lullabies to get children to go to sleep.',
            F: 'This Pokémon’s sweat is a slimy mucus. When captured, Poliwhirl can slither from its enemies’ grasp and escape.'
        },
        type: [3],
        evolutions: [60, 61, 62]
    },
    {
        id: '061',
        name: 'Poliwrath',
        gender: 'MF',
        data: {
            M: 'Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.',
            F: 'Poliwrath is skilled at both swimming and martial arts. It uses its well-trained arms to dish out powerful punches.'
        },
        type: [3, 2],
        evolutions: [60, 61, 62]
    },
    {
        id: '063',
        name: 'Abra',
        gender: 'MF',
        data: {
            M: 'This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.',
            F: 'Abra can teleport in its sleep. Apparently the more deeply Abra sleeps, the farther its teleportations go.'
        },
        type: [9],
        evolutions: [63, 64, 65]
    },
    {
        id: '064',
        name: 'Kadabra',
        gender: 'MF',
        data: {
            M: 'Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.',
            F: 'This Pokémon’s telekinesis is immensely powerful. To prepare for evolution, Kadabra stores up psychic energy in the star on its forehead.'
        },
        type: [9],
        evolutions: [63, 64, 65]
    },
    {
        id: '065',
        name: 'Alakazam',
        gender: 'MF',
        data: {
            M: 'It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.',
            F: 'Alakazam wields potent psychic powers. It’s said that this Pokémon used these powers to create the spoons it holds.'
        },
        type: [9],
        evolutions: [63, 64, 65]
    },
    {
        id: '066',
        name: 'Machop',
        gender: 'MF',
        data: {
            M: 'Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.',
            F: 'Always brimming with power, it passes time by lifting boulders. Doing so makes it even stronger.'
        },
        type: [2],
        evolutions: [66, 67, 68]
    },
    {
        id: '067',
        name: 'Machoke',
        gender: 'MF',
        data: {
            M: 'Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.',
            F: 'Its formidable body never gets tired. It helps people by doing work such as the moving of heavy goods.'
        },
        type: [2],
        evolutions: [66, 67, 68]
    },
    {
        id: '068',
        name: 'Machamp',
        gender: 'MF',
        data: {
            M: 'It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.',
            F: 'With four arms that react more quickly than it can think, it can execute many punches at once.'
        },
        type: [2],
        evolutions: [66, 67, 68]
    },
    {
        id: '069',
        name: 'Bellsprout',
        gender: 'MF',
        data: {
            M: 'Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.',
            F: 'Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.'
        },
        type: [5, 6],
        evolutions: [69, 70, 71]
    },
    {
        id: '070',
        name: 'Weepinbell',
        gender: 'MF',
        data: {
            M: 'When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.',
            F: 'When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.'
        },
        type: [5, 6],
        evolutions: [69, 70, 71]
    },
    {
        id: '071',
        name: 'Victreebel',
        gender: 'MF',
        data: {
            M: 'Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.',
            F: 'Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.'
        },
        type: [5, 6],
        evolutions: [69, 70, 71]
    },
    {
        id: '072',
        name: 'Tentacool',
        gender: 'MF',
        data: {
            M: 'Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.',
            F: 'This Pokémon is mostly made of water. A Tentacool out in the ocean is very hard to spot, because its body blends in with the sea.'
        },
        type: [3, 6],
        evolutions: [72, 73]
    },
    {
        id: '073',
        name: 'Tentacruel',
        gender: 'MF',
        data: {
            M: 'When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.',
            F: 'Its 80 tentacles can stretch and shrink freely. Tentacruel ensnares prey in a net of spread-out tentacles, delivering venomous stings to its catch.'
        },
        type: [3, 6],
        evolutions: [72, 73]
    },
    {
        id: '074',
        name: 'Geodude',
        gender: 'MF',
        data: {
            M: 'Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.',
            F: 'Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.'
        },
        type: [10, 8],
        evolutions: [74, 75, 76]
    },
    {
        id: '075',
        name: 'Graveler',
        gender: 'MF',
        data: {
            M: 'Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.',
            F: 'Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.'
        },
        type: [10, 8],
        evolutions: [74, 75, 76]
    },
    {
        id: '076',
        name: 'Golem',
        gender: 'MF',
        data: {
            M: 'Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it’s exposed to air.',
            F: 'Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it’s exposed to air.'
        },
        type: [10, 8],
        evolutions: [74, 75, 76]
    },
    {
        id: '077',
        name: 'Ponyta',
        gender: 'MF',
        data: {
            M: 'It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.',
            F: 'If you’ve been accepted by Ponyta, its burning mane is mysteriously no longer hot to the touch.'
        },
        type: [1],
        evolutions: [77, 78]
    },
    {
        id: '078',
        name: 'Rapidash',
        gender: 'MF',
        data: {
            M: 'This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.',
            F: 'The fastest runner becomes the leader, and it decides the herd’s pace and direction of travel.'
        },
        type: [1],
        evolutions: [77, 78]
    },
    {
        id: '079',
        name: 'Slowpoke',
        gender: 'MF',
        data: {
            M: 'Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either.',
            F: 'When this Pokémon’s tail is soaked in water, sweetness seeps from it. Slowpoke uses this trait to lure in and fish up other Pokémon.'
        },
        type: [3, 9],
        evolutions: [79, 80]
    },
    {
        id: '080',
        name: 'Slowbro',
        gender: 'MF',
        data: {
            M: 'Slowpoke became Slowbro when a Shellder bit on to its tail. Sweet flavors seeping from the tail make the Shellder feel as if its life is a dream.',
            F: 'Being bitten by a Shellder shocked this Pokémon into standing on two legs. If the Shellder lets go, it seems Slowbro will turn back into a Slowpoke.'
        },
        type: [3, 9],
        evolutions: [79, 80]
    },
    {
        id: '081',
        name: 'Magnemite',
        gender: 'MF',
        data: {
            M: 'At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it’ll start moving again.',
            F: 'It subsists on electricity. As Magnemite flies, it emits electromagnetic waves from the units on each side of its body.'
        },
        type: [7, 16],
        evolutions: [81, 82]
    },
    {
        id: '082',
        name: 'Magneton',
        gender: 'MF',
        data: {
            M: 'This Pokémon is three Magnemite that have linked together. Magneton sends out powerful radio waves to study its surroundings.',
            F: 'This Pokémon is constantly putting out a powerful magnetic force. Most computers go haywire when a Magneton approaches.'
        },
        type: [7, 16],
        evolutions: [81, 82]
    },
    {
        id: '083',
        name: 'Farfetch d',
        gender: 'MF',
        data: {
            M: 'The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.',
            F: 'They use a plant stalk as a weapon, but not all of them use it in the same way. Several distinct styles of stalk fighting have been observed.'
        },
        type: [0, 4],
    },
    {
        id: '084',
        name: 'Doduo',
        gender: 'MF',
        data: {
            M: 'Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.',
            F: 'Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.'
        },
        type: [0, 4],
        evolutions: [84, 85]
    },
    {
        id: '085',
        name: 'Dodrio',
        gender: 'MF',
        data: {
            M: 'One of Doduo’s two heads splits to form a unique species. It runs close to 40 mph in prairies.',
            F: 'One of Doduo’s two heads splits to form a unique species. It runs close to 40 mph in prairies.'
        },
        type: [0, 4],
        evolutions: [84, 85]
    },
    {
        id: '086',
        name: 'Seel',
        gender: 'MF',
        data: {
            M: 'Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.',
            F: 'Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.'
        },
        type: [3],
        evolutions: [86, 87]
    },
    {
        id: '087',
        name: 'Dewgong',
        gender: 'MF',
        data: {
            M: 'Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.',
            F: 'Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.'
        },
        type: [3, 11],
        evolutions: [86, 87]
    },
    {
        id: '088',
        name: 'Grimer',
        gender: 'MF',
        data: {
            M: 'Made of congealed sludge. It smells too putrid to touch. Even weeds won’t grow in its path.',
            F: 'Made of congealed sludge. It smells too putrid to touch. Even weeds won’t grow in its path.'
        },
        type: [6],
        evolutions: [88, 89]
    },
    {
        id: '089',
        name: 'Muk',
        gender: 'MF',
        data: {
            M: 'Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.',
            F: 'Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.'
        },
        type: [6],
        evolutions: [88, 89]
    },
    {
        id: '090',
        name: 'Shellder',
        gender: 'MF',
        data: {
            M: 'It swims facing backward by opening and closing its two-piece shell. It is surprisingly fast.',
            F: 'Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.'
        },
        type: [3],
        evolutions: [90, 91]
    },
    {
        id: '091',
        name: 'Cloyster',
        gender: 'MF',
        data: {
            M: 'Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.',
            F: 'Once it slams its shell shut, it is impossible to open, even by those with superior strength.'
        },
        type: [3, 11],
        evolutions: [90, 91]
    },
    {
        id: '092',
        name: 'Gastly',
        gender: 'MF',
        data: {
            M: 'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.',
            F: 'With its gas-like body, it can sneak into any place it desires. However, it can be blown away by wind.'
        },
        type: [14, 6],
        evolutions: [92, 93, 94]
    },
    {
        id: '093',
        name: 'Haunter',
        gender: 'MF',
        data: {
            M: 'Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.',
            F: 'If you get the feeling of being watched in darkness when nobody is around, Haunter is there.'
        },
        type: [14, 6],
        evolutions: [92, 93, 94]
    },
    {
        id: '094',
        name: 'Gengar',
        gender: 'MF',
        data: {
            M: 'On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing.',
            F: 'It is said to emerge from darkness to steal the lives of those who become lost in mountains.'
        },
        type: [14, 6],
        evolutions: [92, 93, 94]
    },
    {
        id: '095',
        name: 'Onix',
        gender: 'MF',
        data: {
            M: 'As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.',
            F: 'It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.'
        },
        type: [10, 8],
    },
    {
        id: '096',
        name: 'Drowzee',
        gender: 'MF',
        data: {
            M: 'If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.',
            F: 'If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.'
        },
        type: [9],
        evolutions: [96, 97]
    },
    {
        id: '097',
        name: 'Hypno',
        gender: 'MF',
        data: {
            M: 'Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.',
            F: 'Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.'
        },
        type: [9],
        evolutions: [96, 97]
    },
    {
        id: '098',
        name: 'Krabby',
        gender: 'MF',
        data: {
            M: 'It can be found near the sea. The large pincers grow back if they are torn out of their sockets.',
            F: 'If it senses danger approaching, it cloaks itself with bubbles from its mouth so it will look bigger.'
        },
        type: [3],
        evolutions: [98, 99]
    },
    {
        id: '099',
        name: 'Kingler',
        gender: 'MF',
        data: {
            M: 'Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.',
            F: 'Its oversized claw is very powerful, but when it’s not in battle, the claw just gets in the way.'
        },
        type: [3],
        evolutions: [98, 99]
    },
    {
        id: '100',
        name: 'Voltorb',
        data: 'It is said to camouflage itself as a Poké Ball. It will self-destruct with very little stimulus.',
        type: [7],
        evolutions: [100, 101]
    },
    {
        id: '101',
        name: 'Electrode',
        data: 'Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.',
        type: [7],
        evolutions: [100, 101]
    },
    {
        id: '102',
        name: 'Exeggcute',
        gender: 'MF',
        data: {
            M: 'Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.',
            F: 'These Pokémon get nervous when they’re not in a group of six. The minute even one member of the group goes missing, Exeggcute become cowardly.'
        },
        type: [5, 9],
        evolutions: [102, 103]
    },
    {
        id: '103',
        name: 'Exeggutor',
        gender: 'MF',
        data: {
            M: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
            F: 'When they work together, Exeggutor’s three heads can put out powerful psychic energy. Cloudy days make this Pokémon sluggish.'
        },
        type: [5, 9],
        evolutions: [102, 103]
    },
    {
        id: '104',
        name: 'Cubone',
        gender: 'MF',
        data: {
            M: 'When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.',
            F: 'This Pokémon wears the skull of its deceased mother. Sometimes Cubone’s dreams make it cry, but each tear Cubone sheds makes it stronger.'
        },
        type: [8],
        evolutions: [104, 105]
    },
    {
        id: '105',
        name: 'Marowak',
        gender: 'MF',
        data: {
            M: 'This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.',
            F: 'When this Pokémon evolved, the skull of its mother fused to it. Marowak’s temperament also turned vicious at the same time.'
        },
        type: [8],
        evolutions: [104, 105]
    },
    {
        id: '106',
        name: 'Hitmonlee',
        gender: 'M',
        data: {
            M: 'This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.'
        },
        type: [2],
    },
    {
        id: '107',
        name: 'Hitmonchan',
        gender: 'M',
        data: {
            M: 'Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.'
        },
        type: [2],
    },
    {
        id: '108',
        name: 'Lickitung',
        gender: 'MF',
        data: {
            M: 'If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.',
            F: 'Bug Pokémon are Lickitung’s main food source. This Pokémon paralyzes its prey with a lick from its long tongue, then swallows the prey whole.'
        },
        type: [0],
    },
    {
        id: '109',
        name: 'Koffing',
        gender: 'MF',
        data: {
            M: 'Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.',
            F: 'It adores polluted air. Some claim that Koffing used to be more plentiful in the Galar region than they are now.'
        },
        type: [6],
        evolutions: [109, 110]
    },
    {
        id: '110',
        name: 'Weezing',
        gender: 'MF',
        data: {
            M: 'It mixes gases between its two bodies. It’s said that these Pokémon were seen all over the Galar region back in the day.',
            F: 'It can’t suck in air quite as well as a Galarian Weezing, but the toxins it creates are more potent than those of its counterpart.'
        },
        type: [6],
        evolutions: [109, 110]
    },
    {
        id: '111',
        name: 'Rhyhorn',
        gender: 'MF',
        data: {
            M: 'Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.',
            F: 'It can remember only one thing at a time. Once it starts rushing, it forgets why it started.'
        },
        type: [10, 8],
        evolutions: [111, 112]
    },
    {
        id: '112',
        name: 'Rhydon',
        gender: 'MF',
        data: {
            M: 'It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.',
            F: 'Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.'
        },
        type: [10, 8],
        evolutions: [111, 112]
    },
    {
        id: '113',
        name: 'Chansey',
        gender: 'F',
        data: {
            M: 'The egg Chansey carries is not only delicious but also packed with nutrition. It’s used as a high-class cooking ingredient.',
            F: 'This species was once very slow. To protect their eggs from other creatures, these Pokémon became able to flee quickly.'
        },
        type: [0],
    },
    {
        id: '114',
        name: 'Tangela',
        gender: 'MF',
        data: {
            M: 'Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.',
            F: 'The vines of a Tangela have a distinct scent. In some parts of Galar, Tangela vines are used as herbs.'
        },
        type: [5],
    },
    {
        id: '115',
        name: 'Kangaskhan',
        gender: 'F',
        data: {
            F: 'There are records of a lost human child being raised by a childless Kangaskhan.'
        },
        type: [0],
    },
    {
        id: '116',
        name: 'Horsea',
        gender: 'MF',
        data: {
            M: 'Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.',
            F: 'They swim with dance-like motions and cause whirlpools to form. Horsea compete to see which of them can generate the biggest whirlpool.'
        },
        type: [3],
        evolutions: [116, 117]
    },
    {
        id: '117',
        name: 'Seadra',
        gender: 'MF',
        data: {
            M: 'It’s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.',
            F: 'Seadra’s mouth is slender, but its suction power is strong. In an instant, Seadra can suck in food that’s larger than the opening of its mouth.'
        },
        type: [3],
        evolutions: [116, 117]
    },
    {
        id: '118',
        name: 'Goldeen',
        gender: 'MF',
        data: {
            M: 'Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.',
            F: 'Its dorsal and pectoral fins are strongly developed like muscles. It can swim at a speed of five knots.'
        },
        type: [3],
        evolutions: [118, 119]
    },
    {
        id: '119',
        name: 'Seaking',
        gender: 'MF',
        data: {
            M: 'In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.',
            F: 'Using its horn, it bores holes in riverbed boulders, making nests to prevent its eggs from washing away.'
        },
        type: [3],
        evolutions: [118, 119]
    },
    {
        id: '120',
        name: 'Staryu',
        data: 'If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.',
        type: [3],
        evolutions: [120, 121]
    },
    {
        id: '121',
        name: 'Starmie',
        data: 'This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.',
        type: [3, 9],
        evolutions: [120, 121]
    },
    {
        id: '122',
        name: 'Mr. Mime',
        gender: 'MF',
        data: {
            M: 'The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.',
            F: 'It’s known for its top-notch pantomime skills. It protects itself from all sorts of attacks by emitting auras from its fingers to create walls.'
        },
        type: [9, 17],
    },
    {
        id: '123',
        name: 'Scyther',
        gender: 'MF',
        data: {
            M: 'As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.',
            F: 'If you come across an area in a forest where a lot of the trees have been cut down, what you’ve found is a Scyther’s territory.'
        },
        type: [12, 4],
    },
    {
        id: '124',
        name: 'Jynx',
        gender: 'F',
        data: {
            F: 'The Jynx of Galar often have beautiful and delicate voices. Some of these Pokémon have even gathered a fan base.'
        },
        type: [11, 9],
    },
    {
        id: '125',
        name: 'Electabuzz',
        gender: 'MF',
        data: {
            M: 'Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.',
            F: 'With the coming of a storm, many of these Pokémon will gather under tall trees and sit there waiting for lightning to strike.'
        },
        type: [7],
    },
    {
        id: '126',
        name: 'Magmar',
        gender: 'MF',
        data: {
            M: 'Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.',
            F: 'These Pokémon’s bodies are constantly burning. Magmar are feared as one of the causes behind fires.'
        },
        type: [1],
    },
    {
        id: '127',
        name: 'Pinsir',
        gender: 'MF',
        data: {
            M: 'These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.',
            F: 'This Pokémon clamps its pincers down on its prey and then either splits the prey in half or flings it away.'
        },
        type: [12],
    },
    {
        id: '128',
        name: 'Tauros',
        gender: 'M',
        data: {
            M: 'When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.'
        },
        type: [0],
    },
    {
        id: '129',
        name: 'Magikarp',
        gender: 'MF',
        data: {
            M: 'It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.',
            F: 'This weak and pathetic Pokémon gets easily pushed along rivers when there are strong currents.'
        },
        type: [3],
        evolutions: [129, 130]
    },
    {
        id: '130',
        name: 'Gyarados',
        gender: 'MF',
        data: {
            M: 'It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.',
            F: 'Once it begins to rampage, a Gyarados will burn everything down, even in a harsh storm.'
        },
        type: [3, 4],
        evolutions: [129, 130]
    },
    {
        id: '131',
        name: 'Lapras',
        gender: 'MF',
        data: {
            M: 'A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.',
            F: 'Crossing icy seas is no issue for this cold-resistant Pokémon. Its smooth skin is a little cool to the touch.'
        },
        type: [3],
    },
    {
        id: '132',
        name: 'Ditto',
        data: 'When it encounters another Ditto, it will move faster than normal to duplicate that opponent exactly.',
        type: [0],
    },
    {
        id: '133',
        name: 'Eevee',
        gender: 'MF',
        data: {
            M: 'It has the ability to alter the composition of its body to suit its surrounding environment.',
            F: 'Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions.'
        },
        type: [0],
        evolutionsAlt: [133, [
            134, 135, 136
        ]]
    },
    {
        id: '134',
        name: 'Vaporeon',
        gender: 'MF',
        data: {
            M: 'When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours.',
            F: 'Its body’s cellular structure is similar to the molecular composition of water. It can melt invisibly in water.'
        },
        type: [3],
        evolutionsAlt: [133, [
            134, 135, 136
        ]]
    },
    {
        id: '135',
        name: 'Jolteon',
        gender: 'MF',
        data: {
            M: 'If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.',
            F: 'It accumulates negative ions in the atmosphere to blast out 10,000-volt lightning bolts.'
        },
        type: [7],
        evolutionsAlt: [133, [
            134, 135, 136
        ]]
    },
    {
        id: '136',
        name: 'Flareon',
        gender: 'MF',
        data: {
            M: 'Once it has stored up enough heat, this Pokémon’s body temperature can reach up to 1,700 degrees Fahrenheit.',
            F: 'It stores some of the air it inhales in its internal flame pouch, which heats it to over 3,000 degrees Fahrenheit.'
        },
        type: [1],
        evolutionsAlt: [133, [
            134, 135, 136
        ]]
    },
    {
        id: '137',
        name: 'Porygon',
        data: 'State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.',
        type: [0],
    },
    {
        id: '138',
        name: 'Omanyte',
        gender: 'MF',
        data: {
            M: 'Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.',
            F: 'This Pokémon is a member of an ancient, extinct species. Omanyte paddles through water with its 10 tentacles, looking like it’s just drifting along.'
        },
        type: [10, 3],
        evolutions: [138, 139]
    },
    {
        id: '139',
        name: 'Omastar',
        gender: 'MF',
        data: {
            M: 'Weighed down by a large and heavy shell, Omastar couldn’t move very fast. Some say it went extinct because it was unable to catch food.',
            F: 'Omastar’s sharp fangs could crush rock, but the Pokémon can attack only the prey that come within reach of its tentacles.'
        },
        type: [10, 3],
        evolutions: [138, 139]
    },
    {
        id: '140',
        name: 'Kabuto',
        gender: 'MF',
        data: {
            M: 'This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.',
            F: 'While some say this species has gone extinct, Kabuto sightings are apparently fairly common in some places.'
        },
        type: [10, 3],
        evolutions: [140, 141]
    },
    {
        id: '141',
        name: 'Kabutops',
        gender: 'MF',
        data: {
            M: 'Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.',
            F: 'The cause behind the extinction of this species is unknown. Kabutops were aggressive Pokémon that inhabited warm seas.'
        },
        type: [10, 3],
        evolutions: [140, 141]
    },
    {
        id: '142',
        name: 'Aerodactyl',
        gender: 'MF',
        data: {
            M: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
            F: 'Aerodactyl’s sawlike fangs can shred skin to tatters—even the skin of Steel-type Pokémon.'
        },
        type: [10, 4],
    },
    {
        id: '143',
        name: 'Snorlax',
        gender: 'MF',
        data: {
            M: 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.',
            F: 'This Pokémon’s stomach is so strong, even eating moldy or rotten food will not affect it.'
        },
        type: [0],
    },
    {
        id: '144',
        name: 'Articuno',
        data: 'It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.',
        type: [11, 4],
    },
    {
        id: '145',
        name: 'Zapdos',
        data: 'This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.',
        type: [7, 4],
    },
    {
        id: '146',
        name: 'Moltres',
        data: 'It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.',
        type: [1, 4],
    },
    {
        id: '147',
        name: 'Dratini',
        gender: 'MF',
        data: {
            M: 'Dratini dwells near bodies of rapidly flowing water, such as the plunge pools of waterfalls. As it grows, Dratini will shed its skin many times.',
            F: 'This Pokémon was long considered to be no more than a myth. The small lump on a Dratini’s forehead is actually a horn that’s still coming in.'
        },
        type: [13],
        evolutions: [147, 148, 149]
    },
    {
        id: '148',
        name: 'Dragonair',
        gender: 'MF',
        data: {
            M: 'This Pokémon lives in pristine oceans and lakes. It can control the weather, and it uses this power to fly into the sky, riding on the wind.',
            F: 'This Pokémon gathers power in the orbs on its tail and controls the weather. When enshrouded by an aura, Dragonair has a mystical appearance.'
        },
        type: [13],
        evolutions: [147, 148, 149]
    },
    {
        id: '149',
        name: 'Dragonite',
        gender: 'MF',
        data: {
            M: 'It’s a kindhearted Pokémon. If it spots a drowning person or Pokémon, Dragonite simply must help them.',
            F: 'This Pokémon is known as the Sea Incarnate. Figureheads that resemble Dragonite decorate the bows of many ships.'
        },
        type: [13, 4],
        evolutions: [147, 148, 149]
    },
    {
        id: '150',
        name: 'Mewtwo',
        data: 'Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.',
        type: [9],
    },
    {
        id: '151',
        name: 'Mew',
        data: 'When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.',
        type: [9],
    },
]

export default PokeDex