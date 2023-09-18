
const printMenuForDay = (dayOfWeek) => {

    switch (dayOfWeek.toLowerCase()) {
      case 'monday':
        console.log('Monday Menu: Paneer Masala');
        break;
      case 'tuesday':
        console.log('Tuesday Menu:  Biryani');
        break;
      case 'wednesday':
        console.log('Wednesday Menu: Chicken Stir Fry');
        break;
      case 'thursday':
        console.log('Thursday Menu: Pizza');
        break;
      case 'friday':
        console.log('Friday Menu: Fish and Chips');
        break;
      case 'saturday':
        console.log('Saturday Menu: BBQ Ribs');
        break;
      case 'sunday':
        console.log('Sunday Menu: Roast Chicken');
        break;
      default:
        console.log('Invalid day of the week');
    }
  };
  


  printMenuForDay('Monday');
  printMenuForDay('Wednesday');
  printMenuForDay('Saturday');
  printMenuForDay('InvalidDay');
  