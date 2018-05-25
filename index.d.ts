export declare class IdleHandler {
    readonly IDLE_CHUNK_DURATION: number;
    private nbChunks;
    private idleCounter;
    private idleIntervalID;
    private callback;
    private userIdleEvent;
    constructor(idleDelay: number, callback?: any, context?: Window);
    start(): void;
    clear(): void;
    private timerIncrement();
}
