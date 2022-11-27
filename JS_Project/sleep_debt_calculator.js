const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day){
      case 'monday' : 
          return 7;
          break;
        case 'thuesday' : 
          return 7;
          break;
        case 'wednesday' : 
          return 8 ;
          break;
        case 'thursday' : 
          return 8;
          break;
        case 'friday' : 
          return 9;
          break;
        case 'saturday' : 
          return 8;
          break;
        case 'sunday' : 
          return 10;
          break;
        default:
          return 'Enter a day';
          break;
    }
  }
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('thuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') ;
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours() ;
    const idealSleepHours = getIdealSleepHours(8) ;
    if (actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep.');
    }
    else if (actualSleepHours > idealSleepHours){
      const over = actualSleepHours - idealSleepHours;
      console.log(`You got more sleep than needed. You sleep ${over} hours over your ideal sleep.`);
    }
    else{
      const under = idealSleepHours - actualSleepHours;
      console.log(`You should get some rest. You sleep ${under} hours under your ideal sleep.`);
    }
  }
  
  calculateSleepDebt();