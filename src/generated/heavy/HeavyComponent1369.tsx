'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1369<T> = T extends (infer U)[]
  ? DeepReadonlyArray1369<U>
  : T extends object
  ? DeepReadonlyObject1369<T>
  : T;

interface DeepReadonlyArray1369<T> extends ReadonlyArray<DeepReadonly1369<T>> {}

type DeepReadonlyObject1369<T> = {
  readonly [P in keyof T]: DeepReadonly1369<T[P]>;
};

type UnionToIntersection1369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1369<T> = UnionToIntersection1369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1369<T extends unknown[], V> = [...T, V];

type TuplifyUnion1369<T, L = LastOf1369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1369<TuplifyUnion1369<Exclude<T, L>>, L>;

type DeepPartial1369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1369<T[P]> }
  : T;

type Paths1369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1369<K, Paths1369<T[K], Prev1369[D]>> : never }[keyof T]
  : never;

type Prev1369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1369 {
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

type ConfigPaths1369 = Paths1369<NestedConfig1369>;

interface HeavyProps1369 {
  config: DeepPartial1369<NestedConfig1369>;
  path?: ConfigPaths1369;
}

const HeavyComponent1369 = memo(function HeavyComponent1369({ config }: HeavyProps1369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1369.displayName = 'HeavyComponent1369';
export default HeavyComponent1369;
