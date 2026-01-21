'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12895<T> = T extends (infer U)[]
  ? DeepReadonlyArray12895<U>
  : T extends object
  ? DeepReadonlyObject12895<T>
  : T;

interface DeepReadonlyArray12895<T> extends ReadonlyArray<DeepReadonly12895<T>> {}

type DeepReadonlyObject12895<T> = {
  readonly [P in keyof T]: DeepReadonly12895<T[P]>;
};

type UnionToIntersection12895<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12895<T> = UnionToIntersection12895<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12895<T extends unknown[], V> = [...T, V];

type TuplifyUnion12895<T, L = LastOf12895<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12895<TuplifyUnion12895<Exclude<T, L>>, L>;

type DeepPartial12895<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12895<T[P]> }
  : T;

type Paths12895<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12895<K, Paths12895<T[K], Prev12895[D]>> : never }[keyof T]
  : never;

type Prev12895 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12895<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12895 {
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

type ConfigPaths12895 = Paths12895<NestedConfig12895>;

interface HeavyProps12895 {
  config: DeepPartial12895<NestedConfig12895>;
  path?: ConfigPaths12895;
}

const HeavyComponent12895 = memo(function HeavyComponent12895({ config }: HeavyProps12895) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12895) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12895 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12895: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12895.displayName = 'HeavyComponent12895';
export default HeavyComponent12895;
