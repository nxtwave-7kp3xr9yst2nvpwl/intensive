const all = [
  {
    Name: "Deepak Kumar",
    Branch: "Chemical Engineering (CHE)",
    College_Name: "SASTRA Deemed University",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/deepak-kumar.png",
    Designation: "Assistant manager in SDE",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/reliance-jio.png",
    Testimonial_Content:
      "NxtWave's CCBP 4.0 gave me strong fundamentals and a bright future in the field of IT.",
  },
  {
    Name: "Jaya Prathyusha",
    Branch: "Computer Science Engineering (CSE)",
    College_Name: "Vellore Institute of Technology",
    Year_of_graduation: "",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/jaya-prathyusha.png",
    Designation: "Senior Tech Associate",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/bank-of-america.png",
    Testimonial_Content:
      "CCBP 4.0 will be my first choice to learn any new skill in the future.",
  },
  {
    Name: "Sai Deepak",
    Branch: "Electrical & Electronics Engineering (EEE)",
    College_Name: "BVC College of Engineering",
    Year_of_graduation: "2016 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sai-deepak.png",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "I got tremendous placement support which never left my hand until I got placed.",
  },
  {
    Name: "Sravan Tangudu",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Raghu Institute of Technology",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravan-tangudu.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
    Testimonial_Content:
      "CCBP 4.0 trained me with all the required skills to get a software job.",
  },
  {
    Name: "Naga Sai Yeswanth",
    Branch: "Electrical & Electronics Engineering (EEE)",
    College_Name: "VKR, VNB and AGK College of Engineering, Gudivada",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/naga-sai-yeswanth.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/tcs.png",
    Testimonial_Content:
      "CCBP 4.0 provides a well-structured curriculum and a clear learning path.",
  },
  {
    Name: "Renuka",
    Branch: "Electronics & Communication Engineering (ECE)",
    College_Name:
      "Sir C.V.Raman Institute of Management Studies, Ananthapuramu",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/renuka.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
    Testimonial_Content:
      "The practical skills I gained in CCBP 4.0 helped me get placed in a giant MNC.",
  },
  {
    Name: "Sushma",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Gayatri Vidya Parishad College of Engineering",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sushma.png",
    Designation: "Application Development Associate",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/accenture.png",
    Testimonial_Content:
      "Project-based learning made me get practical knowledge though I started from zero.",
  },
  {
    Name: "Vikram",
    Branch: "Chemical Engineering (CHE)",
    College_Name: "Rajiv Gandhi University of Knowledge Technologies",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/vikram.png",
    Designation: "Software Development Engnieer - I",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/reliance-jio.png",
    Testimonial_Content:
      "I understood all the concepts easily as the sessions were in my mother tongue.",
  },
  {
    Name: "Sivaram",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Sathyabama Institute of Science and Technology",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sivaram.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
    Testimonial_Content:
      "Though I started with CCBP 4.0 as a newbie, I got placed in a renowned product-based company.",
  },
  {
    Name: "Prabhu Kishore",
    Branch: "Electronics & Communication Engineering (ECE)",
    College_Name: "K L University",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/prabhu-kishore.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
    Testimonial_Content:
      "The expertise of trainers in CCBP 4.0 helped me gain advanced programming skills.",
  },
  {
    Name: "Sravan Kumar",
    Branch: "Civil Engineering (CE)",
    College_Name:
      "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering &Technology",
    Year_of_graduation: "2017 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravan-kumar.png",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "With the skill set I developed here, I got two offer letters from well-known companies.",
  },
  {
    Name: "Rohith Kumar",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Jawaharlal Nehru Technological University",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/rohith-kumar.avif",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "CCBP 4.0's project-based learning made me more passionate to learn coding.",
  },
  {
    Name: "Srilekha",
    Branch: "Electronics & Communication Engineering (ECE)",
    College_Name: "Sreyas Institute of Engineering & Technology",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/srilekha.png",
    Designation: "Assistant System Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/tcs.png",
    Testimonial_Content:
      "Besides gaining tech skills, the CCBP 4.0 team enhanced my interview skills",
  },
  {
    Name: "Sravanthi",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Jawaharlal Nehru Technological University",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravanthi.avif",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "With CCBP 4.0's level of training, anyone can learn easily and get into IT.",
  },
];

const nonitbranchtoitjob = [
  {
    Name: "Deepak Kumar",
    Branch: "Chemical Engineering (CHE)",
    College_Name: "SASTRA Deemed University",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/deepak-kumar.png",
    Designation: "Assistant manager in SDE",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/reliance-jio.png",
    Testimonial_Content:
      "NxtWave's CCBP 4.0 gave me strong fundamentals and a bright future in the field of IT.",
  },
  {
    Name: "Sai Deepak",
    Branch: "Electrical & Electronics Engineering (EEE)",
    College_Name: "BVC College of Engineering",
    Year_of_graduation: "2016 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sai-deepak.png",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "I got tremendous placement support which never left my hand until I got placed.",
  },
  {
    Name: "Sravan Tangudu",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Raghu Institute of Technology",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravan-tangudu.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
    Testimonial_Content:
      "CCBP 4.0 trained me with all the required skills to get a software job.",
  },
  {
    Name: "Naga Sai Yeswanth",
    Branch: "Electrical & Electronics Engineering (EEE)",
    College_Name: "VKR, VNB and AGK College of Engineering, Gudivada",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/naga-sai-yeswanth.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/tcs.png",
    Testimonial_Content:
      "CCBP 4.0 provides a well-structured curriculum and a clear learning path.",
  },
  {
    Name: "Sushma",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Gayatri Vidya Parishad College of Engineering",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sushma.png",
    Designation: "Application Development Associate",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/accenture.png",
    Testimonial_Content:
      "Project-based learning made me get practical knowledge though I started from zero.",
  },
  {
    Name: "Vikram",
    Branch: "Chemical Engineering (CHE)",
    College_Name: "Rajiv Gandhi University of Knowledge Technologies",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/vikram.png",
    Designation: "Software Development Engnieer - I",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/reliance-jio.png",
    Testimonial_Content:
      "I understood all the concepts easily as the sessions were in my mother tongue.",
  },
  {
    Name: "Sivaram",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Sathyabama Institute of Science and Technology",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sivaram.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
    Testimonial_Content:
      "Though I started with CCBP 4.0 as a newbie, I got placed in a renowned product-based company.",
  },
  {
    Name: "Sravan Kumar",
    Branch: "Civil Engineering (CE)",
    College_Name:
      "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering &Technology",
    Year_of_graduation: "2017 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravan-kumar.png",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "With the skill set I developed here, I got two offer letters from well-known companies.",
  },
  {
    Name: "Rohith Kumar",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Jawaharlal Nehru Technological University",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/rohith-kumar.avif",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "CCBP 4.0's project-based learning made me more passionate to learn coding.",
  },
  {
    Name: "Sravanthi",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Jawaharlal Nehru Technological University",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravanthi.avif",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "With CCBP 4.0's level of training, anyone can learn easily and get into IT.",
  },
  {
    Name: "Satya Prashanth",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "CMR Institute of Technology",
    Year_of_graduation: "2016 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/satya-prashanth.png",
    Designation: "Data Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "Attending sessions in my native language helped me understand the concepts easily.",
  },
  {
    Name: "Sreemurthy Gari",
    Branch: "Civil Engineering (CE)",
    College_Name:
      "Sri Venkateswara University College of Engineering, Tirupati",
    Year_of_graduation: "2019 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sreemurthy-gari.png",
    Designation: "Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/tcs.png",
    Testimonial_Content:
      "I built strong tech skills by learning each concept from scratch",
  },
  {
    Name: "Abhishek",
    Branch: "Petroleum Engineering",
    College_Name: "Aditya Engineering College, Surampalem",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/abhishek-vastar.png",
    Designation: "System Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/tcs.png",
    Testimonial_Content:
      "The well-curated practice tests helped me gain practical skills and crack the interview.",
  },
  {
    Name: "Yaswanth Teja Rao",
    Branch: "Aerospace Engineering",
    College_Name: "Lakireddy Bali Reddy College of Engineering",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/yaswanth-teja-rao.avif",
    Designation: "Intern Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "I learned concepts clearly and got real-time projects, mock tests, assignments, etc.",
  },
  {
    Name: "Shailesh",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "K L E College of Engineering. & Technology, Belgaum",
    Year_of_graduation: "2017 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/shailesh.png",
    Designation: "Member Technical",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/adp.png",
    Testimonial_Content:
      "With the trainer’s crystal clear explanations, I understood all the concepts clearly.",
  },
];

const nonengineeringdegree = [
  {
    Name: "Nandini Varma",
    Branch: "Computer Science",
    College_Name: "Deeksha Degree College & PG Centre",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/nandini-varma.avif",
    Designation: "Intern Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "Joining CCBP 4.0 changed my life. At the age of 21 years, I got placed in a top MNC.",
  },
  {
    Name: "Srivalli",
    Branch: "Agriculture Science",
    College_Name: "Acharya N G Rang Agricultural University",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/p-srivalli.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/cgi.png",
    Testimonial_Content:
      "The placement team provided me with ample opportunities and guided me to ace the interviews.",
  },
  {
    Name: "Lahari",
    Branch: "Mathematics and Computing",
    College_Name: "Osmania University",
    Year_of_graduation: "2019 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/lahari-balabhadra.png",
    Designation: "Associate Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/collabera.png",
    Testimonial_Content:
      "I cracked a tech job 4 times my previous salary with the practical skills I built at CCBP 4.0.",
  },
  {
    Name: "Naga Aruna",
    Branch: "Computer Application",
    College_Name: "Rise Krishna Sai Prakasam Group of Institutions, Valluru",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/venkata-naga-aruna-addanki.png",
    Designation: "Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/msys-technologies-v1.png",
    Testimonial_Content:
      "The placement support team of CCBP 4.0 encouraged and handheld me until I got placed.",
  },
  {
    Name: "Saisiva",
    Branch: "Finance",
    College_Name: "Padala Rama Reddi College",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/dandu-saisiva.png",
    Designation: "Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/msys-technologies-v1.png",
    Testimonial_Content:
      "I built strong tech foundations effortlessly from zero programming knowledge with CCBP 4.0.",
  },
  {
    Name: "Upendar Jetteboina",
    Branch: "Biology",
    College_Name: "Marvel Degree College",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/upendar-jetteboina.png",
    Designation: "Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/msys-technologies-v1.png",
    Testimonial_Content:
      "I began my IT career as a Software Engineer by building industry-ready skills from scratch.",
  },
  {
    Name: "Dhana Girija",
    Branch: "",
    College_Name: "Pithapur Rajah's Government College",
    Year_of_graduation: "2016 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/lanke-dhana-girija-pal-chandra.png",
    Designation: "Business Intelligence Trainee",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/systech-v1.png",
    Testimonial_Content:
      "I gained practical exposure at CCBP 4.0 and became industry-ready at a remarkable pace",
  },
  {
    Name: "Surya Chandra",
    Branch: "Commerce",
    College_Name: "Aditya Degree College",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/indukuri-surya-chandra-varma.png",
    Designation: "Business Intelligence Trainee",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/systech-v1.png",
    Testimonial_Content:
      "I landed an IT job as I developed strong tech foundations at a faster pace with CCBP 4.0.",
  },
  {
    Name: "Sonali",
    Branch: "Chemistry",
    College_Name: "Aditya Engineering College",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sonali-kothapalli.avif",
    Designation: "Junior Data Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/adf-company.jpeg",
    Testimonial_Content:
      "Practice sets & coding assignments enhanced my practical skills to build strong foundations.",
  },
  {
    Name: "Murali Krishna",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Government Polytechnic",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/murali-krishna-yernena.avif",
    Designation: "Software Developer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/career360.avif",
    Testimonial_Content:
      "CCBP 4.0 provided me with a solid foundation in tech skills for building my IT career.",
  },
  {
    Name: "Naveen Nagarjunapu",
    Branch: "Mathematics, Statistics & Computer Science",
    College_Name: "Priyadarshini Institute of Science and Technology For Women",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/naveen-nagarjunapu.png",
    Designation: "Associate Consultant",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/abjayon-v1.png",
    Testimonial_Content:
      "The intuitive teaching support and unmatched placement support helped me secure an IT job.",
  },
  {
    Name: "Venkata Sai Kiran",
    Branch: "Finance Management",
    College_Name: "Gayatri Vidya Parishad College of Engineering",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/venkata-sai-kiran-bhamidipati.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/enlume.svg",
    Testimonial_Content:
      "Coding practices helped me to code in many ways and I cracked interviews effortlessly.",
  },
  {
    Name: "Nitesh Ranjan",
    Branch: "Maths, Chemistry and Computer Applications",
    College_Name: "Pragati Engineering College",
    Year_of_graduation: "2019 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/nitesh-ranjan-mohanty.avif",
    Designation: "Front-End Developer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/caprusit.png",
    Testimonial_Content:
      "NxtWave CCBP 4.0 is a one-stop platform to learn, practice, and build web applications.",
  },
  {
    Name: "Satyasai",
    Branch: "Mathematics and Computing",
    College_Name: "Aditya Degree College",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/satyasai-satyavarapu.png",
    Designation: "Front-End Developer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/caprusit.png",
    Testimonial_Content:
      "By consistently following the schedule, I gained in-depth practical skills in programming.",
  },
  {
    Name: "Mallika",
    Branch: "Mathematics",
    College_Name: "Sri Padmavati Mahila Visvavidyalayam",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/nakka-mallika.avif",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/acheron-v1.png",
    Testimonial_Content:
      "I'm the first girl in my village to become an IT professional. All thanks to CCBP 4.0!",
  },
];
const careergap = [
  {
    Name: "Sai Deepak",
    Branch: "Electrical & Electronics Engineering (EEE)",
    College_Name: "BVC College of Engineering",
    Year_of_graduation: "2016 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sai-deepak.png",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "I got tremendous placement support which never left my hand until I got placed.",
  },
  {
    Name: "Sravan Kumar",
    Branch: "Civil Engineering (CE)",
    College_Name:
      "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering &Technology",
    Year_of_graduation: "2017 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravan-kumar.png",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "With the skill set I developed here, I got two offer letters from well-known companies.",
  },
  {
    Name: "Satya Prashanth",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "CMR Institute of Technology",
    Year_of_graduation: "2016 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/satya-prashanth.png",
    Designation: "Data Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "Attending sessions in my native language helped me understand the concepts easily.",
  },
  {
    Name: "Shailesh",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "K L E College of Engineering. & Technology, Belgaum",
    Year_of_graduation: "2017 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/shailesh.png",
    Designation: "Member Technical",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/adp.png",
    Testimonial_Content:
      "With the trainer’s crystal clear explanations, I understood all the concepts clearly.",
  },
  {
    Name: "Madhu",
    Branch: "Mechanical Engineering (ME)",
    College_Name:
      "Siddhartha Institute of Engineering and Technology, Vinobha Nagar",
    Year_of_graduation: "2017 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/madhu.png",
    Designation: "Member Technical",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/adp.png",
    Testimonial_Content:
      "With practice tests, I gained in-depth practical knowledge and built applications on my own.",
  },
  {
    Name: "Kiranmai",
    Branch: "Electronics & Communication Engineering (ECE)",
    College_Name: "Vignan's Foundation for Science, Technology & Research",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/kiranmai.png",
    Designation: "Intern Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "Despite a career gap, NxtWave helped me gain skills and confidence to land an IT job.",
  },
  {
    Name: "Ravindra Swamy",
    Branch: "Electronics & Communication Engineering (ECE)",
    College_Name: "Aditya Engineering College",
    Year_of_graduation: "2016 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/ravindra-swamy.avif",
    Designation: "Intern Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "Learning in my native language at CCBP 4.0 helped me understand concepts easily.",
  },
  {
    Name: "Mouli",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Aditya Engineering College",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/mouli.avif",
    Designation: "Intern Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "NxtWave’s continuous support and guidance helped me to secure a tech job at Deloitte.",
  },
  {
    Name: "Hussain",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "G.Pullaiah College of Engineering and Technology",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/hussain.png",
    Designation: "Intern Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "Code practice sets and hands-on projects here helped me gain in-depth tech knowledge.",
  },
  {
    Name: "Subhash",
    Branch: "Electronics & Communication Engineering (ECE)",
    College_Name: "Vellore Institute of Technology",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/subhash.png",
    Designation: "Software Engnieer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/hcl.png",
    Testimonial_Content:
      "Learning from scratch and in my native language helped me understand concepts well.",
  },
  {
    Name: "Pavan Kumar",
    Branch: "Agricultural Engineering",
    College_Name: "Aditya Engineering College, Surampalem",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/pavan-kumar.png",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/capgemini.png",
    Testimonial_Content:
      "Attending the sessions in my native language helped me build strong tech foundations.",
  },
  {
    Name: "Sumanth",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "J.B. Institute of Engineering & Technology",
    Year_of_graduation: "2017 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sumanth.png",
    Designation: "Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/wipro-company-v1.png",
    Testimonial_Content:
      "At CCBP 4.0, I learned to program from the basics and developed a growth mindset.",
  },
  {
    Name: "Gnaneshwar",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Gandhi Institute of Technology and Management",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/gnaneshwar.png",
    Designation: "Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/wipro-company-v1.png",
    Testimonial_Content:
      "The placement team's assistance improved my interview skills and landed me an IT job.",
  },
  {
    Name: "Bharath Chandra",
    Branch: "Computer Science Engineering (CSE)",
    College_Name: "Guru Nanak University",
    Year_of_graduation: "2017 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/bharath-chandra.png",
    Designation: "Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/cgi.png",
    Testimonial_Content:
      "Right from teaching to placement, CCBP 4.0 team gave their 100%.",
  },
  {
    Name: "Umamaheswari",
    Branch: "Electronics & Communication Engineering (ECE)",
    College_Name: "Prakasam Engineering College, Kandukur",
    Year_of_graduation: "2015 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/umamaheswari-vuppuluri.png",
    Designation: "Business Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/exl-service.png",
    Testimonial_Content:
      "The mock interviews helped me gain confidence to perform exceptionally well in the interview.",
  },
];
const gotintotopmncs = [
  {
    Name: "Deepak Kumar",
    Branch: "Chemical Engineering (CHE)",
    College_Name: "SASTRA Deemed University",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/deepak-kumar.png",
    Designation: "Assistant manager in SDE",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/reliance-jio.png",
    Testimonial_Content:
      "NxtWave's CCBP 4.0 gave me strong fundamentals and a bright future in the field of IT.",
  },
  {
    Name: "Jaya Prathyusha",
    Branch: "Computer Science Engineering (CSE)",
    College_Name: "Vellore Institute of Technology",
    Year_of_graduation: "",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/jaya-prathyusha.png",
    Designation: "Senior Tech Associate",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/bank-of-america.png",
    Testimonial_Content:
      "CCBP 4.0 will be my first choice to learn any new skill in the future.",
  },
  {
    Name: "Sai Deepak",
    Branch: "Electrical & Electronics Engineering (EEE)",
    College_Name: "BVC College of Engineering",
    Year_of_graduation: "2016 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sai-deepak.png",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "I got tremendous placement support which never left my hand until I got placed.",
  },
  {
    Name: "Sravan Tangudu",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Raghu Institute of Technology",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravan-tangudu.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
    Testimonial_Content:
      "CCBP 4.0 trained me with all the required skills to get a software job.",
  },
  {
    Name: "Naga Sai Yeswanth",
    Branch: "Electrical & Electronics Engineering (EEE)",
    College_Name: "VKR, VNB and AGK College of Engineering, Gudivada",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/naga-sai-yeswanth.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/tcs.png",
    Testimonial_Content:
      "CCBP 4.0 provides a well-structured curriculum and a clear learning path.",
  },
  {
    Name: "Renuka",
    Branch: "Electronics & Communication Engineering (ECE)",
    College_Name:
      "Sir C.V.Raman Institute of Management Studies, Ananthapuramu",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/renuka.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
    Testimonial_Content:
      "The practical skills I gained in CCBP 4.0 helped me get placed in a giant MNC.",
  },
  {
    Name: "Sushma",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Gayatri Vidya Parishad College of Engineering",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sushma.png",
    Designation: "Application Development Associate",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/accenture.png",
    Testimonial_Content:
      "Project-based learning made me get practical knowledge though I started from zero.",
  },
  {
    Name: "Vikram",
    Branch: "Chemical Engineering (CHE)",
    College_Name: "Rajiv Gandhi University of Knowledge Technologies",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/vikram.png",
    Designation: "Software Development Engnieer - I",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/reliance-jio.png",
    Testimonial_Content:
      "I understood all the concepts easily as the sessions were in my mother tongue.",
  },
  {
    Name: "Sivaram",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Sathyabama Institute of Science and Technology",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sivaram.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
    Testimonial_Content:
      "Though I started with CCBP 4.0 as a newbie, I got placed in a renowned product-based company.",
  },
  {
    Name: "Prabhu Kishore",
    Branch: "Electronics & Communication Engineering (ECE)",
    College_Name: "K L University",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/prabhu-kishore.png",
    Designation: "Associate Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/bosch.png",
    Testimonial_Content:
      "The expertise of trainers in CCBP 4.0 helped me gain advanced programming skills.",
  },
  {
    Name: "Sravan Kumar",
    Branch: "Civil Engineering (CE)",
    College_Name:
      "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering &Technology",
    Year_of_graduation: "2017 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravan-kumar.png",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "With the skill set I developed here, I got two offer letters from well-known companies.",
  },
  {
    Name: "Rohith Kumar",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Jawaharlal Nehru Technological University",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/rohith-kumar.avif",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "CCBP 4.0's project-based learning made me more passionate to learn coding.",
  },
  {
    Name: "Srilekha",
    Branch: "Electronics & Communication Engineering (ECE)",
    College_Name: "Sreyas Institute of Engineering & Technology",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/srilekha.png",
    Designation: "Assistant System Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/tcs.png",
    Testimonial_Content:
      "Besides gaining tech skills, the CCBP 4.0 team enhanced my interview skills",
  },
  {
    Name: "Sravanthi",
    Branch: "Mechanical Engineering (ME)",
    College_Name: "Jawaharlal Nehru Technological University",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/profile-images/sravanthi.avif",
    Designation: "Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "With CCBP 4.0's level of training, anyone can learn easily and get into IT.",
  },
];
const nonitjobtoitjob = [
  {
    Name: "Naga Thulasi",
    Branch: "",
    College_Name: "Aditya Degree College For Women, Kakinada",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/mummidi-naga-thulasi.png",
    Designation: "Trainee Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/continueserve.png",
    Testimonial_Content:
      "Learning in my native language with real-time examples made me understand everything.",
  },
  {
    Name: "Kiran Teja Kandiboyina",
    Branch: "Chemistry",
    College_Name: "Adikavi Nannaya University, Rajahmundry",
    Year_of_graduation: "2019 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/kiran-teja-kandiboyina-kloudworx-l.png",
    Designation: "Junior Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/kloudworx.png",
    Testimonial_Content:
      "NxtWave is the best platform to turn your zero tech skills into advanced ones",
  },
  {
    Name: "Abdul Sathar",
    Branch: "Civil Engineering (CE)",
    College_Name: "Sai Ganapathi Engineering College",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/shaik-abdul-sathar.png",
    Designation: "Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/probe-information.png",
    Testimonial_Content:
      "I had to work as a delivery boy. But now I have become a Software Engineer with CCBP 4.0.",
  },
  {
    Name: "Lakshmana Sai",
    Branch: "Civil Engineering (CE)",
    College_Name:
      "Bonam Venkata Chalamayya Institute of Technology & Science, Amalapuram",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/kommula-lakshmana-sai.png",
    Designation: "SAP CPQ Developer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/smartforce-it-solutions.png",
    Testimonial_Content:
      "After every session, mock tests and assignments helped me gain practical tech skills.",
  },
  {
    Name: "Praneeth",
    Branch: "Civil Engineering (CE)",
    College_Name: "B.V Raju Institute of Technology",
    Year_of_graduation: "2019 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/praneeth.png",
    Designation: "Software Development Intern",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/valuefy.png",
    Testimonial_Content:
      "With practice tests & assignments after each session, I gained clarity of concepts.",
  },
  {
    Name: "Kirankumar Daddala",
    Branch: "Civil Engineering (CE)",
    College_Name: "Visvodaya Engineering College",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/kirankumar-daddala-deloitte-d.png",
    Designation: "Intern Analyst",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/deloitte-v4.png",
    Testimonial_Content:
      "I joined with zero tech skills. But with NxtWave, I cracked a tech job in just 5 months",
  },
  {
    Name: "Hritik Behare",
    Branch: "Civil Engineering (CE)",
    College_Name:
      "Sinhgad Technical Education Societys Sinhgad Academy of Engineering, Kondhawa",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/hritik-behare-novatech-i.png",
    Designation: "Junior Software Developer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/novatech.png",
    Testimonial_Content:
      "I shifted towards tech, built relevant skills with NxtWave and I’m now earning 3x my previous salary.",
  },
  {
    Name: "Shiva Kumar",
    Branch: "Civil Engineering (CE)",
    College_Name: "Vignan Institute of Technology & Science, Hyderabad",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/shiva-kumar-vanam-unifo-solutions-ac.png",
    Designation: "Software Development Engineer Level-1",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/unifo-solutions.png",
    Testimonial_Content:
      "I entered with zero tech skills and came out with a tech job in my hands.",
  },
  {
    Name: "Swathi",
    Branch: "Civil Engineering (CE)",
    College_Name: "Vemu Institute of Technology, P.Kothakota",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/swathi-kc-gss-ah.png",
    Designation: "Jr. Web Developer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/giridhara-software-services.png",
    Testimonial_Content:
      "Despite my non-tech background, I managed to stand out in the interview.",
  },
  {
    Name: "Sreenath Yekabote",
    Branch: "Computer Science",
    College_Name: "Dr. Jyothirmayi Degree College",
    Year_of_graduation: "2017 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/sreenath-yekabote-acel-solutions.png",
    Designation: "Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/acel-solutions.png",
    Testimonial_Content: "I’m finally doing what I love, thanks to CCBP 4.0!",
  },
  {
    Name: "Mahesh Kalagoni",
    Branch: "Computer Science",
    College_Name: "Bankatlal Badruka College for Information Technology",
    Year_of_graduation: "2021 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/mahesh-kalagoni-streamline-n.png",
    Designation: "Implementation Consultant",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/streamline-company.png",
    Testimonial_Content:
      "I became 5/5 in coding with NxtWave advanced training.",
  },
  {
    Name: "Kalyan",
    Branch: "Computer Science Engineering (CSE)",
    College_Name: "Rajiv Gandhi University of Knowledge Technologies",
    Year_of_graduation: "2020 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/challagali-kalyan.png",
    Designation: "Software Developer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Reviews/company-logos/napier-health-care-v1.png",
    Testimonial_Content:
      "At NxtWave, I built practical tech skills through practice sets and real-world projects.",
  },
  {
    Name: "Madhu Mudiraj",
    Branch: "Computer Science Engineering (CSE)",
    College_Name: "Keshav Memorial Institute of Technology, Narayanguda",
    Year_of_graduation: "2018 Graduate",
    Learner_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/profile-images/kolthuru-madhu-mudiraj.png",
    Designation: "Junior Software Engineer",
    Company_Image:
      "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/reviews/company-logos/crestere.io.png",
    Testimonial_Content:
      "Everything here, from sessions to practice tests, helped me clear the tech interview.",
  },
];
export {
  all,
  nonitbranchtoitjob,
  nonengineeringdegree,
  careergap,
  gotintotopmncs,
  nonitjobtoitjob,
};
