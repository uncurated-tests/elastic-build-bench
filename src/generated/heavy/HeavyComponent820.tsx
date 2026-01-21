'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly820<T> = T extends (infer U)[]
  ? DeepReadonlyArray820<U>
  : T extends object
  ? DeepReadonlyObject820<T>
  : T;

interface DeepReadonlyArray820<T> extends ReadonlyArray<DeepReadonly820<T>> {}

type DeepReadonlyObject820<T> = {
  readonly [P in keyof T]: DeepReadonly820<T[P]>;
};

type UnionToIntersection820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf820<T> = UnionToIntersection820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push820<T extends unknown[], V> = [...T, V];

type TuplifyUnion820<T, L = LastOf820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push820<TuplifyUnion820<Exclude<T, L>>, L>;

type DeepPartial820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial820<T[P]> }
  : T;

type Paths820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join820<K, Paths820<T[K], Prev820[D]>> : never }[keyof T]
  : never;

type Prev820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig820 {
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

type ConfigPaths820 = Paths820<NestedConfig820>;

interface HeavyProps820 {
  config: DeepPartial820<NestedConfig820>;
  path?: ConfigPaths820;
}

const HeavyComponent820 = memo(function HeavyComponent820({ config }: HeavyProps820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent820.displayName = 'HeavyComponent820';
export default HeavyComponent820;
