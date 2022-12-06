package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strings"
)

func readLines(path string) ([]string, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var lines []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}
	return lines, scanner.Err()
}

var priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

func a(lines []string) int {
	sum := 0

	for i := 0; i < len(lines); i++ {
		str := lines[i]
		halfLen := len(str) / 2
		f, s := str[0:halfLen], str[halfLen:]

		for j := 0; j < halfLen; j++ {
			char := string(f[j])

			if strings.Contains(s, char) {
				sum += strings.Index(priority, char) + 1
				break
			}
		}
	}

	return sum
}

func b(lines []string) int {
	sum := 0

	for i := 0; i < len(lines); i += 3 {
		one, two, three := lines[i], lines[i+1], lines[i+2]

		for j := 0; j < len(one); j++ {
			char := string(one[j])
			if strings.Contains(two, char) && strings.Contains(three, char) {
				sum += strings.Index(priority, char) + 1
				break
			}
		}
	}

	return sum
}

func main() {
	lines, err := readLines("../input.txt")
	if err != nil {
		log.Fatalf("readLines: %s", err)
	}

	fmt.Println("part a priority sum: ", a(lines)) // answer: 7553
	fmt.Println("part b priority sum: ", b(lines)) // answer: 2758
}
