'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12815<T> = T extends (infer U)[]
  ? DeepReadonlyArray12815<U>
  : T extends object
  ? DeepReadonlyObject12815<T>
  : T;

interface DeepReadonlyArray12815<T> extends ReadonlyArray<DeepReadonly12815<T>> {}

type DeepReadonlyObject12815<T> = {
  readonly [P in keyof T]: DeepReadonly12815<T[P]>;
};

type UnionToIntersection12815<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12815<T> = UnionToIntersection12815<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12815<T extends unknown[], V> = [...T, V];

type TuplifyUnion12815<T, L = LastOf12815<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12815<TuplifyUnion12815<Exclude<T, L>>, L>;

type DeepPartial12815<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12815<T[P]> }
  : T;

type Paths12815<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12815<K, Paths12815<T[K], Prev12815[D]>> : never }[keyof T]
  : never;

type Prev12815 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12815<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12815 {
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

type ConfigPaths12815 = Paths12815<NestedConfig12815>;

interface HeavyProps12815 {
  config: DeepPartial12815<NestedConfig12815>;
  path?: ConfigPaths12815;
}

const HeavyComponent12815 = memo(function HeavyComponent12815({ config }: HeavyProps12815) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12815) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12815 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12815: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12815.displayName = 'HeavyComponent12815';
export default HeavyComponent12815;
