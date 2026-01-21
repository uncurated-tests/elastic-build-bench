'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4040<T> = T extends (infer U)[]
  ? DeepReadonlyArray4040<U>
  : T extends object
  ? DeepReadonlyObject4040<T>
  : T;

interface DeepReadonlyArray4040<T> extends ReadonlyArray<DeepReadonly4040<T>> {}

type DeepReadonlyObject4040<T> = {
  readonly [P in keyof T]: DeepReadonly4040<T[P]>;
};

type UnionToIntersection4040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4040<T> = UnionToIntersection4040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4040<T extends unknown[], V> = [...T, V];

type TuplifyUnion4040<T, L = LastOf4040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4040<TuplifyUnion4040<Exclude<T, L>>, L>;

type DeepPartial4040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4040<T[P]> }
  : T;

type Paths4040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4040<K, Paths4040<T[K], Prev4040[D]>> : never }[keyof T]
  : never;

type Prev4040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4040 {
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

type ConfigPaths4040 = Paths4040<NestedConfig4040>;

interface HeavyProps4040 {
  config: DeepPartial4040<NestedConfig4040>;
  path?: ConfigPaths4040;
}

const HeavyComponent4040 = memo(function HeavyComponent4040({ config }: HeavyProps4040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4040.displayName = 'HeavyComponent4040';
export default HeavyComponent4040;
