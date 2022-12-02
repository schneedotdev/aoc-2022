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

func sortElvesByCalories(lines []string) ([]int, int) {
	elves := []int{0}
	elf := 0

	// loop through input lines
	for i := 0; i < len(lines); i++ {
		if lines[i] != "" {
			// convert strings to ints
			calories, err := strconv.Atoi(lines[i])
			if err != nil {
				log.Fatalf("readLines: %s", err)
			}
			// increment current elf's total calories
			elves[elf] += calories
		} else {
			// increment elf so that the next collection of values can be summed to the element of the elves array
			elf += 1
			elves = append(elves, 0)
		}
	}

	sort.Ints(elves)

	return elves, len(elves)
}

func a(lines []string) int {
	elves, len := sortElvesByCalories(lines)
	return elves[len-1]
}

func b(lines []string) int {
	elves, len := sortElvesByCalories(lines)
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
