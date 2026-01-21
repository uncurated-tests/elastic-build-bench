'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12556<T> = T extends (infer U)[]
  ? DeepReadonlyArray12556<U>
  : T extends object
  ? DeepReadonlyObject12556<T>
  : T;

interface DeepReadonlyArray12556<T> extends ReadonlyArray<DeepReadonly12556<T>> {}

type DeepReadonlyObject12556<T> = {
  readonly [P in keyof T]: DeepReadonly12556<T[P]>;
};

type UnionToIntersection12556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12556<T> = UnionToIntersection12556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12556<T extends unknown[], V> = [...T, V];

type TuplifyUnion12556<T, L = LastOf12556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12556<TuplifyUnion12556<Exclude<T, L>>, L>;

type DeepPartial12556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12556<T[P]> }
  : T;

type Paths12556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12556<K, Paths12556<T[K], Prev12556[D]>> : never }[keyof T]
  : never;

type Prev12556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12556 {
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

type ConfigPaths12556 = Paths12556<NestedConfig12556>;

interface HeavyProps12556 {
  config: DeepPartial12556<NestedConfig12556>;
  path?: ConfigPaths12556;
}

const HeavyComponent12556 = memo(function HeavyComponent12556({ config }: HeavyProps12556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12556.displayName = 'HeavyComponent12556';
export default HeavyComponent12556;
