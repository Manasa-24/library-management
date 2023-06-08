const books = [
    {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        subject: "Computer Science",
        publishDate: "2021-01-01",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:1
    },
    {
        title: "Machine Learning",
        author: "Tom M. Mitchell",
        subject: "Computer Science",
        publishDate: "28-09-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:5
    },
    {
        title: "Digital Design",
        author: "M. Morris Mano",
        subject: "Electrical Engineering",
        publishDate: "05-05-2009",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:2
    },
    {
        title: "Civil Engineering Materials",
        author: "Shan Somayaji",
        subject: "Civil Engineering",
        publishDate: "11-05-2010",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Fundamentals of Thermodynamics",
        author: "Claude J. Geckeler",
        subject: "Mechanical Engineering",
        publishDate: "22-01-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Chemical Principles",
        author: "Peter Atkins",
        subject: "Chemical Engineering",
        publishDate: "15-10-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Data Structures",
        author: "Yoshiyuki Katayama",
        subject: "Computer Science",
        publishDate: "04-11-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Engineering Mechanics: Dynamics",
        author: "Russell C. Hibbeler",
        subject: "Mechanical Engineering",
        publishDate: "17-07-2005",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:5
    },
    {
        title: "An Introduction to Geotechnical Engineering",
        author: "Robert D. Holtz",
        subject: "Civil Engineering",
        publishDate: "29-03-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Digital Signal Processing",
        author: "John G. Proakis",
        subject: "Electrical Engineering",
        year: "10-01-1999",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:3
    },
    {
        title: "Fundamentals of Heat and Mass Transfer",
        author: "Frank P. Incropera",
        subject: "Mechanical Engineering",
        publishDate: "22-09-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Transport Phenomena",
        author: "R. Byron Bird",
        subject: "Chemical Engineering",
        publishDate: "04-05-2009",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:1
    },
    {
        title: "Computer Networks",
        author: "Andrew S. Tanenbaum",
        subject: "Computer Science",
        publishDate: "15-12-1998",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:1
    },
    {
        title: "Electric Circuits",
        author: "James W. Nilsson",
        subject: "Electrical Engineering",
        publishDate: "28-10-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Mechanics of Materials",
        author: "Ferdinand P. Beer",
        subject: "Civil Engineering",
        publishDate: "11-06-2000",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Engineering Electromagnetics",
        author: "William H. Hayt",
        subject: "Electrical Engineering",
        publishDate: "25-03-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Thermodynamics: An Engineering Approach",
        author: "Yunus A. Cengel",
        subject: "Mechanical Engineering",
        publishDate: "21-09-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:6
    },
    {
        title: "Introduction to Environmental Engineering",
        author: "Mackenzie L. Davis",
        subject: "Environmental Engineering",
        publishDate: "12-03-2001",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:1
    },
    {
        title: "Engineering Fluid Mechanics",
        author: "Donald F. Elger",
        subject: "Mechanical Engineering",
        publishDate: "02-12-2010",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Process Control: Modeling, Design, and Simulation",
        author: "B. Wayne Bequette",
        subject: "Chemical Engineering",
        publishDate: 2010,
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Data Structures and Algorithms in Python",
        author: "Michael T. Goodrich",
        subject: "Computer Science",
        publishDate: "10-09-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Electric Circuits",
        author: "Raymond A. Green",
        subject: "Electrical Engineering",
        publishDate: "15-12-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:8
    },
    {
        title: "Geotechnical Engineering: Principles and Practices",
        author: "Donald P. Coduto",
        subject: "Civil Engineering",
        publishDate: "15-07-2000",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:3
    },
    {
        title: "Heat Transfer",
        author: "Jack P. Holman",
        subject: "Mechanical Engineering",
        publishDate: "21-09-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Chemical Reactor Analysis and Design",
        author: "Gilbert F. Froment",
        subject: "Chemical Engineering",
        publishDate: "17-01-2000",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Operating System Concepts",
        author: "Abraham Silberschatz",
        subject: "Computer Science",
        publishDate: "05-07-2006",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:1
    },
    {
        title: "Introduction to Mechatronics and Measurement Systems",
        author: "David G. Alciatore",
        subject: "Mechanical Engineering",
        publishDate: "23-11-2009",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Structural Analysis",
        author: "Russell C. Hibbeler",
        subject: "Civil Engineering",
        publishDate: "11-03-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Power System Analysis and Design",
        author: "J. Duncan Glover",
        subject: "Electrical Engineering",
        publishDate: "31-07-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Fundamentals of Engineering Thermodynamics",
        author: "Michael J. Moran",
        subject: "Mechanical Engineering",
        publishDate: "17-12-2007",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Chemical Engineering Design",
        author: "Gavin P. Towler",
        subject: "Chemical Engineering",
        publishDate: "06-02-2001",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Database Systems: The Complete Book",
        author: "Hector Garcia-Molina",
        subject: "Computer Science",
        publishDate: "23-06-2005",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Analog Electronics",
        author: "Ian Hickman",
        subject: "Electrical Engineering",
        publishDate: "12-08-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Structural Steel Design",
        author: "Jack C. McCormac",
        subject: "Civil Engineering",
        publishDate: "31-10-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Robotics",
        author: "John J. Craig",
        subject: "Mechanical Engineering",
        publishDate: "20-12-1998",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Separation Process Principles",
        author: "J. D. Seader",
        subject: "Chemical Engineering",
        publishDate: "07-02-2009",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell",
        subject: "Computer Science",
        publishDate: "26-04-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Electric Power Systems",
        author: "Mohamed E. El-Hawary",
        subject: "Electrical Engineering",
        publishDate: "15-08-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Fluid Mechanics",
        author: "Frank M. White",
        subject: "Mechanical Engineering",
        ypublishDate: "03-12-2007",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Transportation Engineering: An Introduction",
        author: "C. Jotin Khisty",
        subject: "Civil Engineering",
        publishDate: "21-02-2001",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Process Dynamics and Control",
        author: "Dale E. Seborg",
        subject: "Chemical Engineering",
        publishDate: "10-06-2006",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Artificial Neural Systems",
        author: "Jacek M. Zurada",
        subject: "Computer Science",
        publishDate: "28-10-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Power Electronics: Converters, Applications, and Design",
        author: "Ned Mohan",
        subject: "Electrical Engineering",
        publishDate: 2015,
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Geotechnical Engineering: Principles and Practices",
        author: "Donald P. Coduto",
        subject: "Civil Engineering",
        publishDate: "17-02-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Heat Transfer: A Practical Approach",
        author: "Yunus A. Cengel",
        subject: "Mechanical Engineering",
        publishDate: "06-08-1999",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Chemical Engineering Thermodynamics",
        author: "J.M. Smith",
        subject: "Chemical Engineering",
        publishDate: "24-12-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        subject: "Computer Science",
        publishDate: "12-04-2005",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Machine Learning",
        author: "Tom M. Mitchell",
        subject: "Computer Science",
        publishDate: "31-08-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Digital Design",
        author: "M. Morris Mano",
        subject: "Electrical Engineering",
        publishDate: "19-12-2010",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Civil Engineering Materials",
        author: "Shan Somayaji",
        subject: "Civil Engineering",
        publishDate: "07-05-2007",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Fundamentals of Thermodynamics",
        author: "Claude J. Geckeler",
        subject: "Mechanical Engineering",
        publishDate: "25-09-2001",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Chemical Principles",
        author: "Peter Atkins",
        subject: "Chemical Engineering",
        publishDate: "15-01-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Data Structures",
        author: "Yoshiyuki Katayama",
        subject: "Computer Science",
        publishDate: "03-03-1999",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Engineering Mechanics: Dynamics",
        author: "Russell C. Hibbeler",
        subject: "Mechanical Engineering",
        publishDate: "20-07-2005",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "An Introduction to Geotechnical Engineering",
        author: "Robert D. Holtz",
        subject: "Civil Engineering",
        publishDate: "07-11-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Digital Signal Processing",
        author: "John G. Proakis",
        subject: "Electrical Engineering",
        publishDate: "26-01-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Fundamentals of Heat and Mass Transfer",
        author: "Frank P. Incropera",
        subject: "Mechanical Engineering",
        publishDate: "14-05-2009",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Transport Phenomena",
        author: "R. Byron Bird",
        subject: "Chemical Engineering",
        publishDate: "01-09-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Computer Networks",
        author: "Andrew S. Tanenbaum",
        subject: "Computer Science",
        publishDate: "07-11-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Electric Circuits",
        author: "James W. Nilsson",
        subject: "Electrical Engineering",
        publishDate: "19-11-1999",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Mechanics of Materials",
        author: "Ferdinand P. Beer",
        subject: "Civil Engineering",
        publishDate: "09-03-2007",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Engineering Electromagnetics",
        author: "William H. Hayt",
        subject: "Electrical Engineering",
        publishDate: "26-07-2000",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Thermodynamics: An Engineering Approach",
        author: "Yunus A. Cengel",
        subject: "Mechanical Engineering",
        publishDate: "13-12-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Environmental Engineering",
        author: "Mackenzie L. Davis",
        subject: "Environmental Engineering",
        publishDate: "01-04-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Engineering Fluid Mechanics",
        author: "Donald F. Elger",
        subject: "Mechanical Engineering",
        publishDate: "18-08-2010",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Process Control: Modeling, Design, and Simulation",
        author: "B. Wayne Bequette",
        subject: "Chemical Engineering",
        publishDate: "07-12-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Data Structures and Algorithms in Python",
        author: "Michael T. Goodrich",
        subject: "Computer Science",
        publishDate: "26-02-2001",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Electric Circuits",
        author: "Raymond A. Green",
        subject: "Electrical Engineering",
        publishDate: "12-06-2006",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Geotechnical Engineering: Principles and Practices",
        author: "Donald P. Coduto",
        subject: "Civil Engineering",
        publishDate: "31-10-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Heat Transfer",
        author: "Jack P. Holman",
        subject: "Mechanical Engineering",
        publishDate: "19-01-1998",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Chemical Reactor Analysis and Design",
        author: "Gilbert F. Froment",
        subject: "Chemical Engineering",
        publishDate: "05-05-2009",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Operating System Concepts",
        author: "Abraham Silberschatz",
        subject: "Computer Science",
        publishDate: "21-09-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Mechatronics and Measurement Systems",
        author: "David G. Alciatore",
        subject: "Mechanical Engineering",
        publishDate: "09-11-1999",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Structural Analysis",
        author: "Russell C. Hibbeler",
        subject: "Civil Engineering",
        publishDate: "28-03-2007",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Power System Analysis and Design",
        author: "J. Duncan Glover",
        subject: "Electrical Engineering",
        publishDate: "04-12-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Fundamentals of Engineering Thermodynamics",
        author: "Michael J. Moran",
        subject: "Mechanical Engineering",
        publishDate: "15-07-2000",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Chemical Engineering Design",
        author: "Gavin P. Towler",
        subject: "Chemical Engineering",
        publishDate: "23-04-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Database Systems: The Complete Book",
        author: "Hector Garcia-Molina",
        subject: "Computer Science",
        publishDate: "31-05-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Analog Electronics",
        author: "Ian Hickman",
        subject: "Electrical Engineering",
        publishDate: "10-08-2010",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Structural Steel Design",
        author: "Jack C. McCormac",
        subject: "Civil Engineering",
        publishDate: "28-12-2001",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Robotics",
        author: "John J. Craig",
        subject: "Mechanical Engineering",
        publishDate: "14-04-2005",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Separation Process Principles",
        author: "J. D. Seader",
        subject: "Chemical Engineering",
        publishDate: "02-08-2009",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell",
        subject: "Computer Science",
        publishDate: "21-11-2006",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Electric Power Systems",
        author: "Mohamed E. El-Hawary",
        subject: "Electrical Engineering",
        publishDate: "10-03-2000",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Fluid Mechanics",
        author: "Frank M. White",
        subject: "Mechanical Engineering",
        publishDate: "26-06-2007",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Transportation Engineering: An Introduction",
        author: "C. Jotin Khisty",
        subject: "Civil Engineering",
        publishDate: 2015,
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Process Dynamics and Control",
        author: "Dale E. Seborg",
        subject: "Chemical Engineering",
        publishDate: "15-10-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Artificial Neural Systems",
        author: "Jacek M. Zurada",
        subject: "Computer Science",
        publishDate: "05-01-1999",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Power Electronics: Converters, Applications, and Design",
        author: "Ned Mohan",
        subject: "Electrical Engineering",
        publishDate: "24-05-2001",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Geotechnical Engineering: Principles and Practices",
        author: "Donald P. Coduto",
        subject: "Civil Engineering",
        publishDate: "13-09-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Heat Transfer: A Practical Approach",
        author: "Yunus A. Cengel",
        subject: "Mechanical Engineering",
        publishDate: "02-12-2010",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Chemical Engineering Thermodynamics",
        author: "J.M. Smith",
        subject: "Chemical Engineering",
        publishDate: "19-02-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        subject: "Computer Science",
        publishDate: "05-07-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Machine Learning",
        author: "Tom M. Mitchell",
        subject: "Computer Science",
        publishDate: "22-11-2005",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Digital Design",
        author: "M. Morris Mano",
        subject: "Electrical Engineering",
        publishDate: "10-05-1999",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Civil Engineering Materials",
        author: "Shan Somayaji",
        subject: "Civil Engineering",
        publishDate: "06-01-2009",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Fundamentals of Thermodynamics",
        author: "Claude J. Geckeler",
        subject: "Mechanical Engineering",
        publishDate: "28-09-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Chemical Principles",
        author: "Peter Atkins",
        subject: "Chemical Engineering",
        publishDate: "17-01-2007",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Data Structures",
        author: "Yoshiyuki Katayama",
        subject: "Computer Science",
        publishDate: "04-04-2010",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Engineering Mechanics: Dynamics",
        author: "Russell C. Hibbeler",
        subject: "Mechanical Engineering",
        publishDate: "23-08-2006",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "An Introduction to Geotechnical Engineering",
        author: "Robert D. Holtz",
        subject: "Civil Engineering",
        publishDate: "11-12-1998",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Digital Signal Processing",
        author: "John G. Proakis",
        subject: "Electrical Engineering",
        publishDate: "30-03-2001",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Fundamentals of Heat and Mass Transfer",
        author: "Frank P. Incropera",
        subject: "Mechanical Engineering",
        publishDate: "16-07-2005",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Transport Phenomena",
        author: "R. Byron Bird",
        subject: "Chemical Engineering",
        publishDate: "02-11-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Computer Networks",
        author: "Andrew S. Tanenbaum",
        subject: "Computer Science",
        publishDate: "21-05-1999",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Solid Mechanics",
        author: "Shawn A. Chester",
        subject: "Mechanical Engineering",
        publishDate: "10-09-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Engineering Ethics",
        author: "Charles B. Fleddermann",
        subject: "Engineering Ethics",
        publishDate: "28-01-2006",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Principles of Electric Machines and Power Electronics",
        author: "P.C. Sen",
        subject: "Electrical Engineering",
        publishDate: "14-06-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Structural Analysis and Design of Process Equipment",
        author: "Maan H. Jawad",
        subject: "Chemical Engineering",
        publishDate: "02-12-2007",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Automata Theory, Languages, and Computation",
        author: "John E. Hopcroft",
        subject: "Computer Science",
        publishDate: "19-02-2010",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Engineering Mechanics: Statics",
        author: "Anthony M. Bedford",
        subject: "Mechanical Engineering",
        publishDate: "08-08-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Environmental Engineering: Fundamentals, Sustainability, Design",
        author: "James R. Mihelcic",
        subject: "Environmental Engineering",
        publishDate: "27-04-2001",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Process Systems Analysis and Control",
        author: "Donald R. Coughanowr",
        subject: "Chemical Engineering",
        publishDate: "13-10-2006",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Computer Organization and Design",
        author: "David A. Patterson",
        subject: "Computer Science",
        publishDate: "31-05-2002",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Electrical Machines, Drives, and Power Systems",
        author: "Theodore Wildi",
        subject: "Electrical Engineering",
        publishDate: "17-09-1998",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Structural Analysis",
        author: "Aslam Kassimali",
        subject: "Civil Engineering",
        publishDate: "06-01-2009",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Mechanical Engineering",
        author: "Jonathan Wickert",
        subject: "Mechanical Engineering",
        publishDate: "19-11-2003",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Engineering Economic Analysis",
        author: "Donald G. Newnan",
        subject: "Engineering Economics",
        publishDate: "10-03-1999",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Principles of Chemical Engineering Processes",
        author: "Nayef Ghasem",
        subject: "Chemical Engineering",
        publishDate: "28-07-2007",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Operating Systems: Internals and Design Principles",
        author: "William Stallings",
        subject: "Computer Science",
        publishDate: "09-06-2000",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Mechanical Measurements",
        author: "Thomas G. Beckwith",
        subject: "Mechanical Engineering",
        publishDate: "15-12-2004",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Introduction to Environmental Engineering and Science",
        author: "Gilbert M. Masters",
        subject: "Environmental Engineering",
        publishDate: "04-02-2008",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    },
    {
        title: "Process Heat Transfer",
        author: "D. Q. Kern",
        subject: "Chemical Engineering",
        publishDate: "23-08-1999",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1404052592951-YIU524W4W3OGRB1P77F3/OldBooks.jpg",
        requestCount:0
    }
];

const booksPerPage = 10;
let currentPage = 1;
let filteredBooks = books;

function applyFilters() {
    const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const subjectInput = document.querySelector("#subject");
    const publishDateInput = document.querySelector("#publish-date");

    const title = titleInput.value.trim().toLowerCase();
    const author = authorInput.value.trim().toLowerCase();
    const subject = subjectInput.value.trim().toLowerCase();
    const publishDate = publishDateInput.value;

    filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(title) &&
        book.author.toLowerCase().includes(author) &&
        book.subject.toLowerCase().includes(subject) &&
        (publishDate === "" || book.publishDate === publishDate)
    );

    currentPage = 1;
    displayBooks();
}

function resetFilters() {
    const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const subjectInput = document.querySelector("#subject");
    const publishDateInput = document.querySelector("#publish-date");

    titleInput.value = "";
    authorInput.value = "";
    subjectInput.value = "";
    publishDateInput.value = "";

    filteredBooks = books;
    currentPage = 1;
    displayBooks();
}

function displayBooks() {
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToDisplay = filteredBooks.slice(startIndex, endIndex);

    for (const book of booksToDisplay) {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        const imageElement = document.createElement("img");
        imageElement.src = book.imageUrl;
        imageElement.alt = book.title;
        bookElement.appendChild(imageElement);

        const titleElement = document.createElement("h3");
        titleElement.textContent = book.title;
        bookElement.appendChild(titleElement);

        const authorElement = document.createElement("p");
        authorElement.textContent = "Author: " + book.author;
        bookElement.appendChild(authorElement);

        const subjectElement = document.createElement("p");
        subjectElement.textContent = "Subject: " + book.subject;
        bookElement.appendChild(subjectElement);

        const publishDateElement = document.createElement("p");
        publishDateElement.textContent = "Publish Date: " + book.publishDate;
        bookElement.appendChild(publishDateElement);

        const requestCountElement = document.createElement("p");
        requestCountElement.textContent = "Request Count: " + book.requestCount;
        bookElement.appendChild(requestCountElement);

        const requestButton = document.createElement("button");
        requestButton.textContent = "Request";
        requestButton.addEventListener("click", () => {
            book.requestCount++;
            requestCountElement.textContent = "Request Count: " + book.requestCount;
        });
        bookElement.appendChild(requestButton);

        bookContainer.appendChild(bookElement);
    }

    const pageNumberElement = document.querySelector("#page-number");
    pageNumberElement.textContent = currentPage;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayBooks();
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayBooks();
    }
}

displayBooks();