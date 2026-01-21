'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4272<T> = T extends (infer U)[]
  ? DeepReadonlyArray4272<U>
  : T extends object
  ? DeepReadonlyObject4272<T>
  : T;

interface DeepReadonlyArray4272<T> extends ReadonlyArray<DeepReadonly4272<T>> {}

type DeepReadonlyObject4272<T> = {
  readonly [P in keyof T]: DeepReadonly4272<T[P]>;
};

type UnionToIntersection4272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4272<T> = UnionToIntersection4272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4272<T extends unknown[], V> = [...T, V];

type TuplifyUnion4272<T, L = LastOf4272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4272<TuplifyUnion4272<Exclude<T, L>>, L>;

type DeepPartial4272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4272<T[P]> }
  : T;

type Paths4272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4272<K, Paths4272<T[K], Prev4272[D]>> : never }[keyof T]
  : never;

type Prev4272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4272 {
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

type ConfigPaths4272 = Paths4272<NestedConfig4272>;

interface HeavyProps4272 {
  config: DeepPartial4272<NestedConfig4272>;
  path?: ConfigPaths4272;
}

const HeavyComponent4272 = memo(function HeavyComponent4272({ config }: HeavyProps4272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4272.displayName = 'HeavyComponent4272';
export default HeavyComponent4272;
