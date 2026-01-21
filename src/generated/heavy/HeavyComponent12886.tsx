'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12886<T> = T extends (infer U)[]
  ? DeepReadonlyArray12886<U>
  : T extends object
  ? DeepReadonlyObject12886<T>
  : T;

interface DeepReadonlyArray12886<T> extends ReadonlyArray<DeepReadonly12886<T>> {}

type DeepReadonlyObject12886<T> = {
  readonly [P in keyof T]: DeepReadonly12886<T[P]>;
};

type UnionToIntersection12886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12886<T> = UnionToIntersection12886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12886<T extends unknown[], V> = [...T, V];

type TuplifyUnion12886<T, L = LastOf12886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12886<TuplifyUnion12886<Exclude<T, L>>, L>;

type DeepPartial12886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12886<T[P]> }
  : T;

type Paths12886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12886<K, Paths12886<T[K], Prev12886[D]>> : never }[keyof T]
  : never;

type Prev12886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12886 {
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

type ConfigPaths12886 = Paths12886<NestedConfig12886>;

interface HeavyProps12886 {
  config: DeepPartial12886<NestedConfig12886>;
  path?: ConfigPaths12886;
}

const HeavyComponent12886 = memo(function HeavyComponent12886({ config }: HeavyProps12886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12886.displayName = 'HeavyComponent12886';
export default HeavyComponent12886;
