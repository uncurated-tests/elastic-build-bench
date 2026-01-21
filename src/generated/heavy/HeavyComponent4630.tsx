'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4630<T> = T extends (infer U)[]
  ? DeepReadonlyArray4630<U>
  : T extends object
  ? DeepReadonlyObject4630<T>
  : T;

interface DeepReadonlyArray4630<T> extends ReadonlyArray<DeepReadonly4630<T>> {}

type DeepReadonlyObject4630<T> = {
  readonly [P in keyof T]: DeepReadonly4630<T[P]>;
};

type UnionToIntersection4630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4630<T> = UnionToIntersection4630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4630<T extends unknown[], V> = [...T, V];

type TuplifyUnion4630<T, L = LastOf4630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4630<TuplifyUnion4630<Exclude<T, L>>, L>;

type DeepPartial4630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4630<T[P]> }
  : T;

type Paths4630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4630<K, Paths4630<T[K], Prev4630[D]>> : never }[keyof T]
  : never;

type Prev4630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4630 {
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

type ConfigPaths4630 = Paths4630<NestedConfig4630>;

interface HeavyProps4630 {
  config: DeepPartial4630<NestedConfig4630>;
  path?: ConfigPaths4630;
}

const HeavyComponent4630 = memo(function HeavyComponent4630({ config }: HeavyProps4630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4630.displayName = 'HeavyComponent4630';
export default HeavyComponent4630;
