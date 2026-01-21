'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4378<T> = T extends (infer U)[]
  ? DeepReadonlyArray4378<U>
  : T extends object
  ? DeepReadonlyObject4378<T>
  : T;

interface DeepReadonlyArray4378<T> extends ReadonlyArray<DeepReadonly4378<T>> {}

type DeepReadonlyObject4378<T> = {
  readonly [P in keyof T]: DeepReadonly4378<T[P]>;
};

type UnionToIntersection4378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4378<T> = UnionToIntersection4378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4378<T extends unknown[], V> = [...T, V];

type TuplifyUnion4378<T, L = LastOf4378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4378<TuplifyUnion4378<Exclude<T, L>>, L>;

type DeepPartial4378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4378<T[P]> }
  : T;

type Paths4378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4378<K, Paths4378<T[K], Prev4378[D]>> : never }[keyof T]
  : never;

type Prev4378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4378 {
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

type ConfigPaths4378 = Paths4378<NestedConfig4378>;

interface HeavyProps4378 {
  config: DeepPartial4378<NestedConfig4378>;
  path?: ConfigPaths4378;
}

const HeavyComponent4378 = memo(function HeavyComponent4378({ config }: HeavyProps4378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4378.displayName = 'HeavyComponent4378';
export default HeavyComponent4378;
