import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-primePage',
  templateUrl: './primePage.component.html'
})
export class PrimePageComponent {
  primeFound = false;
  nthPrime = 0;

  findPrime(): void {
    this.nthPrime = this.findNthPrime(300000);
    this.primeFound = true;
  }

  private findNthPrime(n: number): number {
    let count = 0;
    let number = 2;

    while (count < n) {
      if (this.isPrime(number)) {
        count++;
      }
      if (count < n) {
        number++;
      }
    }
    return number;
  }

  private isPrime(number: number): boolean {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    const boundary = Math.floor(Math.sqrt(number));
    for (let i = 3; i <= boundary; i += 2) {
      if (number % i === 0) return false;
    }
    return true;
  }
}

