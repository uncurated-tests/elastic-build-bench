'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly495<T> = T extends (infer U)[]
  ? DeepReadonlyArray495<U>
  : T extends object
  ? DeepReadonlyObject495<T>
  : T;

interface DeepReadonlyArray495<T> extends ReadonlyArray<DeepReadonly495<T>> {}

type DeepReadonlyObject495<T> = {
  readonly [P in keyof T]: DeepReadonly495<T[P]>;
};

type UnionToIntersection495<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf495<T> = UnionToIntersection495<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push495<T extends unknown[], V> = [...T, V];

type TuplifyUnion495<T, L = LastOf495<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push495<TuplifyUnion495<Exclude<T, L>>, L>;

type DeepPartial495<T> = T extends object
  ? { [P in keyof T]?: DeepPartial495<T[P]> }
  : T;

type Paths495<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join495<K, Paths495<T[K], Prev495[D]>> : never }[keyof T]
  : never;

type Prev495 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join495<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig495 {
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

type ConfigPaths495 = Paths495<NestedConfig495>;

interface HeavyProps495 {
  config: DeepPartial495<NestedConfig495>;
  path?: ConfigPaths495;
}

const HeavyComponent495 = memo(function HeavyComponent495({ config }: HeavyProps495) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 495) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-495 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H495: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent495.displayName = 'HeavyComponent495';
export default HeavyComponent495;
