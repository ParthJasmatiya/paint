class Form {
    constructor() {
          this.input = createInput("Name");
          this.button = createButton('Go Paint');
          this.greeting = createElement('h2');
          this.greeting1 = createElement('h2');
          this.title = createElement('h1');
          this.title1 = createElement('h2');
          this.title.style('font-size','60px');
          this.title1.style('font-size','30px');
          this.title.style('color','red');
          this.title1.style('color','black');
          this.button.style('background','#800080');
          this.button.style('color','white');
          this.button.style('font-size','20px');
          this.greeting1.style('font-size','40px');
          this.greet=createButton('h2 ');
          this.greet.style('background','#800080');
          this.greet.style('color','white');
          this.greet.style('border','black')
          this.greet.style('font-size','20px');
           this.button2= createButton('Save');
         this.button3= createButton('Refresh');
          this.button2.style('border-radius','200px');
        this.button2.style('border','black');
        this.button2.style('color','white');
        this.button2.style('padding','30px');
        this.button2.style('display','inline-block');
        this.button2.style('background-color','indigo');
        this.button3.style('border-radius','200px');
        this.button3.style('border','black');
        this.button3.style('color','white');
        this.button3.style('padding','30px');
        this.button3.style('display','inline-block');
        this.button3.style('background-color','green');

        }
        hide(){
          this.greeting.hide();
          this.greeting1.hide();
              this.button.hide();
              this.input.hide();
              this.title.hide();
              this.title1.hide();
              this.greet.hide();
        }
      
        display(){
          this.title.html("World Paint");
          this.title1.html("by Parth Jasmatiya");
          this.title.position(571.5 , 0);
          this.title1.position(650, 70);
          this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
          this.button.position(displayWidth/2 + 30, displayHeight/2);
           
          this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();
            this.title1.hide();
            this.name = this.input.value();
            this.greeting.html(" Welcome to World Paint... A real-time live painting canvas allowing you to share your mind on a canvas and collaborate with people all over the world. Get Together... Get Creative..")
            this.greeting.position(displayWidth/2 - 600, displayHeight/4);
            this.greeting1.html("WORLD PAINT ")
            this.greeting1.position(displayWidth/2 - 160, displayHeight/4-60);
            this.greet.html("Start Drawing ")
            this.greet.position(displayWidth/2 - 80, displayHeight/4+140);
            gameState=0;
     });
     this.greet .mousePressed(()=>{
        this.greet.hide();
        this.greeting.hide();
        this.greeting1.hide();
         this.button3.position(1200,550);
             this.button2.position(40,550);
        gameState=2;
     });
        }
      }