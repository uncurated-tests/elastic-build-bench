'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4858<T> = T extends (infer U)[]
  ? DeepReadonlyArray4858<U>
  : T extends object
  ? DeepReadonlyObject4858<T>
  : T;

interface DeepReadonlyArray4858<T> extends ReadonlyArray<DeepReadonly4858<T>> {}

type DeepReadonlyObject4858<T> = {
  readonly [P in keyof T]: DeepReadonly4858<T[P]>;
};

type UnionToIntersection4858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4858<T> = UnionToIntersection4858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4858<T extends unknown[], V> = [...T, V];

type TuplifyUnion4858<T, L = LastOf4858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4858<TuplifyUnion4858<Exclude<T, L>>, L>;

type DeepPartial4858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4858<T[P]> }
  : T;

type Paths4858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4858<K, Paths4858<T[K], Prev4858[D]>> : never }[keyof T]
  : never;

type Prev4858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4858 {
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

type ConfigPaths4858 = Paths4858<NestedConfig4858>;

interface HeavyProps4858 {
  config: DeepPartial4858<NestedConfig4858>;
  path?: ConfigPaths4858;
}

const HeavyComponent4858 = memo(function HeavyComponent4858({ config }: HeavyProps4858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4858.displayName = 'HeavyComponent4858';
export default HeavyComponent4858;
