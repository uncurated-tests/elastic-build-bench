'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4048<T> = T extends (infer U)[]
  ? DeepReadonlyArray4048<U>
  : T extends object
  ? DeepReadonlyObject4048<T>
  : T;

interface DeepReadonlyArray4048<T> extends ReadonlyArray<DeepReadonly4048<T>> {}

type DeepReadonlyObject4048<T> = {
  readonly [P in keyof T]: DeepReadonly4048<T[P]>;
};

type UnionToIntersection4048<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4048<T> = UnionToIntersection4048<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4048<T extends unknown[], V> = [...T, V];

type TuplifyUnion4048<T, L = LastOf4048<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4048<TuplifyUnion4048<Exclude<T, L>>, L>;

type DeepPartial4048<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4048<T[P]> }
  : T;

type Paths4048<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4048<K, Paths4048<T[K], Prev4048[D]>> : never }[keyof T]
  : never;

type Prev4048 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4048<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4048 {
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

type ConfigPaths4048 = Paths4048<NestedConfig4048>;

interface HeavyProps4048 {
  config: DeepPartial4048<NestedConfig4048>;
  path?: ConfigPaths4048;
}

const HeavyComponent4048 = memo(function HeavyComponent4048({ config }: HeavyProps4048) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4048) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4048 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4048: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4048.displayName = 'HeavyComponent4048';
export default HeavyComponent4048;
