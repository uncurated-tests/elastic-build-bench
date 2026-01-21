'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4089<T> = T extends (infer U)[]
  ? DeepReadonlyArray4089<U>
  : T extends object
  ? DeepReadonlyObject4089<T>
  : T;

interface DeepReadonlyArray4089<T> extends ReadonlyArray<DeepReadonly4089<T>> {}

type DeepReadonlyObject4089<T> = {
  readonly [P in keyof T]: DeepReadonly4089<T[P]>;
};

type UnionToIntersection4089<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4089<T> = UnionToIntersection4089<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4089<T extends unknown[], V> = [...T, V];

type TuplifyUnion4089<T, L = LastOf4089<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4089<TuplifyUnion4089<Exclude<T, L>>, L>;

type DeepPartial4089<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4089<T[P]> }
  : T;

type Paths4089<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4089<K, Paths4089<T[K], Prev4089[D]>> : never }[keyof T]
  : never;

type Prev4089 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4089<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4089 {
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

type ConfigPaths4089 = Paths4089<NestedConfig4089>;

interface HeavyProps4089 {
  config: DeepPartial4089<NestedConfig4089>;
  path?: ConfigPaths4089;
}

const HeavyComponent4089 = memo(function HeavyComponent4089({ config }: HeavyProps4089) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4089) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4089 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4089: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4089.displayName = 'HeavyComponent4089';
export default HeavyComponent4089;
