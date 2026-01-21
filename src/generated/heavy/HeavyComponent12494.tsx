'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12494<T> = T extends (infer U)[]
  ? DeepReadonlyArray12494<U>
  : T extends object
  ? DeepReadonlyObject12494<T>
  : T;

interface DeepReadonlyArray12494<T> extends ReadonlyArray<DeepReadonly12494<T>> {}

type DeepReadonlyObject12494<T> = {
  readonly [P in keyof T]: DeepReadonly12494<T[P]>;
};

type UnionToIntersection12494<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12494<T> = UnionToIntersection12494<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12494<T extends unknown[], V> = [...T, V];

type TuplifyUnion12494<T, L = LastOf12494<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12494<TuplifyUnion12494<Exclude<T, L>>, L>;

type DeepPartial12494<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12494<T[P]> }
  : T;

type Paths12494<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12494<K, Paths12494<T[K], Prev12494[D]>> : never }[keyof T]
  : never;

type Prev12494 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12494<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12494 {
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

type ConfigPaths12494 = Paths12494<NestedConfig12494>;

interface HeavyProps12494 {
  config: DeepPartial12494<NestedConfig12494>;
  path?: ConfigPaths12494;
}

const HeavyComponent12494 = memo(function HeavyComponent12494({ config }: HeavyProps12494) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12494) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12494 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12494: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12494.displayName = 'HeavyComponent12494';
export default HeavyComponent12494;
