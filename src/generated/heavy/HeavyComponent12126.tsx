'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12126<T> = T extends (infer U)[]
  ? DeepReadonlyArray12126<U>
  : T extends object
  ? DeepReadonlyObject12126<T>
  : T;

interface DeepReadonlyArray12126<T> extends ReadonlyArray<DeepReadonly12126<T>> {}

type DeepReadonlyObject12126<T> = {
  readonly [P in keyof T]: DeepReadonly12126<T[P]>;
};

type UnionToIntersection12126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12126<T> = UnionToIntersection12126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12126<T extends unknown[], V> = [...T, V];

type TuplifyUnion12126<T, L = LastOf12126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12126<TuplifyUnion12126<Exclude<T, L>>, L>;

type DeepPartial12126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12126<T[P]> }
  : T;

type Paths12126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12126<K, Paths12126<T[K], Prev12126[D]>> : never }[keyof T]
  : never;

type Prev12126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12126 {
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

type ConfigPaths12126 = Paths12126<NestedConfig12126>;

interface HeavyProps12126 {
  config: DeepPartial12126<NestedConfig12126>;
  path?: ConfigPaths12126;
}

const HeavyComponent12126 = memo(function HeavyComponent12126({ config }: HeavyProps12126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12126.displayName = 'HeavyComponent12126';
export default HeavyComponent12126;
