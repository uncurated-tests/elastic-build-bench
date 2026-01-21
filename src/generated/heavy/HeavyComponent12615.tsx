'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12615<T> = T extends (infer U)[]
  ? DeepReadonlyArray12615<U>
  : T extends object
  ? DeepReadonlyObject12615<T>
  : T;

interface DeepReadonlyArray12615<T> extends ReadonlyArray<DeepReadonly12615<T>> {}

type DeepReadonlyObject12615<T> = {
  readonly [P in keyof T]: DeepReadonly12615<T[P]>;
};

type UnionToIntersection12615<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12615<T> = UnionToIntersection12615<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12615<T extends unknown[], V> = [...T, V];

type TuplifyUnion12615<T, L = LastOf12615<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12615<TuplifyUnion12615<Exclude<T, L>>, L>;

type DeepPartial12615<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12615<T[P]> }
  : T;

type Paths12615<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12615<K, Paths12615<T[K], Prev12615[D]>> : never }[keyof T]
  : never;

type Prev12615 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12615<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12615 {
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

type ConfigPaths12615 = Paths12615<NestedConfig12615>;

interface HeavyProps12615 {
  config: DeepPartial12615<NestedConfig12615>;
  path?: ConfigPaths12615;
}

const HeavyComponent12615 = memo(function HeavyComponent12615({ config }: HeavyProps12615) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12615) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12615 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12615: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12615.displayName = 'HeavyComponent12615';
export default HeavyComponent12615;
