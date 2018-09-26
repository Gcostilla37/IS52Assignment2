class Greeter {
  constructor(private f_name:string, private l_name:string) {}

  showGreeting (){
    const ban = document.getElementById("ban");
    ban.innerHTML= ('Hello'+ ' ' + this.f_name+' ' + this.l_name+ '.');
  }
  hideGreeting (){
    const ban = document.getElementById("ban");
    ban.innerHTML= ('R1C2');
  }

}

const greet = new Greeter('Gaby','Costilla');``