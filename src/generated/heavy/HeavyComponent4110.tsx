'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4110<T> = T extends (infer U)[]
  ? DeepReadonlyArray4110<U>
  : T extends object
  ? DeepReadonlyObject4110<T>
  : T;

interface DeepReadonlyArray4110<T> extends ReadonlyArray<DeepReadonly4110<T>> {}

type DeepReadonlyObject4110<T> = {
  readonly [P in keyof T]: DeepReadonly4110<T[P]>;
};

type UnionToIntersection4110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4110<T> = UnionToIntersection4110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4110<T extends unknown[], V> = [...T, V];

type TuplifyUnion4110<T, L = LastOf4110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4110<TuplifyUnion4110<Exclude<T, L>>, L>;

type DeepPartial4110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4110<T[P]> }
  : T;

type Paths4110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4110<K, Paths4110<T[K], Prev4110[D]>> : never }[keyof T]
  : never;

type Prev4110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4110 {
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

type ConfigPaths4110 = Paths4110<NestedConfig4110>;

interface HeavyProps4110 {
  config: DeepPartial4110<NestedConfig4110>;
  path?: ConfigPaths4110;
}

const HeavyComponent4110 = memo(function HeavyComponent4110({ config }: HeavyProps4110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4110.displayName = 'HeavyComponent4110';
export default HeavyComponent4110;
