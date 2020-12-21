 //import Result from './Result'; 





class Home extends React.Component{
   
      
       

    render(){


       let UserMatrix =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
      let  FeaturesMatrix =[["Career","Commercial Awareness","Communication","Team Work","Negociation","Problem solving","Leadership","Organization" ,"Perseverence", "Ability to work under presseure", "Managing Ambiguity", "Resilience", "Analytical skills", "entrepreneurial skills" ,"IT skills","Higher Package","Easy Life","Enjoy","Art","Music","Dance"],
      ["Archaeology",0,7,7,7,6,6,7,1,0,3,0,7,0,0,2,5,5,0,0,0],
      ["Art Restoration",1,7,8,7,8,8,2,1,0,0,4,0,0,3,5,6,0,9,0,0],
      ["Curation",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ["Educational Counsellor",1,9,8,9,9,9,9,8,7,6,0,8,0,0,5,7,8,0,0,0],
      ["Monuments And Sculpture Restoration",1,8,7,6,5,8,8,0,0,0,0,4,0,0,3,7,6,8,0,0],
      ["Museology",1,8,7,6,5,8,8,0,0,0,0,4,0,0,3,7,6,0,0,0],
      ["Physiotherapy Rehabilitation Psychology",0,9,9,9,10,10,10,9,9,9,7,9,0,0,3,8,7,0,0,0],
      ["Social Work",5,9,9,9,9,9,9,8,7,8,5,8,0,0,4,7,7,0,0,0],
      ["Special Educator",6,9,9,10,10,10,10,10,9,9,6,10,6,4,4,6,8,0,0,0],
      ["Speech-Language And Hearing",0,9,9,9,10,10,10,9,8,9,5,9,0,0,4,8,7,0,0,0],
      ["Law",2,9,9,9,10,10,10,9,9,9,8,10,0,0,5,7,7,0,0,0],
      ["Advertising",8,8,8,8,7,8,9,7,7,7,5,9,9,4,5,8,8,7,7,0],
      ["Journalism",9,9,10,10,10,10,10,10,10,10,9,9,7,2,5,6,6,0,0,0],
      ["Mass Communication",2,9,10,10,10,10,10,10,10,10,9,9,7,2,5,6,7,0,0,0],
      ["Public Relations",2,9,10,10,10,10,10,10,10,10,9,9,7,0,5,8,8,0,0,0],
      ["Art Direction",2,9,9,9,9,9,9,7,8,8,4,9,7,0,5,8,8,8,0,0],
      ["Choreography",2,9,10,10,9,9,9,7,8,8,4,9,7,3,6,8,8,9,9,9],
      ["Direction",8,9,10,10,9,9,9,7,8,8,4,9,7,3,7,8,8,8,9,9],
      ["Film/Drama Production",8,10,10,10,10,10,10,9,8,8,8,9,9,1,8,9,9,9,9,9],
      ["Fine Arts",2,9,8,8,9,9,9,7,8,8,4,9,7,3,6,8,8,9,3,2],	
      ["Performing Arts",1,9,8,9,7,7,8,8,4,7,7,8,0,0,5,8,8,9,9,9],
      ["Vocal and Instrumental Music",7,9,8,9,7,7,8,8,4,7,7,8,0,0,4,8,8,7,9,9],
      ["Animation",5,5,8,6,7,7,8,8,4,7,7,8,2,4,4,8,8,8,0,0],
      ["Cinematography",8,9,8,9,7,7,8,8,4,7,7,8,4,4,4,8,9,9,9,9],
      ["Graphic Designing",3,7,8,5,7,7,8,8,4,7,7,8,6,6,5,8,9,8,0,0],
      ["Photography",0,7,6,6,7,7,8,8,4,7,7,8,6,5,4,9,9,8,0,0],
      ["Event Management",10,10,10,10,10,10,10,9,8,8,8,9,9,2,6,9,9,6,6,6],
      ["Hospital Management",10,10,10,10,10,10,10,9,8,8,8,9,9,4,6,8,8,0,0,0],
      ["Hotel Management",10,10,10,10,10,10,10,9,8,8,8,9,9,4,5,8,8,0,0,0],
      ["Human Resource Management",10,10,10,10,10,10,10,9,8,8,8,9,6,4,6,8,8,0,0,0],
      ["Insurance",10,10,10,10,10,10,10,9,8,8,8,9,9,5,7,8,8,0,0,0],
      ["Logistics & Supply Chain Management",9,9,9,10,10,9,10,9,8,8,8,9,8,3,5,8,8,0,0,0],
      ["Management",10,10,10,10,10,10,10,9,8,8,8,9,9,5,7,7,8,0,0,0],
      ["Bachelor of Arts",0,6,7,4,3,3,4,0,0,0,0,0,0,0,3,7,7,7,0,0],
      ["Bachelor of Education",1,8,6,5,6,6,5,4,1,0,0,5,0,0,3,4,5,0,0,0],
      ["Corporate Intelligence",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ["Detective",0,8,8,8,9,9,8,8,9,8,7,9,0,3,5,5,4,0,0,0],
      ["Food Science and Nutrition",4,5,2,3,5,4,4,4,0,0,0,4,0,0,4,6,5,0,0,0],
      ["Home Science",0,4,4,4,5,4,4,3,0,0,0,3,2,0,3,5,5,6,0,0],
      ["Interior Designing",7,5,6,6,6,8,8,6,2,4,0,4,4,0,5,5,6,8,0,0],
      ["Physical Education",2,8,8,8,9,9,9,7,3,4,7,5,0,0,4,6,5,6,0,0],
      ["Sports And Sports Management",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0],
      ["Tourism & Travels",7,8,8,8,9,9,9,4,4,5,0,7,8,3,6,6,7,4,0,0],
      ["Information Communications And Entertainment",8,8,9,7,7,8,9,4,4,5,1,7,9,4,7,7,6,7,3,3],
      ["Nutrition and Dietetics",7,8,8,7,8,8,9,7,3,2,0,7,7,0,4,6,6,0,0,0]	];
      
      console.log("lenght of feature matrix",FeaturesMatrix[0].length -1);
      console.log("lenght of Careers",FeaturesMatrix.length);

      let predicted_rating = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      let top_5 =["","","","",""];

  

     function addFeatures(featureNumber , value  ){
            UserMatrix [featureNumber ] += value; 
            console.log("current user matrix :" ,UserMatrix);
      };



      function recommend(){
          let i =0,j=0;
          
          for(i=1;i<46;i++){
            let  max_ind_rating=0;
              for(j=1;j<=20;j++){
      
                max_ind_rating+=UserMatrix[j]* FeaturesMatrix[i][j];
              }
      
              predicted_rating[i]=max_ind_rating/920;
      
            }
        
        
           console.log("predicted matrix" ,predicted_rating);
 
          let t=0;
          let temp=0;
          let sorted_event_id=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    
          for(i=1;i<46;i++){
            for(j=1;j<20-i;j++){
    
              if(predicted_rating[j]<predicted_rating[j+1]){
    
                temp=predicted_rating[j+1];
                predicted_rating[j+1]=predicted_rating[j];
                predicted_rating[j]=temp;
    
    
                t=sorted_event_id[j+1];
                sorted_event_id[j+1]=sorted_event_id[j];
                sorted_event_id[j]=t;
    
              }
            }
    
          }

    
     console.log("soretde matrix",sorted_event_id);
      
      top_5=sorted_event_id.slice(1,6);
   
     console.log("top5", top_5);

     for(i =0;i<5;i++) {
       console.log( FeaturesMatrix[ top_5[i]][0]);
     }

       finalOutput();

      };





      function finalOutput( ){
        
        const newDiv = document.createElement("div");

        const newContent = document.createElement("h2");
        newContent.textContent = "Top 5 career Recomendations are :";
      
        newDiv.appendChild(newContent);

        
        const orederdList = document.createElement("ol");

        const l1 = document.createElement("li");
        l1.textContent = FeaturesMatrix[ top_5[0]][0];
        orederdList.appendChild(l1);

        const l2 = document.createElement("li");
        l2.textContent = FeaturesMatrix[ top_5[1]][0];
        orederdList.appendChild(l2);

        const l3 = document.createElement("li");
        l3.textContent = FeaturesMatrix[ top_5[2]][0];
        orederdList.appendChild(l3);

        const l4 = document.createElement("li");
        l4.textContent = FeaturesMatrix[ top_5[3]][0];
        orederdList.appendChild(l4);

        const l5 = document.createElement("li");
        l5.textContent = FeaturesMatrix[ top_5[4]][0];
        orederdList.appendChild(l5);

        newDiv.appendChild(orederdList);

        const currentDiv = document.getElementById("final");

        currentDiv.appendChild(newDiv);


      };
  
  
      return(
        <div >
        <div id="mainPage">
        <div id ="title" >
            <h1>Career  Recommendation System </h1>
            <h4> For Stduents , after Class 12 apart from engineering and medical streams</h4>
           
        </div>
        <br></br>
  
        <div id = "note">
            <h3> To be Noted</h3>

          <ol>
            <li>Our system will recommend you the list of career part from engineering and medical streams .</li>
            <li>At first ,you have to give our QUIZ.</li>
            <li>Our Try is make website engagging rather than typicl Quiz . So there are so called TOPIC BOXES .</li>
            <li>In every TOPIC BOX , it may contain Questions , a real life situation , Facts , Information , Posts..
            So ,your job is to click button of  Like or  Dislike or Neutal according to what you think . </li>
          </ol>

          
          <p>* Please , click suitable  button for TOPIC BOXES only ONCE.</p>

        </div>
        </div>
        <br></br>
        <div id= "questions">

            <div id="que">
                <p> In Full packed Auditorim of 500 people , You are supposed to give a speech on INDEPENDANCE DAY . 
                How do you see towards this kind of situations ?</p>
                <button onClick ={ () => {  addFeatures( 9,3 );}}> LIKE</button>
                <button onClick ={ () => {  addFeatures( 9,-2.5 );}}> DISLIKE</button>
                <button onClick ={ () => {  addFeatures( 9, 0 );}}> DON'T KNOW </button>
            </div>
            <div id="que">
            <p> If your friend suggests you to read the business pages of newspapers, watch or listen to news channels, keep an eye on the market  Will you take intreset in it ?</p>
            <button onClick ={ () => {  addFeatures( 1,4 );}}> LIKE</button>
            <button onClick ={ () => {  addFeatures( 1,-1.5 );}}> DISLIKE</button>
            <button onClick ={ () => {  addFeatures( 1, 1 );}}> DON'T KNOW </button>
            </div>




          <div id="que">
                      <p> If your friend is telling some incidence to you would you like to maintain appropriate eye contact and take actions to show interest in what he has to say?</p>
                      <button onClick ={ () => {  addFeatures( 2,3);}}> LIKE</button>
                      <button onClick ={ () => {  addFeatures( 2,-0.5 );}}> DISLIKE</button>
                      <button onClick ={ () => {  addFeatures( 2, 0 );}}> DON'T KNOW </button>
          </div>



          <div id="que">
                      <p> Your one of team members is not able to complete the task and facing difficuilties in handling situation would you like to help him ?</p>
                      <button onClick ={ () => {  addFeatures( 3,3 );}}> LIKE</button>
                      <button onClick ={ () => {  addFeatures( 3,-1.5 );}}> DISLIKE</button>
                      <button onClick ={ () => {  addFeatures( 3, 1.5 );}}> DON'T KNOW </button>
          </div>



          <div id="que">
                      <p> Your Bargaining Partner Will Be Happier if You Make Several Concessions Than if They Get What They Think They Want, would you like to make your partner happier ?</p>
                      <button onClick ={ () => {  addFeatures( 4,5 );}}> LIKE</button>
                      <button onClick ={ () => {  addFeatures( 4,-1 );}}> DISLIKE</button>
                      <button onClick ={ () => {  addFeatures( 4, 0 );}}> DON'T KNOW </button>
          </div>


          <div id="que">
                      <p>Your cousin is facing some relationship problem in his life would you like to address him and help him to come out of this situation ?</p>
                      <button onClick ={ () => {  addFeatures( 5,4.5 );}}> LIKE</button>
                      <button onClick ={ () => {  addFeatures( 5,-1.5 );}}> DISLIKE</button>
                      <button onClick ={ () => {  addFeatures( 5, 1 );}}> DON'T KNOW </button>
          </div>




          <div id="que">
                      <p>your team has recently completed a project and getting appreciation for the same, would you love to give your teamates their credits and appreciate for their work?</p>
                      <button onClick ={ () => {  addFeatures( 6,5 );}}> LIKE</button>
                      <button onClick ={ () => {  addFeatures( 6,-1 );}}> DISLIKE</button>
                      <button onClick ={ () => {  addFeatures( 6, 0 );}}> DON'T KNOW </button>
          </div>



          <div id="que">
                      <p>You are working on a task and your colleague made a mistake  ,will you scold him ?</p>
                      <button onClick ={ () => {  addFeatures( 6,3 );}}> LIKE</button>
                      <button onClick ={ () => {  addFeatures( 6,-1.5 );}}> DISLIKE</button>
                      <button onClick ={ () => {  addFeatures( 6, 1.5);}}> DON'T KNOW </button>
          </div>


          <div id="que">
                      <p>A group of your friends are dicussing about the general college life and routine would you like to take part in it ?</p>
                      <button onClick ={ () => {  addFeatures( 2,4 );}}> LIKE</button>
                      <button onClick ={ () => {  addFeatures( 2,-2 );}}> DISLIKE</button>
                      <button onClick ={ () => {  addFeatures( 2,0);}}> DON'T KNOW </button>
          </div>
          <div id="que">
          <p>  “The only difference between a mob and a trained army is organization.” what is your thought about it?</p>
          <button onClick ={ () => {  addFeatures( 6,2 );}}> LIKE</button>
          <button onClick ={ () => {  addFeatures( 6,-1.5 );}}> DISLIKE</button>
          <button onClick ={ () => {  addFeatures( 6, 0 );}}> DON'T KNOW </button>

        </div>

          <div id="que">
                    <p>  "Perseverance is the hard work you do after you get tired of doing the hard work you already did",Do you think this is right?</p>
                    <button onClick ={ () => {  addFeatures( 7,1.5 );}}> LIKE</button>
                    <button onClick ={ () => {  addFeatures( 7,-1 );}}> DISLIKE</button>
                    <button onClick ={ () => {  addFeatures( 7, 0 );}}> DON'T KNOW </button>

          </div>

          <div id="que">
                    <p>  Performing well under pressure is both a personal and professional quality and can make a difference between an average employee and an excellent one,So do you like work under pressure?</p>
                    <button onClick ={ () => {  addFeatures( 8,2.5 );}}> LIKE</button>
                    <button onClick ={ () => {  addFeatures( 8,-1.5 );}}> DISLIKE</button>
                    <button onClick ={ () => {  addFeatures( 8, 0 );}}> DON'T KNOW </button>

          </div>

          <div id="que">
                    <p> Do you being in situations where you had to make a decision without all information you needed, do you like to being that situation again?</p>
                    <button onClick ={ () => {  addFeatures( 9,3 );}}> LIKE</button>
                    <button onClick ={ () => {  addFeatures( 9,-2 );}}> DISLIKE</button>
                    <button onClick ={ () => {  addFeatures( 9, 0 );}}> DON'T KNOW </button>

          </div>
          <div id="que">
                    <p>“Resilience is the ineffable quality that allows some people to be knocked down by life and come back stronger than ever.”,Could you avoid this stress in the future?</p>
                    <button onClick ={ () => {  addFeatures( 10,3.5 );}}> LIKE</button>
                    <button onClick ={ () => {  addFeatures( 10,-2 );}}> DISLIKE</button>
                    <button onClick ={ () => {  addFeatures( 10, 0 );}}> DON'T KNOW </button>

          </div>

          <div id="que">
                    <p>Your manager wants to buy new software or hardware that will increase the team’s productivity and asks for your recommendation. How would you reply?</p>
                    <button onClick ={ () => {  addFeatures( 11,4 );}}> LIKE</button>
                    <button onClick ={ () => {  addFeatures( 11,-2.5 );}}> DISLIKE</button>
                    <button onClick ={ () => {  addFeatures( 11, 0 );}}> DON'T KNOW </button>

          </div>

          <div id="que">
                    <p>Imagine a situation in which your one of your colleagues wants to solve a problem in a certain way, but the other colleague has a totally different approach in mind. They come to you asking for a help in deciding on the right approach. would you like to reply?</p>
                    <button onClick ={ () => {  addFeatures( 11,4 );}}> LIKE</button>
                    <button onClick ={ () => {  addFeatures( 11,-2.5 );}}> DISLIKE</button>
                    <button onClick ={ () => {  addFeatures( 11, 0 );}}> DON'T KNOW </button>

          </div>

          <div id="que">
                    <p>The ability to work under pressure involves dealing with constraints which are often outside of your control - these might be resource or time constraints, the difficulty of the task or having insufficient knowledge required to complete the task, or unforeseen changes or problems.</p>
                    <button onClick ={ () => {  addFeatures( 8,3 );}}> LIKE</button>
                    <button onClick ={ () => {  addFeatures( 8,-2 );}}> DISLIKE</button>
                    <button onClick ={ () => {  addFeatures( 8, 0 );}}> DON'T KNOW </button>

          </div>
          <div id="que">
          <p>  “The only difference between a mob and a trained army is organization.” what is your thought about it?</p>
          <button onClick ={ () => {  addFeatures( 6,2 );}}> LIKE</button>
          <button onClick ={ () => {  addFeatures( 6,-1.5 );}}> DISLIKE</button>
          <button onClick ={ () => {  addFeatures( 6, 0 );}}> DON'T KNOW </button>

          </div>

              <div id="que">
                        <p>  "Perseverance is the hard work you do after you get tired of doing the hard work you already did",Do you think this is right?</p>
                        <button onClick ={ () => {  addFeatures( 7,1.5 );}}> LIKE</button>
                        <button onClick ={ () => {  addFeatures( 7,-1 );}}> DISLIKE</button>
                        <button onClick ={ () => {  addFeatures( 7, 0 );}}> DON'T KNOW </button>

              </div>

              <div id="que">
                        <p>  Performing well under pressure is both a personal and professional quality and can make a difference between an average employee and an excellent one,So do you like work under pressure?</p>
                        <button onClick ={ () => {  addFeatures( 8,2.5 );}}> LIKE</button>
                        <button onClick ={ () => {  addFeatures( 8,-1.5 );}}> DISLIKE</button>
                        <button onClick ={ () => {  addFeatures( 8, 0 );}}> DON'T KNOW </button>

              </div>

              <div id="que">
                        <p> Do you being in situations where you had to make a decision without all information you needed, do you like to being that situation again?</p>
                        <button onClick ={ () => {  addFeatures( 9,3 );}}> LIKE</button>
                        <button onClick ={ () => {  addFeatures( 9,-2 );}}> DISLIKE</button>
                        <button onClick ={ () => {  addFeatures( 9, 0 );}}> DON'T KNOW </button>

              </div>
              <div id="que">
                        <p>“Resilience is the ineffable quality that allows some people to be knocked down by life and come back stronger than ever.”,Could you avoid this stress in the future?</p>
                        <button onClick ={ () => {  addFeatures( 10,3.5 );}}> LIKE</button>
                        <button onClick ={ () => {  addFeatures( 10,-2 );}}> DISLIKE</button>
                        <button onClick ={ () => {  addFeatures( 10, 0 );}}> DON'T KNOW </button>

              </div>

              <div id="que">
                        <p>Your manager wants to buy new software or hardware that will increase the team’s productivity and asks for your recommendation. How would you reply?</p>
                        <button onClick ={ () => {  addFeatures( 11,4 );}}> LIKE</button>
                        <button onClick ={ () => {  addFeatures( 11,-2.5 );}}> DISLIKE</button>
                        <button onClick ={ () => {  addFeatures( 11, 0 );}}> DON'T KNOW </button>

              </div>

              <div id="que">
                        <p>Imagine a situation in which your one of your colleagues wants to solve a problem in a certain way, but the other colleague has a totally different approach in mind. They come to you asking for a help in deciding on the right approach. would you like to reply?</p>
                        <button onClick ={ () => {  addFeatures( 11,4 );}}> LIKE</button>
                        <button onClick ={ () => {  addFeatures( 11,-2.5 );}}> DISLIKE</button>
                        <button onClick ={ () => {  addFeatures( 11, 0 );}}> DON'T KNOW </button>

              </div>

              <div id="que">
                        <p>The ability to work under pressure involves dealing with constraints which are often outside of your control - these might be resource or time constraints, the difficulty of the task or having insufficient knowledge required to complete the task, or unforeseen changes or problems.</p>
                        <button onClick ={ () => {  addFeatures( 8,3 );}}> LIKE</button>
                        <button onClick ={ () => {  addFeatures( 8,-2 );}}> DISLIKE</button>
                        <button onClick ={ () => {  addFeatures( 8, 0 );}}> DON'T KNOW </button>

              </div>
              <div id="que">
              <p> do you like to seaton big posts and wanted to become a wealthy person  ?</p>
              <button onClick ={ () => {  addFeatures( 15,3 );}}> LIKE</button>
              <button onClick ={ () => {  addFeatures( 15,-2.5 );}}> DISLIKE</button>
              <button onClick ={ () => {  addFeatures( 15, 0 );}}> DON'T KNOW </button>
            </div>

            <div id="que">
                          <p> you prefer to stay in one city and dont want to out of town for work?</p>
                          <button onClick ={ () => {  addFeatures( 16,4 );}}> LIKE</button>
                          <button onClick ={ () => {  addFeatures( 16,-2.5 );}}> DISLIKE</button>
                          <button onClick ={ () => {  addFeatures( 16, 0 );}}> DON'T KNOW </button>
            </div>

            <div id="que">
                          <p> if you are in restaurent and order some food then you like to comment on food dor taste and decoration  ?</p>
                          <button onClick ={ () => {  addFeatures( 17,4 );}}> LIKE</button>
                          <button onClick ={ () => {  addFeatures( 17,-3.5 );}}> DISLIKE</button>
                          <button onClick ={ () => {  addFeatures( 17, 0 );}}> DON'T KNOW </button>
            </div>

            <div id="que">
                          <p> do you like to watch racing and also you like spped car racing  ?</p>
                          <button onClick ={ () => {  addFeatures( 17,3 );}}> LIKE</button>
                          <button onClick ={ () => {  addFeatures( 17,-2.5 );}}> DISLIKE</button>
                          <button onClick ={ () => {  addFeatures( 17, 0 );}}> DON'T KNOW </button>
            </div>

            <div id="que">
                          <p> in your day to day life you want to click pictures of nature beauty and animals  ?</p>
                          <button onClick ={ () => {  addFeatures( 18,4 );}}> LIKE</button>
                          <button onClick ={ () => {  addFeatures( 18,4 );}}> DISLIKE</button>
                          <button onClick ={ () => {  addFeatures( 18, 0 );}}> DON'T KNOW </button>
            </div>

            <div id="que">
                          <p> while watching dance you want to capture the mistakes in dance and want to improve ?</p>
                          <button onClick ={ () => {  addFeatures( 19,4 );}}> LIKE</button>
                          <button onClick ={ () => {  addFeatures( 19,4 );}}> DISLIKE</button>
                          <button onClick ={ () => {  addFeatures( 19, 0 );}}> DON'T KNOW </button>
            </div>


            <div id="que">
                          <p> you like to invent various dance step of dance movement while watching dance ?</p>
                          <button onClick ={ () => {  addFeatures( 19,5 );}}> LIKE</button>
                          <button onClick ={ () => {  addFeatures( 19,4 );}}> DISLIKE</button>
                          <button onClick ={ () => {  addFeatures( 19, 0 );}}> DON'T KNOW </button>

            </div>



            <div id="que">
                          <p> if you and your friend is wnated to go for a trip and at that time you like to plan the all things and take responsibilities ?</p>
                          <button onClick ={ () => {  addFeatures( 13,5 );}}> LIKE</button>
                          <button onClick ={ () => {  addFeatures( 13,4 );}}> DISLIKE</button>
                          <button onClick ={ () => {  addFeatures( 13, 0 );}}> DON'T KNOW </button>
            </div>

            <div id="que">
                          <p> you want to discover new things or creative things in your life ?</p>
                          <button onClick ={ () => {  addFeatures( 12,5 );}}> LIKE</button>
                          <button onClick ={ () => {  addFeatures( 12,4 );}}> DISLIKE</button>
                          <button onClick ={ () => {  addFeatures( 12, 0 );}}> DON'T KNOW </button>
            </div>





    </div>
    <div id="submit">
      <button onClick={() =>recommend() }>SUBMIT</button>
    </div>
    
        
        </div>
      )
    }
  }


  ReactDOM.render(<Home />, document.getElementById('home'))
  





  
// class Final extends React.Component{
   
      
       

//   render(){
//     return (
//       <div>
//       <h1> Recomendation top 5 are </h1>
//       <ol>
//       <li> {top_5[0]}</li>
//       </ol>
//       </div>
//     )
//   }
// }


// ReactDOM.render(<Final />, document.getElementById('final'))
  



// //   $( ".js-click" ).click(function() {
//     $( ".js-click" ).css('background', 'green');
//   });


// const Result = () => ( 
//     <div className="score-board" id="final"> 
//       <div className="score"> Your score is  / 5 correct answer ! ! ! </div> 
//       <button className="playBtn"  > Play Again </button> 
//     </div> 
//   ) 

  
//   ReactDOM.render(<Result />, document.getElementById('final'))
  
// // export default Result; 

 // <button onClick ={ () => handleLogoutClick() }> Show Recommendation</button>

    //   {finalOutput()}