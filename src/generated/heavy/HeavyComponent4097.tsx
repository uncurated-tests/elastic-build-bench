'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4097<T> = T extends (infer U)[]
  ? DeepReadonlyArray4097<U>
  : T extends object
  ? DeepReadonlyObject4097<T>
  : T;

interface DeepReadonlyArray4097<T> extends ReadonlyArray<DeepReadonly4097<T>> {}

type DeepReadonlyObject4097<T> = {
  readonly [P in keyof T]: DeepReadonly4097<T[P]>;
};

type UnionToIntersection4097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4097<T> = UnionToIntersection4097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4097<T extends unknown[], V> = [...T, V];

type TuplifyUnion4097<T, L = LastOf4097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4097<TuplifyUnion4097<Exclude<T, L>>, L>;

type DeepPartial4097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4097<T[P]> }
  : T;

type Paths4097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4097<K, Paths4097<T[K], Prev4097[D]>> : never }[keyof T]
  : never;

type Prev4097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4097 {
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

type ConfigPaths4097 = Paths4097<NestedConfig4097>;

interface HeavyProps4097 {
  config: DeepPartial4097<NestedConfig4097>;
  path?: ConfigPaths4097;
}

const HeavyComponent4097 = memo(function HeavyComponent4097({ config }: HeavyProps4097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4097.displayName = 'HeavyComponent4097';
export default HeavyComponent4097;
