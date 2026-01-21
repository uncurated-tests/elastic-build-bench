'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4321<T> = T extends (infer U)[]
  ? DeepReadonlyArray4321<U>
  : T extends object
  ? DeepReadonlyObject4321<T>
  : T;

interface DeepReadonlyArray4321<T> extends ReadonlyArray<DeepReadonly4321<T>> {}

type DeepReadonlyObject4321<T> = {
  readonly [P in keyof T]: DeepReadonly4321<T[P]>;
};

type UnionToIntersection4321<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4321<T> = UnionToIntersection4321<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4321<T extends unknown[], V> = [...T, V];

type TuplifyUnion4321<T, L = LastOf4321<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4321<TuplifyUnion4321<Exclude<T, L>>, L>;

type DeepPartial4321<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4321<T[P]> }
  : T;

type Paths4321<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4321<K, Paths4321<T[K], Prev4321[D]>> : never }[keyof T]
  : never;

type Prev4321 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4321<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4321 {
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

type ConfigPaths4321 = Paths4321<NestedConfig4321>;

interface HeavyProps4321 {
  config: DeepPartial4321<NestedConfig4321>;
  path?: ConfigPaths4321;
}

const HeavyComponent4321 = memo(function HeavyComponent4321({ config }: HeavyProps4321) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4321) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4321 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4321: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4321.displayName = 'HeavyComponent4321';
export default HeavyComponent4321;
