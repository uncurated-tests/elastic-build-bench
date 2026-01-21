'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1309<T> = T extends (infer U)[]
  ? DeepReadonlyArray1309<U>
  : T extends object
  ? DeepReadonlyObject1309<T>
  : T;

interface DeepReadonlyArray1309<T> extends ReadonlyArray<DeepReadonly1309<T>> {}

type DeepReadonlyObject1309<T> = {
  readonly [P in keyof T]: DeepReadonly1309<T[P]>;
};

type UnionToIntersection1309<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1309<T> = UnionToIntersection1309<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1309<T extends unknown[], V> = [...T, V];

type TuplifyUnion1309<T, L = LastOf1309<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1309<TuplifyUnion1309<Exclude<T, L>>, L>;

type DeepPartial1309<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1309<T[P]> }
  : T;

type Paths1309<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1309<K, Paths1309<T[K], Prev1309[D]>> : never }[keyof T]
  : never;

type Prev1309 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1309<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1309 {
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

type ConfigPaths1309 = Paths1309<NestedConfig1309>;

interface HeavyProps1309 {
  config: DeepPartial1309<NestedConfig1309>;
  path?: ConfigPaths1309;
}

const HeavyComponent1309 = memo(function HeavyComponent1309({ config }: HeavyProps1309) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1309) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1309 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1309: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1309.displayName = 'HeavyComponent1309';
export default HeavyComponent1309;
