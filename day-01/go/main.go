package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"sort"
	"strconv"
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

func a(lines []string) int {
	elves := []int{0}
	j := 0

	for i := 0; i < len(lines); i++ {
		if lines[i] != "" {
			calories, err := strconv.Atoi(lines[i])
			if err != nil {
				log.Fatalf("readLines: %s", err)
			}
			elves[j] += calories
		} else {
			j += 1
			elves = append(elves, 0)
		}
	}

	sort.Ints(elves)

	return elves[len(elves)-1]
}

func b(lines []string) int {
	elves := []int{0}
	j := 0

	for i := 0; i < len(lines); i++ {
		if lines[i] != "" {
			calories, err := strconv.Atoi(lines[i])
			if err != nil {
				log.Fatalf("readLines: %s", err)
			}
			elves[j] += calories
		} else {
			j += 1
			elves = append(elves, 0)
		}
	}

	sort.Ints(elves)

	len := len(elves)
	return elves[len-1] + elves[len-2] + elves[len-3]
}

func main() {
	lines, err := readLines("../input.txt")
	if err != nil {
		log.Fatalf("readLines: %s", err)
	}

	fmt.Println("most calories: ", a(lines))
	fmt.Println("sum of top 3 elves calories: ", b(lines))
}
