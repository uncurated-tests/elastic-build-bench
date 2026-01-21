'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4141<T> = T extends (infer U)[]
  ? DeepReadonlyArray4141<U>
  : T extends object
  ? DeepReadonlyObject4141<T>
  : T;

interface DeepReadonlyArray4141<T> extends ReadonlyArray<DeepReadonly4141<T>> {}

type DeepReadonlyObject4141<T> = {
  readonly [P in keyof T]: DeepReadonly4141<T[P]>;
};

type UnionToIntersection4141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4141<T> = UnionToIntersection4141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4141<T extends unknown[], V> = [...T, V];

type TuplifyUnion4141<T, L = LastOf4141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4141<TuplifyUnion4141<Exclude<T, L>>, L>;

type DeepPartial4141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4141<T[P]> }
  : T;

type Paths4141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4141<K, Paths4141<T[K], Prev4141[D]>> : never }[keyof T]
  : never;

type Prev4141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4141 {
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

type ConfigPaths4141 = Paths4141<NestedConfig4141>;

interface HeavyProps4141 {
  config: DeepPartial4141<NestedConfig4141>;
  path?: ConfigPaths4141;
}

const HeavyComponent4141 = memo(function HeavyComponent4141({ config }: HeavyProps4141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4141.displayName = 'HeavyComponent4141';
export default HeavyComponent4141;
