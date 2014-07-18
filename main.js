var priority = document.querySelector(".priority");
var number =document.querySelector(".number");
var task=document.querySelector(".task");
var status=document.querySelector(".status");
var tasks,i;
tasks=[
  {
text: "Learn Java Script",
complete: false,
priority: 1
},
{
text: "Learn Python",
complete: false,
priority: 3
},
{
text: "Learn Java and Android",
complete: false,
priority: 2
}
];

var comp=function valid(arg){
    if(arg==true){
      return"Completed";
    } else{
      return"Not completed"
    }
};

for (i=0;i<tasks.length;i++){
  number.innerText+=(i+1)+"\n";
  task.innerText+=tasks[i].text+"\n";
  status.innerText+=comp.call(null,tasks[i].complete) +"\n";
  priority.innerText+=tasks[i].priority+"\n";
  };