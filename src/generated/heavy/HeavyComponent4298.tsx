'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4298<T> = T extends (infer U)[]
  ? DeepReadonlyArray4298<U>
  : T extends object
  ? DeepReadonlyObject4298<T>
  : T;

interface DeepReadonlyArray4298<T> extends ReadonlyArray<DeepReadonly4298<T>> {}

type DeepReadonlyObject4298<T> = {
  readonly [P in keyof T]: DeepReadonly4298<T[P]>;
};

type UnionToIntersection4298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4298<T> = UnionToIntersection4298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4298<T extends unknown[], V> = [...T, V];

type TuplifyUnion4298<T, L = LastOf4298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4298<TuplifyUnion4298<Exclude<T, L>>, L>;

type DeepPartial4298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4298<T[P]> }
  : T;

type Paths4298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4298<K, Paths4298<T[K], Prev4298[D]>> : never }[keyof T]
  : never;

type Prev4298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4298 {
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

type ConfigPaths4298 = Paths4298<NestedConfig4298>;

interface HeavyProps4298 {
  config: DeepPartial4298<NestedConfig4298>;
  path?: ConfigPaths4298;
}

const HeavyComponent4298 = memo(function HeavyComponent4298({ config }: HeavyProps4298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4298.displayName = 'HeavyComponent4298';
export default HeavyComponent4298;
