'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12995<T> = T extends (infer U)[]
  ? DeepReadonlyArray12995<U>
  : T extends object
  ? DeepReadonlyObject12995<T>
  : T;

interface DeepReadonlyArray12995<T> extends ReadonlyArray<DeepReadonly12995<T>> {}

type DeepReadonlyObject12995<T> = {
  readonly [P in keyof T]: DeepReadonly12995<T[P]>;
};

type UnionToIntersection12995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12995<T> = UnionToIntersection12995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12995<T extends unknown[], V> = [...T, V];

type TuplifyUnion12995<T, L = LastOf12995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12995<TuplifyUnion12995<Exclude<T, L>>, L>;

type DeepPartial12995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12995<T[P]> }
  : T;

type Paths12995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12995<K, Paths12995<T[K], Prev12995[D]>> : never }[keyof T]
  : never;

type Prev12995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12995 {
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

type ConfigPaths12995 = Paths12995<NestedConfig12995>;

interface HeavyProps12995 {
  config: DeepPartial12995<NestedConfig12995>;
  path?: ConfigPaths12995;
}

const HeavyComponent12995 = memo(function HeavyComponent12995({ config }: HeavyProps12995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12995.displayName = 'HeavyComponent12995';
export default HeavyComponent12995;
