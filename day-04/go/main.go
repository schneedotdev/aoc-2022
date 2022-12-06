package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
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

func toInt(s string) int {
	num, _ := strconv.Atoi(s)
	return num
}

func getLimits(lines []string, i int) (int, int, int, int) {
	r := strings.Split(lines[i], ",")
	one, two := strings.Split(r[0], "-"), strings.Split(r[1], "-")
	return toInt(one[0]), toInt(one[1]), toInt(two[0]), toInt(two[1])
}

func checkA(a int, b int, c int, d int) bool {
	return a <= c && d <= b || c <= a && b <= d
}

func checkB(a int, b int, c int, d int) bool {
	return c <= a && a <= d || c <= b && b <= d || a <= c && c <= b || b <= d && d <= b
}

func solution(lines []string) (int, int) {
	partA, partB := 0, 0
	for i := 0; i < len(lines); i++ {
		a, b, c, d := getLimits(lines, i)

		if checkA(a, b, c, d) {
			partA += 1
		}

		if checkB(a, b, c, d) {
			partB += 1
		}
	}

	return partA, partB
}

func main() {
	lines, err := readLines("../input.txt")
	if err != nil {
		log.Fatalf("readLines: %s", err)
	}

	a, b := solution(lines)
	fmt.Println("part A solution: ", a, "\npart B solution: ", b)
}
