'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4116<T> = T extends (infer U)[]
  ? DeepReadonlyArray4116<U>
  : T extends object
  ? DeepReadonlyObject4116<T>
  : T;

interface DeepReadonlyArray4116<T> extends ReadonlyArray<DeepReadonly4116<T>> {}

type DeepReadonlyObject4116<T> = {
  readonly [P in keyof T]: DeepReadonly4116<T[P]>;
};

type UnionToIntersection4116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4116<T> = UnionToIntersection4116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4116<T extends unknown[], V> = [...T, V];

type TuplifyUnion4116<T, L = LastOf4116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4116<TuplifyUnion4116<Exclude<T, L>>, L>;

type DeepPartial4116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4116<T[P]> }
  : T;

type Paths4116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4116<K, Paths4116<T[K], Prev4116[D]>> : never }[keyof T]
  : never;

type Prev4116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4116 {
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

type ConfigPaths4116 = Paths4116<NestedConfig4116>;

interface HeavyProps4116 {
  config: DeepPartial4116<NestedConfig4116>;
  path?: ConfigPaths4116;
}

const HeavyComponent4116 = memo(function HeavyComponent4116({ config }: HeavyProps4116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4116.displayName = 'HeavyComponent4116';
export default HeavyComponent4116;
