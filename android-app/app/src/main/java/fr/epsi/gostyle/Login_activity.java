package fr.epsi.gostyle;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;


public class Login_activity extends MainActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login_layout);
        Button log = findViewById(R.id.loginButton);
        log.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Login_activity.login(v);
            }
        });
    }


    public void login(View v) {
        EditText username = (EditText) findViewById(R.id.login);
        EditText password = (EditText) findViewById(R.id.password);
        if (username.getText().toString().equals("jdasilv") && password.getText().toString().equals("azerty")) {

            Intent intent = new Intent(this,MainActivity.class);
            Login_activity.startActivity(intent);

        } else {

            username.setText("lol");
        }
    }
}