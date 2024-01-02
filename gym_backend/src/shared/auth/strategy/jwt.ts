import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigProvider } from "src/shared/config/config.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        const config = ConfigProvider.getConfigs();
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.SECRET_KEY,
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async validate(payload: any){
        return await {id: payload.sub, email: payload.email}
    }

}
