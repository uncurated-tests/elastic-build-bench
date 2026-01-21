'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1502<T> = T extends (infer U)[]
  ? DeepReadonlyArray1502<U>
  : T extends object
  ? DeepReadonlyObject1502<T>
  : T;

interface DeepReadonlyArray1502<T> extends ReadonlyArray<DeepReadonly1502<T>> {}

type DeepReadonlyObject1502<T> = {
  readonly [P in keyof T]: DeepReadonly1502<T[P]>;
};

type UnionToIntersection1502<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1502<T> = UnionToIntersection1502<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1502<T extends unknown[], V> = [...T, V];

type TuplifyUnion1502<T, L = LastOf1502<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1502<TuplifyUnion1502<Exclude<T, L>>, L>;

type DeepPartial1502<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1502<T[P]> }
  : T;

type Paths1502<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1502<K, Paths1502<T[K], Prev1502[D]>> : never }[keyof T]
  : never;

type Prev1502 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1502<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1502 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths1502 = Paths1502<NestedConfig1502>;

interface HeavyProps1502 {
  config: DeepPartial1502<NestedConfig1502>;
  path?: ConfigPaths1502;
}

const HeavyComponent1502 = memo(function HeavyComponent1502({ config }: HeavyProps1502) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1502) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1502 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1502: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1502.displayName = 'HeavyComponent1502';
export default HeavyComponent1502;
