function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with arguments: ${args.join(', ')}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${key} returned: ${result}`);
    return result;
  };
  return descriptor;
}

class Example {
  @logMethod
  greet(name: string) {
    return `Hello, ${name}!`;
  }
  @logMethod
  sayHi(greetingStr) {
    return `Hi ${greetingStr}`;
  }
}

const example = new Example();
example.greet('codeawy');
example.sayHi('Welcome');
