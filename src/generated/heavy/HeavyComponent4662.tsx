'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4662<T> = T extends (infer U)[]
  ? DeepReadonlyArray4662<U>
  : T extends object
  ? DeepReadonlyObject4662<T>
  : T;

interface DeepReadonlyArray4662<T> extends ReadonlyArray<DeepReadonly4662<T>> {}

type DeepReadonlyObject4662<T> = {
  readonly [P in keyof T]: DeepReadonly4662<T[P]>;
};

type UnionToIntersection4662<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4662<T> = UnionToIntersection4662<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4662<T extends unknown[], V> = [...T, V];

type TuplifyUnion4662<T, L = LastOf4662<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4662<TuplifyUnion4662<Exclude<T, L>>, L>;

type DeepPartial4662<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4662<T[P]> }
  : T;

type Paths4662<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4662<K, Paths4662<T[K], Prev4662[D]>> : never }[keyof T]
  : never;

type Prev4662 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4662<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4662 {
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

type ConfigPaths4662 = Paths4662<NestedConfig4662>;

interface HeavyProps4662 {
  config: DeepPartial4662<NestedConfig4662>;
  path?: ConfigPaths4662;
}

const HeavyComponent4662 = memo(function HeavyComponent4662({ config }: HeavyProps4662) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4662) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4662 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4662: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4662.displayName = 'HeavyComponent4662';
export default HeavyComponent4662;
