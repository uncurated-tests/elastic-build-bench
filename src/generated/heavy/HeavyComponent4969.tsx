'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4969<T> = T extends (infer U)[]
  ? DeepReadonlyArray4969<U>
  : T extends object
  ? DeepReadonlyObject4969<T>
  : T;

interface DeepReadonlyArray4969<T> extends ReadonlyArray<DeepReadonly4969<T>> {}

type DeepReadonlyObject4969<T> = {
  readonly [P in keyof T]: DeepReadonly4969<T[P]>;
};

type UnionToIntersection4969<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4969<T> = UnionToIntersection4969<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4969<T extends unknown[], V> = [...T, V];

type TuplifyUnion4969<T, L = LastOf4969<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4969<TuplifyUnion4969<Exclude<T, L>>, L>;

type DeepPartial4969<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4969<T[P]> }
  : T;

type Paths4969<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4969<K, Paths4969<T[K], Prev4969[D]>> : never }[keyof T]
  : never;

type Prev4969 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4969<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4969 {
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

type ConfigPaths4969 = Paths4969<NestedConfig4969>;

interface HeavyProps4969 {
  config: DeepPartial4969<NestedConfig4969>;
  path?: ConfigPaths4969;
}

const HeavyComponent4969 = memo(function HeavyComponent4969({ config }: HeavyProps4969) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4969) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4969 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4969: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4969.displayName = 'HeavyComponent4969';
export default HeavyComponent4969;
