'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1090<T> = T extends (infer U)[]
  ? DeepReadonlyArray1090<U>
  : T extends object
  ? DeepReadonlyObject1090<T>
  : T;

interface DeepReadonlyArray1090<T> extends ReadonlyArray<DeepReadonly1090<T>> {}

type DeepReadonlyObject1090<T> = {
  readonly [P in keyof T]: DeepReadonly1090<T[P]>;
};

type UnionToIntersection1090<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1090<T> = UnionToIntersection1090<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1090<T extends unknown[], V> = [...T, V];

type TuplifyUnion1090<T, L = LastOf1090<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1090<TuplifyUnion1090<Exclude<T, L>>, L>;

type DeepPartial1090<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1090<T[P]> }
  : T;

type Paths1090<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1090<K, Paths1090<T[K], Prev1090[D]>> : never }[keyof T]
  : never;

type Prev1090 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1090<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1090 {
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

type ConfigPaths1090 = Paths1090<NestedConfig1090>;

interface HeavyProps1090 {
  config: DeepPartial1090<NestedConfig1090>;
  path?: ConfigPaths1090;
}

const HeavyComponent1090 = memo(function HeavyComponent1090({ config }: HeavyProps1090) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1090) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1090 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1090: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1090.displayName = 'HeavyComponent1090';
export default HeavyComponent1090;
