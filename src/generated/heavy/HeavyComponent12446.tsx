'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12446<T> = T extends (infer U)[]
  ? DeepReadonlyArray12446<U>
  : T extends object
  ? DeepReadonlyObject12446<T>
  : T;

interface DeepReadonlyArray12446<T> extends ReadonlyArray<DeepReadonly12446<T>> {}

type DeepReadonlyObject12446<T> = {
  readonly [P in keyof T]: DeepReadonly12446<T[P]>;
};

type UnionToIntersection12446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12446<T> = UnionToIntersection12446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12446<T extends unknown[], V> = [...T, V];

type TuplifyUnion12446<T, L = LastOf12446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12446<TuplifyUnion12446<Exclude<T, L>>, L>;

type DeepPartial12446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12446<T[P]> }
  : T;

type Paths12446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12446<K, Paths12446<T[K], Prev12446[D]>> : never }[keyof T]
  : never;

type Prev12446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12446 {
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

type ConfigPaths12446 = Paths12446<NestedConfig12446>;

interface HeavyProps12446 {
  config: DeepPartial12446<NestedConfig12446>;
  path?: ConfigPaths12446;
}

const HeavyComponent12446 = memo(function HeavyComponent12446({ config }: HeavyProps12446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12446.displayName = 'HeavyComponent12446';
export default HeavyComponent12446;
