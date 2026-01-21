'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12904<T> = T extends (infer U)[]
  ? DeepReadonlyArray12904<U>
  : T extends object
  ? DeepReadonlyObject12904<T>
  : T;

interface DeepReadonlyArray12904<T> extends ReadonlyArray<DeepReadonly12904<T>> {}

type DeepReadonlyObject12904<T> = {
  readonly [P in keyof T]: DeepReadonly12904<T[P]>;
};

type UnionToIntersection12904<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12904<T> = UnionToIntersection12904<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12904<T extends unknown[], V> = [...T, V];

type TuplifyUnion12904<T, L = LastOf12904<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12904<TuplifyUnion12904<Exclude<T, L>>, L>;

type DeepPartial12904<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12904<T[P]> }
  : T;

type Paths12904<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12904<K, Paths12904<T[K], Prev12904[D]>> : never }[keyof T]
  : never;

type Prev12904 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12904<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12904 {
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

type ConfigPaths12904 = Paths12904<NestedConfig12904>;

interface HeavyProps12904 {
  config: DeepPartial12904<NestedConfig12904>;
  path?: ConfigPaths12904;
}

const HeavyComponent12904 = memo(function HeavyComponent12904({ config }: HeavyProps12904) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12904) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12904 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12904: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12904.displayName = 'HeavyComponent12904';
export default HeavyComponent12904;
