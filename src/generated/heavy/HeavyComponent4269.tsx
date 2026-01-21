'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4269<T> = T extends (infer U)[]
  ? DeepReadonlyArray4269<U>
  : T extends object
  ? DeepReadonlyObject4269<T>
  : T;

interface DeepReadonlyArray4269<T> extends ReadonlyArray<DeepReadonly4269<T>> {}

type DeepReadonlyObject4269<T> = {
  readonly [P in keyof T]: DeepReadonly4269<T[P]>;
};

type UnionToIntersection4269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4269<T> = UnionToIntersection4269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4269<T extends unknown[], V> = [...T, V];

type TuplifyUnion4269<T, L = LastOf4269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4269<TuplifyUnion4269<Exclude<T, L>>, L>;

type DeepPartial4269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4269<T[P]> }
  : T;

type Paths4269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4269<K, Paths4269<T[K], Prev4269[D]>> : never }[keyof T]
  : never;

type Prev4269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4269 {
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

type ConfigPaths4269 = Paths4269<NestedConfig4269>;

interface HeavyProps4269 {
  config: DeepPartial4269<NestedConfig4269>;
  path?: ConfigPaths4269;
}

const HeavyComponent4269 = memo(function HeavyComponent4269({ config }: HeavyProps4269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4269.displayName = 'HeavyComponent4269';
export default HeavyComponent4269;
