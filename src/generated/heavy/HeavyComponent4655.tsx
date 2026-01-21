'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4655<T> = T extends (infer U)[]
  ? DeepReadonlyArray4655<U>
  : T extends object
  ? DeepReadonlyObject4655<T>
  : T;

interface DeepReadonlyArray4655<T> extends ReadonlyArray<DeepReadonly4655<T>> {}

type DeepReadonlyObject4655<T> = {
  readonly [P in keyof T]: DeepReadonly4655<T[P]>;
};

type UnionToIntersection4655<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4655<T> = UnionToIntersection4655<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4655<T extends unknown[], V> = [...T, V];

type TuplifyUnion4655<T, L = LastOf4655<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4655<TuplifyUnion4655<Exclude<T, L>>, L>;

type DeepPartial4655<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4655<T[P]> }
  : T;

type Paths4655<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4655<K, Paths4655<T[K], Prev4655[D]>> : never }[keyof T]
  : never;

type Prev4655 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4655<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4655 {
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

type ConfigPaths4655 = Paths4655<NestedConfig4655>;

interface HeavyProps4655 {
  config: DeepPartial4655<NestedConfig4655>;
  path?: ConfigPaths4655;
}

const HeavyComponent4655 = memo(function HeavyComponent4655({ config }: HeavyProps4655) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4655) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4655 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4655: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4655.displayName = 'HeavyComponent4655';
export default HeavyComponent4655;
