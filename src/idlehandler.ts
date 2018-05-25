// idlehandler.ts

export class IdleHandler {
    readonly IDLE_CHUNK_DURATION = 50; // millisecondes
    private nbChunks: number;
	private idleCounter: number;
    private idleIntervalID: number;
    private callback: any;
    private userIdleEvent: Event;
	
	constructor(idleDelay: number, callback?: any, context = window) {
        this.idleCounter = 0;
        this.idleIntervalID = 0;
        this.userIdleEvent = new Event("idleuser");
        this.nbChunks = Math.trunc(idleDelay / this.IDLE_CHUNK_DURATION);
		context.addEventListener("mousemove", () => {
			this.idleCounter = 0;
		});
		context.addEventListener("keypress", () => {
			this.idleCounter = 0;
        });
        this.callback = callback;
	} // constructor

    start() {
        this.idleCounter = 0;
        this.clear();
		this.idleIntervalID = setInterval(this.timerIncrement.bind(this), this.IDLE_CHUNK_DURATION);
    } // start

    clear() {
        clearInterval(this.idleIntervalID);
    } // clear

    private timerIncrement() {
        this.idleCounter += 1;
        if (this.idleCounter >= this.nbChunks) {
            this.clear();
            dispatchEvent(this.userIdleEvent);
            if (this.callback) this.callback();
        }
    } // timerIncrement
} // IdleHandler
