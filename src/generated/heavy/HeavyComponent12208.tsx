'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12208<T> = T extends (infer U)[]
  ? DeepReadonlyArray12208<U>
  : T extends object
  ? DeepReadonlyObject12208<T>
  : T;

interface DeepReadonlyArray12208<T> extends ReadonlyArray<DeepReadonly12208<T>> {}

type DeepReadonlyObject12208<T> = {
  readonly [P in keyof T]: DeepReadonly12208<T[P]>;
};

type UnionToIntersection12208<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12208<T> = UnionToIntersection12208<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12208<T extends unknown[], V> = [...T, V];

type TuplifyUnion12208<T, L = LastOf12208<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12208<TuplifyUnion12208<Exclude<T, L>>, L>;

type DeepPartial12208<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12208<T[P]> }
  : T;

type Paths12208<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12208<K, Paths12208<T[K], Prev12208[D]>> : never }[keyof T]
  : never;

type Prev12208 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12208<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12208 {
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

type ConfigPaths12208 = Paths12208<NestedConfig12208>;

interface HeavyProps12208 {
  config: DeepPartial12208<NestedConfig12208>;
  path?: ConfigPaths12208;
}

const HeavyComponent12208 = memo(function HeavyComponent12208({ config }: HeavyProps12208) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12208) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12208 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12208: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12208.displayName = 'HeavyComponent12208';
export default HeavyComponent12208;
