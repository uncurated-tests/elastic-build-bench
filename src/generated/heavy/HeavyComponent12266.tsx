'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12266<T> = T extends (infer U)[]
  ? DeepReadonlyArray12266<U>
  : T extends object
  ? DeepReadonlyObject12266<T>
  : T;

interface DeepReadonlyArray12266<T> extends ReadonlyArray<DeepReadonly12266<T>> {}

type DeepReadonlyObject12266<T> = {
  readonly [P in keyof T]: DeepReadonly12266<T[P]>;
};

type UnionToIntersection12266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12266<T> = UnionToIntersection12266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12266<T extends unknown[], V> = [...T, V];

type TuplifyUnion12266<T, L = LastOf12266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12266<TuplifyUnion12266<Exclude<T, L>>, L>;

type DeepPartial12266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12266<T[P]> }
  : T;

type Paths12266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12266<K, Paths12266<T[K], Prev12266[D]>> : never }[keyof T]
  : never;

type Prev12266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12266 {
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

type ConfigPaths12266 = Paths12266<NestedConfig12266>;

interface HeavyProps12266 {
  config: DeepPartial12266<NestedConfig12266>;
  path?: ConfigPaths12266;
}

const HeavyComponent12266 = memo(function HeavyComponent12266({ config }: HeavyProps12266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12266.displayName = 'HeavyComponent12266';
export default HeavyComponent12266;
