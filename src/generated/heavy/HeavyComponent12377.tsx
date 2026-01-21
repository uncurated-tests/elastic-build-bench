'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12377<T> = T extends (infer U)[]
  ? DeepReadonlyArray12377<U>
  : T extends object
  ? DeepReadonlyObject12377<T>
  : T;

interface DeepReadonlyArray12377<T> extends ReadonlyArray<DeepReadonly12377<T>> {}

type DeepReadonlyObject12377<T> = {
  readonly [P in keyof T]: DeepReadonly12377<T[P]>;
};

type UnionToIntersection12377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12377<T> = UnionToIntersection12377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12377<T extends unknown[], V> = [...T, V];

type TuplifyUnion12377<T, L = LastOf12377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12377<TuplifyUnion12377<Exclude<T, L>>, L>;

type DeepPartial12377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12377<T[P]> }
  : T;

type Paths12377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12377<K, Paths12377<T[K], Prev12377[D]>> : never }[keyof T]
  : never;

type Prev12377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12377 {
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

type ConfigPaths12377 = Paths12377<NestedConfig12377>;

interface HeavyProps12377 {
  config: DeepPartial12377<NestedConfig12377>;
  path?: ConfigPaths12377;
}

const HeavyComponent12377 = memo(function HeavyComponent12377({ config }: HeavyProps12377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12377.displayName = 'HeavyComponent12377';
export default HeavyComponent12377;
