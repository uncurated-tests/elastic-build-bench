'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4765<T> = T extends (infer U)[]
  ? DeepReadonlyArray4765<U>
  : T extends object
  ? DeepReadonlyObject4765<T>
  : T;

interface DeepReadonlyArray4765<T> extends ReadonlyArray<DeepReadonly4765<T>> {}

type DeepReadonlyObject4765<T> = {
  readonly [P in keyof T]: DeepReadonly4765<T[P]>;
};

type UnionToIntersection4765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4765<T> = UnionToIntersection4765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4765<T extends unknown[], V> = [...T, V];

type TuplifyUnion4765<T, L = LastOf4765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4765<TuplifyUnion4765<Exclude<T, L>>, L>;

type DeepPartial4765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4765<T[P]> }
  : T;

type Paths4765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4765<K, Paths4765<T[K], Prev4765[D]>> : never }[keyof T]
  : never;

type Prev4765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4765 {
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

type ConfigPaths4765 = Paths4765<NestedConfig4765>;

interface HeavyProps4765 {
  config: DeepPartial4765<NestedConfig4765>;
  path?: ConfigPaths4765;
}

const HeavyComponent4765 = memo(function HeavyComponent4765({ config }: HeavyProps4765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4765.displayName = 'HeavyComponent4765';
export default HeavyComponent4765;
