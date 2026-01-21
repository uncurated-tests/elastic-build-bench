'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12170<T> = T extends (infer U)[]
  ? DeepReadonlyArray12170<U>
  : T extends object
  ? DeepReadonlyObject12170<T>
  : T;

interface DeepReadonlyArray12170<T> extends ReadonlyArray<DeepReadonly12170<T>> {}

type DeepReadonlyObject12170<T> = {
  readonly [P in keyof T]: DeepReadonly12170<T[P]>;
};

type UnionToIntersection12170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12170<T> = UnionToIntersection12170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12170<T extends unknown[], V> = [...T, V];

type TuplifyUnion12170<T, L = LastOf12170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12170<TuplifyUnion12170<Exclude<T, L>>, L>;

type DeepPartial12170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12170<T[P]> }
  : T;

type Paths12170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12170<K, Paths12170<T[K], Prev12170[D]>> : never }[keyof T]
  : never;

type Prev12170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12170 {
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

type ConfigPaths12170 = Paths12170<NestedConfig12170>;

interface HeavyProps12170 {
  config: DeepPartial12170<NestedConfig12170>;
  path?: ConfigPaths12170;
}

const HeavyComponent12170 = memo(function HeavyComponent12170({ config }: HeavyProps12170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12170.displayName = 'HeavyComponent12170';
export default HeavyComponent12170;
