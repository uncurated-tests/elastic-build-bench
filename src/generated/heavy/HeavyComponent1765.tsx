'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1765<T> = T extends (infer U)[]
  ? DeepReadonlyArray1765<U>
  : T extends object
  ? DeepReadonlyObject1765<T>
  : T;

interface DeepReadonlyArray1765<T> extends ReadonlyArray<DeepReadonly1765<T>> {}

type DeepReadonlyObject1765<T> = {
  readonly [P in keyof T]: DeepReadonly1765<T[P]>;
};

type UnionToIntersection1765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1765<T> = UnionToIntersection1765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1765<T extends unknown[], V> = [...T, V];

type TuplifyUnion1765<T, L = LastOf1765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1765<TuplifyUnion1765<Exclude<T, L>>, L>;

type DeepPartial1765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1765<T[P]> }
  : T;

type Paths1765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1765<K, Paths1765<T[K], Prev1765[D]>> : never }[keyof T]
  : never;

type Prev1765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1765 {
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

type ConfigPaths1765 = Paths1765<NestedConfig1765>;

interface HeavyProps1765 {
  config: DeepPartial1765<NestedConfig1765>;
  path?: ConfigPaths1765;
}

const HeavyComponent1765 = memo(function HeavyComponent1765({ config }: HeavyProps1765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1765.displayName = 'HeavyComponent1765';
export default HeavyComponent1765;
