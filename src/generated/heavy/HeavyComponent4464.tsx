'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4464<T> = T extends (infer U)[]
  ? DeepReadonlyArray4464<U>
  : T extends object
  ? DeepReadonlyObject4464<T>
  : T;

interface DeepReadonlyArray4464<T> extends ReadonlyArray<DeepReadonly4464<T>> {}

type DeepReadonlyObject4464<T> = {
  readonly [P in keyof T]: DeepReadonly4464<T[P]>;
};

type UnionToIntersection4464<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4464<T> = UnionToIntersection4464<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4464<T extends unknown[], V> = [...T, V];

type TuplifyUnion4464<T, L = LastOf4464<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4464<TuplifyUnion4464<Exclude<T, L>>, L>;

type DeepPartial4464<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4464<T[P]> }
  : T;

type Paths4464<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4464<K, Paths4464<T[K], Prev4464[D]>> : never }[keyof T]
  : never;

type Prev4464 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4464<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4464 {
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

type ConfigPaths4464 = Paths4464<NestedConfig4464>;

interface HeavyProps4464 {
  config: DeepPartial4464<NestedConfig4464>;
  path?: ConfigPaths4464;
}

const HeavyComponent4464 = memo(function HeavyComponent4464({ config }: HeavyProps4464) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4464) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4464 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4464: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4464.displayName = 'HeavyComponent4464';
export default HeavyComponent4464;
