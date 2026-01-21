'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12155<T> = T extends (infer U)[]
  ? DeepReadonlyArray12155<U>
  : T extends object
  ? DeepReadonlyObject12155<T>
  : T;

interface DeepReadonlyArray12155<T> extends ReadonlyArray<DeepReadonly12155<T>> {}

type DeepReadonlyObject12155<T> = {
  readonly [P in keyof T]: DeepReadonly12155<T[P]>;
};

type UnionToIntersection12155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12155<T> = UnionToIntersection12155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12155<T extends unknown[], V> = [...T, V];

type TuplifyUnion12155<T, L = LastOf12155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12155<TuplifyUnion12155<Exclude<T, L>>, L>;

type DeepPartial12155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12155<T[P]> }
  : T;

type Paths12155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12155<K, Paths12155<T[K], Prev12155[D]>> : never }[keyof T]
  : never;

type Prev12155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12155 {
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

type ConfigPaths12155 = Paths12155<NestedConfig12155>;

interface HeavyProps12155 {
  config: DeepPartial12155<NestedConfig12155>;
  path?: ConfigPaths12155;
}

const HeavyComponent12155 = memo(function HeavyComponent12155({ config }: HeavyProps12155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12155.displayName = 'HeavyComponent12155';
export default HeavyComponent12155;
