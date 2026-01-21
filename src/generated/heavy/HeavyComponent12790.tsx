'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12790<T> = T extends (infer U)[]
  ? DeepReadonlyArray12790<U>
  : T extends object
  ? DeepReadonlyObject12790<T>
  : T;

interface DeepReadonlyArray12790<T> extends ReadonlyArray<DeepReadonly12790<T>> {}

type DeepReadonlyObject12790<T> = {
  readonly [P in keyof T]: DeepReadonly12790<T[P]>;
};

type UnionToIntersection12790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12790<T> = UnionToIntersection12790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12790<T extends unknown[], V> = [...T, V];

type TuplifyUnion12790<T, L = LastOf12790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12790<TuplifyUnion12790<Exclude<T, L>>, L>;

type DeepPartial12790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12790<T[P]> }
  : T;

type Paths12790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12790<K, Paths12790<T[K], Prev12790[D]>> : never }[keyof T]
  : never;

type Prev12790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12790 {
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

type ConfigPaths12790 = Paths12790<NestedConfig12790>;

interface HeavyProps12790 {
  config: DeepPartial12790<NestedConfig12790>;
  path?: ConfigPaths12790;
}

const HeavyComponent12790 = memo(function HeavyComponent12790({ config }: HeavyProps12790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12790.displayName = 'HeavyComponent12790';
export default HeavyComponent12790;
