'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12652<T> = T extends (infer U)[]
  ? DeepReadonlyArray12652<U>
  : T extends object
  ? DeepReadonlyObject12652<T>
  : T;

interface DeepReadonlyArray12652<T> extends ReadonlyArray<DeepReadonly12652<T>> {}

type DeepReadonlyObject12652<T> = {
  readonly [P in keyof T]: DeepReadonly12652<T[P]>;
};

type UnionToIntersection12652<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12652<T> = UnionToIntersection12652<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12652<T extends unknown[], V> = [...T, V];

type TuplifyUnion12652<T, L = LastOf12652<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12652<TuplifyUnion12652<Exclude<T, L>>, L>;

type DeepPartial12652<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12652<T[P]> }
  : T;

type Paths12652<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12652<K, Paths12652<T[K], Prev12652[D]>> : never }[keyof T]
  : never;

type Prev12652 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12652<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12652 {
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

type ConfigPaths12652 = Paths12652<NestedConfig12652>;

interface HeavyProps12652 {
  config: DeepPartial12652<NestedConfig12652>;
  path?: ConfigPaths12652;
}

const HeavyComponent12652 = memo(function HeavyComponent12652({ config }: HeavyProps12652) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12652) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12652 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12652: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12652.displayName = 'HeavyComponent12652';
export default HeavyComponent12652;
