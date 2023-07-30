from input_code import solution
import sys

test_cases = [ {"Test1": [1, 2, 3], "Test2": [1, 2, 3] * 100 + [4],"Test3":[1,2,3,4,5],"Test4":[10,20,3,4,5],"Test5":[24,36,4,5],"Test6": [41, 200, 13], "Test7": [1, 21, 300] * 100 + [4],"Test8":[1,2,3,400,5],"Test9":[10,20,3,4,500],"Test10":[24,36,4,50]}, 
                {"Test1": [1, 4, 3], "Test2": [2, 4] * 100 + [3],"Test3":[1,2,3,4,5],"Test4":[10,20,3,4,5],"Test5":[24,36,4,5],"Test6": [41, 200, 13], "Test7": [1, 21, 300] * 100 + [4],"Test8":[1,2,3,400,5],"Test9":[10,20,3,4,500],"Test10":[24,36,4,50]}, 
                {"Test1":[1,2,3,4,5],"Test2":[10,20,3,4,5],"Test3":[24,36,4,5],"Test4":[5,7,8,9],"Test5":[5,6],"Test6":[24,36,4,5],"Test7": [41, 200, 13], "Test8": [1, 21, 300] * 100 + [4],"Test9":[1,2,3,400,5],"Test10":[10,20,3,4,500],"Test11":[24,36,4,50]}, 
                {"Test1": [1, 2, 3, 5],"Test2":[1,2,4],"Test3":[5,6,7,2,3,8,4]},
                {"Test1": [1,2,3,4,5,6]},
                {"Test1":[0,0,0,1,1],"Test2":[0,0,0,0]},
                {"Test1":1},
                {"Test1":[111,222,333,444,555],"Test2":[121,131,20]},
                {"Test1":[1,2,3,4,5],"Test2":[10,20,3,4,5],"Test3":[24,36,4,5]}
             
             ]
answers = [ {"Test1": 3, "Test2": 4,"Test3":5,"Test4":20,"Test5":36,"Test6": 200, "Test7": 300,"Test8":400,"Test9":500,"Test10":50}, 
            {"Test1": 1, "Test2": 2,"Test3":1,"Test4":3,"Test5":4,"Test6": 13, "Test7": 1,"Test8":1,"Test9":3,"Test10":4},
            {"Test1":1,"Test2":10,"Test3":24,"Test4":5,"Test5":5,"Test6": 24, "Test7": 41,"Test8":1,"Test9":1,"Test10":10,"Test11":24},
            {"Test1":4,"Test2":3,"Test3":1},
            {"Test1":[6,1,5,2,4,3]},
            {"Test1":3,"Test2":-1},
            {"Test1":1},
            {"Test1":1,"Test2":0},
            {"Test1":15,"Test2":42,"Test3":69},
          ]


def get_test_cases(x):
    return test_cases[x]


def get_expected_outputs(x):
    return answers[x]


def test_code(x):
    test_cases = get_test_cases(x)
    expected = get_expected_outputs(x)
    test_cases_count = len(test_cases)
    passed_test_cases = 0
    failed_test_cases = []

    for label in test_cases.keys():
        code_result = solution(test_cases[label])
        if code_result == expected[label]:
            passed_test_cases += 1
        else:
            failed_test_cases = label
            break

    print("Passed", passed_test_cases, "out of",
          test_cases_count, "test cases.")

    if failed_test_cases:
        print("\nTest cases not passed:", failed_test_cases)
        print("\n", test_cases[failed_test_cases])
        print("\n\nOutput: ", code_result)
        print("\nExpected: ", expected[failed_test_cases])


test_code(int(sys.argv[1]))
