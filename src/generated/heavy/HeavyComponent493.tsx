'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly493<T> = T extends (infer U)[]
  ? DeepReadonlyArray493<U>
  : T extends object
  ? DeepReadonlyObject493<T>
  : T;

interface DeepReadonlyArray493<T> extends ReadonlyArray<DeepReadonly493<T>> {}

type DeepReadonlyObject493<T> = {
  readonly [P in keyof T]: DeepReadonly493<T[P]>;
};

type UnionToIntersection493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf493<T> = UnionToIntersection493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push493<T extends unknown[], V> = [...T, V];

type TuplifyUnion493<T, L = LastOf493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push493<TuplifyUnion493<Exclude<T, L>>, L>;

type DeepPartial493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial493<T[P]> }
  : T;

type Paths493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join493<K, Paths493<T[K], Prev493[D]>> : never }[keyof T]
  : never;

type Prev493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig493 {
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

type ConfigPaths493 = Paths493<NestedConfig493>;

interface HeavyProps493 {
  config: DeepPartial493<NestedConfig493>;
  path?: ConfigPaths493;
}

const HeavyComponent493 = memo(function HeavyComponent493({ config }: HeavyProps493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent493.displayName = 'HeavyComponent493';
export default HeavyComponent493;
