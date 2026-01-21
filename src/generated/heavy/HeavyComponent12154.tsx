'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12154<T> = T extends (infer U)[]
  ? DeepReadonlyArray12154<U>
  : T extends object
  ? DeepReadonlyObject12154<T>
  : T;

interface DeepReadonlyArray12154<T> extends ReadonlyArray<DeepReadonly12154<T>> {}

type DeepReadonlyObject12154<T> = {
  readonly [P in keyof T]: DeepReadonly12154<T[P]>;
};

type UnionToIntersection12154<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12154<T> = UnionToIntersection12154<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12154<T extends unknown[], V> = [...T, V];

type TuplifyUnion12154<T, L = LastOf12154<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12154<TuplifyUnion12154<Exclude<T, L>>, L>;

type DeepPartial12154<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12154<T[P]> }
  : T;

type Paths12154<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12154<K, Paths12154<T[K], Prev12154[D]>> : never }[keyof T]
  : never;

type Prev12154 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12154<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12154 {
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

type ConfigPaths12154 = Paths12154<NestedConfig12154>;

interface HeavyProps12154 {
  config: DeepPartial12154<NestedConfig12154>;
  path?: ConfigPaths12154;
}

const HeavyComponent12154 = memo(function HeavyComponent12154({ config }: HeavyProps12154) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12154) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12154 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12154: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12154.displayName = 'HeavyComponent12154';
export default HeavyComponent12154;
