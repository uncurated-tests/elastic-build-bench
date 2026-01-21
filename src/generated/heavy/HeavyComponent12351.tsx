'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12351<T> = T extends (infer U)[]
  ? DeepReadonlyArray12351<U>
  : T extends object
  ? DeepReadonlyObject12351<T>
  : T;

interface DeepReadonlyArray12351<T> extends ReadonlyArray<DeepReadonly12351<T>> {}

type DeepReadonlyObject12351<T> = {
  readonly [P in keyof T]: DeepReadonly12351<T[P]>;
};

type UnionToIntersection12351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12351<T> = UnionToIntersection12351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12351<T extends unknown[], V> = [...T, V];

type TuplifyUnion12351<T, L = LastOf12351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12351<TuplifyUnion12351<Exclude<T, L>>, L>;

type DeepPartial12351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12351<T[P]> }
  : T;

type Paths12351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12351<K, Paths12351<T[K], Prev12351[D]>> : never }[keyof T]
  : never;

type Prev12351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12351 {
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

type ConfigPaths12351 = Paths12351<NestedConfig12351>;

interface HeavyProps12351 {
  config: DeepPartial12351<NestedConfig12351>;
  path?: ConfigPaths12351;
}

const HeavyComponent12351 = memo(function HeavyComponent12351({ config }: HeavyProps12351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12351.displayName = 'HeavyComponent12351';
export default HeavyComponent12351;
