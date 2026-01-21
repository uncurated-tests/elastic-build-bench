'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly913<T> = T extends (infer U)[]
  ? DeepReadonlyArray913<U>
  : T extends object
  ? DeepReadonlyObject913<T>
  : T;

interface DeepReadonlyArray913<T> extends ReadonlyArray<DeepReadonly913<T>> {}

type DeepReadonlyObject913<T> = {
  readonly [P in keyof T]: DeepReadonly913<T[P]>;
};

type UnionToIntersection913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf913<T> = UnionToIntersection913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push913<T extends unknown[], V> = [...T, V];

type TuplifyUnion913<T, L = LastOf913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push913<TuplifyUnion913<Exclude<T, L>>, L>;

type DeepPartial913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial913<T[P]> }
  : T;

type Paths913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join913<K, Paths913<T[K], Prev913[D]>> : never }[keyof T]
  : never;

type Prev913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig913 {
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

type ConfigPaths913 = Paths913<NestedConfig913>;

interface HeavyProps913 {
  config: DeepPartial913<NestedConfig913>;
  path?: ConfigPaths913;
}

const HeavyComponent913 = memo(function HeavyComponent913({ config }: HeavyProps913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent913.displayName = 'HeavyComponent913';
export default HeavyComponent913;
