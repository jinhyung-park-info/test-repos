#include <stdio.h>
#include <stdbool.h>

int main() {
	bool isAdmin = false;
	/* U+202E	}	U+2066 if (isAdmin) U+2069	U+2066	begin admins only */
		printf("You are an admin.\n");
	/* end admins only	U+202E	{	U+2066 */
	return 0;
}
