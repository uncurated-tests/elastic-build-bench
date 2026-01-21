'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12593<T> = T extends (infer U)[]
  ? DeepReadonlyArray12593<U>
  : T extends object
  ? DeepReadonlyObject12593<T>
  : T;

interface DeepReadonlyArray12593<T> extends ReadonlyArray<DeepReadonly12593<T>> {}

type DeepReadonlyObject12593<T> = {
  readonly [P in keyof T]: DeepReadonly12593<T[P]>;
};

type UnionToIntersection12593<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12593<T> = UnionToIntersection12593<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12593<T extends unknown[], V> = [...T, V];

type TuplifyUnion12593<T, L = LastOf12593<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12593<TuplifyUnion12593<Exclude<T, L>>, L>;

type DeepPartial12593<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12593<T[P]> }
  : T;

type Paths12593<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12593<K, Paths12593<T[K], Prev12593[D]>> : never }[keyof T]
  : never;

type Prev12593 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12593<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12593 {
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

type ConfigPaths12593 = Paths12593<NestedConfig12593>;

interface HeavyProps12593 {
  config: DeepPartial12593<NestedConfig12593>;
  path?: ConfigPaths12593;
}

const HeavyComponent12593 = memo(function HeavyComponent12593({ config }: HeavyProps12593) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12593) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12593 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12593: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12593.displayName = 'HeavyComponent12593';
export default HeavyComponent12593;
