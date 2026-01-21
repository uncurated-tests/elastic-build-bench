'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12958<T> = T extends (infer U)[]
  ? DeepReadonlyArray12958<U>
  : T extends object
  ? DeepReadonlyObject12958<T>
  : T;

interface DeepReadonlyArray12958<T> extends ReadonlyArray<DeepReadonly12958<T>> {}

type DeepReadonlyObject12958<T> = {
  readonly [P in keyof T]: DeepReadonly12958<T[P]>;
};

type UnionToIntersection12958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12958<T> = UnionToIntersection12958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12958<T extends unknown[], V> = [...T, V];

type TuplifyUnion12958<T, L = LastOf12958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12958<TuplifyUnion12958<Exclude<T, L>>, L>;

type DeepPartial12958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12958<T[P]> }
  : T;

type Paths12958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12958<K, Paths12958<T[K], Prev12958[D]>> : never }[keyof T]
  : never;

type Prev12958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12958 {
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

type ConfigPaths12958 = Paths12958<NestedConfig12958>;

interface HeavyProps12958 {
  config: DeepPartial12958<NestedConfig12958>;
  path?: ConfigPaths12958;
}

const HeavyComponent12958 = memo(function HeavyComponent12958({ config }: HeavyProps12958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12958.displayName = 'HeavyComponent12958';
export default HeavyComponent12958;
