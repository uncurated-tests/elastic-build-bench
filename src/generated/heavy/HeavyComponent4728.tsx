'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4728<T> = T extends (infer U)[]
  ? DeepReadonlyArray4728<U>
  : T extends object
  ? DeepReadonlyObject4728<T>
  : T;

interface DeepReadonlyArray4728<T> extends ReadonlyArray<DeepReadonly4728<T>> {}

type DeepReadonlyObject4728<T> = {
  readonly [P in keyof T]: DeepReadonly4728<T[P]>;
};

type UnionToIntersection4728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4728<T> = UnionToIntersection4728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4728<T extends unknown[], V> = [...T, V];

type TuplifyUnion4728<T, L = LastOf4728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4728<TuplifyUnion4728<Exclude<T, L>>, L>;

type DeepPartial4728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4728<T[P]> }
  : T;

type Paths4728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4728<K, Paths4728<T[K], Prev4728[D]>> : never }[keyof T]
  : never;

type Prev4728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4728 {
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

type ConfigPaths4728 = Paths4728<NestedConfig4728>;

interface HeavyProps4728 {
  config: DeepPartial4728<NestedConfig4728>;
  path?: ConfigPaths4728;
}

const HeavyComponent4728 = memo(function HeavyComponent4728({ config }: HeavyProps4728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4728.displayName = 'HeavyComponent4728';
export default HeavyComponent4728;
