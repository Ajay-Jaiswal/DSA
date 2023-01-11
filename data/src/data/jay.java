package data;

public class jay {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		for(int i=0;i<10;i++) {
			System.out.println(i);
		}
		//with void and static
		
		add(20,30);
		
		///without void and static
		jay obj = new jay();
		
		int x = 1500;
		int y = 600;
		
		int result = obj.sub(x, y);
		System.out.println(result);
		
	}
	
	//with void and static
	
	public static void add(int x, int y) {
		System.out.println(x+y);
	}
	
	// without void and static
	public int sub(int x , int y) {
		int result = x - y;
		return result;
	}

}
