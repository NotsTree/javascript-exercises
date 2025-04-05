const leapYears = function(year) {

            const isyeardevidebyfour = year % 4 === 0;
            const iscentury = year % 100 === 0;
            const isyeardevidebyfourhundred = year % 400 === 0;


            if (isyeardevidebyfour && (!iscentury || isyeardevidebyfourhundred)) {
                return true;
            } else {
                return false;
            }
            

};

// Do not edit below this line
module.exports = leapYears;
