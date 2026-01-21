'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4864<T> = T extends (infer U)[]
  ? DeepReadonlyArray4864<U>
  : T extends object
  ? DeepReadonlyObject4864<T>
  : T;

interface DeepReadonlyArray4864<T> extends ReadonlyArray<DeepReadonly4864<T>> {}

type DeepReadonlyObject4864<T> = {
  readonly [P in keyof T]: DeepReadonly4864<T[P]>;
};

type UnionToIntersection4864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4864<T> = UnionToIntersection4864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4864<T extends unknown[], V> = [...T, V];

type TuplifyUnion4864<T, L = LastOf4864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4864<TuplifyUnion4864<Exclude<T, L>>, L>;

type DeepPartial4864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4864<T[P]> }
  : T;

type Paths4864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4864<K, Paths4864<T[K], Prev4864[D]>> : never }[keyof T]
  : never;

type Prev4864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4864 {
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

type ConfigPaths4864 = Paths4864<NestedConfig4864>;

interface HeavyProps4864 {
  config: DeepPartial4864<NestedConfig4864>;
  path?: ConfigPaths4864;
}

const HeavyComponent4864 = memo(function HeavyComponent4864({ config }: HeavyProps4864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4864.displayName = 'HeavyComponent4864';
export default HeavyComponent4864;
