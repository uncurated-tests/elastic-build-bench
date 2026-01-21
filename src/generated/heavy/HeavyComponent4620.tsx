'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4620<T> = T extends (infer U)[]
  ? DeepReadonlyArray4620<U>
  : T extends object
  ? DeepReadonlyObject4620<T>
  : T;

interface DeepReadonlyArray4620<T> extends ReadonlyArray<DeepReadonly4620<T>> {}

type DeepReadonlyObject4620<T> = {
  readonly [P in keyof T]: DeepReadonly4620<T[P]>;
};

type UnionToIntersection4620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4620<T> = UnionToIntersection4620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4620<T extends unknown[], V> = [...T, V];

type TuplifyUnion4620<T, L = LastOf4620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4620<TuplifyUnion4620<Exclude<T, L>>, L>;

type DeepPartial4620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4620<T[P]> }
  : T;

type Paths4620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4620<K, Paths4620<T[K], Prev4620[D]>> : never }[keyof T]
  : never;

type Prev4620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4620 {
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

type ConfigPaths4620 = Paths4620<NestedConfig4620>;

interface HeavyProps4620 {
  config: DeepPartial4620<NestedConfig4620>;
  path?: ConfigPaths4620;
}

const HeavyComponent4620 = memo(function HeavyComponent4620({ config }: HeavyProps4620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4620.displayName = 'HeavyComponent4620';
export default HeavyComponent4620;
