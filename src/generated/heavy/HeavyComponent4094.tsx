'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4094<T> = T extends (infer U)[]
  ? DeepReadonlyArray4094<U>
  : T extends object
  ? DeepReadonlyObject4094<T>
  : T;

interface DeepReadonlyArray4094<T> extends ReadonlyArray<DeepReadonly4094<T>> {}

type DeepReadonlyObject4094<T> = {
  readonly [P in keyof T]: DeepReadonly4094<T[P]>;
};

type UnionToIntersection4094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4094<T> = UnionToIntersection4094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4094<T extends unknown[], V> = [...T, V];

type TuplifyUnion4094<T, L = LastOf4094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4094<TuplifyUnion4094<Exclude<T, L>>, L>;

type DeepPartial4094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4094<T[P]> }
  : T;

type Paths4094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4094<K, Paths4094<T[K], Prev4094[D]>> : never }[keyof T]
  : never;

type Prev4094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4094 {
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

type ConfigPaths4094 = Paths4094<NestedConfig4094>;

interface HeavyProps4094 {
  config: DeepPartial4094<NestedConfig4094>;
  path?: ConfigPaths4094;
}

const HeavyComponent4094 = memo(function HeavyComponent4094({ config }: HeavyProps4094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4094.displayName = 'HeavyComponent4094';
export default HeavyComponent4094;
