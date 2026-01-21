'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4051<T> = T extends (infer U)[]
  ? DeepReadonlyArray4051<U>
  : T extends object
  ? DeepReadonlyObject4051<T>
  : T;

interface DeepReadonlyArray4051<T> extends ReadonlyArray<DeepReadonly4051<T>> {}

type DeepReadonlyObject4051<T> = {
  readonly [P in keyof T]: DeepReadonly4051<T[P]>;
};

type UnionToIntersection4051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4051<T> = UnionToIntersection4051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4051<T extends unknown[], V> = [...T, V];

type TuplifyUnion4051<T, L = LastOf4051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4051<TuplifyUnion4051<Exclude<T, L>>, L>;

type DeepPartial4051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4051<T[P]> }
  : T;

type Paths4051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4051<K, Paths4051<T[K], Prev4051[D]>> : never }[keyof T]
  : never;

type Prev4051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4051 {
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

type ConfigPaths4051 = Paths4051<NestedConfig4051>;

interface HeavyProps4051 {
  config: DeepPartial4051<NestedConfig4051>;
  path?: ConfigPaths4051;
}

const HeavyComponent4051 = memo(function HeavyComponent4051({ config }: HeavyProps4051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4051.displayName = 'HeavyComponent4051';
export default HeavyComponent4051;
