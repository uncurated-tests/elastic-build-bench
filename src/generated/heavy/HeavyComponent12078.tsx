'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12078<T> = T extends (infer U)[]
  ? DeepReadonlyArray12078<U>
  : T extends object
  ? DeepReadonlyObject12078<T>
  : T;

interface DeepReadonlyArray12078<T> extends ReadonlyArray<DeepReadonly12078<T>> {}

type DeepReadonlyObject12078<T> = {
  readonly [P in keyof T]: DeepReadonly12078<T[P]>;
};

type UnionToIntersection12078<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12078<T> = UnionToIntersection12078<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12078<T extends unknown[], V> = [...T, V];

type TuplifyUnion12078<T, L = LastOf12078<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12078<TuplifyUnion12078<Exclude<T, L>>, L>;

type DeepPartial12078<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12078<T[P]> }
  : T;

type Paths12078<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12078<K, Paths12078<T[K], Prev12078[D]>> : never }[keyof T]
  : never;

type Prev12078 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12078<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12078 {
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

type ConfigPaths12078 = Paths12078<NestedConfig12078>;

interface HeavyProps12078 {
  config: DeepPartial12078<NestedConfig12078>;
  path?: ConfigPaths12078;
}

const HeavyComponent12078 = memo(function HeavyComponent12078({ config }: HeavyProps12078) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12078) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12078 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12078: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12078.displayName = 'HeavyComponent12078';
export default HeavyComponent12078;
