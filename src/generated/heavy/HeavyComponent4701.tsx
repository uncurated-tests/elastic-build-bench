'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4701<T> = T extends (infer U)[]
  ? DeepReadonlyArray4701<U>
  : T extends object
  ? DeepReadonlyObject4701<T>
  : T;

interface DeepReadonlyArray4701<T> extends ReadonlyArray<DeepReadonly4701<T>> {}

type DeepReadonlyObject4701<T> = {
  readonly [P in keyof T]: DeepReadonly4701<T[P]>;
};

type UnionToIntersection4701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4701<T> = UnionToIntersection4701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4701<T extends unknown[], V> = [...T, V];

type TuplifyUnion4701<T, L = LastOf4701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4701<TuplifyUnion4701<Exclude<T, L>>, L>;

type DeepPartial4701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4701<T[P]> }
  : T;

type Paths4701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4701<K, Paths4701<T[K], Prev4701[D]>> : never }[keyof T]
  : never;

type Prev4701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4701 {
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

type ConfigPaths4701 = Paths4701<NestedConfig4701>;

interface HeavyProps4701 {
  config: DeepPartial4701<NestedConfig4701>;
  path?: ConfigPaths4701;
}

const HeavyComponent4701 = memo(function HeavyComponent4701({ config }: HeavyProps4701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4701.displayName = 'HeavyComponent4701';
export default HeavyComponent4701;
