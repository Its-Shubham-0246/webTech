import 'dart:io';

// void greet() {
//   print("Hello, Dart!");
// }

int add(int a, int b) {
  return a + b;
}

int square(int n) => n * n;
//
// void greet(String name, [String? title]) {
//   print("Hello $title $name");
// }

// void greet({String? name, int? age}) {
//   print("Name : $name,Age : $age");
// }

// void greet({required String name}) {
//   print("Hello $name");
// }

void sayHello() {
  print("Hello");
}

void execute(Function fn) {
  fn();
}

class Student {
  String name;
  int age;
  Student(this.name, this.age);
  void display() {
    print("Name : $name");
    print("Age : $age");
  }
}

void main() {
  // print("Enter Number:");
  // double num = double.parse(stdin.readLineSync()!);
  // print("Your age is ${num * num}");
  // Dart has several built-in data types, including:
  //bool - boolean
  //int - integer
  //double - decimal number
  //String - text
  //dynamic - can hold any type of data
  //num - can hold both int and double
  //List<int> - list of integers
  //Map<String, int> - map of string keys and integer values
  // Dart also supports type inference, which means that you can declare a variable without specifying its type, and the compiler will infer the type based on the value assigned to it.
  // For example:
  //
  //   dynamic name = "Shubham";
  //   name = 32;
  //
  //   print(name);

  // var name = "Shubham";
  // int age = 30;
  // int n = 5.9 ~/ 2;
  // print(name);
  // print(age);
  // print(n);
  // greet("Shubham", "title");
  // greet(name: "Shubham ");
  // int result = add(10, 20);
  // print(result);
  // print(square(2));
  Student s1 = Student("Shubham",18);
  s1.display();
}
