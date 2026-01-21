'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12209<T> = T extends (infer U)[]
  ? DeepReadonlyArray12209<U>
  : T extends object
  ? DeepReadonlyObject12209<T>
  : T;

interface DeepReadonlyArray12209<T> extends ReadonlyArray<DeepReadonly12209<T>> {}

type DeepReadonlyObject12209<T> = {
  readonly [P in keyof T]: DeepReadonly12209<T[P]>;
};

type UnionToIntersection12209<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12209<T> = UnionToIntersection12209<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12209<T extends unknown[], V> = [...T, V];

type TuplifyUnion12209<T, L = LastOf12209<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12209<TuplifyUnion12209<Exclude<T, L>>, L>;

type DeepPartial12209<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12209<T[P]> }
  : T;

type Paths12209<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12209<K, Paths12209<T[K], Prev12209[D]>> : never }[keyof T]
  : never;

type Prev12209 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12209<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12209 {
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

type ConfigPaths12209 = Paths12209<NestedConfig12209>;

interface HeavyProps12209 {
  config: DeepPartial12209<NestedConfig12209>;
  path?: ConfigPaths12209;
}

const HeavyComponent12209 = memo(function HeavyComponent12209({ config }: HeavyProps12209) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12209) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12209 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12209: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12209.displayName = 'HeavyComponent12209';
export default HeavyComponent12209;
