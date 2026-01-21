'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4122<T> = T extends (infer U)[]
  ? DeepReadonlyArray4122<U>
  : T extends object
  ? DeepReadonlyObject4122<T>
  : T;

interface DeepReadonlyArray4122<T> extends ReadonlyArray<DeepReadonly4122<T>> {}

type DeepReadonlyObject4122<T> = {
  readonly [P in keyof T]: DeepReadonly4122<T[P]>;
};

type UnionToIntersection4122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4122<T> = UnionToIntersection4122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4122<T extends unknown[], V> = [...T, V];

type TuplifyUnion4122<T, L = LastOf4122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4122<TuplifyUnion4122<Exclude<T, L>>, L>;

type DeepPartial4122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4122<T[P]> }
  : T;

type Paths4122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4122<K, Paths4122<T[K], Prev4122[D]>> : never }[keyof T]
  : never;

type Prev4122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4122 {
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

type ConfigPaths4122 = Paths4122<NestedConfig4122>;

interface HeavyProps4122 {
  config: DeepPartial4122<NestedConfig4122>;
  path?: ConfigPaths4122;
}

const HeavyComponent4122 = memo(function HeavyComponent4122({ config }: HeavyProps4122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4122.displayName = 'HeavyComponent4122';
export default HeavyComponent4122;
