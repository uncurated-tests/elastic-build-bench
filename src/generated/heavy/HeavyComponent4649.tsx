'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4649<T> = T extends (infer U)[]
  ? DeepReadonlyArray4649<U>
  : T extends object
  ? DeepReadonlyObject4649<T>
  : T;

interface DeepReadonlyArray4649<T> extends ReadonlyArray<DeepReadonly4649<T>> {}

type DeepReadonlyObject4649<T> = {
  readonly [P in keyof T]: DeepReadonly4649<T[P]>;
};

type UnionToIntersection4649<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4649<T> = UnionToIntersection4649<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4649<T extends unknown[], V> = [...T, V];

type TuplifyUnion4649<T, L = LastOf4649<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4649<TuplifyUnion4649<Exclude<T, L>>, L>;

type DeepPartial4649<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4649<T[P]> }
  : T;

type Paths4649<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4649<K, Paths4649<T[K], Prev4649[D]>> : never }[keyof T]
  : never;

type Prev4649 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4649<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4649 {
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

type ConfigPaths4649 = Paths4649<NestedConfig4649>;

interface HeavyProps4649 {
  config: DeepPartial4649<NestedConfig4649>;
  path?: ConfigPaths4649;
}

const HeavyComponent4649 = memo(function HeavyComponent4649({ config }: HeavyProps4649) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4649) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4649 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4649: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4649.displayName = 'HeavyComponent4649';
export default HeavyComponent4649;
