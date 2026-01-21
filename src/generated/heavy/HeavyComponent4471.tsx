'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4471<T> = T extends (infer U)[]
  ? DeepReadonlyArray4471<U>
  : T extends object
  ? DeepReadonlyObject4471<T>
  : T;

interface DeepReadonlyArray4471<T> extends ReadonlyArray<DeepReadonly4471<T>> {}

type DeepReadonlyObject4471<T> = {
  readonly [P in keyof T]: DeepReadonly4471<T[P]>;
};

type UnionToIntersection4471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4471<T> = UnionToIntersection4471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4471<T extends unknown[], V> = [...T, V];

type TuplifyUnion4471<T, L = LastOf4471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4471<TuplifyUnion4471<Exclude<T, L>>, L>;

type DeepPartial4471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4471<T[P]> }
  : T;

type Paths4471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4471<K, Paths4471<T[K], Prev4471[D]>> : never }[keyof T]
  : never;

type Prev4471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4471 {
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

type ConfigPaths4471 = Paths4471<NestedConfig4471>;

interface HeavyProps4471 {
  config: DeepPartial4471<NestedConfig4471>;
  path?: ConfigPaths4471;
}

const HeavyComponent4471 = memo(function HeavyComponent4471({ config }: HeavyProps4471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4471.displayName = 'HeavyComponent4471';
export default HeavyComponent4471;
