'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4470<T> = T extends (infer U)[]
  ? DeepReadonlyArray4470<U>
  : T extends object
  ? DeepReadonlyObject4470<T>
  : T;

interface DeepReadonlyArray4470<T> extends ReadonlyArray<DeepReadonly4470<T>> {}

type DeepReadonlyObject4470<T> = {
  readonly [P in keyof T]: DeepReadonly4470<T[P]>;
};

type UnionToIntersection4470<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4470<T> = UnionToIntersection4470<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4470<T extends unknown[], V> = [...T, V];

type TuplifyUnion4470<T, L = LastOf4470<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4470<TuplifyUnion4470<Exclude<T, L>>, L>;

type DeepPartial4470<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4470<T[P]> }
  : T;

type Paths4470<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4470<K, Paths4470<T[K], Prev4470[D]>> : never }[keyof T]
  : never;

type Prev4470 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4470<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4470 {
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

type ConfigPaths4470 = Paths4470<NestedConfig4470>;

interface HeavyProps4470 {
  config: DeepPartial4470<NestedConfig4470>;
  path?: ConfigPaths4470;
}

const HeavyComponent4470 = memo(function HeavyComponent4470({ config }: HeavyProps4470) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4470) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4470 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4470: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4470.displayName = 'HeavyComponent4470';
export default HeavyComponent4470;
