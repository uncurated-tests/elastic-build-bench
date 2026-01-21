'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4660<T> = T extends (infer U)[]
  ? DeepReadonlyArray4660<U>
  : T extends object
  ? DeepReadonlyObject4660<T>
  : T;

interface DeepReadonlyArray4660<T> extends ReadonlyArray<DeepReadonly4660<T>> {}

type DeepReadonlyObject4660<T> = {
  readonly [P in keyof T]: DeepReadonly4660<T[P]>;
};

type UnionToIntersection4660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4660<T> = UnionToIntersection4660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4660<T extends unknown[], V> = [...T, V];

type TuplifyUnion4660<T, L = LastOf4660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4660<TuplifyUnion4660<Exclude<T, L>>, L>;

type DeepPartial4660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4660<T[P]> }
  : T;

type Paths4660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4660<K, Paths4660<T[K], Prev4660[D]>> : never }[keyof T]
  : never;

type Prev4660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4660 {
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

type ConfigPaths4660 = Paths4660<NestedConfig4660>;

interface HeavyProps4660 {
  config: DeepPartial4660<NestedConfig4660>;
  path?: ConfigPaths4660;
}

const HeavyComponent4660 = memo(function HeavyComponent4660({ config }: HeavyProps4660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4660.displayName = 'HeavyComponent4660';
export default HeavyComponent4660;
