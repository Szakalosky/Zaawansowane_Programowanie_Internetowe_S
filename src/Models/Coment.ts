class Coment {
    private _content: string;
    private _date: Date;
    private _replies: Comment[];
    private _nick: string;

    constructor(content: string, date: Date, nick: string) {
        this._content = content;
        this._date = date;
        this._replies = [];
        this._nick = nick;
    }

    public addReply(reply: Comment): void {
        this._replies.push(reply);
    }

    public getReplies(): Comment[] {
        return this._replies;
    }

    public get content(): string {
        return this._content;
    }

    public set content(value: string) {
        this._content = value;
    }

    public get date(): Date {
        return this._date;
    }

    public set date(value: Date) {
        this._date = value;
    }

    public get nick(): string {
        return this._nick;
    }

    public set nick(value: string) {
        this._nick = value;
    }
}