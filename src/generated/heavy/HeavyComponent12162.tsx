'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12162<T> = T extends (infer U)[]
  ? DeepReadonlyArray12162<U>
  : T extends object
  ? DeepReadonlyObject12162<T>
  : T;

interface DeepReadonlyArray12162<T> extends ReadonlyArray<DeepReadonly12162<T>> {}

type DeepReadonlyObject12162<T> = {
  readonly [P in keyof T]: DeepReadonly12162<T[P]>;
};

type UnionToIntersection12162<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12162<T> = UnionToIntersection12162<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12162<T extends unknown[], V> = [...T, V];

type TuplifyUnion12162<T, L = LastOf12162<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12162<TuplifyUnion12162<Exclude<T, L>>, L>;

type DeepPartial12162<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12162<T[P]> }
  : T;

type Paths12162<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12162<K, Paths12162<T[K], Prev12162[D]>> : never }[keyof T]
  : never;

type Prev12162 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12162<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12162 {
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

type ConfigPaths12162 = Paths12162<NestedConfig12162>;

interface HeavyProps12162 {
  config: DeepPartial12162<NestedConfig12162>;
  path?: ConfigPaths12162;
}

const HeavyComponent12162 = memo(function HeavyComponent12162({ config }: HeavyProps12162) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12162) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12162 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12162: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12162.displayName = 'HeavyComponent12162';
export default HeavyComponent12162;
