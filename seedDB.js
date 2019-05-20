const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/donationcenters'
);

const centerSeed = [{
        name: "Old Dominion University",
        location: "5115 Hampton Blvd, Norfolk, VA 23529",
        phone: "(757) 683-3000",
        accepts: ["Education", "Information Systems", "Social Science", "Civil Engineering"],
        website: "https://online.odu.edu/",
        details: "Accepts: Hand towels and sheets, cat litter and/or cat food, cat carriers, cat beds, small cardboard boxes (used as litter boxes at adoption fairs), cat toys, stamps, calling cards, gift cards. Donated items can be taken to any adoption fair.",
        info: "Dates and locations are available at www.fourpaws.org or call 703-715-MEOW to make other arrangements.",
        lat: 36.889408,
        lng: -76.303146
    },
    {
        name: "North Carolina A& T",
        location: "1601 E. Market St, Greensboro, NC 27411",
        phone: "(336) 334-7500",
        accepts: ["Communications", "Marketing"],
        website: "https://www.ncat.edu/",
        details: "Accepts: New and/or slightly used baby clothing from newborn to size 5 Toddler, maternity Clothes, baby accessories, cribs (with all parts and instructions), car seats (with all straps) and strollers.",
        info: "Items can be dropped off at the Center Monday through Friday from 10 am until 2 pm or by special appointment. Donate your vehicle at 1-888-638-1171",
        lat: 36.072640,
        lng: -79.771370
    },
    {
        name: "Duke University",
        location: "2127 Campus Drive Box 90065. Durham, NC 27708",
        phone: "(919) 684-8111",
        accepts: ["toiletries", "cleaning supplies", "containers", "office supplies"],
        website: "https://www.duke.edu/",
        doesnotaccept: ["TVs", "furniture", "stuffed toys"],
        details: "Accepts: Toiletries, cleaning supplies, hotel samples, storage containers and storage bins, and office supplies, (copy paper, ink cartridges, etc.).",
        info: "We accept Monday-Friday, 8am - 9pm, and Saturday/Sundays, 9am - 9pm.",
        lat: 35.999100,
        lng: -78.933250
    },
    {
        name: "Notre Dame University",
        location: "Notre Dame, IN 46556",
        phone: "(574) 631-5000",
        accepts: ["Advertising", "Social Sciences", "Electrical Engineering"],
        website: "https://www.nd.edu/",
        details: `Accepts:
            "HOUSEHOLD GOODS:  Towels, wash cloths, hand towels, pillow cases, Shoeboxes, Plain non-electric blankets (new or in very good shape)
            \nPET SUPPLIES: Animal beds(only those small enough to be washed)
            Stainless steel or ceramic bowls
            `,
        info: `We often need large quantities of food and other supplies, including new items for prizes for special events such as the Annual Walk for the Animals and Casino Night and Silent Auction.
            To make a donation,
            contact the Development Manager at 703 - 931 - 9441 ext .220 or donate @awla.org`,
        lat: 41.704391,
        lng: -86.233337
    },
    {
        name: "Virginia State University",
        location: "1 Hayden Dr., Petersburg, VA 23806",
        phone: "(804) 524-5000",
        accepts: ["Nursing", "Communications", "International Relations", "English"],
        website: "http://www.vsu.edu/",
        details: "Accepts: Bicycles, bicycle spare parts & accessories, hand tools (wrenches, screwdrivers, and hammers of all types), portable sewing machines.",
        info: "Visit website for local collection schedule www.bikesfortheworld.org or call 703-740-7856 to make arrangements. Bikes for the World picks up bikes at bike shops such as Bob’s Bikes in Poolesville, MD.",
        lat: 37.233800,
        lng: -77.419700
    },
    {
        name: "Spelman College",
        location: "350 Spelman Lane, S.W., Atlanta, GA 30314-4399",
        phone: "(404) 681-3643",
        accepts: ["Graphic Design", "Chemical Engineering", "Information Systems", "Marketing"],
        website: "https://www.spelman.edu/",
        details: "Accepts: School supplies, toys, office supplies, clothes, etc.",
        lat: 33.745450,
        lng: -84.409030
    },
    {
        name: "Florida A & M",
        location: "1601 S. Martin L. King Jr. Blvd., Tallahassee, FL 32307",
        phone: "(850) 599-3000",
        accepts: ["Business Administration"],
        website: "https://www.famu.edu/",
        details: "Accepts: Non-perishables only",
        info: `Call or email to arrange your donation today!
            Mike Gillespie(202) 644 - 9865 ext.865
            mgillespie @capitalareafoodbank.org`,
        lat: 30.427140,
        lng: -84.285560
    },
    {
        name: "Howard University",
        location: "2400 Sixth Street NW, Washington, DC 20059",
        phone: "(202) 806-6100",
        accepts: ["non-perishable food"],
        website: "https://home.howard.edu/",
        details: "Accepts: Non-perishables only",
        info: `Call or email to arrange your donation today!
            Mike Gillespie(202) 644 - 9865 ext.865
            mgillespie @capitalareafoodbank.org`,
        lat: 38.923140,
        lng: -77.021580
    },
    {
        name: "Johns Hopkins University",
        location: "3400 N. Charles St, Baltimore, MD 21218",
        phone: "(410) 516-8000",
        accepts: ["Nursing", "Human Resources", "Education"],
        website: "https://www.jhu.edu/",
        details: "Accepts: We accept gently-used clothing (boutique and other), household items (glass, ceramics, small appliances) and some furniture (not upholstered), Wednesdays through Sundays.",
        info: "Turn your goods into gold for patient care. Open 10 am - 5 pm Mondays through Saturday, 11- 4 Sunday",
        lat: 39.330330,
        lng: -76.614980
    },
    {
        name: "Georgetown University",
        location: "37th and O Streets, N.W., Washington D.C. 20057",
        phone: "(202) 687-0100",
        accepts: ["clothing", "toiletries", "computer equipment", "musical instruments", "art supplies"],
        website: "https://www.georgetown.edu/",
        details: "Accepts: Clothing, toiletries, some computer equipment, musical instruments, CDs and art supplies for the Kairos Program.",
        lat: 38.907669,
        lng: -77.071587
    },
    {
        name: "College of William and Mary",
        location: "Sadler Center, 200 Stadium Dr, Williamsburg, VA 23185",
        phone: "(757) 221-4000 ",
        accepts: ["Architecture", "International Relations"],
        website: "https://www.wm.edu/",
        details: "Accepts: Clothing items, household items in good conditions such as sofas, beds, and dressers. We pick up and accept drop offs at our various programs sites that are listed on our website.",
        lat: 37.271740,
        lng: -76.714260
    },
    {
        name: "George Washington University",
        location: "1918 F Street, NW, Washington, DC 20052",
        phone: "(202) 994-1000",
        accepts: ["Information Technology", "Journalism", "Political Science", "Business Administration", "Fashion Design"],
        website: "https://www.gwu.edu/",
        details: "Accepts: Tools, Van, visit truck, Warehouse space, Printing Services, Lunch donations for volunteers, Office supplies, new cordless drills, new power tools",
        lat: 38.897360,
        lng: -77.048090
    },
    {
        name: "University of Maryland - College Park",
        location: "15856 Frederick Rd., College Park, MD 20742",
        phone: "(301) 405-1000",
        accepts: ["Communications", "Law", "Advertising"],
        website: "https://www.umd.edu/",
        details: "Accepts: Working cars, good grass hay, office supplies.",
        info: "Call to arrange drop-off or visit our Wish List for much needed items.",
        lat: 39.536640,
        lng: -77.498820
    },
    {
        name: "American University",
        location: "4400 Massachusetts Avenue, NW, Washington, DC 20016",
        phone: "(202) 269-6880",
        accepts: ["Architecture", "Accounting", "Information Systems,", "Computer Science"],
        website: "https://www.american.edu/",
        details: `Accepts: Large Items: copiers, color printers, desktop computers, LCD projector, cars
            Small Items: PUR Water filters and portable microwaves
            for our clients,
            copy paper(colored and white),
            Avery labels 5160 or 6163,
            AAA and AA batteries,
            Food items such as canned food,
            cereal,
            shelf stable milk,
            peanut butter,
            cooking oils.`,
        info: `For questions on making a donation please call (202) 269-6880`,
        lat: 38.937080,
        lng: -77.089640
    },
    {
        name: "George Mason University",
        location: "4400 University Drive, Fairfax, Virginia 22030",
        phone: "(703) 993-1000",
        accepts: ["Information Technology", "Marketing", "Social Science", "Graphic Design", "Civil Engineering", "Music", "Sports Management"],
        doesnotaccept: ["mattresses", "box springs", "sofa beds", "large appliances", "hazardous material", "construction material", "items in poor condition"],
        website: "https://www2.gmu.edu/",
        details: `Accepts: Clothing, furniture, small appliances, house wares, computers (Pentium I and newer), electronics and toys. Visit www.dcgoodwill.org for a more complete list of accepted items and drop off locations/time.
            Cars(202) 715 - 2636. Vehicles must be in running and drivable condition.Visit www.GWCars.org
            for more information.
            NO: Mattresses or box - springs,
            sofa beds,
            large appliances,
            hazardous material,
            construction material,
            CPSC - recalled items,
            or items that are soiled,
            broken or missing pieces.`,
        lat: 38.834721,
        lng: -77.312683
    },
    {
        name: "Virginia Commonwealth University",
        location: "907 FLoyd Ave, Richmond, Virginia 23284",
        phone: "(804) 828-0100",
        accepts: ["Fashion Design", "Biomedical", "Engineering", "Communications"],
        website: "https://www.vcu.edu/",
        details: "Accepts: Cars, Lunch Donations for Volunteers, Power tools, Printing Services",
        lat: 337.546810,
        lng: -77.453150
    },
    {
        name: "Princeton University",
        location: "1029 E Gude Dr., Princeton, NJ 08544",
        phone: "(609) 258-3000",
        accepts: ["Law", "Human Resources", "Education", "Philosophy", "Public Relations"],
        website: "https://www.princeton.edu/",
        details: "Accepts: Home improvement items including: Appliances, Furniture, Antiques, Doors, Windows, Tile and Lighting Fixtures.",
        lat: 40.343370,
        lng: -74.694670
    },
    {
        name: "Cornell University",
        location: "616 Thurston Ave., Ithaca, NY 14853",
        phone: "(607) 254-4636",
        accepts: ["Law", "Physics", "Information Technology", "Marketing", "Advertising"],
        website:"https://www.cornell.edu/",
        details: "Accepts: Home improvement items including: Appliances, Furniture, Antiques, Doors, Windows, Tile and Lighting Fixtures.",
        lat: 42.452190,
        lng: -76.480280
    },
    {
        name: "Yale University",
        location: "PO Box 208234, New Haven, CT 06520",
        phone: "(203) 432-4771",
        accepts: ["Law", "Journalism", "Biomedical Engineering,", "Business Administration", "English"],
        website: "https://www.yale.edu/",
        details: "Accepts: Home improvement items including: Appliances, Furniture, Antiques, Doors, Windows, Tile and Lighting Fixtures.",
        lat: 41.309670,
        lng: -72.927550
    },
    {
        name: "University of California, Los Angeles (UCLA)",
        location: "405 Hilgard Avenue, Los Angeles, CA 90095",
        phone: "(310) 825-4321",
        accepts: [" Interior Design", "Music", "Sports Management", "Information Systems", "International Relations"],
        website: "http://www.ucla.edu/",
        details: "Accepts: Home improvement items including: Appliances, Furniture, Antiques, Doors, Windows, Tile and Lighting Fixtures.",
        lat: 34.069160,
        lng: -118.439072
    },
    {
        name: "University of Michigan",
        location: "500 S. State Street, Ann Arbor, MI 48109",
        phone: "(734) 764-1817",
        website: "https://umich.edu/",
        accepts: ["Business Administration"],
        details: "Accepts: Accepts: Cars, trucks and other vehicles. Call to schedule pick-up.",
        lat: 42.275720,
        lng: -83.740760
    },
    {
        name: "Ohio State University",
        location: "281 W. Lane Ave., Columbus, OH 43210",
        phone: "(614) 292-3980",
        accepts: ["Graphic Design", "Education", "Civil Engineering"],
        doesnotaccept: ["Philosophy"],
        website: "https://www.osu.edu/",
        details: "Accepts: We come into your home and receive your donations of wood furniture, antiques and vintage pieces, household kitchen items, lamps and decor. Upholstered items need to be in LIKE NEW condition. No mattresses.",
        info: `We will pick up from your location. We service all of Northern Virginia including the following cities and counties: Arlington, Alexandria, Fairfax, Prince William, Loudoun, and Fauquier.
            At His Hidden Treasures, our goal is to assist those in the midst of recovery and restoration.We are meeting needs and transforming lives in our local communities by ministering to those transitioning from homeless shelters through donations and resale of furniture and household items.
            Please send photo and information about your donation using this form: http: //www.hishiddentreasures.org/services.html`,
        visit: true,
        lat: 40.006000,
        lng: -83.016330
    },
    {
        name: "Purdue University",
        location: "610 Purdue Mall, West Lafayette, IN 47907",
        phone: "(765) 494-4600",
        accepts: ["Architecture", "Marketing", "Computer Science", "Sports Management"],
        website: "https://www.purdue.edu/",
        details: "Accepts: cars, computers, household items, and furniture.",
        info: `We will pick up from your location. We collect donations from houses, apartments, and businesses in
                Northern Virginia,
                Monday to Friday,
                10: 00 am - 4: 00 pm.,
                call or e - mail to arrange a pick up: info @homestretch - inc.org.
                Items can also be brought to the Homestretch office in Falls Church.`,
        visit: true,
        lat: 40.428246,
        lng: -86.914391
    },
    {
        name: "USC",
        location: "3335 S. Figueroa St, Unit G, Los Angeles, CA 90007",
        phone: "(213) 740-2311",
        accepts: ["History", "Law", "Business Administration", "Architecture", "Public Relations", "Interior Design"],
        website: "https://www.usc.edu/", 
        details: "Accepts: Glassware, Clothing, Household Items, Toiletries, Books, CDs, Electronics, and Toys.",
        info: "Please note that items can be dropped off at Interfaith Works Clothing Center on Monday and Friday between 9:00am - 7:00pm. Tuesday through Thursday items may be dropped of between 9:00am - 5:00pm.",
        visit: false,
        lat: 34.023090,
        lng: -118.280020
    },
    {
        name: "Michigan State University",
        location: "426 Auditorium Road, East Lansing, MI 48824",
        phone: "(517) 355-1855",
        accepts: ["vehicles", "computer equipment"],
        website: "https://msu.edu/",
        details: "Accepts: Cars, trucks and vans as well as computers and computer equipment.",
        info: `For more information about vehicle donation, call the JCA development office at 301.255.4231 or 703.652.1511
                To donate a computer or computer equipment,
                please contact JCA at(240) 395 - 0916 or ComputerDocs @AccessJCA.org
                for information about the equipment we need.Thank you!`,
        visit: false,
        lat: 42.729720,
        lng: -84.481490
    },
    {
        name: "University of Pittsburgh",
        location: "4200 Fifth Avenue, Pittsburgh, PA 15260",
        phone: "(412) 624-4141",
        accepts: ["Education"],
        website: "https://www.pitt.edu/",
        details: "Accepts: Physics, trucks and vans",
        info: "To learn more please contact Lew Fontek, Chief Development Officer, at 240.283.6000.",
        visit: false,
        lat: 40.444020,
        lng: -79.953590
    },
    {
        name: "University of Florida",
        location: "University of Florida, Gainesville, FL 32611",
        phone: "301-838-4200, 703-204-9100",
        accepts: ["Business Administration"],
        website: " http://www.ufl.edu/",
        details: "Accepts: Donate your USED CAR by calling JSSA's Car Donation Hotline at 301.585.CARS (2277) to arrange free visit. Provide the signed title and car keys to driver upon visit and receive a tax-deduction letter in the mail once the car is sold.",
        visit: true,
        lat: 29.637700,
        lng: -82.369300
    },
    {
        name: "University of Minnesota",
        location: "511 Washington Avenue S.E., Minneapolis, MN 55455",
        phone: "(612) 626-7275 ",
        accepts: ["Journalism"],
        website: "https://twin-cities.umn.edu/",
        details: "Accepts: Donate used and new interview clothing. \nFor men, we accept dress shirts, ties, slacks, business suits and casual dress shoes. \nFor women, we accept blouses, dark-colored skirts, professional dresses, and casual dress shoes.",
        info: "Donated items may be dropped off at our Washington, DC, office. To schedule a donation drop off, please contact Jacqueline Stewart, Jubilee Jobs Associate Director on (202) 667-8970 or jstewart@jubileejobs.org.",
        visit: false,
        lat: 44.973760,
        lng: -93.234070
    },
    {
        name: "Texas A&M University",
        location: "College Station, Texas 77843",
        phone: "(979) 845-3982",
        accepts: ["Mechanical Engineering", "International Relations"],
        website: "https://www.tamu.edu/",
        details: "Accepts: Office supplies and computer equipment. ",
        visit: false,
        lat: 30.604430,
        lng: -96.348480
    },
    {
        name: "Arizona State University",
        location: "N. Scottsdale Rd, Tempe AZ 85281",
        phone: "(480) 965-2100",
        accepts: ["non-perishable food"],
        website: "https://www.asu.edu/",
        details: "Accepts: Food: Ground coffee, old fashioned oatmeal and old fashioned grits",
        visit: false,
        lat: 33.439970,
        lng: -111.926400
    },
    {
        name: "University of Miami",
        location: "1320 S Dixie Hwy, Coral Gables, FL 33146",
        phone: "202-939-2075",
        accepts: ["Mathematics", "Statistics"],
        website: "https://welcome.miami.edu/",
        details: "Accepts: Gently used, or new household items and clothing that is clean, free of tears or stains, and appropriate for the current season. Donations listed at: https://www.amazon.com/wishlist/YC7LMZGV4BMC/ref=sr_1_1_acs_wl_1?ie=UTF8&qid=1362682939&sr=8-1-acs",
        info: `Hours: Monday through Friday from 9am-5pm
                Call the Community Outreach Coordinator at 202 - 939 - 2075 to talk about current needs and set up an appointment to drop of donations.`,
        visit: false,
        lat: 25.713470,
        lng: -80.277237
    },
    {
        name: "North Carolina State University",
        location: "1020 Main Campus Drive, Raleigh, NC 27695",
        phone: "(919) 515-2011",
        accepts: ["Electrical Engineering", "Journalism", "Advertising", "Business Administration", "Fashion Design"],
        website: "https://www.ncsu.edu/",
        details: "Accepts: Gently used and new clothing (all ages), baby items, new toiletries, school supplies and furniture.",
        info: `Your gently used or new items have the ability to turn a house into a home, provide a homeless family with hope and bring a smile to the face of a neglected high school youth. At NCCF, you can be confident that you clothing, furniture and household goods are making a difference.
        Our donation store, Dr.C’ s Boutique, allows clients from all of our 24 programs throughout the Washington Metropolitan Area to enjoy a shopping experience without spending any money. We will pick up from your location.We pick up new and gently used furniture from residences in Montgomery County, MD. contact Jermaine Lemons, In - Kind Donations Specialist, on his office phone(301) 365 - 4480 ext.109, cell phone(240) 743 - 7252 or email jlemons @nccf - cares.org.`,
        visit: true,
        lat: 35.770630,
        lng: -78.679110
    },
    {
        name: "Rutgers University",
        location: "195 University Ave, Newark, NJ 07102",
        phone: "(973) 353-1766",
        accepts: ["Accounting", "Public Relations", "Communications", "Nursing"],
        website: "https://www.rutgers.edu/",
        details: "Accepts: Household furniture appliances, household items, toiletries, glassware and landscaping services.",
        visit: false,
        lat: 40.740967,
        lng: -74.174698
    },
    {
        name: "University at Buffalo",
        location: "Buffalo, NY 14260",
        phone: "(716) 645-2000",
        accepts: ["Mechanical Engineering"],
        website: "http://www.buffalo.edu/",
        details: "Accepts: Crates, dog beds, collars, leashes, unopened dog food, puppy pads, sheets, blankets, toys for dogs.",
        info: `Fax: (804) 302-7975
                Contact Shannon Shackleford,
                shannons @ophrescue.org
                for more information.P.O.Box 90813,
                Alexandria,
                VA 22309`,
        visit: false,
        lat: 42.999130,
        lng: -78.786507
    },
    {
        name: "University of Connecticut",
        location: "2390 Alumni Dr, Storrs, CT 06268",
        phone: "(301) 933-2700",
        accepts: ["Electrical Engineering", "Mathematics", "Interior Design", "English"],
        website: "http://www.uconn.edu/",
        details: "Accepts:  Pick-up trucks, new hand tools, new power tools, printing services, graphic design services, warehouse space in Montgomery County",
        visit: false,
        lat: 41.806980,
        lng: -72.258960
    },
    {
        name: "Wake Forest University",
        location: "1834 Wake Forest Rd, Winston-Salem, NC 27109",
        phone: "(336) 758-5000",
        accepts: ["Architecture"],
        website: "https://www.wfu.edu/",
        details: "Accepts: Cars. Go to web site for instructions: www.smyal.org",
        visit: false,
        lat: 36.131302,
        lng: -80.282341
    },
    {
        name: "Washington State University",
        location: "1010 Vermont Avenue, NW, Suite 450, Washington, DC 20005",
        phone: "(509) 335-3564",
        accepts: ["Fashion Design"],
        website: "https://wsu.edu/",
        details: `Accepts: Professional women's clothing including suits, dresses, blouses, jackets, sweaters, trousers, coats
                Women 's Accessories including handbags, shoes suitable for the office, boots, scarves, belts and new tights and pantyhose.
                Welcomes clothing in plus sizes.Clothing should be in good condition and on hangers.
                Clothing can be dropped off at Suited
                for Change 's office one Saturday each month when there is curbside collection and on Thursdays at Suited for Change offices.`,
        visit: false,
        lat: 38.903010,
        lng: -77.033800
    },
    {
        name: "University of Georgia",
        location: "101 Herty Drive, Athens, Georgia 30602-6113",
        phone: "(855) 219-9474",
        accepts: ["Human Resources"],
        website: "https://reg.uga.edu/",
        details: "Accepts:  Vehicles such as cars, motorcycles, RVs, and boats, regardless of condition.",
        visit: false,
        lat: 33.955270,
        lng: -83.375130
    },
];

db.Center
    .remove({})
    .then(() => db.Center.collection.insertMany(centerSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });