'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4264<T> = T extends (infer U)[]
  ? DeepReadonlyArray4264<U>
  : T extends object
  ? DeepReadonlyObject4264<T>
  : T;

interface DeepReadonlyArray4264<T> extends ReadonlyArray<DeepReadonly4264<T>> {}

type DeepReadonlyObject4264<T> = {
  readonly [P in keyof T]: DeepReadonly4264<T[P]>;
};

type UnionToIntersection4264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4264<T> = UnionToIntersection4264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4264<T extends unknown[], V> = [...T, V];

type TuplifyUnion4264<T, L = LastOf4264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4264<TuplifyUnion4264<Exclude<T, L>>, L>;

type DeepPartial4264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4264<T[P]> }
  : T;

type Paths4264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4264<K, Paths4264<T[K], Prev4264[D]>> : never }[keyof T]
  : never;

type Prev4264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4264 {
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

type ConfigPaths4264 = Paths4264<NestedConfig4264>;

interface HeavyProps4264 {
  config: DeepPartial4264<NestedConfig4264>;
  path?: ConfigPaths4264;
}

const HeavyComponent4264 = memo(function HeavyComponent4264({ config }: HeavyProps4264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4264.displayName = 'HeavyComponent4264';
export default HeavyComponent4264;
