function tellTime(HOUR,MINUTE,PERIOD)
{
var period = "string";

  if (HOUR === 0 || HOUR >= 13 || MINUTE > 60)
  {
    return "Please enter a valid time and try again."
  }
  else if (PERIOD === "AM")
  {
    period = " in the morning";
  }
  else if (PERIOD === "PM" && HOUR > 1 && HOUR < 5)
  {
    period = " in the afternoon";
  }
  else if (PERIOD === "PM" && HOUR > 5 && HOUR < 8)
  {
    period = " in the evening";
  }
  else if (PERIOD == "PM" && HOUR > 8)
  {
    period = " at night";
  }

  if (HOUR === 12 && MINUTE === 0)
  {
    if (PERIOD === "AM")
    {
      console.log("It's midnight");
    }
    if (PERIOD === "PM")
    {
      console.log("It's noon");
    }
  }
    if (MINUTE === 45 && HOUR === 12)
    {
      console.log("It's a quarter before 1" + period);
    }
    else if (MINUTE === 55 && HOUR === 12)
    {
      console.log("It's 5 before 1" + period);
    }
    else if (MINUTE > 30 && HOUR === 12)
    {
      console.log("It's almost 1" + period);
    }
    else if (MINUTE === 30)
    {
      console.log("It's half past " + HOUR + period);
    }
    else if (MINUTE === 5)
    {
      console.log("It's 5 after " + HOUR + period);
    }
    else if (MINUTE === 55 && HOUR != 12)
    {
      console.log("It's 5 before " + (HOUR + 1) + period);
    }
    else if (MINUTE === 15)
    {
      console.log("It's a quarter past " + HOUR + period);
    }
    else if (MINUTE === 45 && HOUR != 12)
    {
      console.log("It's a quarter before " + (HOUR + 1) + period);
    }
    else if (MINUTE > 30 && HOUR != 12)
    {
      console.log("It's almost " + (HOUR + 1) + period);
    }
    else if (MINUTE < 30 && MINUTE != 5 && MINUTE != 15)
    {
      console.log("It's just after " + HOUR + period);
    }
  }
tellTime(12,30,"AM");
