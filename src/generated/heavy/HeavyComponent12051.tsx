'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12051<T> = T extends (infer U)[]
  ? DeepReadonlyArray12051<U>
  : T extends object
  ? DeepReadonlyObject12051<T>
  : T;

interface DeepReadonlyArray12051<T> extends ReadonlyArray<DeepReadonly12051<T>> {}

type DeepReadonlyObject12051<T> = {
  readonly [P in keyof T]: DeepReadonly12051<T[P]>;
};

type UnionToIntersection12051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12051<T> = UnionToIntersection12051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12051<T extends unknown[], V> = [...T, V];

type TuplifyUnion12051<T, L = LastOf12051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12051<TuplifyUnion12051<Exclude<T, L>>, L>;

type DeepPartial12051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12051<T[P]> }
  : T;

type Paths12051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12051<K, Paths12051<T[K], Prev12051[D]>> : never }[keyof T]
  : never;

type Prev12051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12051 {
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

type ConfigPaths12051 = Paths12051<NestedConfig12051>;

interface HeavyProps12051 {
  config: DeepPartial12051<NestedConfig12051>;
  path?: ConfigPaths12051;
}

const HeavyComponent12051 = memo(function HeavyComponent12051({ config }: HeavyProps12051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12051.displayName = 'HeavyComponent12051';
export default HeavyComponent12051;
