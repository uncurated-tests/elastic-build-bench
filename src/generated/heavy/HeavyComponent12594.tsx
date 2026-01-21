'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12594<T> = T extends (infer U)[]
  ? DeepReadonlyArray12594<U>
  : T extends object
  ? DeepReadonlyObject12594<T>
  : T;

interface DeepReadonlyArray12594<T> extends ReadonlyArray<DeepReadonly12594<T>> {}

type DeepReadonlyObject12594<T> = {
  readonly [P in keyof T]: DeepReadonly12594<T[P]>;
};

type UnionToIntersection12594<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12594<T> = UnionToIntersection12594<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12594<T extends unknown[], V> = [...T, V];

type TuplifyUnion12594<T, L = LastOf12594<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12594<TuplifyUnion12594<Exclude<T, L>>, L>;

type DeepPartial12594<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12594<T[P]> }
  : T;

type Paths12594<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12594<K, Paths12594<T[K], Prev12594[D]>> : never }[keyof T]
  : never;

type Prev12594 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12594<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12594 {
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

type ConfigPaths12594 = Paths12594<NestedConfig12594>;

interface HeavyProps12594 {
  config: DeepPartial12594<NestedConfig12594>;
  path?: ConfigPaths12594;
}

const HeavyComponent12594 = memo(function HeavyComponent12594({ config }: HeavyProps12594) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12594) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12594 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12594: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12594.displayName = 'HeavyComponent12594';
export default HeavyComponent12594;
