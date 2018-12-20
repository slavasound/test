#include "stdafx.h"
#include<iostream>
#include<clocale>

using namespace std;

int main()
{
	setlocale(LC_CTYPE, "");
	cout << "Русский текст?! Да ладно!" << endl;
	cin.get();
	return 0;
}
