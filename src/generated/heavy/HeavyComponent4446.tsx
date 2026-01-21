'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4446<T> = T extends (infer U)[]
  ? DeepReadonlyArray4446<U>
  : T extends object
  ? DeepReadonlyObject4446<T>
  : T;

interface DeepReadonlyArray4446<T> extends ReadonlyArray<DeepReadonly4446<T>> {}

type DeepReadonlyObject4446<T> = {
  readonly [P in keyof T]: DeepReadonly4446<T[P]>;
};

type UnionToIntersection4446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4446<T> = UnionToIntersection4446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4446<T extends unknown[], V> = [...T, V];

type TuplifyUnion4446<T, L = LastOf4446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4446<TuplifyUnion4446<Exclude<T, L>>, L>;

type DeepPartial4446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4446<T[P]> }
  : T;

type Paths4446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4446<K, Paths4446<T[K], Prev4446[D]>> : never }[keyof T]
  : never;

type Prev4446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4446 {
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

type ConfigPaths4446 = Paths4446<NestedConfig4446>;

interface HeavyProps4446 {
  config: DeepPartial4446<NestedConfig4446>;
  path?: ConfigPaths4446;
}

const HeavyComponent4446 = memo(function HeavyComponent4446({ config }: HeavyProps4446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4446.displayName = 'HeavyComponent4446';
export default HeavyComponent4446;
