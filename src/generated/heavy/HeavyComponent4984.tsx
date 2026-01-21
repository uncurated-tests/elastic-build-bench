'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4984<T> = T extends (infer U)[]
  ? DeepReadonlyArray4984<U>
  : T extends object
  ? DeepReadonlyObject4984<T>
  : T;

interface DeepReadonlyArray4984<T> extends ReadonlyArray<DeepReadonly4984<T>> {}

type DeepReadonlyObject4984<T> = {
  readonly [P in keyof T]: DeepReadonly4984<T[P]>;
};

type UnionToIntersection4984<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4984<T> = UnionToIntersection4984<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4984<T extends unknown[], V> = [...T, V];

type TuplifyUnion4984<T, L = LastOf4984<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4984<TuplifyUnion4984<Exclude<T, L>>, L>;

type DeepPartial4984<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4984<T[P]> }
  : T;

type Paths4984<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4984<K, Paths4984<T[K], Prev4984[D]>> : never }[keyof T]
  : never;

type Prev4984 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4984<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4984 {
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

type ConfigPaths4984 = Paths4984<NestedConfig4984>;

interface HeavyProps4984 {
  config: DeepPartial4984<NestedConfig4984>;
  path?: ConfigPaths4984;
}

const HeavyComponent4984 = memo(function HeavyComponent4984({ config }: HeavyProps4984) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4984) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4984 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4984: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4984.displayName = 'HeavyComponent4984';
export default HeavyComponent4984;
