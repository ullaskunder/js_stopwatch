function StopWatch(){
    let startTime, endTime, isRunning, duration = 0;

    this.start =  function() {
        if(isRunning)
            throw new Error('Stopwatch is already running');
        
        isRunning = true;
        startTime = new Date();
    }

    this.stop = function() {
        if(!isRunning)
            throw new Error('Stopwatch is already stopped');

        isRunning = false;
        endTime = new Date();
        
        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration = seconds;
    }

    this.reset = function() {
        startTime = null;
        endTime = null;
        isRunning = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}