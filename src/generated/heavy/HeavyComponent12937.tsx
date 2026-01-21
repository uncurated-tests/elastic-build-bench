'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12937<T> = T extends (infer U)[]
  ? DeepReadonlyArray12937<U>
  : T extends object
  ? DeepReadonlyObject12937<T>
  : T;

interface DeepReadonlyArray12937<T> extends ReadonlyArray<DeepReadonly12937<T>> {}

type DeepReadonlyObject12937<T> = {
  readonly [P in keyof T]: DeepReadonly12937<T[P]>;
};

type UnionToIntersection12937<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12937<T> = UnionToIntersection12937<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12937<T extends unknown[], V> = [...T, V];

type TuplifyUnion12937<T, L = LastOf12937<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12937<TuplifyUnion12937<Exclude<T, L>>, L>;

type DeepPartial12937<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12937<T[P]> }
  : T;

type Paths12937<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12937<K, Paths12937<T[K], Prev12937[D]>> : never }[keyof T]
  : never;

type Prev12937 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12937<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12937 {
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

type ConfigPaths12937 = Paths12937<NestedConfig12937>;

interface HeavyProps12937 {
  config: DeepPartial12937<NestedConfig12937>;
  path?: ConfigPaths12937;
}

const HeavyComponent12937 = memo(function HeavyComponent12937({ config }: HeavyProps12937) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12937) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12937 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12937: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12937.displayName = 'HeavyComponent12937';
export default HeavyComponent12937;
