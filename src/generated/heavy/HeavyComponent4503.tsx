'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4503<T> = T extends (infer U)[]
  ? DeepReadonlyArray4503<U>
  : T extends object
  ? DeepReadonlyObject4503<T>
  : T;

interface DeepReadonlyArray4503<T> extends ReadonlyArray<DeepReadonly4503<T>> {}

type DeepReadonlyObject4503<T> = {
  readonly [P in keyof T]: DeepReadonly4503<T[P]>;
};

type UnionToIntersection4503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4503<T> = UnionToIntersection4503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4503<T extends unknown[], V> = [...T, V];

type TuplifyUnion4503<T, L = LastOf4503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4503<TuplifyUnion4503<Exclude<T, L>>, L>;

type DeepPartial4503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4503<T[P]> }
  : T;

type Paths4503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4503<K, Paths4503<T[K], Prev4503[D]>> : never }[keyof T]
  : never;

type Prev4503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4503 {
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

type ConfigPaths4503 = Paths4503<NestedConfig4503>;

interface HeavyProps4503 {
  config: DeepPartial4503<NestedConfig4503>;
  path?: ConfigPaths4503;
}

const HeavyComponent4503 = memo(function HeavyComponent4503({ config }: HeavyProps4503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4503.displayName = 'HeavyComponent4503';
export default HeavyComponent4503;
