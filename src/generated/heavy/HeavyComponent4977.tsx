'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4977<T> = T extends (infer U)[]
  ? DeepReadonlyArray4977<U>
  : T extends object
  ? DeepReadonlyObject4977<T>
  : T;

interface DeepReadonlyArray4977<T> extends ReadonlyArray<DeepReadonly4977<T>> {}

type DeepReadonlyObject4977<T> = {
  readonly [P in keyof T]: DeepReadonly4977<T[P]>;
};

type UnionToIntersection4977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4977<T> = UnionToIntersection4977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4977<T extends unknown[], V> = [...T, V];

type TuplifyUnion4977<T, L = LastOf4977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4977<TuplifyUnion4977<Exclude<T, L>>, L>;

type DeepPartial4977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4977<T[P]> }
  : T;

type Paths4977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4977<K, Paths4977<T[K], Prev4977[D]>> : never }[keyof T]
  : never;

type Prev4977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4977 {
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

type ConfigPaths4977 = Paths4977<NestedConfig4977>;

interface HeavyProps4977 {
  config: DeepPartial4977<NestedConfig4977>;
  path?: ConfigPaths4977;
}

const HeavyComponent4977 = memo(function HeavyComponent4977({ config }: HeavyProps4977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4977.displayName = 'HeavyComponent4977';
export default HeavyComponent4977;
