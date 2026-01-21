'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4358<T> = T extends (infer U)[]
  ? DeepReadonlyArray4358<U>
  : T extends object
  ? DeepReadonlyObject4358<T>
  : T;

interface DeepReadonlyArray4358<T> extends ReadonlyArray<DeepReadonly4358<T>> {}

type DeepReadonlyObject4358<T> = {
  readonly [P in keyof T]: DeepReadonly4358<T[P]>;
};

type UnionToIntersection4358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4358<T> = UnionToIntersection4358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4358<T extends unknown[], V> = [...T, V];

type TuplifyUnion4358<T, L = LastOf4358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4358<TuplifyUnion4358<Exclude<T, L>>, L>;

type DeepPartial4358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4358<T[P]> }
  : T;

type Paths4358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4358<K, Paths4358<T[K], Prev4358[D]>> : never }[keyof T]
  : never;

type Prev4358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4358 {
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

type ConfigPaths4358 = Paths4358<NestedConfig4358>;

interface HeavyProps4358 {
  config: DeepPartial4358<NestedConfig4358>;
  path?: ConfigPaths4358;
}

const HeavyComponent4358 = memo(function HeavyComponent4358({ config }: HeavyProps4358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4358.displayName = 'HeavyComponent4358';
export default HeavyComponent4358;
