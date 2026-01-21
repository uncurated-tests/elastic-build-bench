'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4478<T> = T extends (infer U)[]
  ? DeepReadonlyArray4478<U>
  : T extends object
  ? DeepReadonlyObject4478<T>
  : T;

interface DeepReadonlyArray4478<T> extends ReadonlyArray<DeepReadonly4478<T>> {}

type DeepReadonlyObject4478<T> = {
  readonly [P in keyof T]: DeepReadonly4478<T[P]>;
};

type UnionToIntersection4478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4478<T> = UnionToIntersection4478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4478<T extends unknown[], V> = [...T, V];

type TuplifyUnion4478<T, L = LastOf4478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4478<TuplifyUnion4478<Exclude<T, L>>, L>;

type DeepPartial4478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4478<T[P]> }
  : T;

type Paths4478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4478<K, Paths4478<T[K], Prev4478[D]>> : never }[keyof T]
  : never;

type Prev4478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4478 {
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

type ConfigPaths4478 = Paths4478<NestedConfig4478>;

interface HeavyProps4478 {
  config: DeepPartial4478<NestedConfig4478>;
  path?: ConfigPaths4478;
}

const HeavyComponent4478 = memo(function HeavyComponent4478({ config }: HeavyProps4478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4478.displayName = 'HeavyComponent4478';
export default HeavyComponent4478;
