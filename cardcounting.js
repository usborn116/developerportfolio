let count = 0;

function cc(card) {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count +=1
      if (count>0){
        return count + " Bet";
      }
      return count + " Hold"
      break;
    case 7:
    case 8:
    case 9:
      if (count>0){
        return count + " Bet";
      }
      return count + " Hold"
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      if (count>0){
        return count + " Bet";
      }
      return count + " Hold"
      break;
  }


  return "Change Me";
}
