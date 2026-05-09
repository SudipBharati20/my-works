// =============================================
//  NEB Class 10 Science Question Bank
//  data.js  —  All questions and answers
// =============================================

const data = {
  physics: {
    label: "Physics",
    lessons: {
      force: {
        label: "Lesson 1: Force",
        "1mark": [
          {
            q: "What is the value of 'g' on equatorial and polar regions of the earth?",
            years: ["2075 P1", "2074 P2"],
            a: [
              "The value of acceleration due to gravity (g) is <strong>not the same</strong> at all places on Earth because Earth is not a perfect sphere.",
              "At the <strong>equatorial region</strong>: g = <strong>9.78 m/s²</strong> (lower, because Earth bulges here, so radius is larger).",
              "At the <strong>polar region</strong>: g = <strong>9.83 m/s²</strong> (higher, because Earth is flattened here, so radius is smaller).",
              "Since g = GM/R², a larger radius at the equator gives a smaller g, and vice versa at the poles."
            ]
          },
          {
            q: "What is the value of acceleration due to gravity 'g' at the center of the earth?",
            years: ["2075 P2"],
            a: [
              "The value of acceleration due to gravity (g) at the <strong>center of the earth is 0 m/s²</strong>.",
              "At the center, the gravitational pull from all sides of the earth is equal and opposite, so the net force is zero.",
              "Since g = 0 at the center, an object placed there experiences no gravitational acceleration and is in weightlessness.",
              "Weight (W = mg) = 0 at the center, even though mass remains unchanged."
            ]
          },
          {
            q: "What is acceleration due to gravity?",
            years: ["2075 P2", "2073 P6"],
            a: [
              "When an object falls freely under gravity (without air resistance), it accelerates uniformly. This acceleration is called <strong>acceleration due to gravity</strong>, denoted by <strong>g</strong>.",
              "Definition: <em>The acceleration produced in a freely falling body due to the gravitational force of the Earth.</em>",
              "Its <strong>SI unit is m/s²</strong> (metres per second squared).",
              "Standard value on Earth's surface: <strong>g ≈ 9.8 m/s²</strong>.",
              "It is a <strong>vector quantity</strong>, always directed toward the center of the Earth.",
              "It is independent of the mass, shape, or size of the falling object."
            ]
          },
          {
            q: "Write the value of acceleration due to gravity on the surface of the moon in SI unit.",
            years: ["2075 P4"],
            a: [
              "The value of acceleration due to gravity on the surface of the moon is <strong>g_moon = 1.66 m/s²</strong>.",
              "Its SI unit is <strong>m/s²</strong>.",
              "This is approximately <strong>1/6th of Earth's g</strong> (9.8 m/s²), because the moon has much smaller mass and radius.",
              "Practically: a person weighing 60 kg on Earth would weigh only about 10 kg on the moon."
            ]
          },
          {
            q: "What is freefall?",
            years: ["2074 P5", "2073 P6"],
            a: [
              "<strong>Freefall</strong> is the fall of a body under the effect of gravity alone, in the <strong>absence of any external resistance</strong> (like air friction).",
              "The only force acting on the body is gravitational force pulling it toward Earth's center.",
              "A freely falling body accelerates at g = 9.8 m/s² downward.",
              "In freefall, the body experiences <strong>weightlessness</strong> — apparent weight becomes zero.",
              "Example: A stone dropped in vacuum; astronauts in orbit are also in continuous freefall."
            ]
          },
          {
            q: "What is gravity?",
            years: ["2075 P9"],
            a: [
              "<strong>Gravity</strong> is the force by which a massive body (like Earth) attracts other objects toward its center.",
              "It is a special case of gravitation — specifically the gravitational pull exerted by a large celestial body on nearby objects.",
              "Gravity keeps us on the ground, causes objects to fall, and gives every object its weight.",
              "Formula: W = mg, where m = mass, g = acceleration due to gravity.",
              "Gravity is always <strong>attractive</strong> — it never repels, and always acts toward the center of the attracting body."
            ]
          },
          {
            q: "Write the formula to find the weight of an object.",
            years: ["2075 P7"],
            a: [
              "The formula to find the weight of an object is: <strong>W = mg</strong>",
              "Where: W = Weight (Newtons, N), m = Mass (kilograms, kg), g = Acceleration due to gravity (9.8 m/s² on Earth).",
              "Weight is the gravitational force acting on a body. Unlike mass, it varies from place to place.",
              "Example: A 10 kg object weighs 10 × 9.8 = <strong>98 N</strong> on Earth, but only 10 × 1.66 = 16.6 N on the moon."
            ]
          },
          {
            q: "What is the value of universal gravitational constant (G)?",
            years: ["2074 P8"],
            a: [
              "The value of universal gravitational constant is <strong>G = 6.67 × 10⁻¹¹ Nm²/kg²</strong>.",
              "G is used in Newton's law of gravitation: F = Gm₁m₂/r².",
              "It is called 'universal' because its value is the same everywhere in the universe.",
              "G was first measured experimentally by <strong>Henry Cavendish</strong> in 1798 using a torsion balance.",
              "The very small value of G shows that gravitational force is extremely weak unless very large masses are involved."
            ]
          },
          {
            q: "State Newton's universal law of gravitation.",
            years: ["2074 P9", "2072 Supp", "2071 Supp"],
            a: [
              "<strong>Newton's Universal Law of Gravitation:</strong>",
              "Every object in the universe attracts every other object with a force that is <strong>directly proportional</strong> to the product of their masses and <strong>inversely proportional</strong> to the square of the distance between their centers.",
              "Mathematically: <strong>F = Gm₁m₂/r²</strong>",
              "Where: F = gravitational force, G = 6.67×10⁻¹¹ Nm²/kg², m₁, m₂ = masses, r = distance between centers.",
              "The force is always attractive, acts along the line joining the two bodies, and both bodies experience equal and opposite forces (Newton's 3rd law)."
            ]
          },
          {
            q: "What is gravitational constant? Also write its SI unit.",
            years: ["2073 P3"],
            a: [
              "The <strong>gravitational constant (G)</strong> is defined as the gravitational force of attraction between two bodies, each of unit mass (1 kg), separated by unit distance (1 m).",
              "From F = Gm₁m₂/r²: when m₁ = m₂ = 1 kg and r = 1 m, then F = G.",
              "So G numerically equals the force between two 1 kg masses placed 1 metre apart.",
              "<strong>SI unit of G: Nm²/kg²</strong>",
              "Value: G = 6.67 × 10⁻¹¹ Nm²/kg²"
            ]
          },
          {
            q: "What is gravitation (gravitational force)?",
            years: ["2073 P6"],
            a: [
              "<strong>Gravitation</strong> is the <strong>mutual force of attraction</strong> that exists between any two bodies that have mass.",
              "It is one of the four fundamental forces of nature and acts over infinite range.",
              "Gravitation acts between all objects — from atoms to galaxies — but is noticeable only when at least one object has very large mass.",
              "Unlike gravity (Earth's pull), gravitation is the general term for attraction between any two masses.",
              "Example: Moon orbiting Earth, Earth orbiting the Sun, and ocean tides — all due to gravitation."
            ]
          },
          {
            q: "The value of universal gravitational constant is 6.67 × 10⁻¹¹ Nm²/kg². What does it mean?",
            years: ["2071 WDR"],
            a: [
              "G = 6.67 × 10⁻¹¹ Nm²/kg² means: <strong>two bodies each of mass 1 kg, placed 1 metre apart, attract each other with a force of 6.67 × 10⁻¹¹ N</strong>.",
              "In other words, 1 kg of matter attracts another 1 kg placed at unit distance with only 6.67 × 10⁻¹¹ N of force.",
              "This extremely small value explains why we do not feel gravitational pull between everyday objects — it is billions of times weaker than even the weight of a grain of rice.",
              "Gravitational effects are only significant when extremely large masses (planets, stars) are involved."
            ]
          },
          {
            q: "What is weightlessness?",
            years: ["2070 EDB"],
            a: [
              "<strong>Weightlessness</strong> is the condition in which a body's <strong>apparent weight becomes zero</strong>, even though gravitational force still acts on it.",
              "Weight is felt only when a surface exerts a normal reaction force on us. In freefall, this reaction force disappears.",
              "Situations where weightlessness occurs: (i) During freefall (e.g., broken lift), (ii) Astronauts in orbit, (iii) At the center of the Earth where forces cancel.",
              "Weightlessness does NOT mean gravity is absent — it means the reaction force is absent.",
              "Effects: liquids float as droplets, walking and eating become difficult, the body feels like it is 'floating'."
            ]
          },
          {
            q: "In which condition will the acceleration due to gravity of a parachute become zero?",
            years: ["2070 WDR"],
            a: [
              "The acceleration due to gravity of a parachute becomes zero when the <strong>upward air resistance (upthrust) equals the downward weight (gravitational force)</strong>.",
              "At this point, net force = 0, so by Newton's second law (F = ma), acceleration = 0.",
              "This is called <strong>terminal velocity</strong> — the parachute then falls at constant speed.",
              "The parachutist continues falling but speed no longer increases from that point.",
              "Parachutes have large surface areas specifically to increase air resistance, making terminal velocity reached quickly at a safe speed."
            ]
          },
          {
            q: "In which direction does the force of gravity act?",
            years: ["2069 EDB"],
            a: [
              "The force of gravity always acts <strong>vertically downward — toward the center of the heavenly body</strong> (e.g., Earth's center).",
              "Gravity is always attractive — it never pushes objects away.",
              "This is why objects fall to the ground when dropped, rivers flow downhill, and the atmosphere is held close to Earth.",
              "Wherever you stand on Earth's surface, gravity points directly toward Earth's center."
            ]
          },
          {
            q: "Write one effect seen on ocean or sea due to gravitation of the moon and the sun.",
            years: ["2069 WDR"],
            a: [
              "<strong>Tides</strong> are the most prominent effect seen on oceans and seas due to the gravitational pull of the moon and the sun.",
              "The moon's gravity pulls ocean water on the side facing the moon, creating a <strong>high tide</strong> (water bulge). A corresponding high tide also appears on the opposite side.",
              "The sun also exerts a pull, but its effect is smaller than the moon's due to its much greater distance.",
              "When sun, moon, and Earth are aligned (new/full moon): <strong>Spring tides</strong> (very high tides) occur.",
              "When sun and moon are at right angles to Earth: <strong>Neap tides</strong> (lower tides) occur."
            ]
          },
          {
            q: "Where does the weight of a body become maximum on the surface of the earth?",
            years: ["2069 FWDR"],
            a: [
              "The weight of a body is <strong>maximum at the polar regions</strong> of the Earth.",
              "Since W = mg, and g is maximum at the poles (g = 9.83 m/s²), weight is greatest there.",
              "g is maximum at the poles because Earth's radius is smallest there. Since g = GM/R², smaller R → larger g.",
              "For the same mass, weight is greatest at poles and least at the equator (g = 9.78 m/s²).",
              "Weight is zero at the center of Earth (g = 0 there)."
            ]
          },
          {
            q: "What are the two factors that affect the force of gravitation?",
            years: ["2069 Supp"],
            a: [
              "According to F = Gm₁m₂/r², two factors affect the gravitational force:",
              "<strong>1. Product of the masses (m₁ × m₂):</strong> Greater the masses, greater the force. If either mass doubles, the force doubles. (F ∝ m₁m₂)",
              "<strong>2. Distance between their centers (r):</strong> Greater the distance, lesser the force. If distance doubles, force becomes one-fourth. (F ∝ 1/r² — inverse square law)",
              "Note: G is a universal constant and does not vary — it is not a factor that changes."
            ]
          },
          {
            q: "What is the value of acceleration due to gravity at the equatorial region of the earth? Write in SI unit.",
            years: ["2066 FWDR"],
            a: [
              "The value of acceleration due to gravity at the equatorial region of Earth is <strong>g = 9.78 m/s²</strong>.",
              "Its SI unit is <strong>m/s²</strong> (metres per second squared).",
              "This is slightly less than the standard value (9.8 m/s²) because the equatorial radius is greater than the polar radius.",
              "Since g = GM/R², a larger R at the equator gives a smaller g.",
              "Earth's rotation also slightly reduces the effective g at the equator."
            ]
          }
        ],

        "2mark": [
          {
            q: "Why does the value of 'g' vary from place to place on the earth's surface?",
            years: ["2075 P1"],
            a: [
              "The value of g varies because: <strong>g = GM/R²</strong> — it depends on the distance from Earth's center (R).",
              "Earth is not a perfect sphere — it is an <strong>oblate spheroid</strong>: flattened at poles and bulging at the equator.",
              "At the <strong>poles</strong>: Radius is smaller → g is <strong>larger</strong> (9.83 m/s²).",
              "At the <strong>equator</strong>: Radius is larger → g is <strong>smaller</strong> (9.78 m/s²).",
              "g also decreases as altitude increases (effective R increases) and decreases below the surface, becoming zero at Earth's center.",
              "Earth's rotation causes an additional slight reduction in effective g at the equator due to centrifugal effect."
            ]
          },
          {
            q: "The mass of the earth is 6 × 10²⁴ kg and its radius is 6.4 × 10⁶ m. Calculate the value of 'g'.",
            years: ["2075 P2"],
            a: [
              "<strong>Given:</strong> M = 6 × 10²⁴ kg, R = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹ Nm²/kg²",
              "<strong>Formula:</strong> g = GM/R²",
              "<strong>Calculation:</strong>",
              "g = (6.67 × 10⁻¹¹ × 6 × 10²⁴) / (6.4 × 10⁶)²",
              "= (40.02 × 10¹³) / (40.96 × 10¹²)",
              "= 400.2 / 40.96",
              "<strong>∴ g ≈ 9.77 m/s²</strong>",
              "This matches the standard surface value of g (~9.8 m/s²), confirming our formula."
            ]
          },
          {
            q: "How does the value of 'g' change if we go above the surface of the earth? Write with reason.",
            years: ["2074 P1"],
            a: [
              "The value of g <strong>decreases</strong> as we move above Earth's surface.",
              "<strong>Reason:</strong> g = GM/R². As height (h) increases, the effective distance from Earth's center becomes (R + h). A larger denominator gives a smaller g.",
              "Since g ∝ 1/R², even a small increase in height noticeably reduces g.",
              "At height equal to Earth's radius (R), g becomes <strong>one-fourth</strong> of its surface value.",
              "At very large distances (outer space), g approaches zero — this is why spacecraft can escape Earth's gravity.",
              "This principle is used to calculate satellite orbits: higher orbit = weaker gravity = slower orbital speed needed."
            ]
          },
          {
            q: "State the differences between mass and weight.",
            years: ["2074 P2", "2073 P1"],
            a: [
              "<strong>Mass:</strong>",
              "→ Quantity of matter in a body.",
              "→ Scalar quantity.",
              "→ SI unit: kilogram (kg).",
              "→ Constant everywhere in the universe.",
              "→ Measured by a beam balance.",
              "→ Cannot be zero.",
              "<strong>Weight:</strong>",
              "→ Gravitational force on a body (W = mg).",
              "→ Vector quantity (acts downward).",
              "→ SI unit: Newton (N).",
              "→ Varies from place to place (depends on g).",
              "→ Measured by a spring balance.",
              "→ Can be zero (at Earth's center or in freefall)."
            ]
          },
          {
            q: "Why do astronauts feel weightless in a spacecraft?",
            years: ["2073 P2"],
            a: [
              "Astronauts feel weightless because both the astronaut and the spacecraft are in a state of <strong>continuous freefall</strong> toward the Earth.",
              "In orbit, gravity still acts (it keeps the spacecraft in orbit), but there is no surface pushing back — <strong>no normal reaction force</strong> — so apparent weight = 0.",
              "Weight is only felt when a surface exerts a normal reaction on us. In freefall, this force vanishes.",
              "This is similar to briefly feeling 'weightless' at the top of a roller coaster or when a lift suddenly drops.",
              "This state is called <strong>microgravity</strong> or apparent weightlessness. Gravity is present; it is only the reaction force that is absent."
            ]
          },
          {
            q: "Why is it easier to lift a bucket of water inside a well than outside?",
            years: ["2072 P1"],
            a: [
              "Inside the well, the submerged bucket experiences an upward <strong>buoyant force (upthrust)</strong> from the surrounding water.",
              "By Archimedes' principle, buoyant force = weight of water displaced by the bucket.",
              "This upward force partially cancels the downward weight of the bucket.",
              "<strong>Effective weight inside water = Actual weight − Buoyant force</strong>",
              "So the net downward force is reduced — it feels lighter and is easier to lift.",
              "Outside the well, no buoyant force acts, so the full actual weight must be lifted — making it harder."
            ]
          }
        ],

        "34mark": [
          {
            q: "Mass of Jupiter is 1.9 × 10²⁷ kg and mass of the Sun is 2 × 10³⁰ kg. The distance between them is 8.1 × 10¹¹ m. Calculate the gravitational force between Jupiter and the Sun.",
            years: ["2075 P1"],
            a: [
              "<strong>Given:</strong>",
              "→ Mass of Jupiter (m₁) = 1.9 × 10²⁷ kg",
              "→ Mass of Sun (m₂) = 2 × 10³⁰ kg",
              "→ Distance (r) = 8.1 × 10¹¹ m",
              "→ G = 6.67 × 10⁻¹¹ Nm²/kg²",
              "<strong>Formula:</strong> F = Gm₁m₂ / r²",
              "<strong>Solution:</strong>",
              "→ Numerator = 6.67 × 10⁻¹¹ × 1.9 × 10²⁷ × 2 × 10³⁰ = 25.35 × 10⁴⁶",
              "→ Denominator = (8.1 × 10¹¹)² = 65.61 × 10²²",
              "→ F = 25.35 × 10⁴⁶ / 65.61 × 10²² = 0.3864 × 10²⁴",
              "<strong>∴ F ≈ 3.86 × 10²³ N</strong>",
              "This enormous force is what keeps Jupiter in its orbit around the Sun."
            ]
          },
          {
            q: "An object is dropped from 12 m height of a tower and reaches the ground in 2 seconds. At what condition does the acceleration due to gravity become zero?",
            years: ["2075 P2"],
            a: [
              "<strong>Part A — Finding g:</strong>",
              "→ Given: h = 12 m, t = 2 s, u = 0",
              "→ Using: h = ut + ½gt²",
              "→ 12 = 0 + ½ × g × (2)² = 2g",
              "<strong>→ ∴ g = 6 m/s²</strong>",
              "<strong>Part B — When does g = 0?</strong>",
              "→ <strong>At the center of the Earth:</strong> Gravitational forces from all directions cancel, net g = 0.",
              "→ <strong>In freefall/orbit:</strong> Apparent effect of g becomes zero (weightlessness).",
              "→ <strong>At infinite distance from Earth:</strong> g approaches 0 as r → ∞ in g = GM/r²."
            ]
          },
          {
            q: "How much time does a stone take to reach the surface from a height of 20 m when dropped? Also find the acceleration due to gravity after 3 seconds.",
            years: ["2074 P2"],
            a: [
              "<strong>Part A — Time to reach ground:</strong>",
              "→ Given: h = 20 m, u = 0, g = 9.8 m/s²",
              "→ Using: h = ut + ½gt²",
              "→ 20 = 0 + ½ × 9.8 × t²",
              "→ 20 = 4.9t²",
              "→ t² = 20/4.9 = 4.08",
              "<strong>→ ∴ t = √4.08 ≈ 2.02 seconds</strong>",
              "<strong>Part B — Acceleration due to gravity after 3 seconds:</strong>",
              "→ Acceleration due to gravity is <strong>constant</strong> throughout freefall near Earth's surface.",
              "<strong>→ g = 9.8 m/s²</strong> (does not change with time).",
              "→ Velocity after 3 s = u + gt = 0 + 9.8 × 3 = 29.4 m/s (downward)."
            ]
          },
          {
            q: "The mass of the moon is 7.36 × 10²² kg and its radius is 1.7 × 10⁶ m. Calculate g on the moon and the weight of a 50 kg object on the moon.",
            years: ["2074 P3"],
            a: [
              "<strong>Part A — g on the moon:</strong>",
              "→ Given: M = 7.36 × 10²² kg, R = 1.7 × 10⁶ m, G = 6.67 × 10⁻¹¹ Nm²/kg²",
              "→ Formula: g = GM/R²",
              "→ g = (6.67 × 10⁻¹¹ × 7.36 × 10²²) / (1.7 × 10⁶)²",
              "→ = (49.09 × 10¹¹) / (2.89 × 10¹²)",
              "<strong>→ ∴ g_moon ≈ 1.70 m/s²</strong> (≈ 1/6th of Earth's g)",
              "<strong>Part B — Weight of 50 kg on moon:</strong>",
              "→ W = m × g_moon = 50 × 1.70",
              "<strong>→ ∴ W = 85 N</strong>",
              "→ On Earth: W = 50 × 9.8 = 490 N — confirming weight is ~6× less on the moon."
            ]
          },
          {
            q: "The gravitational force between two bodies is 20 N at a distance of 4 m. How much force is produced when they are 2 m apart?",
            years: ["2073 P1"],
            a: [
              "<strong>Given:</strong> F₁ = 20 N, r₁ = 4 m, r₂ = 2 m",
              "<strong>Using Inverse Square Law:</strong> F ∝ 1/r²",
              "→ F₁/F₂ = r₂²/r₁²",
              "→ 20/F₂ = (2)²/(4)² = 4/16 = 1/4",
              "→ F₂ = 20 × 4",
              "<strong>→ ∴ F₂ = 80 N</strong>",
              "<strong>Interpretation:</strong> When distance is halved, gravitational force becomes <strong>4 times larger</strong>. This is the inverse square law — halving distance quadruples the force.",
              "This explains why gravity is stronger at low altitudes and why inner planets orbit the Sun faster."
            ]
          },
          {
            q: "Two objects each of mass 5 kg are separated by a distance of 1 m. Calculate the gravitational force between them.",
            years: ["2072 P1"],
            a: [
              "<strong>Given:</strong> m₁ = m₂ = 5 kg, r = 1 m, G = 6.67 × 10⁻¹¹ Nm²/kg²",
              "<strong>Formula:</strong> F = Gm₁m₂/r²",
              "→ F = (6.67 × 10⁻¹¹ × 5 × 5) / (1)²",
              "→ F = (6.67 × 10⁻¹¹ × 25) / 1",
              "→ F = 166.75 × 10⁻¹¹",
              "<strong>→ ∴ F = 1.67 × 10⁻⁹ N</strong>",
              "This extremely small force confirms that gravity between everyday objects is negligibly weak. Significant gravitational effects require extremely large masses like planets or stars."
            ]
          },
          {
            q: "A stone is thrown vertically upward with a velocity of 19.6 m/s. Find: (a) maximum height reached, (b) time taken to reach maximum height.",
            years: ["2071 P1"],
            a: [
              "<strong>Given:</strong> u = 19.6 m/s (upward), g = 9.8 m/s² (deceleration going up), v = 0 at top",
              "<strong>Part A — Maximum Height:</strong>",
              "→ Using: v² = u² − 2gh",
              "→ 0 = (19.6)² − 2 × 9.8 × h",
              "→ 0 = 384.16 − 19.6h",
              "→ h = 384.16 / 19.6",
              "<strong>→ ∴ h = 19.6 m</strong>",
              "<strong>Part B — Time to reach maximum height:</strong>",
              "→ Using: v = u − gt",
              "→ 0 = 19.6 − 9.8 × t",
              "→ t = 19.6 / 9.8",
              "<strong>→ ∴ t = 2 seconds</strong>",
              "Note: The stone takes equal time (2 s) to come back down → total time in air = 4 seconds."
            ]
          }
        ]
      },

      pressure: {
        label: "Lesson 2: Pressure",
        "1mark": [
          {
            q: "What is atmospheric pressure?",
            years: ["2075 P1"],
            a: [
              "<strong>Atmospheric pressure</strong> is the pressure exerted by the weight of the column of air above a given surface on the Earth.",
              "The atmosphere extends hundreds of kilometres above Earth's surface, and this enormous column of air has significant weight.",
              "At sea level, atmospheric pressure is approximately <strong>101,325 Pa (1 atm)</strong>.",
              "Atmospheric pressure decreases as altitude increases because the air column above becomes shorter and less dense.",
              "It is measured using a <strong>barometer</strong>, invented by Evangelista Torricelli."
            ]
          },
          {
            q: "Name two instruments which can be constructed on the basis of Pascal's Law.",
            years: ["2075 P2"],
            a: [
              "The two instruments constructed on the basis of Pascal's Law are: <strong>Hydraulic Press</strong> and <strong>Hydraulic Lift</strong>.",
              "A <strong>hydraulic press</strong> uses Pascal's law to multiply force — a small force applied on a small piston generates a large force on a larger piston.",
              "A <strong>hydraulic lift</strong> uses the same principle to lift heavy loads such as cars in garages and service stations.",
              "Other devices also based on Pascal's Law include hydraulic brakes, hydraulic jacks, and hydraulic cranes.",
              "Pascal's Law states that pressure applied to an enclosed liquid is transmitted equally in all directions."
            ]
          },
          {
            q: "What is upthrust?",
            years: ["2075 P3", "2074 P4", "2073 P5"],
            a: [
              "<strong>Upthrust</strong> (also called buoyant force) is the upward force exerted by a fluid (liquid or gas) on a body that is partially or completely immersed in it.",
              "When an object is submerged in a fluid, the fluid pressure on the lower surface of the object is greater than on the upper surface, resulting in a net upward force.",
              "Upthrust acts in the <strong>opposite direction to gravity</strong>, effectively reducing the apparent weight of the immersed object.",
              "Its <strong>SI unit is Newton (N)</strong>, same as force.",
              "According to Archimedes' principle, the magnitude of upthrust equals the weight of the fluid displaced by the body."
            ]
          },
          {
            q: "State the law of flotation.",
            years: ["2075 P5", "2073 P9"],
            a: [
              "The <strong>Law of Flotation</strong> states that a floating body displaces a quantity of fluid whose weight is exactly equal to the weight of the floating body itself.",
              "In other words, for an object to float, it must displace fluid whose weight equals its own weight.",
              "This law is a special case of Archimedes' principle applied specifically to objects that float.",
              "The law explains why ships made of steel can float — they are shaped to displace a large volume of water whose weight equals the total weight of the ship.",
              "If the weight of displaced liquid equals the body's weight, the body floats; if less, the body sinks."
            ]
          },
          {
            q: "State the Archimedes' principle.",
            years: ["2075 P7", "2074 P2", "2070 P1"],
            a: [
              "<strong>Archimedes' Principle</strong> states that when a body is partially or completely immersed in a fluid (liquid or gas), it experiences an upthrust (buoyant force) that is equal to the weight of the fluid displaced by the body.",
              "Mathematically: <strong>Upthrust = Weight of fluid displaced = ρ × V × g</strong>, where ρ is fluid density, V is the volume of fluid displaced, and g is acceleration due to gravity.",
              "This principle was discovered by the ancient Greek scientist Archimedes while stepping into a bathtub.",
              "It explains why objects appear lighter when submerged in water — the upthrust partially counteracts the gravitational pull.",
              "The principle is applied in designing ships, submarines, hydrometers, and in measuring the density of irregular objects."
            ]
          },
          {
            q: "Name two instruments that are based on the law of flotation.",
            years: ["2073 P1"],
            a: [
              "The two instruments based on the law of flotation are: <strong>Hydrometer</strong> and <strong>Ship</strong>.",
              "A <strong>hydrometer</strong> is a device used to measure the relative density (specific gravity) of liquids — it floats deeper in less dense liquids and shallower in denser ones.",
              "A <strong>ship</strong> floats because its large hollow shape displaces a volume of water whose weight equals the total weight of the ship.",
              "Both devices rely on the principle that a floating object displaces liquid equal in weight to its own weight.",
              "Lactometers (for milk purity) and alcoholometers also work on the law of flotation."
            ]
          },
          {
            q: "State Pascal's law. Write the name of instrument based on pascal's law.",
            years: ["2074 P3", "2071 C09"],
            a: [
              "<strong>Pascal's Law</strong> states that pressure applied to an enclosed (confined) liquid at any point is transmitted equally and undiminished in all directions perpendicular to the surface throughout the liquid.",
              "This means when you increase pressure at one point of an enclosed fluid, the pressure increases by the same amount at every other point in the fluid.",
              "Pascal's Law is the basis for all hydraulic machines that multiply force.",
              "Instruments based on Pascal's Law include: <strong>hydraulic press, hydraulic brakes, hydraulic jacks, hydraulic lift, and hydraulic crane</strong>.",
              "The law was formulated by the French scientist <strong>Blaise Pascal</strong> in the 17th century."
            ]
          },
          {
            q: "Write two conditions when a substance floats on liquid.",
            years: ["2075 P9"],
            a: [
              "The two conditions for a substance to float on a liquid are:",
              "<strong>Condition 1:</strong> The density of the object must be less than or equal to the density of the liquid it is placed in.",
              "<strong>Condition 2:</strong> The weight of the liquid displaced by the object must be equal to or greater than the weight of the object itself.",
              "If both conditions are satisfied simultaneously, the net upward force (upthrust) equals the downward weight, keeping the object afloat.",
              "For example, wood floats on water because its density (~0.6 g/cm³) is less than that of water (1 g/cm³)."
            ]
          },
          {
            q: "Define pressure.",
            years: ["2077 Supp"],
            a: [
              "<strong>Pressure</strong> is defined as the perpendicular force applied per unit area of a surface.",
              "Formula: <strong>P = F/A</strong>, where P = pressure, F = force (in Newtons), A = area (in m²).",
              "Its <strong>SI unit is Pascal (Pa)</strong>, which is equivalent to N/m² (Newton per square metre).",
              "Pressure increases when the same force is applied over a smaller area, and decreases when the area increases.",
              "This is why sharp objects like needles and knife blades are effective — they concentrate force over a very small area, producing very high pressure."
            ]
          },
          {
            q: "Name the device based on pascal's law.",
            years: ["2072 C09"],
            a: [
              "The devices based on Pascal's Law are: <strong>hydraulic press, hydraulic brakes, hydraulic jacks, and hydraulic lift</strong>.",
              "A <strong>hydraulic press</strong> is used to compress and shape materials such as cotton bales, oil seeds, and cardboard.",
              "A <strong>hydraulic brake</strong> in vehicles uses the principle to transmit braking force evenly to all wheels.",
              "A <strong>hydraulic jack</strong> is used to lift heavy vehicles for repair and maintenance.",
              "All these devices exploit the principle that pressure in an enclosed liquid is transmitted equally in all directions."
            ]
          },
          {
            q: "What is lactometer?",
            years: ["2073 P10"],
            a: [
              "A <strong>lactometer</strong> is a specially designed hydrometer used to measure the <strong>relative density (purity) of milk</strong>.",
              "It works on the principle of Archimedes and the law of flotation — it floats at different depths depending on the density of the milk sample.",
              "Pure milk has a specific density range; if water has been added to adulterate the milk, the density drops and the lactometer sinks deeper.",
              "This makes the lactometer a reliable tool for checking whether milk has been <strong>diluted with water</strong>.",
              "The scale on the lactometer is calibrated to directly read the relative density of milk."
            ]
          },
          {
            q: "Mention any two factors which affect the upthrust.",
            years: ["2073 P8&9"],
            a: [
              "The two main factors that affect the upthrust (buoyant force) are:",
              "<strong>Factor 1 — Density of the fluid (ρ):</strong> A denser fluid exerts greater upthrust. For example, objects experience more upthrust in salt water than in fresh water.",
              "<strong>Factor 2 — Volume of fluid displaced (V):</strong> A larger submerged volume displaces more fluid, resulting in greater upthrust.",
              "A third factor is <strong>Acceleration due to gravity (g):</strong> Upthrust = ρVg, so greater g means greater upthrust.",
              "These factors are combined in the formula: <strong>U = ρVg</strong>, where any increase in ρ, V, or g directly increases the upthrust."
            ]
          },
          {
            q: "On the basis of which principle is the hydrometer constructed?",
            years: ["2071 C09"],
            a: [
              "The <strong>hydrometer</strong> is constructed on the basis of <strong>Archimedes' Principle</strong>.",
              "Archimedes' Principle states that an immersed body experiences upthrust equal to the weight of fluid displaced.",
              "The hydrometer floats at different depths in liquids of different densities — deeper in less dense liquids, shallower in denser ones.",
              "It is calibrated so that the depth at which it floats directly indicates the <strong>relative density</strong> of the liquid.",
              "Common applications include measuring the density of battery acid, alcoholic drinks, and the purity of milk (lactometer)."
            ]
          },
          {
            q: "Write down the formula to find the relative density of an object.",
            years: ["2070 Supp"],
            a: [
              "The formula to find the <strong>relative density</strong> (specific gravity) of an object is:",
              "<strong>Relative Density = Density of substance / Density of water at 4°C</strong>",
              "Since density of water at 4°C = 1000 kg/m³, relative density is a pure ratio with <strong>no unit</strong>.",
              "Alternatively, for solids: <strong>Relative Density = Weight in air / (Weight in air − Weight in water)</strong>.",
              "If relative density > 1, the substance is denser than water and sinks; if < 1, it floats."
            ]
          },
          {
            q: "What is one pascal pressure?",
            years: ["2070 C09"],
            a: [
              "One <strong>Pascal (1 Pa)</strong> is the pressure exerted on a surface of area <strong>1 m²</strong> by a perpendicular force of <strong>1 Newton (1 N)</strong>.",
              "Mathematically: <strong>1 Pa = 1 N/m²</strong>.",
              "Pascal is the SI unit of pressure, named after the French mathematician and physicist <strong>Blaise Pascal</strong>.",
              "1 Pa is a very small pressure — atmospheric pressure is about 101,325 Pa.",
              "Larger units like kilopascal (kPa) and megapascal (MPa) are used in practical engineering applications."
            ]
          },
          {
            q: "State law of flotation. Name a device based on this law and mention its use.",
            years: ["2070 C09"],
            a: [
              "The <strong>Law of Flotation</strong> states that a floating body displaces a quantity of liquid whose weight is equal to the weight of the floating body.",
              "This means the upthrust from the displaced liquid exactly balances the gravitational weight of the floating object.",
              "<strong>Device: Ship</strong> — Ships are built on this law. Despite being made of heavy steel, the hollow shape allows them to displace water weighing as much as the ship itself.",
              "Ships are used for <strong>transporting passengers and cargo</strong> across oceans and seas.",
              "Another device — the <strong>hydrometer</strong> — also relies on this law and is used to measure the relative density of liquids."
            ]
          },
          {
            q: "On which principle does hydraulic brake based? State this principle.",
            years: ["2070 P8&9"],
            a: [
              "The <strong>hydraulic brake</strong> is based on <strong>Pascal's Law</strong>.",
              "Pascal's Law states that the pressure applied to an enclosed liquid at any point is transmitted equally in all directions throughout the liquid.",
              "In hydraulic brakes, when the driver presses the brake pedal, pressure is applied to the brake fluid in the master cylinder.",
              "This pressure is instantly and equally transmitted through the fluid to all four wheel cylinders, applying the brakes simultaneously.",
              "The advantage is that a relatively small force on the pedal produces a much larger braking force at the wheels due to the difference in piston areas."
            ]
          },
          {
            q: "By which two properties of liquid is it used in hydraulic brakes?",
            years: ["2069 C09"],
            a: [
              "The two properties of liquid that make it suitable for use in hydraulic brakes are:",
              "<strong>Property 1 — Non-compressibility:</strong> Liquid cannot be compressed, so pressure applied at one point is transmitted fully without any loss or reduction.",
              "<strong>Property 2 — High boiling point and low freezing point:</strong> The brake fluid must remain liquid across a wide temperature range — it must not boil under high-temperature braking conditions nor freeze in cold climates.",
              "These properties ensure reliable, consistent pressure transmission in all weather and driving conditions.",
              "The most commonly used hydraulic brake fluid is a glycol-based fluid that satisfies both these requirements."
            ]
          },
          {
            q: "What is the hydraulic press?",
            years: ["2069 P8&9"],
            a: [
              "A <strong>hydraulic press</strong> is a machine that works on <strong>Pascal's Law</strong> of liquid pressure.",
              "It consists of two pistons of different cross-sectional areas connected by a fluid-filled cylinder.",
              "A small force applied on the narrow piston generates high pressure in the fluid, which is transmitted equally to the wider piston, producing a much larger force.",
              "The mechanical advantage is equal to the ratio of the areas of the two pistons: <strong>F₂/F₁ = A₂/A₁</strong>.",
              "Hydraulic presses are used for <strong>compressing cotton bales, extracting oils from seeds, shaping metal parts, and squeezing juice from fruits</strong>."
            ]
          }
        ],
        "2mark": [
          {
            q: "Differentiate between force and pressure.",
            years: ["2074 P6", "2073 P7"],
            a: [
              "<strong>Force vs Pressure — Key Differences:</strong>",
              "<strong>Force:</strong> Force is a push or pull that can change the state of rest or motion of an object. Its SI unit is <strong>Newton (N)</strong>. Force is a <strong>vector quantity</strong> with both magnitude and direction. It can change the shape, speed, or direction of an object.",
              "<strong>Pressure:</strong> Pressure is the force applied perpendicularly per unit area of a surface. Its SI unit is <strong>Pascal (Pa) or N/m²</strong>. Pressure is a <strong>scalar quantity</strong> — it has magnitude but acts in all directions in a fluid.",
              "<strong>Key difference:</strong> The same force produces different pressures depending on the area — smaller area means higher pressure. Pressure = Force / Area.",
              "Example: A 100 N force on 1 m² gives 100 Pa, but on 0.01 m² gives 10,000 Pa — showing how reducing area massively increases pressure."
            ]
          },
          {
            q: "Differentiate between Archimedes' Principle and Law of Flotation.",
            years: ["2073 P2", "2071 P4"],
            a: [
              "<strong>Archimedes' Principle vs Law of Flotation:</strong>",
              "<strong>Archimedes' Principle:</strong> When a body is partially or completely immersed in a fluid, it experiences an upthrust equal to the weight of fluid displaced. It applies to ALL objects — whether they float, sink, or are fully submerged. SI unit of upthrust is Newton (N).",
              "<strong>Law of Flotation:</strong> A floating body displaces a volume of fluid whose weight is equal to the weight of the floating body. It applies ONLY to objects that float — it is a special case of Archimedes' principle.",
              "<strong>Key difference:</strong> Archimedes' principle is a general law for any immersed object; the law of flotation is specific to floating objects only.",
              "Example: A stone sinks — Archimedes' principle applies (upthrust < weight). A ship floats — both Archimedes' principle and the law of flotation apply."
            ]
          },
          {
            q: "Differentiate between upthrust and weight.",
            years: ["2072 P3", "2070 P5"],
            a: [
              "<strong>Upthrust vs Weight — Key Differences:</strong>",
              "<strong>Upthrust:</strong> Upthrust (buoyant force) is the upward force exerted by a fluid on an immersed object. It acts <strong>upward</strong>, away from Earth's center. It depends on the density of the fluid, volume of fluid displaced, and g. It only exists when an object is in a fluid.",
              "<strong>Weight:</strong> Weight is the downward gravitational force on an object due to Earth's gravity. It acts <strong>downward</strong>, toward Earth's center. It depends only on mass and g (W = mg). It exists everywhere regardless of any surrounding fluid.",
              "<strong>Key difference:</strong> Upthrust acts upward and is caused by fluid pressure; weight acts downward and is caused by gravity. Both have the SI unit Newton (N).",
              "When upthrust equals weight, the object floats. When upthrust is less than weight, the object sinks."
            ]
          },
          {
            q: "Differentiate between hydrometer and lactometer.",
            years: ["2072 P6", "2069 P4"],
            a: [
              "<strong>Hydrometer vs Lactometer — Key Differences:</strong>",
              "<strong>Hydrometer:</strong> A hydrometer is a general instrument used to measure the relative density of any liquid. It can measure the density of battery acid, alcohol, petrol, salt water, and other liquids. Its scale is graduated for a wide range of densities.",
              "<strong>Lactometer:</strong> A lactometer is a <em>specially designed</em> hydrometer used exclusively to measure the purity and relative density of <strong>milk</strong>. Its scale is calibrated specifically for the density range of pure and adulterated milk.",
              "<strong>Key difference:</strong> A hydrometer is a general-purpose instrument for any liquid; a lactometer is a special-purpose instrument only for milk.",
              "Both work on the same principle — Archimedes' principle — and float deeper in less dense liquids and shallower in denser liquids."
            ]
          },
          {
            q: "What is the importance of atmospheric pressure? Write any two points.",
            years: ["2074 P5", "2071 P3"],
            a: [
              "<strong>Importance of Atmospheric Pressure:</strong>",
              "<strong>1. Enables breathing:</strong> Atmospheric pressure pushes air into our lungs when we inhale. When we expand our chest cavity, the pressure inside drops below atmospheric pressure, and air rushes in automatically.",
              "<strong>2. Enables sucking liquids through a straw:</strong> When we suck on a straw, we reduce the air pressure inside. The higher atmospheric pressure on the liquid's surface then pushes the liquid up into the straw.",
              "<strong>3. Weather and climate:</strong> Differences in atmospheric pressure at different locations drive winds and weather patterns. Low pressure areas cause storms; high pressure areas bring clear skies.",
              "<strong>4. Boiling point variation:</strong> At high altitudes, atmospheric pressure is lower, so water boils at less than 100°C. This is why cooking takes longer in the mountains."
            ]
          },
          {
            q: "Why does a balloon filled with helium rise in air?",
            years: ["2073 P3", "2071 P2"],
            a: [
              "A helium-filled balloon rises in air because of the principle of <strong>upthrust and buoyancy</strong>.",
              "<strong>Reason:</strong> The density of helium gas (~0.164 kg/m³) is much less than the density of air (~1.225 kg/m³). According to Archimedes' principle, the balloon experiences an upthrust equal to the weight of air it displaces.",
              "Since the weight of air displaced is <strong>greater than the total weight</strong> of the helium gas and the balloon's shell, the net force is upward.",
              "This net upward force causes the balloon to <strong>rise until it reaches an altitude</strong> where the surrounding air is thin enough that the upthrust equals the balloon's weight.",
              "This is the same principle by which ships float and hot-air balloons ascend — any object less dense than the surrounding fluid experiences a net upward buoyant force."
            ]
          },
          {
            q: "Why do deep-sea divers wear special suits?",
            years: ["2073 P4", "2072 P2"],
            a: [
              "Deep-sea divers wear special pressurized suits because <strong>water pressure increases greatly with depth</strong>.",
              "<strong>Reason 1 — High pressure at depth:</strong> Liquid pressure increases with depth (P = ρgh). At great depths, the water pressure can be hundreds of times the atmospheric pressure, which can crush the human body without protection.",
              "<strong>Reason 2 — Oxygen supply:</strong> The special suit provides a regulated supply of breathing gas at a pressure matching the surrounding water pressure, preventing lungs from collapsing.",
              "<strong>Reason 3 — Decompression safety:</strong> The suit helps manage safe ascent to prevent decompression sickness ('the bends'), which occurs when dissolved nitrogen forms bubbles in the blood during rapid pressure changes.",
              "Without such suits, the enormous pressure at depth would be fatal to the human body within seconds."
            ]
          },
          {
            q: "Why does the tip of a nail have a pointed end?",
            years: ["2075 P4", "2072 P1"],
            a: [
              "The tip of a nail is pointed to <strong>maximise pressure</strong> so it can easily penetrate surfaces.",
              "<strong>Reason:</strong> Pressure = Force / Area (P = F/A). When the area is very small (as with a sharp point), even a moderate force produces an extremely high pressure.",
              "A pointed tip has a very tiny cross-sectional area, so the same hammering force creates enormous pressure at the tip, which is enough to penetrate wood, concrete, or metal.",
              "In contrast, if the tip were flat and broad, the same force would be spread over a larger area, creating much lower pressure — making it impossible to drive into hard materials.",
              "This principle — <em>same force, smaller area = higher pressure</em> — also explains why needles, knives, and scissors are designed with sharp edges."
            ]
          }
        ],
        "34mark": [
          {
            q: "What is the condition for an object to sink in water? The cross-sectional area of piston A₁ and A₂ is 50cm² and 0.2m² respectively. How much load can lift in piston A₂ if 250N force is applied on piston A₁.",
            years: ["2075 P1"],
            a: [
              "<strong>Condition to sink in water:</strong> An object sinks when its <strong>density is greater than the density of water</strong> (density > 1000 kg/m³), so the upthrust produced is less than its weight.",
              "<strong>Given:</strong>",
              "→ Cross-sectional area of piston A₁ (A₁) = 50 cm² = <strong>0.005 m²</strong>",
              "→ Cross-sectional area of piston A₂ (A₂) = <strong>0.2 m²</strong>",
              "→ Force on A₁ (F₁) = <strong>250 N</strong>",
              "→ Force on A₂ (F₂) = <strong>?</strong>",
              "<strong>Using Pascal's Law:</strong> Pressure on small piston = Pressure on large piston",
              "→ P₁ = P₂",
              "→ F₁/A₁ = F₂/A₂",
              "→ 250/0.005 = F₂/0.2",
              "→ F₂ = (250 × 0.2) / 0.005",
              "<strong>→ ∴ F₂ = 10,000 N = 10⁴ N</strong>",
              "This shows the power of hydraulic systems — a small force of 250 N is magnified 40 times to lift 10,000 N."
            ]
          },
          {
            q: "A stone weighs 20N in water and 5N weight of water is displaced. (i) What is the weight of the stone in air? (ii) How much upthrust is exerted by water on that stone? (iii) What is the mass of that stone?",
            years: ["2075 P6"],
            a: [
              "<strong>(i) Weight of the stone in air:</strong>",
              "→ Weight in air = Apparent weight in water + Weight of water displaced",
              "→ = 20 + 5 = <strong>25 N</strong>",
              "<strong>(ii) Upthrust exerted by water:</strong>",
              "→ By Archimedes' Principle, upthrust = weight of fluid displaced",
              "→ <strong>∴ Upthrust = 5 N</strong>",
              "<strong>(iii) Mass of the stone:</strong>",
              "→ Using W = mg → m = W/g",
              "→ m = 25/10",
              "→ <strong>∴ Mass = 2.5 kg</strong>",
              "Explanation: The stone appears lighter in water (apparent weight = 20 N) because the 5 N upthrust partially cancels its true weight of 25 N."
            ]
          },
          {
            q: "An effort of 100N can raise a load of 2000N in a hydraulic press. Calculate the cross-sectional area of the small piston. The cross-sectional area of a large piston is 4m². Write one application of the hydraulic press.",
            years: ["2074 P3"],
            a: [
              "<strong>Given:</strong>",
              "→ Cross-sectional area of large piston (A₂) = <strong>4 m²</strong>",
              "→ Force on small piston (F₁) = <strong>100 N</strong>",
              "→ Force on large piston (F₂) = <strong>2000 N</strong>",
              "→ Cross-sectional area of small piston (A₁) = <strong>?</strong>",
              "<strong>Using Pascal's Law:</strong> P₁ = P₂",
              "→ F₁/A₁ = F₂/A₂",
              "→ 100/A₁ = 2000/4",
              "→ 100/A₁ = 500",
              "→ A₁ = 100/500",
              "<strong>→ ∴ A₁ = 0.2 m²</strong>",
              "<strong>Application:</strong> A hydraulic press is used for <strong>compressing cotton bales and extracting oils from seeds</strong>.",
              "The mechanical advantage here is 2000/100 = <strong>20</strong>, meaning a 100 N effort lifts a 2000 N load."
            ]
          },
          {
            q: "A block of wood has a volume of 0.5 m³ and density of 600 kg/m³. (i) What is the mass of the block? (ii) What is the weight of water displaced when it floats? (iii) What volume of the block is submerged?",
            years: ["2073 P2"],
            a: [
              "<strong>Given:</strong> Volume of block (V) = 0.5 m³, Density of wood (ρ_wood) = 600 kg/m³, Density of water (ρ_water) = 1000 kg/m³, g = 10 m/s²",
              "<strong>(i) Mass of the block:</strong>",
              "→ m = ρ × V = 600 × 0.5",
              "→ <strong>∴ m = 300 kg</strong>",
              "<strong>(ii) Weight of water displaced when floating:</strong>",
              "→ By the Law of Flotation, weight of water displaced = weight of floating object",
              "→ Weight of block = mg = 300 × 10 = <strong>3000 N</strong>",
              "→ <strong>∴ Weight of water displaced = 3000 N</strong>",
              "<strong>(iii) Volume of block submerged:</strong>",
              "→ Weight of water displaced = ρ_water × V_submerged × g",
              "→ 3000 = 1000 × V_submerged × 10",
              "→ V_submerged = 3000 / 10000",
              "<strong>→ ∴ V_submerged = 0.3 m³</strong>",
              "Conclusion: 0.3 m³ out of 0.5 m³ is submerged, meaning <strong>60% of the block is underwater</strong> and 40% is above the surface."
            ]
          },
          {
            q: "The small piston of a hydraulic lift has an area of 10 cm² and the large piston has an area of 500 cm². If a force of 200 N is applied on the small piston: (i) What pressure is created in the fluid? (ii) What load can the large piston support?",
            years: ["2073 P1", "2072 P3"],
            a: [
              "<strong>Given:</strong> A₁ = 10 cm² = 0.001 m², A₂ = 500 cm² = 0.05 m², F₁ = 200 N",
              "<strong>(i) Pressure created in the fluid:</strong>",
              "→ P = F₁/A₁",
              "→ P = 200 / 0.001",
              "→ <strong>∴ P = 200,000 Pa = 2 × 10⁵ Pa</strong>",
              "<strong>(ii) Load on the large piston (Pascal's Law: P₁ = P₂):</strong>",
              "→ F₂/A₂ = P",
              "→ F₂ = P × A₂",
              "→ F₂ = 200,000 × 0.05",
              "<strong>→ ∴ F₂ = 10,000 N = 10⁴ N</strong>",
              "The mechanical advantage = A₂/A₁ = 500/10 = <strong>50</strong>. A 200 N effort lifts a 10,000 N load — demonstrating the enormous force multiplication of hydraulic systems."
            ]
          },
          {
            q: "A metal block weighs 60 N in air and 45 N when fully submerged in water. (i) What is the upthrust on the block? (ii) What is the volume of the block? (iii) What is the relative density of the metal?",
            years: ["2072 P1", "2071 P2"],
            a: [
              "<strong>Given:</strong> Weight in air (W_air) = 60 N, Apparent weight in water (W_water) = 45 N, density of water = 1000 kg/m³, g = 10 m/s²",
              "<strong>(i) Upthrust on the block:</strong>",
              "→ Upthrust = Weight in air − Apparent weight in water",
              "→ = 60 − 45",
              "→ <strong>∴ Upthrust = 15 N</strong>",
              "<strong>(ii) Volume of the block:</strong>",
              "→ Upthrust = ρ_water × V × g",
              "→ 15 = 1000 × V × 10",
              "→ V = 15/10000",
              "→ <strong>∴ V = 0.0015 m³ = 1500 cm³</strong>",
              "<strong>(iii) Relative density of the metal:</strong>",
              "→ Relative Density = Weight in air / (Weight in air − Weight in water)",
              "→ = 60 / (60 − 45) = 60/15",
              "→ <strong>∴ Relative Density = 4</strong>",
              "The metal is 4 times denser than water. Since RD > 1, it sinks in water — consistent with the observation."
            ]
          },
          {
            q: "Liquid pressure at a point is given by P = ρgh. A tank is filled with water to a depth of 5 m. Calculate: (i) the pressure at the bottom of the tank, (ii) the pressure at a depth of 2 m from the surface. (Density of water = 1000 kg/m³, g = 10 m/s²)",
            years: ["2071 P3", "2070 P2"],
            a: [
              "<strong>Given:</strong> ρ = 1000 kg/m³, g = 10 m/s², Total depth = 5 m",
              "<strong>Formula:</strong> Liquid pressure P = ρ × g × h",
              "<strong>(i) Pressure at the bottom (h = 5 m):</strong>",
              "→ P = ρgh = 1000 × 10 × 5",
              "→ <strong>∴ P = 50,000 Pa = 5 × 10⁴ Pa</strong>",
              "<strong>(ii) Pressure at depth h = 2 m:</strong>",
              "→ P = ρgh = 1000 × 10 × 2",
              "→ <strong>∴ P = 20,000 Pa = 2 × 10⁴ Pa</strong>",
              "This confirms that pressure increases with depth — the bottom of the tank experiences 2.5 times more pressure than the point 2 m deep.",
              "This principle explains why dams are built thicker at the base, and why deep-sea creatures need special adaptations to survive."
            ]
          },
          {
            q: "An object has a mass of 500 g and volume of 400 cm³. (i) Find the density of the object. (ii) Will it float or sink in water? (iii) If placed in a liquid of density 1500 kg/m³, what is the upthrust on it? (g = 10 m/s²)",
            years: ["2071 P1", "2070 Supp"],
            a: [
              "<strong>Given:</strong> mass = 500 g = 0.5 kg, volume = 400 cm³ = 0.0004 m³, ρ_liquid = 1500 kg/m³, g = 10 m/s²",
              "<strong>(i) Density of the object:</strong>",
              "→ ρ = m/V = 0.5/0.0004",
              "→ <strong>∴ ρ = 1250 kg/m³</strong>",
              "<strong>(ii) Does it float or sink in water?</strong>",
              "→ Density of object (1250 kg/m³) > Density of water (1000 kg/m³)",
              "→ <strong>∴ The object SINKS in water</strong>",
              "<strong>(iii) Upthrust in liquid of density 1500 kg/m³:</strong>",
              "→ Upthrust U = ρ_liquid × V × g (object fully submerged)",
              "→ U = 1500 × 0.0004 × 10",
              "→ <strong>∴ U = 6 N</strong>",
              "Note: Weight of object = mg = 0.5 × 10 = 5 N. Since upthrust (6 N) > weight (5 N), the object will <strong>float</strong> in the 1500 kg/m³ liquid."
            ]
          },
          {
            q: "The cross-sectional area of a small piston is 5 cm² and of a large piston is 100 cm². A force of 50 N is applied on the small piston. (i) Find the pressure exerted on the liquid. (ii) Find the force on the large piston. (iii) Name the law used.",
            years: ["2073 P3"],
            a: [
              "<strong>Given:</strong> A₁ = 5 cm² = 0.0005 m², A₂ = 100 cm² = 0.01 m², F₁ = 50 N",
              "<strong>(i) Pressure exerted on the liquid:</strong>",
              "→ P = F₁/A₁ = 50/0.0005",
              "→ <strong>∴ P = 100,000 Pa = 1 × 10⁵ Pa</strong>",
              "<strong>(ii) Force on the large piston (Pascal's Law: P₁ = P₂):</strong>",
              "→ F₂ = P × A₂ = 100,000 × 0.01",
              "→ <strong>∴ F₂ = 1000 N</strong>",
              "<strong>(iii) Law used:</strong> <strong>Pascal's Law</strong> — pressure applied to an enclosed liquid is transmitted equally in all directions throughout the liquid.",
              "The mechanical advantage = F₂/F₁ = 1000/50 = <strong>20</strong>. A 50 N input produces a 1000 N output — a 20× force multiplication."
            ]
          },
          {
            q: "A solid block weighs 80 N in air. When fully submerged in a liquid of density 800 kg/m³, it weighs 48 N. Find: (i) the upthrust, (ii) volume of the block, (iii) density of the block. (g = 10 m/s²)",
            years: ["2073 P4"],
            a: [
              "<strong>Given:</strong> W_air = 80 N, W_liquid = 48 N, ρ_liquid = 800 kg/m³, g = 10 m/s²",
              "<strong>(i) Upthrust:</strong>",
              "→ U = W_air − W_liquid = 80 − 48",
              "→ <strong>∴ U = 32 N</strong>",
              "<strong>(ii) Volume of the block:</strong>",
              "→ U = ρ_liquid × V × g",
              "→ 32 = 800 × V × 10",
              "→ V = 32/8000",
              "→ <strong>∴ V = 0.004 m³ = 4000 cm³</strong>",
              "<strong>(iii) Density of the block:</strong>",
              "→ Mass of block = W_air/g = 80/10 = 8 kg",
              "→ ρ_block = m/V = 8/0.004",
              "→ <strong>∴ ρ_block = 2000 kg/m³</strong>",
              "Since ρ_block (2000) > ρ_water (1000), the block sinks in water — consistent with the setup. Relative density = 2000/1000 = <strong>2</strong>."
            ]
          },
          {
            q: "A rectangular tank is 4 m long, 3 m wide, and filled with water to a depth of 2.5 m. Find: (i) the pressure at the bottom, (ii) the total force on the bottom of the tank. (ρ_water = 1000 kg/m³, g = 10 m/s²)",
            years: ["2072 P4"],
            a: [
              "<strong>Given:</strong> Length = 4 m, Width = 3 m, Depth h = 2.5 m, ρ = 1000 kg/m³, g = 10 m/s²",
              "<strong>(i) Pressure at the bottom:</strong>",
              "→ P = ρ × g × h",
              "→ P = 1000 × 10 × 2.5",
              "→ <strong>∴ P = 25,000 Pa = 2.5 × 10⁴ Pa</strong>",
              "<strong>(ii) Total force on the bottom:</strong>",
              "→ Area of bottom = Length × Width = 4 × 3 = 12 m²",
              "→ Force = P × A = 25,000 × 12",
              "→ <strong>∴ Force = 300,000 N = 3 × 10⁵ N</strong>",
              "This enormous force (equivalent to 30,000 kg weight) explains why water tanks and dams must be extremely strong, especially at their base."
            ]
          },
          {
            q: "An iceberg floats in sea water with 1/8 of its volume above the surface. If the density of sea water is 1025 kg/m³, find the density of ice. (g = 10 m/s²)",
            years: ["2072 P5"],
            a: [
              "<strong>Given:</strong> Volume above surface = V/8, so volume submerged = 7V/8, ρ_sea = 1025 kg/m³",
              "<strong>Using the Law of Flotation:</strong>",
              "→ Weight of iceberg = Weight of sea water displaced",
              "→ ρ_ice × V × g = ρ_sea × V_submerged × g",
              "→ ρ_ice × V = 1025 × (7V/8)",
              "→ ρ_ice = 1025 × 7/8",
              "→ ρ_ice = 7175/8",
              "→ <strong>∴ ρ_ice ≈ 897 kg/m³</strong>",
              "This confirms that ice is slightly less dense than sea water, which is why icebergs float with about <strong>7/8 submerged and only 1/8 visible</strong> above the surface — a well-known navigational danger."
            ]
          },
          {
            q: "A force of 400 N is applied on a hydraulic press with a small piston of area 20 cm². The large piston has area 800 cm². (i) What is the pressure in the fluid? (ii) What force is exerted by the large piston? (iii) What is the mechanical advantage?",
            years: ["2071 P4"],
            a: [
              "<strong>Given:</strong> F₁ = 400 N, A₁ = 20 cm² = 0.002 m², A₂ = 800 cm² = 0.08 m²",
              "<strong>(i) Pressure in the fluid:</strong>",
              "→ P = F₁/A₁ = 400/0.002",
              "→ <strong>∴ P = 200,000 Pa = 2 × 10⁵ Pa</strong>",
              "<strong>(ii) Force exerted by the large piston:</strong>",
              "→ Using Pascal's Law: F₂ = P × A₂",
              "→ F₂ = 200,000 × 0.08",
              "→ <strong>∴ F₂ = 16,000 N = 1.6 × 10⁴ N</strong>",
              "<strong>(iii) Mechanical advantage:</strong>",
              "→ MA = F₂/F₁ = 16,000/400",
              "→ <strong>∴ MA = 40</strong>",
              "A hydraulic press with MA = 40 means every 1 N of input effort produces 40 N of output force — making it extremely useful for industrial pressing and lifting tasks."
            ]
          },
          {
            q: "A wooden block of mass 600 g and density 750 kg/m³ is placed in water. (i) Find the volume of the block. (ii) Find the volume submerged. (iii) Find the upthrust. (ρ_water = 1000 kg/m³, g = 10 m/s²)",
            years: ["2071 P5"],
            a: [
              "<strong>Given:</strong> m = 600 g = 0.6 kg, ρ_wood = 750 kg/m³, ρ_water = 1000 kg/m³, g = 10 m/s²",
              "<strong>(i) Volume of the block:</strong>",
              "→ V = m/ρ = 0.6/750",
              "→ <strong>∴ V = 0.0008 m³ = 800 cm³</strong>",
              "<strong>(ii) Volume submerged (using Law of Flotation):</strong>",
              "→ Weight of block = Upthrust",
              "→ ρ_wood × V × g = ρ_water × V_sub × g",
              "→ 750 × 0.0008 = 1000 × V_sub",
              "→ V_sub = 0.6/1000",
              "→ <strong>∴ V_sub = 0.0006 m³ = 600 cm³</strong>",
              "<strong>(iii) Upthrust:</strong>",
              "→ U = ρ_water × V_sub × g = 1000 × 0.0006 × 10",
              "→ <strong>∴ U = 6 N</strong>",
              "Check: Weight of block = mg = 0.6 × 10 = 6 N = Upthrust ✓ — confirms the block floats, with 75% submerged and 25% above water."
            ]
          },
          {
            q: "An object of volume 200 cm³ is completely submerged in water. (i) What is the upthrust? (ii) If the object's mass is 150 g, will it float or sink when released? (iii) What is its apparent weight in water? (ρ_water = 1000 kg/m³, g = 10 m/s²)",
            years: ["2070 P3"],
            a: [
              "<strong>Given:</strong> V = 200 cm³ = 0.0002 m³, m = 150 g = 0.15 kg, ρ_water = 1000 kg/m³, g = 10 m/s²",
              "<strong>(i) Upthrust:</strong>",
              "→ U = ρ_water × V × g = 1000 × 0.0002 × 10",
              "→ <strong>∴ U = 2 N</strong>",
              "<strong>(ii) Float or sink?</strong>",
              "→ Weight of object = mg = 0.15 × 10 = 1.5 N",
              "→ Upthrust (2 N) > Weight (1.5 N)",
              "→ <strong>∴ The object will FLOAT</strong> when released",
              "<strong>(iii) Apparent weight in water:</strong>",
              "→ Apparent weight = Actual weight − Upthrust = 1.5 − 2 = −0.5 N",
              "→ <strong>∴ Apparent weight = −0.5 N</strong>",
              "The negative value means the object experiences a net upward force — it will rise to the surface and float partially submerged, not remain fully submerged."
            ]
          },
          {
            q: "The density of a liquid is 900 kg/m³. An object of volume 500 cm³ is fully submerged in it. (i) Find the upthrust. (ii) If the object weighs 6 N in air, find its apparent weight in the liquid. (iii) Find the relative density of the liquid. (g = 10 m/s²)",
            years: ["2070 P4"],
            a: [
              "<strong>Given:</strong> ρ_liquid = 900 kg/m³, V = 500 cm³ = 0.0005 m³, W_air = 6 N, g = 10 m/s²",
              "<strong>(i) Upthrust:</strong>",
              "→ U = ρ_liquid × V × g = 900 × 0.0005 × 10",
              "→ <strong>∴ U = 4.5 N</strong>",
              "<strong>(ii) Apparent weight in the liquid:</strong>",
              "→ W_apparent = W_air − U = 6 − 4.5",
              "→ <strong>∴ W_apparent = 1.5 N</strong>",
              "<strong>(iii) Relative density of the liquid:</strong>",
              "→ RD = ρ_liquid/ρ_water = 900/1000",
              "→ <strong>∴ RD = 0.9</strong>",
              "Since RD < 1, this liquid is less dense than water. The object's apparent weight reduces from 6 N in air to 1.5 N in this liquid — it feels 75% lighter when submerged."
            ]
          },
          {
            q: "A hydraulic brake system has a master cylinder of area 2 cm² and wheel cylinders each of area 8 cm². A braking force of 50 N is applied at the master cylinder. (i) What pressure is created? (ii) What force acts at each wheel cylinder? (iii) Name the property of liquid that makes this work.",
            years: ["2069 P3"],
            a: [
              "<strong>Given:</strong> A_master = 2 cm² = 0.0002 m², A_wheel = 8 cm² = 0.0008 m², F_master = 50 N",
              "<strong>(i) Pressure created in the brake fluid:</strong>",
              "→ P = F/A = 50/0.0002",
              "→ <strong>∴ P = 250,000 Pa = 2.5 × 10⁵ Pa</strong>",
              "<strong>(ii) Force at each wheel cylinder:</strong>",
              "→ Using Pascal's Law: F_wheel = P × A_wheel",
              "→ F_wheel = 250,000 × 0.0008",
              "→ <strong>∴ F_wheel = 200 N</strong>",
              "<strong>(iii) Property of liquid used:</strong>",
              "→ <strong>Non-compressibility</strong> — liquids cannot be compressed, so pressure is transmitted fully and instantly to all wheel cylinders without any loss.",
              "The mechanical advantage = 200/50 = <strong>4</strong>. A foot force of 50 N produces 200 N of braking force at each wheel — providing safe, efficient braking."
            ]
          },
          {
            q: "A submarine dives to a depth of 200 m in sea water. (i) Calculate the water pressure at that depth. (ii) Calculate the total force on a hatch of area 0.5 m². (iii) Why must the hull be extremely strong? (ρ_sea = 1025 kg/m³, g = 10 m/s²)",
            years: ["2069 P4"],
            a: [
              "<strong>Given:</strong> h = 200 m, ρ = 1025 kg/m³, g = 10 m/s², A = 0.5 m²",
              "<strong>(i) Water pressure at 200 m depth:</strong>",
              "→ P = ρ × g × h = 1025 × 10 × 200",
              "→ <strong>∴ P = 2,050,000 Pa = 2.05 × 10⁶ Pa ≈ 20 atm</strong>",
              "<strong>(ii) Total force on the hatch:</strong>",
              "→ F = P × A = 2,050,000 × 0.5",
              "→ <strong>∴ F = 1,025,000 N ≈ 1.025 × 10⁶ N</strong>",
              "<strong>(iii) Why the hull must be strong:</strong>",
              "→ At 200 m, the water exerts over <strong>20 times atmospheric pressure</strong> uniformly on every surface of the submarine.",
              "→ Even a small hatch of 0.5 m² experiences over 1 million Newtons of force — equivalent to the weight of 100 tonnes pressing inward.",
              "→ Without an extremely strong, specially reinforced hull, the submarine would be instantly crushed by this immense hydrostatic pressure."
            ]
          },
          {
            q: "Two pistons of a hydraulic jack have areas 4 cm² and 200 cm². A mechanic applies 300 N on the small piston to lift a car. (i) Find the pressure in the oil. (ii) Find the weight of the car lifted. (iii) How far does the large piston move if the small piston is pushed down 10 cm?",
            years: ["2068 P2"],
            a: [
              "<strong>Given:</strong> A₁ = 4 cm² = 0.0004 m², A₂ = 200 cm² = 0.02 m², F₁ = 300 N, d₁ = 10 cm = 0.1 m",
              "<strong>(i) Pressure in the oil:</strong>",
              "→ P = F₁/A₁ = 300/0.0004",
              "→ <strong>∴ P = 750,000 Pa = 7.5 × 10⁵ Pa</strong>",
              "<strong>(ii) Weight of car lifted:</strong>",
              "→ F₂ = P × A₂ = 750,000 × 0.02",
              "→ <strong>∴ F₂ = 15,000 N</strong> (equivalent to lifting a ~1,500 kg car)",
              "<strong>(iii) Distance moved by large piston (conservation of volume):</strong>",
              "→ Volume pushed = A₁ × d₁ = 0.0004 × 0.1 = 0.00004 m³",
              "→ A₂ × d₂ = 0.00004",
              "→ d₂ = 0.00004/0.02",
              "→ <strong>∴ d₂ = 0.002 m = 0.2 cm</strong>",
              "The large piston moves only 0.2 cm for every 10 cm the small piston is pushed — a trade-off: large force gain but small distance gain, consistent with conservation of energy."
            ]
          },
          {
            q: "A piece of iron has a mass of 790 g and volume of 100 cm³. (i) Find its density. (ii) Find its weight in air. (iii) Find its apparent weight when fully submerged in water. (iv) Find its relative density. (g = 10 m/s², ρ_water = 1000 kg/m³)",
            years: ["2068 P3"],
            a: [
              "<strong>Given:</strong> m = 790 g = 0.79 kg, V = 100 cm³ = 0.0001 m³, g = 10 m/s², ρ_water = 1000 kg/m³",
              "<strong>(i) Density of iron:</strong>",
              "→ ρ = m/V = 0.79/0.0001",
              "→ <strong>∴ ρ = 7900 kg/m³</strong>",
              "<strong>(ii) Weight in air:</strong>",
              "→ W = mg = 0.79 × 10",
              "→ <strong>∴ W = 7.9 N</strong>",
              "<strong>(iii) Apparent weight in water:</strong>",
              "→ Upthrust = ρ_water × V × g = 1000 × 0.0001 × 10 = 1 N",
              "→ Apparent weight = W − U = 7.9 − 1",
              "→ <strong>∴ Apparent weight = 6.9 N</strong>",
              "<strong>(iv) Relative density:</strong>",
              "→ RD = ρ_iron/ρ_water = 7900/1000",
              "→ <strong>∴ RD = 7.9</strong>",
              "Iron is 7.9 times denser than water. Its apparent weight in water is 6.9 N — it feels about 87% of its actual weight, since water reduces it by the upthrust of 1 N."
            ]
          },
          {
            q: "A ship of total mass 50,000 kg floats on sea water. (i) What is the weight of sea water displaced? (ii) What volume of sea water is displaced? (iii) If the ship takes on 5,000 kg of cargo, by how much does it sink deeper? (ρ_sea = 1025 kg/m³, g = 10 m/s²)",
            years: ["2067 P1"],
            a: [
              "<strong>Given:</strong> m_ship = 50,000 kg, ρ_sea = 1025 kg/m³, g = 10 m/s², extra cargo = 5,000 kg",
              "<strong>(i) Weight of sea water displaced:</strong>",
              "→ By Law of Flotation, weight displaced = weight of ship",
              "→ W = mg = 50,000 × 10",
              "→ <strong>∴ W = 500,000 N = 5 × 10⁵ N</strong>",
              "<strong>(ii) Volume of sea water displaced:</strong>",
              "→ W = ρ_sea × V × g",
              "→ 500,000 = 1025 × V × 10",
              "→ V = 500,000/10,250",
              "→ <strong>∴ V ≈ 48.78 m³</strong>",
              "<strong>(iii) Additional sinking with 5,000 kg extra cargo:</strong>",
              "→ Extra weight = 5,000 × 10 = 50,000 N",
              "→ Extra volume needed = 50,000 / (1025 × 10) = 50,000/10,250",
              "→ <strong>∴ Extra volume ≈ 4.88 m³</strong> must be submerged additionally",
              "This is why ships have a <strong>Plimsoll line</strong> — a safety mark showing the maximum loading depth to prevent capsizing."
            ]
          }
        ],
        "longmark": [
          {
            q: "What is Pascal's Law? Explain its applications with diagrams. Describe the working principle of a hydraulic press and a hydraulic brake in detail.",
            years: ["2075 P1", "2074 P2", "2073 P1"],
            a: [
              "<strong>Pascal's Law:</strong> Pascal's Law states that pressure applied to an enclosed (confined) liquid at any point is transmitted equally and undiminished in all directions perpendicular to all surfaces throughout the liquid.",
              "<strong>Statement:</strong> 'When pressure is applied to a liquid enclosed in a container, it is transmitted equally to every part of the liquid and to the walls of the container.'",
              "<strong>Mathematical basis:</strong> Pressure P = F/A. If pressure P is applied at point A in an enclosed liquid, the same pressure P acts at every other point B, C, D, etc. throughout the liquid regardless of direction.",
              "<strong>Application 1 — Hydraulic Press:</strong>",
              "→ A hydraulic press has two pistons (small and large) connected by an enclosed liquid-filled tube.",
              "→ A small force F₁ is applied on the small piston of area A₁, creating pressure P = F₁/A₁.",
              "→ This pressure transmits equally to the large piston of area A₂, producing a much larger force F₂ = P × A₂.",
              "→ Since A₂ >> A₁, we get F₂ >> F₁ — a small effort produces a large force.",
              "→ Uses: compressing cotton, extracting oils from seeds, shaping metal, pressing cardboard.",
              "<strong>Application 2 — Hydraulic Brake:</strong>",
              "→ When the brake pedal is pressed, it applies force on the master cylinder (small piston).",
              "→ The pressure created transmits instantly through brake fluid to all four wheel cylinders (larger pistons).",
              "→ The wheel cylinders push the brake pads against the wheel drums, slowing all wheels simultaneously.",
              "→ Advantage: equal braking force on all wheels, preventing skidding.",
              "<strong>Why liquid and not gas?</strong> Liquids are incompressible — pressure is transmitted fully. Gas would compress and absorb pressure, making brakes unreliable."
            ]
          },
          {
            q: "State Archimedes' Principle. Derive the expression for upthrust and explain why objects appear lighter in water. Also explain the conditions for floating and sinking.",
            years: ["2074 P1", "2073 P2", "2072 P1"],
            a: [
              "<strong>Archimedes' Principle:</strong> When a body is partially or completely immersed in a fluid, it experiences an upward force (upthrust or buoyant force) equal to the weight of the fluid displaced by it.",
              "<strong>Derivation of Upthrust Expression:</strong>",
              "→ Consider a rectangular object of height h, cross-sectional area A, submerged in a liquid of density ρ.",
              "→ Pressure at top face: P₁ = ρgh₁ (downward)",
              "→ Pressure at bottom face: P₂ = ρgh₂ (upward), where h₂ > h₁",
              "→ Net upward force = (P₂ − P₁) × A = ρg(h₂ − h₁) × A = ρg × V",
              "→ <strong>Upthrust U = ρ × V × g</strong> = weight of fluid displaced ✓",
              "<strong>Why objects appear lighter in water:</strong>",
              "→ Apparent weight = Actual weight − Upthrust",
              "→ = mg − ρ_fluid × V × g",
              "→ Since upthrust acts upward opposing gravity, the net downward force is less — so the object feels lighter.",
              "<strong>Condition to FLOAT:</strong> Upthrust ≥ Weight of object → density of object ≤ density of fluid.",
              "<strong>Condition to SINK:</strong> Upthrust < Weight of object → density of object > density of fluid.",
              "<strong>Condition to SUSPEND (neutral buoyancy):</strong> Upthrust = Weight exactly → density of object = density of fluid.",
              "<strong>Real-life applications:</strong> Ship design, submarine depth control, hydrometer measurements, and swimming."
            ]
          },
          {
            q: "What is pressure? Explain liquid pressure with the formula P = ρgh. How does pressure vary with depth and density? Give at least four examples from daily life.",
            years: ["2074 P3", "2072 P2", "2071 P1"],
            a: [
              "<strong>Pressure:</strong> Pressure is defined as the perpendicular force acting per unit area of a surface. Formula: P = F/A. SI unit: Pascal (Pa) = N/m².",
              "<strong>Liquid Pressure — P = ρgh:</strong>",
              "→ Consider a column of liquid of density ρ, height h, and cross-sectional area A.",
              "→ Volume of liquid column = A × h",
              "→ Mass = ρ × A × h",
              "→ Weight (force) = ρ × A × h × g",
              "→ Pressure = Force/Area = (ρ × A × h × g)/A",
              "→ <strong>∴ P = ρgh</strong>",
              "<strong>Variation with depth:</strong> P increases linearly with depth h. Double the depth → double the pressure. This is why water from a tap on the ground floor has more pressure than on the top floor.",
              "<strong>Variation with density:</strong> P increases with fluid density ρ. Salt water (ρ ≈ 1025 kg/m³) exerts more pressure than fresh water (ρ = 1000 kg/m³) at the same depth.",
              "<strong>Daily life examples:</strong>",
              "→ <strong>1. Dams:</strong> Built thicker at the base because water pressure increases with depth (P = ρgh).",
              "→ <strong>2. Deep-sea creatures:</strong> Have evolved to withstand extreme water pressure at depth.",
              "→ <strong>3. Water towers:</strong> Placed at height to create pressure for water supply to homes below.",
              "→ <strong>4. Ears popping:</strong> Pressure increases when diving or flying due to changes in fluid/air pressure.",
              "<strong>Key property:</strong> Liquid pressure acts equally in all directions at a given depth, and does not depend on the shape of the container — only on depth and density."
            ]
          },
          {
            q: "What is the law of flotation? How is it applied in the construction of ships and submarines? Explain how a submarine controls its depth underwater.",
            years: ["2073 P3", "2072 P4", "2071 P2"],
            a: [
              "<strong>Law of Flotation:</strong> A floating body displaces a quantity of fluid whose weight equals the weight of the floating body itself.",
              "<strong>Mathematical form:</strong> W_body = W_fluid displaced → m_body × g = ρ_fluid × V_submerged × g",
              "<strong>Application in Ship Construction:</strong>",
              "→ A ship is made of steel (density ~7800 kg/m³), which is much denser than water.",
              "→ However, the ship's hull is hollow, enclosing a large volume of air.",
              "→ The average density of the ship (steel + enclosed air) becomes less than that of water.",
              "→ The ship's shape is designed so that the weight of water displaced equals the total weight of the ship.",
              "→ By the law of flotation, this condition ensures the ship floats.",
              "→ If cargo is added, the ship sinks deeper, displacing more water until equilibrium is restored.",
              "→ The <strong>Plimsoll line</strong> marks the safe maximum loading level.",
              "<strong>Application in Submarines — Depth Control:</strong>",
              "→ A submarine has <strong>ballast tanks</strong> that can be filled with water or air.",
              "→ <strong>To dive:</strong> Ballast tanks are filled with sea water → average density increases → weight > upthrust → submarine sinks.",
              "→ <strong>To surface:</strong> Compressed air is blown into ballast tanks, expelling water → average density decreases → upthrust > weight → submarine rises.",
              "→ <strong>To hover at fixed depth:</strong> Ballast tanks are adjusted until weight = upthrust exactly → neutral buoyancy.",
              "This precise control of buoyancy makes submarines extremely versatile for underwater exploration and naval operations."
            ]
          },
          {
            q: "Explain the differences between Archimedes' Principle and the Law of Flotation. A metal block of mass 2 kg and volume 400 cm³ is placed in water. Find: (i) upthrust, (ii) apparent weight, (iii) relative density. Does it float or sink? (ρ_water = 1000 kg/m³, g = 10 m/s²)",
            years: ["2073 P5", "2071 P3"],
            a: [
              "<strong>Archimedes' Principle vs Law of Flotation:</strong>",
              "→ <strong>Archimedes' Principle:</strong> Applies to ANY immersed object (floating, sinking, or suspended). Upthrust = weight of fluid displaced.",
              "→ <strong>Law of Flotation:</strong> Applies ONLY to floating objects. States that the weight of fluid displaced = weight of the floating body.",
              "→ The Law of Flotation is a special case of Archimedes' Principle when the object is in floating equilibrium.",
              "<strong>Given:</strong> m = 2 kg, V = 400 cm³ = 4 × 10⁻⁴ m³, ρ_water = 1000 kg/m³, g = 10 m/s²",
              "<strong>(i) Upthrust:</strong>",
              "→ U = ρ_water × V × g = 1000 × 4×10⁻⁴ × 10",
              "→ <strong>∴ U = 4 N</strong>",
              "<strong>(ii) Apparent weight:</strong>",
              "→ W_air = mg = 2 × 10 = 20 N",
              "→ W_apparent = W_air − U = 20 − 4",
              "→ <strong>∴ W_apparent = 16 N</strong>",
              "<strong>(iii) Relative density:</strong>",
              "→ ρ_metal = m/V = 2/(4×10⁻⁴) = 5000 kg/m³",
              "→ RD = 5000/1000 = <strong>5</strong>",
              "<strong>Float or sink?</strong> Since ρ_metal (5000) >> ρ_water (1000), and upthrust (4N) < weight (20N), the block <strong>SINKS</strong>."
            ]
          },
          {
            q: "What is a hydrometer? Describe its construction and working principle. How is relative density measured using a hydrometer? Mention its uses.",
            years: ["2072 P5", "2070 P3"],
            a: [
              "<strong>Hydrometer:</strong> A hydrometer is an instrument used to measure the <strong>relative density (specific gravity)</strong> of liquids. It works on Archimedes' Principle and the Law of Flotation.",
              "<strong>Construction:</strong>",
              "→ It consists of a long, narrow glass tube with a <strong>weighted bulb</strong> at the bottom (containing lead shots or mercury).",
              "→ The weighted bulb ensures the hydrometer floats upright in liquids.",
              "→ The narrow stem has a graduated scale marked in relative density values.",
              "→ The scale reads higher values at the bottom (for denser liquids) and lower values at the top (for less dense liquids).",
              "<strong>Working Principle:</strong>",
              "→ When placed in a liquid, the hydrometer floats upright due to its weighted base.",
              "→ In a denser liquid, it floats higher (less volume submerged needed to displace equal weight).",
              "→ In a less dense liquid, it sinks deeper (more volume must be submerged).",
              "→ The reading on the scale at the liquid surface gives the relative density directly.",
              "<strong>Measuring Relative Density:</strong>",
              "→ Place the hydrometer gently in the liquid without spinning.",
              "→ Read the scale at the bottom of the meniscus (liquid surface level on stem).",
              "→ The reading directly gives the RD of the liquid.",
              "<strong>Uses of Hydrometer:</strong>",
              "→ Checking the charge level of car batteries (density of sulfuric acid changes with charge).",
              "→ Measuring alcohol content in beverages.",
              "→ Checking purity of milk (lactometer — a specialized hydrometer).",
              "→ Quality control in the petroleum and chemical industry."
            ]
          },
          {
            q: "Explain atmospheric pressure in detail. Why does atmospheric pressure decrease with altitude? How does atmospheric pressure affect boiling point and daily life? Give four applications.",
            years: ["2072 P6", "2071 P4", "2070 P1"],
            a: [
              "<strong>Atmospheric Pressure:</strong> The weight of the column of air above a unit area on Earth's surface is called atmospheric pressure.",
              "<strong>Value:</strong> At sea level, P_atm ≈ 101,325 Pa = 1 atm = 76 cm of Hg column.",
              "<strong>Why it decreases with altitude:</strong>",
              "→ Atmospheric pressure is caused by the weight of air above. Higher up, there is less air above, so the weight (and thus pressure) decreases.",
              "→ P = ρgh — at high altitude, both the density ρ and effective height h of the air column are lower.",
              "→ At the top of Mount Everest (~8848 m), pressure is only about 1/3 of sea-level pressure.",
              "<strong>Effect on Boiling Point:</strong>",
              "→ Boiling occurs when vapour pressure = atmospheric pressure.",
              "→ At high altitude, lower atmospheric pressure means water boils at less than 100°C (around 70–80°C at high mountains).",
              "→ This means food takes longer to cook at high altitudes — pressure cookers compensate by raising internal pressure.",
              "<strong>Daily Life Applications:</strong>",
              "→ <strong>1. Drinking through a straw:</strong> Sucking reduces pressure inside the straw; atmospheric pressure on the liquid surface pushes the liquid up.",
              "→ <strong>2. Syringe:</strong> Pulling the plunger reduces pressure inside; atmospheric pressure pushes liquid in.",
              "→ <strong>3. Suction cups:</strong> Pressing removes air, creating low pressure; atmospheric pressure holds the cup to the surface.",
              "→ <strong>4. Barometer:</strong> Measures atmospheric pressure to predict weather — falling pressure indicates storms; rising pressure indicates clear weather.",
              "<strong>Interesting fact:</strong> The human body is adapted to atmospheric pressure. In outer space (zero pressure), without a suit, body fluids would boil at body temperature."
            ]
          },
          {
            q: "Define relative density. How is it measured? A solid weighs 150 N in air and 100 N in water. Find: (i) upthrust, (ii) relative density of the solid, (iii) density of the solid. What can you conclude about whether it floats in water? (g = 10 m/s², ρ_water = 1000 kg/m³)",
            years: ["2071 P5", "2070 P2"],
            a: [
              "<strong>Relative Density (RD):</strong> Relative density of a substance is the ratio of the density of that substance to the density of water at 4°C.",
              "<strong>Formula:</strong> RD = Density of substance / Density of water at 4°C = ρ_substance / 1000",
              "Alternatively: RD = Weight in air / (Weight in air − Weight in water)",
              "<strong>RD has no unit</strong> — it is a pure ratio. If RD > 1, substance is denser than water and sinks. If RD < 1, it floats.",
              "<strong>Given:</strong> W_air = 150 N, W_water = 100 N, ρ_water = 1000 kg/m³, g = 10 m/s²",
              "<strong>(i) Upthrust:</strong>",
              "→ U = W_air − W_water = 150 − 100",
              "→ <strong>∴ U = 50 N</strong>",
              "<strong>(ii) Relative Density:</strong>",
              "→ RD = W_air / (W_air − W_water) = 150/50",
              "→ <strong>∴ RD = 3</strong>",
              "<strong>(iii) Density of the solid:</strong>",
              "→ ρ_solid = RD × ρ_water = 3 × 1000",
              "→ <strong>∴ ρ_solid = 3000 kg/m³</strong>",
              "<strong>Conclusion:</strong> Since RD = 3 > 1 (denser than water), the solid will <strong>SINK</strong> in water. The upthrust (50 N) is much less than its actual weight (150 N), confirming it cannot float."
            ]
          },
          {
            q: "Explain the factors affecting liquid pressure. How does the shape of the container affect pressure at the bottom? State Bernoulli's principle and relate it to pressure in moving fluids. Give practical examples.",
            years: ["2070 P4", "2069 P2"],
            a: [
              "<strong>Liquid Pressure Formula:</strong> P = ρgh, where ρ = density of liquid, g = acceleration due to gravity, h = depth below the surface.",
              "<strong>Factors Affecting Liquid Pressure:</strong>",
              "→ <strong>1. Depth (h):</strong> Pressure increases proportionally with depth. Double the depth → double the pressure. Example: water pressure is greater at the bottom of a dam than at the top.",
              "→ <strong>2. Density of liquid (ρ):</strong> Denser liquids exert greater pressure at the same depth. Salt water exerts more pressure than fresh water at equal depth.",
              "→ <strong>3. Acceleration due to gravity (g):</strong> Greater g → greater pressure. On the Moon (lower g), liquid pressure at the same depth would be less.",
              "<strong>Effect of Container Shape:</strong>",
              "→ Liquid pressure at a given depth depends ONLY on the depth and density — NOT on the shape of the container or the total volume of liquid.",
              "→ This is called the <strong>hydrostatic paradox</strong>: three containers of different shapes but equal base area and water depth all exert the same pressure at the bottom.",
              "→ However, the total force on the base depends on the base area: F = P × A.",
              "<strong>Bernoulli's Principle (related concept):</strong>",
              "→ In a flowing fluid, as speed increases, pressure decreases, and vice versa.",
              "→ This explains: airplane lift (faster airflow above wing → lower pressure → upward force), and how a perfume atomizer works (fast air reduces pressure, drawing liquid up).",
              "<strong>Practical Examples of Liquid Pressure:</strong>",
              "→ Dams are wider at the base to withstand higher water pressure.",
              "→ Deep-sea fish have special body structures to resist crushing pressure.",
              "→ Underground water pipelines are installed deep to maintain supply pressure.",
              "→ Intravenous (IV) drip bags are hung high so gravity-driven liquid pressure is enough to enter veins."
            ]
          },
          {
            q: "A comprehensive problem: A hydraulic system has a small piston (A₁ = 10 cm²) and large piston (A₂ = 500 cm²). A force of 200 N is applied on the small piston. Simultaneously, a metal block of mass 5 kg and volume 1000 cm³ is fully submerged in water. (i) Find the pressure in the hydraulic fluid. (ii) Find the force on the large piston. (iii) Find the upthrust on the metal block. (iv) Find the apparent weight of the block. (v) Find the relative density of the block and state whether it floats or sinks. (g = 10 m/s², ρ_water = 1000 kg/m³)",
            years: ["2075 P2", "2074 P4", "2072 P3"],
            a: [
              "<strong>PART A — Hydraulic System:</strong>",
              "<strong>Given:</strong> A₁ = 10 cm² = 0.001 m², A₂ = 500 cm² = 0.05 m², F₁ = 200 N",
              "<strong>(i) Pressure in hydraulic fluid:</strong>",
              "→ P = F₁/A₁ = 200/0.001",
              "→ <strong>∴ P = 200,000 Pa = 2 × 10⁵ Pa</strong>",
              "<strong>(ii) Force on large piston (Pascal's Law):</strong>",
              "→ F₂ = P × A₂ = 200,000 × 0.05",
              "→ <strong>∴ F₂ = 10,000 N = 10⁴ N</strong>",
              "→ Mechanical advantage = F₂/F₁ = 10,000/200 = <strong>50</strong>",
              "<strong>PART B — Submerged Metal Block:</strong>",
              "<strong>Given:</strong> m = 5 kg, V = 1000 cm³ = 0.001 m³, ρ_water = 1000 kg/m³, g = 10 m/s²",
              "<strong>(iii) Upthrust on metal block:</strong>",
              "→ U = ρ_water × V × g = 1000 × 0.001 × 10",
              "→ <strong>∴ U = 10 N</strong>",
              "<strong>(iv) Apparent weight of the block:</strong>",
              "→ W_air = mg = 5 × 10 = 50 N",
              "→ W_apparent = W_air − U = 50 − 10",
              "→ <strong>∴ W_apparent = 40 N</strong>",
              "<strong>(v) Relative density and float/sink decision:</strong>",
              "→ ρ_metal = m/V = 5/0.001 = 5000 kg/m³",
              "→ RD = 5000/1000 = <strong>5</strong>",
              "→ Since RD = 5 > 1, and weight (50N) > upthrust (10N), the block <strong>SINKS</strong> in water.",
              "<strong>Summary:</strong> The hydraulic system amplifies 200 N by 50× to 10,000 N. The metal block (RD=5) sinks with an apparent weight of 40 N in water."
            ]
          }
        ]
      }
    }
  },

  chemistry: {
    label: "Chemistry",
    lessons: {},
    locked: true
  },

  biology: {
    label: "Biology",
    lessons: {},
    locked: true
  },

  geology: {
    label: "Geology & Astronomy",
    lessons: {},
    locked: true
  }
};
