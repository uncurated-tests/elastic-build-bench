'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4118<T> = T extends (infer U)[]
  ? DeepReadonlyArray4118<U>
  : T extends object
  ? DeepReadonlyObject4118<T>
  : T;

interface DeepReadonlyArray4118<T> extends ReadonlyArray<DeepReadonly4118<T>> {}

type DeepReadonlyObject4118<T> = {
  readonly [P in keyof T]: DeepReadonly4118<T[P]>;
};

type UnionToIntersection4118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4118<T> = UnionToIntersection4118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4118<T extends unknown[], V> = [...T, V];

type TuplifyUnion4118<T, L = LastOf4118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4118<TuplifyUnion4118<Exclude<T, L>>, L>;

type DeepPartial4118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4118<T[P]> }
  : T;

type Paths4118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4118<K, Paths4118<T[K], Prev4118[D]>> : never }[keyof T]
  : never;

type Prev4118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4118 {
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

type ConfigPaths4118 = Paths4118<NestedConfig4118>;

interface HeavyProps4118 {
  config: DeepPartial4118<NestedConfig4118>;
  path?: ConfigPaths4118;
}

const HeavyComponent4118 = memo(function HeavyComponent4118({ config }: HeavyProps4118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4118.displayName = 'HeavyComponent4118';
export default HeavyComponent4118;
