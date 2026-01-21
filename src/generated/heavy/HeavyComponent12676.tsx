'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12676<T> = T extends (infer U)[]
  ? DeepReadonlyArray12676<U>
  : T extends object
  ? DeepReadonlyObject12676<T>
  : T;

interface DeepReadonlyArray12676<T> extends ReadonlyArray<DeepReadonly12676<T>> {}

type DeepReadonlyObject12676<T> = {
  readonly [P in keyof T]: DeepReadonly12676<T[P]>;
};

type UnionToIntersection12676<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12676<T> = UnionToIntersection12676<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12676<T extends unknown[], V> = [...T, V];

type TuplifyUnion12676<T, L = LastOf12676<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12676<TuplifyUnion12676<Exclude<T, L>>, L>;

type DeepPartial12676<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12676<T[P]> }
  : T;

type Paths12676<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12676<K, Paths12676<T[K], Prev12676[D]>> : never }[keyof T]
  : never;

type Prev12676 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12676<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12676 {
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

type ConfigPaths12676 = Paths12676<NestedConfig12676>;

interface HeavyProps12676 {
  config: DeepPartial12676<NestedConfig12676>;
  path?: ConfigPaths12676;
}

const HeavyComponent12676 = memo(function HeavyComponent12676({ config }: HeavyProps12676) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12676) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12676 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12676: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12676.displayName = 'HeavyComponent12676';
export default HeavyComponent12676;
