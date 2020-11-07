problemNumber=$1

if ! [[ $problemNumber =~ ^0[1-9]$ || $problemNumber == 10 ]] ; then
  echo "error: problem number (fst arg) must be between 01 and 10" >&2
  exit 1
fi

echo Creating Java...
mkdir -p "java_/_$problemNumber/" # java package name forbits parts to start with"java" or with a number
cat >java_/_$problemNumber/Main.java <<EOF
package java_._$problemNumber;

public class Main {
  public static void main(String[] args) {
    System.out.println("");
  }
}
EOF

echo Creating C...
mkdir -p "c/$problemNumber/" 
cat >c/$problemNumber/main.c <<EOF
#include <stdio.h>

int main() {
  printf("%d", 42);
}
EOF

echo Creating Python...
mkdir -p "python/$problemNumber/" 
touch python/$problemNumber/main.py

echo Creating JS...
mkdir -p "js/$problemNumber/" 
touch js/$problemNumber/main.js
