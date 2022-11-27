module.exports = {
    answers: [
        `import java.io.*;
        import java.util.*;
        import java.text.*;
        import java.math.*;
        import java.util.regex.*;
        
        public class Solution {
        
        
            static int solveMeFirst(int a, int b) {
                  return a+b; 
        
           }
        
         public static void main(String[] args) {
                Scanner in = new Scanner(System.in);
                int a;
                a = in.nextInt();
                int b;
                b = in.nextInt();
                int sum;
                sum = solveMeFirst(a, b);
                System.out.println(sum);
           }
        }`
        ,
        `import java.io.*;
        import java.math.*;
        import java.text.*;
        import java.util.*;
        import java.util.regex.*;
        
        public class Solution {
        
            /*
             * Complete the simpleArraySum function below.
             */
            static int simpleArraySum(int[] ar) {
                int sum=0;
                for(int i = 0; i < ar.length; i++){
                    sum+=ar[i];
                }
                return sum;
            }
        
            private static final Scanner scanner = new Scanner(System.in);
        
            public static void main(String[] args) throws IOException {
                BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));
        
                int arCount = Integer.parseInt(scanner.nextLine().trim());
        
                int[] ar = new int[arCount];
        
                String[] arItems = scanner.nextLine().split(" ");
        
                for (int arItr = 0; arItr < arCount; arItr++) {
                    int arItem = Integer.parseInt(arItems[arItr].trim());
                    ar[arItr] = arItem;
                }
        
                int result = simpleArraySum(ar);
        
                bufferedWriter.write(String.valueOf(result));
                bufferedWriter.newLine();
        
                bufferedWriter.close();
            }
        }`
        ,
        `import java.io.*;
        import java.math.*;
        import java.security.*;
        import java.text.*;
        import java.util.*;
        import java.util.concurrent.*;
        import java.util.function.*;
        import java.util.regex.*;
        import java.util.stream.*;
        import static java.util.stream.Collectors.joining;
        import static java.util.stream.Collectors.toList;
        
        public class Solution {
        
            // Complete the compareTriplets function below.
            static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
                int[] score = new int[2];
                for(int i = 0; i < a.size(); i++){
                    if(a.get(i)>b.get(i)){
                        score[0]++;
                    }
                    else if(a.get(i)<b.get(i)){
                        score[1]++;
                    }
                }
                List<Integer> stats = new ArrayList<Integer>();
                stats.add(score[0]);
                stats.add(score[1]);
                return stats;
            }
        
            public static void main(String[] args) throws IOException {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
                BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));
        
                List<Integer> a = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                    .map(Integer::parseInt)
                    .collect(toList());
        
                List<Integer> b = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                    .map(Integer::parseInt)
                    .collect(toList());
        
                List<Integer> result = compareTriplets(a, b);
        
                bufferedWriter.write(
                    result.stream()
                        .map(Object::toString)
                        .collect(joining(" "))
                    + "\n"
                );
        
                bufferedReader.close();
                bufferedWriter.close();
            }
        }`
        ,
        `import java.io.*;
        import java.math.*;
        import java.security.*;
        import java.text.*;
        import java.util.*;
        import java.util.concurrent.*;
        import java.util.regex.*;
        
        public class Solution {
        
            // Complete the aVeryBigSum function below.
            static long aVeryBigSum(long[] ar) {
                long sum=0;
                for(int i=0;i<ar.length;i++){
                    sum+=ar[i];
                }
                return sum;
            }
        
            private static final Scanner scanner = new Scanner(System.in);
        
            public static void main(String[] args) throws IOException {
                BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));
        
                int arCount = scanner.nextInt();
                scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");
        
                long[] ar = new long[arCount];
        
                String[] arItems = scanner.nextLine().split(" ");
                scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");
        
                for (int i = 0; i < arCount; i++) {
                    long arItem = Long.parseLong(arItems[i]);
                    ar[i] = arItem;
                }
        
                long result = aVeryBigSum(ar);
        
                bufferedWriter.write(String.valueOf(result));
                bufferedWriter.newLine();
        
                bufferedWriter.close();
        
                scanner.close();
            }
        }`
        ,
        `import java.io.*;
        import java.math.*;
        import java.security.*;
        import java.text.*;
        import java.util.*;
        import java.util.concurrent.*;
        import java.util.function.*;
        import java.util.regex.*;
        import java.util.stream.*;
        import static java.util.stream.Collectors.joining;
        import static java.util.stream.Collectors.toList;
        
        class Result {
        
            /*
             * Complete the 'diagonalDifference' function below.
             *
             * The function is expected to return an INTEGER.
             * The function accepts 2D_INTEGER_ARRAY arr as parameter.
             */
        
            public static int diagonalDifference(List<List<Integer>> arr) {
                int fd=0;
                int sd=0;
                for(int i=0;i<arr.size();i++){
                    for(int j=0;j<arr.get(i).size();j++){
                        if(i==j){
                            fd+=arr.get(i).get(j);
                        }
                        if((i+j)==arr.size()-1){
                            sd+=arr.get(i).get(j);
                        }
                    }            
                }
                return Math.abs(fd-sd);
            }
        
        }
        
        public class Solution {
            public static void main(String[] args) throws IOException {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
                BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));
        
                int n = Integer.parseInt(bufferedReader.readLine().trim());
        
                List<List<Integer>> arr = new ArrayList<>();
        
                IntStream.range(0, n).forEach(i -> {
                    try {
                        arr.add(
                            Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                                .map(Integer::parseInt)
                                .collect(toList())
                        );
                    } catch (IOException ex) {
                        throw new RuntimeException(ex);
                    }
                });
        
                int result = Result.diagonalDifference(arr);
        
                bufferedWriter.write(String.valueOf(result));
                bufferedWriter.newLine();
        
                bufferedReader.close();
                bufferedWriter.close();
            }
        }
        `

    ]
}