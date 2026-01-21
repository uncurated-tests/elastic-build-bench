'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1343<T> = T extends (infer U)[]
  ? DeepReadonlyArray1343<U>
  : T extends object
  ? DeepReadonlyObject1343<T>
  : T;

interface DeepReadonlyArray1343<T> extends ReadonlyArray<DeepReadonly1343<T>> {}

type DeepReadonlyObject1343<T> = {
  readonly [P in keyof T]: DeepReadonly1343<T[P]>;
};

type UnionToIntersection1343<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1343<T> = UnionToIntersection1343<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1343<T extends unknown[], V> = [...T, V];

type TuplifyUnion1343<T, L = LastOf1343<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1343<TuplifyUnion1343<Exclude<T, L>>, L>;

type DeepPartial1343<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1343<T[P]> }
  : T;

type Paths1343<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1343<K, Paths1343<T[K], Prev1343[D]>> : never }[keyof T]
  : never;

type Prev1343 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1343<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1343 {
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

type ConfigPaths1343 = Paths1343<NestedConfig1343>;

interface HeavyProps1343 {
  config: DeepPartial1343<NestedConfig1343>;
  path?: ConfigPaths1343;
}

const HeavyComponent1343 = memo(function HeavyComponent1343({ config }: HeavyProps1343) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1343) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1343 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1343: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1343.displayName = 'HeavyComponent1343';
export default HeavyComponent1343;
