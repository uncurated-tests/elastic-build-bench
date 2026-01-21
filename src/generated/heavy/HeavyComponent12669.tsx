'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12669<T> = T extends (infer U)[]
  ? DeepReadonlyArray12669<U>
  : T extends object
  ? DeepReadonlyObject12669<T>
  : T;

interface DeepReadonlyArray12669<T> extends ReadonlyArray<DeepReadonly12669<T>> {}

type DeepReadonlyObject12669<T> = {
  readonly [P in keyof T]: DeepReadonly12669<T[P]>;
};

type UnionToIntersection12669<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12669<T> = UnionToIntersection12669<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12669<T extends unknown[], V> = [...T, V];

type TuplifyUnion12669<T, L = LastOf12669<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12669<TuplifyUnion12669<Exclude<T, L>>, L>;

type DeepPartial12669<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12669<T[P]> }
  : T;

type Paths12669<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12669<K, Paths12669<T[K], Prev12669[D]>> : never }[keyof T]
  : never;

type Prev12669 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12669<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12669 {
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

type ConfigPaths12669 = Paths12669<NestedConfig12669>;

interface HeavyProps12669 {
  config: DeepPartial12669<NestedConfig12669>;
  path?: ConfigPaths12669;
}

const HeavyComponent12669 = memo(function HeavyComponent12669({ config }: HeavyProps12669) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12669) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12669 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12669: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12669.displayName = 'HeavyComponent12669';
export default HeavyComponent12669;
