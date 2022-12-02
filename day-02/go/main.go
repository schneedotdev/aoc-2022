package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
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

func calcPoints(lines []string, m map[string]int) int {
	sum := 0
	for i := 0; i < len(lines); i++ {
		sum += m[lines[i]]
	}
	return sum
}

func a(lines []string) int {
	m := map[string]int{
		"B X": 1,
		"C Y": 2,
		"A Z": 3,
		"A X": 4,
		"B Y": 5,
		"C Z": 6,
		"C X": 7,
		"A Y": 8,
		"B Z": 9,
	}

	return calcPoints(lines, m)
}

func b(lines []string) int {
	m := map[string]int{
		"B X": 1,
		"C X": 2,
		"A X": 3,
		"A Y": 4,
		"B Y": 5,
		"C Y": 6,
		"C Z": 7,
		"A Z": 8,
		"B Z": 9,
	}
	return calcPoints(lines, m)
}

func main() {
	lines, err := readLines("../input.txt")
	if err != nil {
		log.Fatalf("readLines: %s", err)
	}

	fmt.Println("part a points: ", a(lines))
	fmt.Println("part b points: ", b(lines))
}
