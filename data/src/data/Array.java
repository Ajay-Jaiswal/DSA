package data;

public class Array {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		char[] a = new char[6];
		
		a[0] = 'a';
		a[1] = 'b';
		a[2] = 'c';
		a[3] = 'd';
		a[4] = 'e';
		a[5] = 'f';
		
		for(int i = 0;i<a.length;i++) {
			System.out.println(a[i]);
		}
		
		int[] b = new int[5];
		
		for(int i=0;i<5;i++) {
			b[i] = i;
		}
		for(int i=0;i<5;i++) {
		System.out.println(b[i]);
		}
		
		int x = 5 ;
		int y = 10;
		
		int z = x;
		 x = y;
		 y  = z;
				
		System.out.println("x " + x + "y " + y );
		

	}

}
