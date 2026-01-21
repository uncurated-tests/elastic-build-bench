'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4062<T> = T extends (infer U)[]
  ? DeepReadonlyArray4062<U>
  : T extends object
  ? DeepReadonlyObject4062<T>
  : T;

interface DeepReadonlyArray4062<T> extends ReadonlyArray<DeepReadonly4062<T>> {}

type DeepReadonlyObject4062<T> = {
  readonly [P in keyof T]: DeepReadonly4062<T[P]>;
};

type UnionToIntersection4062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4062<T> = UnionToIntersection4062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4062<T extends unknown[], V> = [...T, V];

type TuplifyUnion4062<T, L = LastOf4062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4062<TuplifyUnion4062<Exclude<T, L>>, L>;

type DeepPartial4062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4062<T[P]> }
  : T;

type Paths4062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4062<K, Paths4062<T[K], Prev4062[D]>> : never }[keyof T]
  : never;

type Prev4062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4062 {
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

type ConfigPaths4062 = Paths4062<NestedConfig4062>;

interface HeavyProps4062 {
  config: DeepPartial4062<NestedConfig4062>;
  path?: ConfigPaths4062;
}

const HeavyComponent4062 = memo(function HeavyComponent4062({ config }: HeavyProps4062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4062.displayName = 'HeavyComponent4062';
export default HeavyComponent4062;
