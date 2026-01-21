'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1336<T> = T extends (infer U)[]
  ? DeepReadonlyArray1336<U>
  : T extends object
  ? DeepReadonlyObject1336<T>
  : T;

interface DeepReadonlyArray1336<T> extends ReadonlyArray<DeepReadonly1336<T>> {}

type DeepReadonlyObject1336<T> = {
  readonly [P in keyof T]: DeepReadonly1336<T[P]>;
};

type UnionToIntersection1336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1336<T> = UnionToIntersection1336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1336<T extends unknown[], V> = [...T, V];

type TuplifyUnion1336<T, L = LastOf1336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1336<TuplifyUnion1336<Exclude<T, L>>, L>;

type DeepPartial1336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1336<T[P]> }
  : T;

type Paths1336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1336<K, Paths1336<T[K], Prev1336[D]>> : never }[keyof T]
  : never;

type Prev1336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1336 {
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

type ConfigPaths1336 = Paths1336<NestedConfig1336>;

interface HeavyProps1336 {
  config: DeepPartial1336<NestedConfig1336>;
  path?: ConfigPaths1336;
}

const HeavyComponent1336 = memo(function HeavyComponent1336({ config }: HeavyProps1336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1336.displayName = 'HeavyComponent1336';
export default HeavyComponent1336;
