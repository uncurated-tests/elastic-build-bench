'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4796<T> = T extends (infer U)[]
  ? DeepReadonlyArray4796<U>
  : T extends object
  ? DeepReadonlyObject4796<T>
  : T;

interface DeepReadonlyArray4796<T> extends ReadonlyArray<DeepReadonly4796<T>> {}

type DeepReadonlyObject4796<T> = {
  readonly [P in keyof T]: DeepReadonly4796<T[P]>;
};

type UnionToIntersection4796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4796<T> = UnionToIntersection4796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4796<T extends unknown[], V> = [...T, V];

type TuplifyUnion4796<T, L = LastOf4796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4796<TuplifyUnion4796<Exclude<T, L>>, L>;

type DeepPartial4796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4796<T[P]> }
  : T;

type Paths4796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4796<K, Paths4796<T[K], Prev4796[D]>> : never }[keyof T]
  : never;

type Prev4796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4796 {
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

type ConfigPaths4796 = Paths4796<NestedConfig4796>;

interface HeavyProps4796 {
  config: DeepPartial4796<NestedConfig4796>;
  path?: ConfigPaths4796;
}

const HeavyComponent4796 = memo(function HeavyComponent4796({ config }: HeavyProps4796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4796.displayName = 'HeavyComponent4796';
export default HeavyComponent4796;
