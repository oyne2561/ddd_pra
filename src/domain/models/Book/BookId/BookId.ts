// https://zenn.dev/yamachan0625/books/ddd-hands-on/viewer/chapter8_value_object

import { isEqual } from "lodash";

export class BookId {
    private readonly _value: string;

    static MAX_LENGTH = 13;
    static MIN_LENGTH = 10;

    constructor(value: string) {
        this.validate(value);
        this._value = value;
    }

    private validate(isbn: string): void {
        if (isbn.length < BookId.MIN_LENGTH || isbn.length > BookId.MAX_LENGTH) {
            throw new Error('ISBNの文字列が不正です');
        }
    }

    equals(other: BookId): boolean {
        return isEqual(this._value, other._value);
    }

    get value(): string {
        return this._value;
    }
}