'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4789<T> = T extends (infer U)[]
  ? DeepReadonlyArray4789<U>
  : T extends object
  ? DeepReadonlyObject4789<T>
  : T;

interface DeepReadonlyArray4789<T> extends ReadonlyArray<DeepReadonly4789<T>> {}

type DeepReadonlyObject4789<T> = {
  readonly [P in keyof T]: DeepReadonly4789<T[P]>;
};

type UnionToIntersection4789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4789<T> = UnionToIntersection4789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4789<T extends unknown[], V> = [...T, V];

type TuplifyUnion4789<T, L = LastOf4789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4789<TuplifyUnion4789<Exclude<T, L>>, L>;

type DeepPartial4789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4789<T[P]> }
  : T;

type Paths4789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4789<K, Paths4789<T[K], Prev4789[D]>> : never }[keyof T]
  : never;

type Prev4789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4789 {
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

type ConfigPaths4789 = Paths4789<NestedConfig4789>;

interface HeavyProps4789 {
  config: DeepPartial4789<NestedConfig4789>;
  path?: ConfigPaths4789;
}

const HeavyComponent4789 = memo(function HeavyComponent4789({ config }: HeavyProps4789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4789.displayName = 'HeavyComponent4789';
export default HeavyComponent4789;
