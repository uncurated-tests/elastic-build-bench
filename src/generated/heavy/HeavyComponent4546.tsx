'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4546<T> = T extends (infer U)[]
  ? DeepReadonlyArray4546<U>
  : T extends object
  ? DeepReadonlyObject4546<T>
  : T;

interface DeepReadonlyArray4546<T> extends ReadonlyArray<DeepReadonly4546<T>> {}

type DeepReadonlyObject4546<T> = {
  readonly [P in keyof T]: DeepReadonly4546<T[P]>;
};

type UnionToIntersection4546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4546<T> = UnionToIntersection4546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4546<T extends unknown[], V> = [...T, V];

type TuplifyUnion4546<T, L = LastOf4546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4546<TuplifyUnion4546<Exclude<T, L>>, L>;

type DeepPartial4546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4546<T[P]> }
  : T;

type Paths4546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4546<K, Paths4546<T[K], Prev4546[D]>> : never }[keyof T]
  : never;

type Prev4546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4546 {
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

type ConfigPaths4546 = Paths4546<NestedConfig4546>;

interface HeavyProps4546 {
  config: DeepPartial4546<NestedConfig4546>;
  path?: ConfigPaths4546;
}

const HeavyComponent4546 = memo(function HeavyComponent4546({ config }: HeavyProps4546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4546.displayName = 'HeavyComponent4546';
export default HeavyComponent4546;
