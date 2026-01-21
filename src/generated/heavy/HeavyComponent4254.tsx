'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4254<T> = T extends (infer U)[]
  ? DeepReadonlyArray4254<U>
  : T extends object
  ? DeepReadonlyObject4254<T>
  : T;

interface DeepReadonlyArray4254<T> extends ReadonlyArray<DeepReadonly4254<T>> {}

type DeepReadonlyObject4254<T> = {
  readonly [P in keyof T]: DeepReadonly4254<T[P]>;
};

type UnionToIntersection4254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4254<T> = UnionToIntersection4254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4254<T extends unknown[], V> = [...T, V];

type TuplifyUnion4254<T, L = LastOf4254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4254<TuplifyUnion4254<Exclude<T, L>>, L>;

type DeepPartial4254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4254<T[P]> }
  : T;

type Paths4254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4254<K, Paths4254<T[K], Prev4254[D]>> : never }[keyof T]
  : never;

type Prev4254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4254 {
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

type ConfigPaths4254 = Paths4254<NestedConfig4254>;

interface HeavyProps4254 {
  config: DeepPartial4254<NestedConfig4254>;
  path?: ConfigPaths4254;
}

const HeavyComponent4254 = memo(function HeavyComponent4254({ config }: HeavyProps4254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4254.displayName = 'HeavyComponent4254';
export default HeavyComponent4254;
