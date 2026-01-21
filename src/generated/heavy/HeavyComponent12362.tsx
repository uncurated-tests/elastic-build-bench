'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12362<T> = T extends (infer U)[]
  ? DeepReadonlyArray12362<U>
  : T extends object
  ? DeepReadonlyObject12362<T>
  : T;

interface DeepReadonlyArray12362<T> extends ReadonlyArray<DeepReadonly12362<T>> {}

type DeepReadonlyObject12362<T> = {
  readonly [P in keyof T]: DeepReadonly12362<T[P]>;
};

type UnionToIntersection12362<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12362<T> = UnionToIntersection12362<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12362<T extends unknown[], V> = [...T, V];

type TuplifyUnion12362<T, L = LastOf12362<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12362<TuplifyUnion12362<Exclude<T, L>>, L>;

type DeepPartial12362<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12362<T[P]> }
  : T;

type Paths12362<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12362<K, Paths12362<T[K], Prev12362[D]>> : never }[keyof T]
  : never;

type Prev12362 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12362<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12362 {
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

type ConfigPaths12362 = Paths12362<NestedConfig12362>;

interface HeavyProps12362 {
  config: DeepPartial12362<NestedConfig12362>;
  path?: ConfigPaths12362;
}

const HeavyComponent12362 = memo(function HeavyComponent12362({ config }: HeavyProps12362) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12362) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12362 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12362: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12362.displayName = 'HeavyComponent12362';
export default HeavyComponent12362;
