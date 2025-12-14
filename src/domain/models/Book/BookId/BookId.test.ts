import { BookId } from "./BookId";

describe('BookId', () => {
  // 正常系
  test('有効なフォーマットの場合正しい変換結果を期待', () => {
    expect(new BookId('9784798163002').value).toBe('9784798163002');
  })
})