'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4166<T> = T extends (infer U)[]
  ? DeepReadonlyArray4166<U>
  : T extends object
  ? DeepReadonlyObject4166<T>
  : T;

interface DeepReadonlyArray4166<T> extends ReadonlyArray<DeepReadonly4166<T>> {}

type DeepReadonlyObject4166<T> = {
  readonly [P in keyof T]: DeepReadonly4166<T[P]>;
};

type UnionToIntersection4166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4166<T> = UnionToIntersection4166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4166<T extends unknown[], V> = [...T, V];

type TuplifyUnion4166<T, L = LastOf4166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4166<TuplifyUnion4166<Exclude<T, L>>, L>;

type DeepPartial4166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4166<T[P]> }
  : T;

type Paths4166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4166<K, Paths4166<T[K], Prev4166[D]>> : never }[keyof T]
  : never;

type Prev4166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4166 {
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

type ConfigPaths4166 = Paths4166<NestedConfig4166>;

interface HeavyProps4166 {
  config: DeepPartial4166<NestedConfig4166>;
  path?: ConfigPaths4166;
}

const HeavyComponent4166 = memo(function HeavyComponent4166({ config }: HeavyProps4166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4166.displayName = 'HeavyComponent4166';
export default HeavyComponent4166;
