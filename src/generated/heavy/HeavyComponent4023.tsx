'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4023<T> = T extends (infer U)[]
  ? DeepReadonlyArray4023<U>
  : T extends object
  ? DeepReadonlyObject4023<T>
  : T;

interface DeepReadonlyArray4023<T> extends ReadonlyArray<DeepReadonly4023<T>> {}

type DeepReadonlyObject4023<T> = {
  readonly [P in keyof T]: DeepReadonly4023<T[P]>;
};

type UnionToIntersection4023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4023<T> = UnionToIntersection4023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4023<T extends unknown[], V> = [...T, V];

type TuplifyUnion4023<T, L = LastOf4023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4023<TuplifyUnion4023<Exclude<T, L>>, L>;

type DeepPartial4023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4023<T[P]> }
  : T;

type Paths4023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4023<K, Paths4023<T[K], Prev4023[D]>> : never }[keyof T]
  : never;

type Prev4023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4023 {
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

type ConfigPaths4023 = Paths4023<NestedConfig4023>;

interface HeavyProps4023 {
  config: DeepPartial4023<NestedConfig4023>;
  path?: ConfigPaths4023;
}

const HeavyComponent4023 = memo(function HeavyComponent4023({ config }: HeavyProps4023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4023.displayName = 'HeavyComponent4023';
export default HeavyComponent4023;
