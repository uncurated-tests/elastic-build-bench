'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4571<T> = T extends (infer U)[]
  ? DeepReadonlyArray4571<U>
  : T extends object
  ? DeepReadonlyObject4571<T>
  : T;

interface DeepReadonlyArray4571<T> extends ReadonlyArray<DeepReadonly4571<T>> {}

type DeepReadonlyObject4571<T> = {
  readonly [P in keyof T]: DeepReadonly4571<T[P]>;
};

type UnionToIntersection4571<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4571<T> = UnionToIntersection4571<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4571<T extends unknown[], V> = [...T, V];

type TuplifyUnion4571<T, L = LastOf4571<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4571<TuplifyUnion4571<Exclude<T, L>>, L>;

type DeepPartial4571<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4571<T[P]> }
  : T;

type Paths4571<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4571<K, Paths4571<T[K], Prev4571[D]>> : never }[keyof T]
  : never;

type Prev4571 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4571<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4571 {
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

type ConfigPaths4571 = Paths4571<NestedConfig4571>;

interface HeavyProps4571 {
  config: DeepPartial4571<NestedConfig4571>;
  path?: ConfigPaths4571;
}

const HeavyComponent4571 = memo(function HeavyComponent4571({ config }: HeavyProps4571) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4571) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4571 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4571: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4571.displayName = 'HeavyComponent4571';
export default HeavyComponent4571;
