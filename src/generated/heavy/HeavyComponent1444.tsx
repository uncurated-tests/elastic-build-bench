'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1444<T> = T extends (infer U)[]
  ? DeepReadonlyArray1444<U>
  : T extends object
  ? DeepReadonlyObject1444<T>
  : T;

interface DeepReadonlyArray1444<T> extends ReadonlyArray<DeepReadonly1444<T>> {}

type DeepReadonlyObject1444<T> = {
  readonly [P in keyof T]: DeepReadonly1444<T[P]>;
};

type UnionToIntersection1444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1444<T> = UnionToIntersection1444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1444<T extends unknown[], V> = [...T, V];

type TuplifyUnion1444<T, L = LastOf1444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1444<TuplifyUnion1444<Exclude<T, L>>, L>;

type DeepPartial1444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1444<T[P]> }
  : T;

type Paths1444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1444<K, Paths1444<T[K], Prev1444[D]>> : never }[keyof T]
  : never;

type Prev1444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1444 {
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

type ConfigPaths1444 = Paths1444<NestedConfig1444>;

interface HeavyProps1444 {
  config: DeepPartial1444<NestedConfig1444>;
  path?: ConfigPaths1444;
}

const HeavyComponent1444 = memo(function HeavyComponent1444({ config }: HeavyProps1444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1444.displayName = 'HeavyComponent1444';
export default HeavyComponent1444;
