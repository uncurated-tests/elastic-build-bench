'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12424<T> = T extends (infer U)[]
  ? DeepReadonlyArray12424<U>
  : T extends object
  ? DeepReadonlyObject12424<T>
  : T;

interface DeepReadonlyArray12424<T> extends ReadonlyArray<DeepReadonly12424<T>> {}

type DeepReadonlyObject12424<T> = {
  readonly [P in keyof T]: DeepReadonly12424<T[P]>;
};

type UnionToIntersection12424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12424<T> = UnionToIntersection12424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12424<T extends unknown[], V> = [...T, V];

type TuplifyUnion12424<T, L = LastOf12424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12424<TuplifyUnion12424<Exclude<T, L>>, L>;

type DeepPartial12424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12424<T[P]> }
  : T;

type Paths12424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12424<K, Paths12424<T[K], Prev12424[D]>> : never }[keyof T]
  : never;

type Prev12424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12424 {
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

type ConfigPaths12424 = Paths12424<NestedConfig12424>;

interface HeavyProps12424 {
  config: DeepPartial12424<NestedConfig12424>;
  path?: ConfigPaths12424;
}

const HeavyComponent12424 = memo(function HeavyComponent12424({ config }: HeavyProps12424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12424.displayName = 'HeavyComponent12424';
export default HeavyComponent12424;
