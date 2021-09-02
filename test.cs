using System;
 
public class GfG {
 
    static bool isPerfectSquare(int n)
    {
        for (int i = 1; i * i <= n; i++) {
 
            // If (i * i = n)
            if ((n % i == 0) && (n / i == i)) {
                return true;
            }
        }
        return false;
    }
 
    public static void Main()
    {
 
        ArrayList arr = new ArrayList();
      arr.Add(1);
      arr.Add( 2 );
      arr.Add( 3 );
      arr.Add( 4 );

      Console.WriteLine("ArrayList...");
      foreach(int i in arr) {
         if(!isPerfectSquare(i))
         {
             arr.Remove(i);
         }

      }

      Console.WriteLine(arr);
      {
          
      }
    }
}