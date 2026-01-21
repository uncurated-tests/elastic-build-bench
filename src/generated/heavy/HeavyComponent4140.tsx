'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4140<T> = T extends (infer U)[]
  ? DeepReadonlyArray4140<U>
  : T extends object
  ? DeepReadonlyObject4140<T>
  : T;

interface DeepReadonlyArray4140<T> extends ReadonlyArray<DeepReadonly4140<T>> {}

type DeepReadonlyObject4140<T> = {
  readonly [P in keyof T]: DeepReadonly4140<T[P]>;
};

type UnionToIntersection4140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4140<T> = UnionToIntersection4140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4140<T extends unknown[], V> = [...T, V];

type TuplifyUnion4140<T, L = LastOf4140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4140<TuplifyUnion4140<Exclude<T, L>>, L>;

type DeepPartial4140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4140<T[P]> }
  : T;

type Paths4140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4140<K, Paths4140<T[K], Prev4140[D]>> : never }[keyof T]
  : never;

type Prev4140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4140 {
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

type ConfigPaths4140 = Paths4140<NestedConfig4140>;

interface HeavyProps4140 {
  config: DeepPartial4140<NestedConfig4140>;
  path?: ConfigPaths4140;
}

const HeavyComponent4140 = memo(function HeavyComponent4140({ config }: HeavyProps4140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4140.displayName = 'HeavyComponent4140';
export default HeavyComponent4140;
