'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12045<T> = T extends (infer U)[]
  ? DeepReadonlyArray12045<U>
  : T extends object
  ? DeepReadonlyObject12045<T>
  : T;

interface DeepReadonlyArray12045<T> extends ReadonlyArray<DeepReadonly12045<T>> {}

type DeepReadonlyObject12045<T> = {
  readonly [P in keyof T]: DeepReadonly12045<T[P]>;
};

type UnionToIntersection12045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12045<T> = UnionToIntersection12045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12045<T extends unknown[], V> = [...T, V];

type TuplifyUnion12045<T, L = LastOf12045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12045<TuplifyUnion12045<Exclude<T, L>>, L>;

type DeepPartial12045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12045<T[P]> }
  : T;

type Paths12045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12045<K, Paths12045<T[K], Prev12045[D]>> : never }[keyof T]
  : never;

type Prev12045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12045 {
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

type ConfigPaths12045 = Paths12045<NestedConfig12045>;

interface HeavyProps12045 {
  config: DeepPartial12045<NestedConfig12045>;
  path?: ConfigPaths12045;
}

const HeavyComponent12045 = memo(function HeavyComponent12045({ config }: HeavyProps12045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12045.displayName = 'HeavyComponent12045';
export default HeavyComponent12045;
