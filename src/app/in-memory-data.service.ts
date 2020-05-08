import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = HEROES;
    return {heroes};
  }

  // 히어로 객체가 항상 id 프로퍼티를 갖도록 getId 메소드를 오버라이드 합니다.
  // 히어로 목록이 비어있다면 이 메소드는 초기값(11)을 반환합니다.
  // 히어로 목록이 비어있지 않으면 히어로 id의 최대값에 1을 더해서 반환합니다.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
