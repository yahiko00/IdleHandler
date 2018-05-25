"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdleHandler = (function () {
    function IdleHandler(idleDelay, callback, context) {
        if (context === void 0) { context = window; }
        var _this = this;
        this.IDLE_CHUNK_DURATION = 50;
        this.idleCounter = 0;
        this.idleIntervalID = 0;
        this.userIdleEvent = new Event("idleuser");
        this.nbChunks = Math.trunc(idleDelay / this.IDLE_CHUNK_DURATION);
        context.addEventListener("mousemove", function () {
            _this.idleCounter = 0;
        });
        context.addEventListener("keypress", function () {
            _this.idleCounter = 0;
        });
        this.callback = callback;
    }
    IdleHandler.prototype.start = function () {
        this.idleCounter = 0;
        this.clear();
        this.idleIntervalID = setInterval(this.timerIncrement.bind(this), this.IDLE_CHUNK_DURATION);
    };
    IdleHandler.prototype.clear = function () {
        clearInterval(this.idleIntervalID);
    };
    IdleHandler.prototype.timerIncrement = function () {
        this.idleCounter += 1;
        if (this.idleCounter >= this.nbChunks) {
            this.clear();
            dispatchEvent(this.userIdleEvent);
            if (this.callback)
                this.callback();
        }
    };
    return IdleHandler;
}());
exports.IdleHandler = IdleHandler;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkbGVoYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFRQyxxQkFBWSxTQUFpQixFQUFFLFFBQWMsRUFBRSxPQUFnQjtRQUFoQix3QkFBQSxFQUFBLGdCQUFnQjtRQUEvRCxpQkFZQztRQW5CVyx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFROUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7WUFDckMsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO1lBQ3BDLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVFLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxvQ0FBYyxHQUF0QjtRQUNJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtBQXhDWSxrQ0FBVyIsImZpbGUiOiJpZGxlaGFuZGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlkbGVoYW5kbGVyLnRzXHJcblxyXG5leHBvcnQgY2xhc3MgSWRsZUhhbmRsZXIge1xyXG4gICAgcmVhZG9ubHkgSURMRV9DSFVOS19EVVJBVElPTiA9IDUwOyAvLyBtaWxsaXNlY29uZGVzXHJcbiAgICBwcml2YXRlIG5iQ2h1bmtzOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBpZGxlQ291bnRlcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBpZGxlSW50ZXJ2YWxJRDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjYWxsYmFjazogYW55O1xyXG4gICAgcHJpdmF0ZSB1c2VySWRsZUV2ZW50OiBFdmVudDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihpZGxlRGVsYXk6IG51bWJlciwgY2FsbGJhY2s/OiBhbnksIGNvbnRleHQgPSB3aW5kb3cpIHtcclxuICAgICAgICB0aGlzLmlkbGVDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLmlkbGVJbnRlcnZhbElEID0gMDtcclxuICAgICAgICB0aGlzLnVzZXJJZGxlRXZlbnQgPSBuZXcgRXZlbnQoXCJpZGxldXNlclwiKTtcclxuICAgICAgICB0aGlzLm5iQ2h1bmtzID0gTWF0aC50cnVuYyhpZGxlRGVsYXkgLyB0aGlzLklETEVfQ0hVTktfRFVSQVRJT04pO1xyXG5cdFx0Y29udGV4dC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsICgpID0+IHtcclxuXHRcdFx0dGhpcy5pZGxlQ291bnRlciA9IDA7XHJcblx0XHR9KTtcclxuXHRcdGNvbnRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsICgpID0+IHtcclxuXHRcdFx0dGhpcy5pZGxlQ291bnRlciA9IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cdH0gLy8gY29uc3RydWN0b3JcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmlkbGVDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcblx0XHR0aGlzLmlkbGVJbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwodGhpcy50aW1lckluY3JlbWVudC5iaW5kKHRoaXMpLCB0aGlzLklETEVfQ0hVTktfRFVSQVRJT04pO1xyXG4gICAgfSAvLyBzdGFydFxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZGxlSW50ZXJ2YWxJRCk7XHJcbiAgICB9IC8vIGNsZWFyXHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lckluY3JlbWVudCgpIHtcclxuICAgICAgICB0aGlzLmlkbGVDb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuaWRsZUNvdW50ZXIgPj0gdGhpcy5uYkNodW5rcykge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQodGhpcy51c2VySWRsZUV2ZW50KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9IC8vIHRpbWVySW5jcmVtZW50XHJcbn0gLy8gSWRsZUhhbmRsZXJcclxuIl19
