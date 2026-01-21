'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12809<T> = T extends (infer U)[]
  ? DeepReadonlyArray12809<U>
  : T extends object
  ? DeepReadonlyObject12809<T>
  : T;

interface DeepReadonlyArray12809<T> extends ReadonlyArray<DeepReadonly12809<T>> {}

type DeepReadonlyObject12809<T> = {
  readonly [P in keyof T]: DeepReadonly12809<T[P]>;
};

type UnionToIntersection12809<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12809<T> = UnionToIntersection12809<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12809<T extends unknown[], V> = [...T, V];

type TuplifyUnion12809<T, L = LastOf12809<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12809<TuplifyUnion12809<Exclude<T, L>>, L>;

type DeepPartial12809<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12809<T[P]> }
  : T;

type Paths12809<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12809<K, Paths12809<T[K], Prev12809[D]>> : never }[keyof T]
  : never;

type Prev12809 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12809<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12809 {
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

type ConfigPaths12809 = Paths12809<NestedConfig12809>;

interface HeavyProps12809 {
  config: DeepPartial12809<NestedConfig12809>;
  path?: ConfigPaths12809;
}

const HeavyComponent12809 = memo(function HeavyComponent12809({ config }: HeavyProps12809) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12809) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12809 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12809: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12809.displayName = 'HeavyComponent12809';
export default HeavyComponent12809;
