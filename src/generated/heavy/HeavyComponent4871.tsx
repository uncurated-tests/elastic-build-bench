'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4871<T> = T extends (infer U)[]
  ? DeepReadonlyArray4871<U>
  : T extends object
  ? DeepReadonlyObject4871<T>
  : T;

interface DeepReadonlyArray4871<T> extends ReadonlyArray<DeepReadonly4871<T>> {}

type DeepReadonlyObject4871<T> = {
  readonly [P in keyof T]: DeepReadonly4871<T[P]>;
};

type UnionToIntersection4871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4871<T> = UnionToIntersection4871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4871<T extends unknown[], V> = [...T, V];

type TuplifyUnion4871<T, L = LastOf4871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4871<TuplifyUnion4871<Exclude<T, L>>, L>;

type DeepPartial4871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4871<T[P]> }
  : T;

type Paths4871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4871<K, Paths4871<T[K], Prev4871[D]>> : never }[keyof T]
  : never;

type Prev4871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4871 {
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

type ConfigPaths4871 = Paths4871<NestedConfig4871>;

interface HeavyProps4871 {
  config: DeepPartial4871<NestedConfig4871>;
  path?: ConfigPaths4871;
}

const HeavyComponent4871 = memo(function HeavyComponent4871({ config }: HeavyProps4871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4871.displayName = 'HeavyComponent4871';
export default HeavyComponent4871;
