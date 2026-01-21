'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4803<T> = T extends (infer U)[]
  ? DeepReadonlyArray4803<U>
  : T extends object
  ? DeepReadonlyObject4803<T>
  : T;

interface DeepReadonlyArray4803<T> extends ReadonlyArray<DeepReadonly4803<T>> {}

type DeepReadonlyObject4803<T> = {
  readonly [P in keyof T]: DeepReadonly4803<T[P]>;
};

type UnionToIntersection4803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4803<T> = UnionToIntersection4803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4803<T extends unknown[], V> = [...T, V];

type TuplifyUnion4803<T, L = LastOf4803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4803<TuplifyUnion4803<Exclude<T, L>>, L>;

type DeepPartial4803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4803<T[P]> }
  : T;

type Paths4803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4803<K, Paths4803<T[K], Prev4803[D]>> : never }[keyof T]
  : never;

type Prev4803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4803 {
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

type ConfigPaths4803 = Paths4803<NestedConfig4803>;

interface HeavyProps4803 {
  config: DeepPartial4803<NestedConfig4803>;
  path?: ConfigPaths4803;
}

const HeavyComponent4803 = memo(function HeavyComponent4803({ config }: HeavyProps4803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4803.displayName = 'HeavyComponent4803';
export default HeavyComponent4803;
