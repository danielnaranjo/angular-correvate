import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface Configuration {
	name: string;
	config: CommonSettings;
	modules?: object;
	validations?: object;
	files?: object;
	superUser?: SuperUser;
	onBoarding?: object;
}

export interface CommonSettings {
	pageSize?: number;
	maxLength?: number;
	minLength?: number;
	queryLimit?: number;
	textareaLimit?: number;
}

export interface SuperUser {
	username: string;
	password?: string;
}

@Injectable()
export class AppConfigService {
	public globals: Array<any> = [];
	private base: any = {
		config: {
			queryLimit: 100,
			minLength: 2,
			maxLength: 25,
			pageSize: 25,
			textareaLimit: 250,
		},
		files: {
			uploadMaxLimit: 3,
			uploadMaxSizeInKB: 5000,
			allowed: [
				'application/pdf',
				'image/jpeg',
				'image/png',
				'image/bmp',
			],
		},
		validations: {
			pregnancy: {
				fitToWorkDays: 45,
				minDaysToPregnancy: 45,
				maxDaysToPregnancy: 90,
			},
			phone: {
				country: {
					prefix: '+54',
					minLength: 3,
					maxLength: 4,
				},
				area: {
					prefix: '11',
					minLength: 2,
					maxLength: 4,
				},
				phoneNumber: {
					minLength: 6,
					maxLength: 10,
				},
			},
		},
		modules: {
			login: {
				user: true,
				backoffice: true,
			},
			openid: {
				user: false,
				backoffice: false,
			},
			help: {
				user: true,
				backoffice: true,
			},
			terms: {
				user: true,
				backoffice: true,
			},
			backoffice: {
				user: true,
				backoffice: true,
			},
			novedades: {
				user: true,
				backoffice: true,
			},
			external: {
				user: false,
				backoffice: false,
			},
			appoint: {
				user: true,
				backoffice: false,
			},
			vmd: {
				user: true,
				backoffice: true,
			},
			multitenant: {
				user: false,
				backoffice: false,
			},
			tas: {
				user: false,
				backoffice: false,
			},
			sentry: {
				user: false,
				backoffice: false,
			},
			ga: {
				user: false,
				backoffice: false,
			},
			reports: {
				user: false,
				backoffice: false,
			},
			bussinessIntel: {
				user: false,
				backoffice: false,
			},
		},
		onBoarding: {
			gender: false,
			idhr: false,
			maritalStatus: false,
		},
	};

	constructor() {
		this.globals = [
			{
				name: 'local',
				config: {
					queryLimit: 100,
					minLength: 2,
					maxLength: 25,
					pageSize: 25,
					textareaLimit: 500,
				},
				modules: {
					login: {
						user: true,
						backoffice: true,
					},
					openid: {
						user: false,
						backoffice: false,
					},
					help: {
						user: true,
						backoffice: true,
					},
					terms: {
						user: true,
						backoffice: true,
					},
					backoffice: {
						user: true,
						backoffice: true,
					},
					novedades: {
						user: true,
						backoffice: true,
					},
					external: {
						user: false,
						backoffice: false,
					},
					appoint: {
						user: true,
						backoffice: true,
					},
					vmd: {
						user: true,
						backoffice: true,
					},
					multitenant: {
						user: true,
						backoffice: true,
					},
					tas: {
						user: false,
						backoffice: true,
					},
					sentry: {
						user: false,
						backoffice: false,
					},
					ga: {
						user: false,
						backoffice: false,
					},
					reports: {
						user: false,
						backoffice: true,
					},
					bussinessIntel: {
						user: false,
						backoffice: false,
					},
				},
				onBoarding: {
					gender: false,
					idhr: false,
					maritalStatus: false,
				},
				files: {
					uploadMaxLimit: 10,
					uploadMaxSizeInKB: 55000,
					allowed: ['*'],
				},
				validations: this.base.validations,
			},
			{
				name: 'dev',
				config: this.base.config,
				modules: {
					login: {
						user: true,
						backoffice: true,
					},
					openid: {
						user: false,
						backoffice: false,
					},
					help: {
						user: true,
						backoffice: true,
					},
					terms: {
						user: true,
						backoffice: true,
					},
					backoffice: {
						user: true,
						backoffice: true,
					},
					novedades: {
						user: true,
						backoffice: true,
					},
					external: {
						user: false,
						backoffice: false,
					},
					appoint: {
						user: true,
						backoffice: true,
					},
					vmd: {
						user: true,
						backoffice: true,
					},
					multitenant: {
						user: true,
						backoffice: true,
					},
					tas: {
						user: true,
						backoffice: true,
					},
					sentry: {
						user: true,
						backoffice: true,
					},
					ga: {
						user: true,
						backoffice: true,
					},
					reports: {
						user: false,
						backoffice: true,
					},
					bussinessIntel: {
						user: false,
						backoffice: false,
					},
				},
				onBoarding: {
					gender: false,
					idhr: false,
					maritalStatus: false,
				},
				files: this.base.files,
				validations: this.base.validations,
			},
			{
				name: 'qa',
				config: this.base.config,
				modules: {
					login: {
						user: true,
						backoffice: true,
					},
					openid: {
						user: false,
						backoffice: false,
					},
					help: {
						user: true,
						backoffice: true,
					},
					terms: {
						user: true,
						backoffice: true,
					},
					backoffice: {
						user: true,
						backoffice: true,
					},
					novedades: {
						user: true,
						backoffice: true,
					},
					external: {
						user: false,
						backoffice: false,
					},
					appoint: {
						user: true,
						backoffice: true,
					},
					vmd: {
						user: true,
						backoffice: true,
					},
					multitenant: {
						user: true,
						backoffice: true,
					},
					tas: {
						user: true,
						backoffice: true,
					},
					sentry: {
						user: true,
						backoffice: true,
					},
					ga: {
						user: true,
						backoffice: true,
					},
					reports: {
						user: false,
						backoffice: false,
					},
					bussinessIntel: {
						user: false,
						backoffice: false,
					},
				},
				files: this.base.files,
				validations: this.base.validations,
				onBoarding: this.base.onBoarding,
			},
			{
				name: 'stage',
				config: this.base.config,
				modules: this.base.modules,
				files: this.base.files,
				validations: this.base.validations,
				onBoarding: this.base.onBoarding,
			},
			{
				name: 'prod',
				config: this.base.config,
				modules: this.base.modules,
				files: this.base.files,
				validations: this.base.validations,
				onBoarding: this.base.onBoarding,
			},
		]; // globals
	}

	returnGlobalsConfig() {
		return this.globals.find((e: any) => e.name === environment.env)
			? this.globals.find((e: any) => e.name === environment.env)
			: this.globals[0];
	}
}
