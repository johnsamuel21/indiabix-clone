import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  getQuesforPages(){
    let questionobj = [
      {
        aptipage:[{page0:[
          {
            id: "1",
            question:"1.  A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
            option1: "120 metres",
            option2: "180 metres",
            option3: "324 metres",
            option4: "150 metres",
            answer: "D",
            explaination:"Speed =	(60 x 5/18)	m/sec = (50/3)	m/sec. Length of the train = (Speed x Time). Length of the train = (50/3 x 9) m = 150 m."
    
          },{
            id: "2",
            question:"2. 	A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
            option1: "45 km/hr",
            option2: "50 km/hr",
            option3: "54 km/hr",
            option4: "55 km/hr",
            answer: "B",
            explaination:"Speed of the train relative to man = (125/10) m/sec = (25/2) m/sec. = (25/2 x 18/5) km/hr. = 45 km/hr. Let the speed of the train be x km/hr. Then, relative speed = (x - 5) km/hr. x - 5 = 45 => x = 50 km/hr."
          },{
            id: "3",
            question:"3.  The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
            option1: "200 metres",
            option2: "225 metres",
            option3: "245 metres",
            option4: "250 metres",
            answer: "C",
            explaination:"Speed = (45 x 5/18) m/sec = (25/2) m/sec. Time = 30 sec. Let the length of bridge be x metres. Then, (130 + x)/30 = 25/2. => 2(130 + x) = 750. => x = 245 m."
          },{
            id: "4",
            question:"4. 	Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
            option1: "1 : 3",
            option2: "3 : 2",
            option3: "3 : 4",
            option4: "None of these",
            answer: "B",
            explaination:"Let the speeds of the two trains be x m/sec and y m/sec respectively. Then, length of the first train = 27x metres,. and length of the second train = 17y metres. (27x + 17y)/(x+y) = 23x + 23y. => 27x + 17y = 23x + 23y. => 4x = 6y. => x/y = 3/2."
          },{
            id: "5",
            question:"5. 	A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
            option1: "120 metres",
            option2: "240 metres",
            option3: "300 metres",
            option4: "None of these",
            answer: "B",
            explaination:"Speed =	(54 x 5/18) m/sec = 15 m/sec.Length of the train = (15 x 20)m = 300 m.Let the length of the platform be x metres.Then, (x + 300)/36 = 15. x + 300 = 540. x = 240 m"
          },
        ],
        },{
          page1:[
            {
              id: "1",
              question:"6. A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?",
              option1: "65 sec",
              option2: "89 sec",
              option3: "100 sec",
              option4: "150 sec",
              answer: "B",
              explaination:"Speed = (240/24) m/sec = 10 m/sec. Required time = (240 + 650)/10 sec = 89 sec."
      
            },{
              id: "2",
              question:"7. Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is:",
              option1: "50 m",
              option2: "72 m",
              option3: "80 m",
              option4: "82 m",
              answer: "B",
              explaination:"Let the length of each train be x metres. Then, distance covered = 2x metres.Relative speed = (46 - 36) km/hr. = (10 x 5/18) m/sec. = (25/9) m/sec. => 2x/36 = 25/9. 2x = 100. => x=50."
            },{
              id: "3",
              question:"8.	A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?",
              option1: "40 sec",
              option2: "42 sec",
              option3: "45 sec",
              option4: "48 sec",
              answer: "A",
              explaination:"Formula for converting from km/hr to m/s: X km/hr =(X x	5/18) m/s.Therefore, Speed = (45 x 5/18) m/sec	= (25/2) m/sec. Total distance to be covered = (360 + 140) m = 500 m. Formula for finding Time = (Distance/Speed). Required time = (500 x 2/25) sec = 40 sec."
            },{
              id: "4",
              question:"9. Two trains are moving in opposite directions @ 60 km/hr and 90 km/hr. Their lengths are 1.10 km and 0.9 km respectively. The time taken by the slower train to cross the faster train in seconds is:",
              option1: "36",
              option2: "45",
              option3: "48",
              option4: "49",
              answer: "C",
              explaination:"Relative speed = (60+ 90) km/hr. = (150 x 5/18)	m/sec. = (125/3) m/sec. Distance covered = (1.10 + 0.9) km = 2 km = 2000 m. Required time = (2000 x 3/125) sec = 48 sec."
            },{
              id: "5",
              question:"10. A jogger running at 9 kmph alongside a railway track in 240 metres ahead of the engine of a 120 metres long train running at 45 kmph in the same direction. In how much time will the train pass the jogger?",
              option1: "3.6 sec",
              option2: "18 sec",
              option3: "36 sec",
              option4: "72 sec",
              answer: "C",
              explaination:"Speed of train relative to jogger = (45 - 9) km/hr = 36 km/hr. = (36 x 5/18) m/sec. = 10 m/sec. Distance to be covered = (240 + 120) m = 360 m. Time taken = (360/10) sec = 36 sec."
            },
          ]
        }
        ]
      }
    ]
    return questionobj
  }


  getLinkforPages(){
    let linkvar = [
      {
        aptipage:{value: [
          {
            text:"Problems on Trains - Important formulas", link:"\\aptitude\\problems-on-trains\\formula"
          },
          {
            text:"Problems on Trains - General Questions", link:"\\aptitude\\problems-on-trains"
          },
          {
            text:"Problems on Trains - Data sufficiency 1", link:"\aptitude\\problems-on-trains\\data-suf1"
          },
          {
            text:"Problems on Trains - Data sufficiency 2", link:"\aptitude\\problems-on-trains\\data-suf2"
          },
          {
            text:"Problems on Trains - Data sufficiency 3", link:"\aptitude\\problems-on-trains\\data-suf3"
          }
        ],
        heading:":: Problems on Trains - General Questions"
      }
      }
    ]
    return linkvar
  }

  constructor() { }
}
