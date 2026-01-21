'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12062<T> = T extends (infer U)[]
  ? DeepReadonlyArray12062<U>
  : T extends object
  ? DeepReadonlyObject12062<T>
  : T;

interface DeepReadonlyArray12062<T> extends ReadonlyArray<DeepReadonly12062<T>> {}

type DeepReadonlyObject12062<T> = {
  readonly [P in keyof T]: DeepReadonly12062<T[P]>;
};

type UnionToIntersection12062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12062<T> = UnionToIntersection12062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12062<T extends unknown[], V> = [...T, V];

type TuplifyUnion12062<T, L = LastOf12062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12062<TuplifyUnion12062<Exclude<T, L>>, L>;

type DeepPartial12062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12062<T[P]> }
  : T;

type Paths12062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12062<K, Paths12062<T[K], Prev12062[D]>> : never }[keyof T]
  : never;

type Prev12062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12062 {
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

type ConfigPaths12062 = Paths12062<NestedConfig12062>;

interface HeavyProps12062 {
  config: DeepPartial12062<NestedConfig12062>;
  path?: ConfigPaths12062;
}

const HeavyComponent12062 = memo(function HeavyComponent12062({ config }: HeavyProps12062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12062.displayName = 'HeavyComponent12062';
export default HeavyComponent12062;
