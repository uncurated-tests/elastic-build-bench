'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12087<T> = T extends (infer U)[]
  ? DeepReadonlyArray12087<U>
  : T extends object
  ? DeepReadonlyObject12087<T>
  : T;

interface DeepReadonlyArray12087<T> extends ReadonlyArray<DeepReadonly12087<T>> {}

type DeepReadonlyObject12087<T> = {
  readonly [P in keyof T]: DeepReadonly12087<T[P]>;
};

type UnionToIntersection12087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12087<T> = UnionToIntersection12087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12087<T extends unknown[], V> = [...T, V];

type TuplifyUnion12087<T, L = LastOf12087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12087<TuplifyUnion12087<Exclude<T, L>>, L>;

type DeepPartial12087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12087<T[P]> }
  : T;

type Paths12087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12087<K, Paths12087<T[K], Prev12087[D]>> : never }[keyof T]
  : never;

type Prev12087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12087 {
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

type ConfigPaths12087 = Paths12087<NestedConfig12087>;

interface HeavyProps12087 {
  config: DeepPartial12087<NestedConfig12087>;
  path?: ConfigPaths12087;
}

const HeavyComponent12087 = memo(function HeavyComponent12087({ config }: HeavyProps12087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12087.displayName = 'HeavyComponent12087';
export default HeavyComponent12087;
