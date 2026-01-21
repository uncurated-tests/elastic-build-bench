'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4891<T> = T extends (infer U)[]
  ? DeepReadonlyArray4891<U>
  : T extends object
  ? DeepReadonlyObject4891<T>
  : T;

interface DeepReadonlyArray4891<T> extends ReadonlyArray<DeepReadonly4891<T>> {}

type DeepReadonlyObject4891<T> = {
  readonly [P in keyof T]: DeepReadonly4891<T[P]>;
};

type UnionToIntersection4891<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4891<T> = UnionToIntersection4891<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4891<T extends unknown[], V> = [...T, V];

type TuplifyUnion4891<T, L = LastOf4891<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4891<TuplifyUnion4891<Exclude<T, L>>, L>;

type DeepPartial4891<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4891<T[P]> }
  : T;

type Paths4891<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4891<K, Paths4891<T[K], Prev4891[D]>> : never }[keyof T]
  : never;

type Prev4891 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4891<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4891 {
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

type ConfigPaths4891 = Paths4891<NestedConfig4891>;

interface HeavyProps4891 {
  config: DeepPartial4891<NestedConfig4891>;
  path?: ConfigPaths4891;
}

const HeavyComponent4891 = memo(function HeavyComponent4891({ config }: HeavyProps4891) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4891) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4891 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4891: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4891.displayName = 'HeavyComponent4891';
export default HeavyComponent4891;
