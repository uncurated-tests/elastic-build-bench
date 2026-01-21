'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12960<T> = T extends (infer U)[]
  ? DeepReadonlyArray12960<U>
  : T extends object
  ? DeepReadonlyObject12960<T>
  : T;

interface DeepReadonlyArray12960<T> extends ReadonlyArray<DeepReadonly12960<T>> {}

type DeepReadonlyObject12960<T> = {
  readonly [P in keyof T]: DeepReadonly12960<T[P]>;
};

type UnionToIntersection12960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12960<T> = UnionToIntersection12960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12960<T extends unknown[], V> = [...T, V];

type TuplifyUnion12960<T, L = LastOf12960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12960<TuplifyUnion12960<Exclude<T, L>>, L>;

type DeepPartial12960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12960<T[P]> }
  : T;

type Paths12960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12960<K, Paths12960<T[K], Prev12960[D]>> : never }[keyof T]
  : never;

type Prev12960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12960 {
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

type ConfigPaths12960 = Paths12960<NestedConfig12960>;

interface HeavyProps12960 {
  config: DeepPartial12960<NestedConfig12960>;
  path?: ConfigPaths12960;
}

const HeavyComponent12960 = memo(function HeavyComponent12960({ config }: HeavyProps12960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12960.displayName = 'HeavyComponent12960';
export default HeavyComponent12960;
