'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12946<T> = T extends (infer U)[]
  ? DeepReadonlyArray12946<U>
  : T extends object
  ? DeepReadonlyObject12946<T>
  : T;

interface DeepReadonlyArray12946<T> extends ReadonlyArray<DeepReadonly12946<T>> {}

type DeepReadonlyObject12946<T> = {
  readonly [P in keyof T]: DeepReadonly12946<T[P]>;
};

type UnionToIntersection12946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12946<T> = UnionToIntersection12946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12946<T extends unknown[], V> = [...T, V];

type TuplifyUnion12946<T, L = LastOf12946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12946<TuplifyUnion12946<Exclude<T, L>>, L>;

type DeepPartial12946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12946<T[P]> }
  : T;

type Paths12946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12946<K, Paths12946<T[K], Prev12946[D]>> : never }[keyof T]
  : never;

type Prev12946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12946 {
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

type ConfigPaths12946 = Paths12946<NestedConfig12946>;

interface HeavyProps12946 {
  config: DeepPartial12946<NestedConfig12946>;
  path?: ConfigPaths12946;
}

const HeavyComponent12946 = memo(function HeavyComponent12946({ config }: HeavyProps12946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12946.displayName = 'HeavyComponent12946';
export default HeavyComponent12946;
