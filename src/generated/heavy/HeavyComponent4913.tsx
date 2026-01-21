'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4913<T> = T extends (infer U)[]
  ? DeepReadonlyArray4913<U>
  : T extends object
  ? DeepReadonlyObject4913<T>
  : T;

interface DeepReadonlyArray4913<T> extends ReadonlyArray<DeepReadonly4913<T>> {}

type DeepReadonlyObject4913<T> = {
  readonly [P in keyof T]: DeepReadonly4913<T[P]>;
};

type UnionToIntersection4913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4913<T> = UnionToIntersection4913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4913<T extends unknown[], V> = [...T, V];

type TuplifyUnion4913<T, L = LastOf4913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4913<TuplifyUnion4913<Exclude<T, L>>, L>;

type DeepPartial4913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4913<T[P]> }
  : T;

type Paths4913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4913<K, Paths4913<T[K], Prev4913[D]>> : never }[keyof T]
  : never;

type Prev4913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4913 {
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

type ConfigPaths4913 = Paths4913<NestedConfig4913>;

interface HeavyProps4913 {
  config: DeepPartial4913<NestedConfig4913>;
  path?: ConfigPaths4913;
}

const HeavyComponent4913 = memo(function HeavyComponent4913({ config }: HeavyProps4913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4913.displayName = 'HeavyComponent4913';
export default HeavyComponent4913;
