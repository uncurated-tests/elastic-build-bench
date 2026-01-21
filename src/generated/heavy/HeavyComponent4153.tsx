'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4153<T> = T extends (infer U)[]
  ? DeepReadonlyArray4153<U>
  : T extends object
  ? DeepReadonlyObject4153<T>
  : T;

interface DeepReadonlyArray4153<T> extends ReadonlyArray<DeepReadonly4153<T>> {}

type DeepReadonlyObject4153<T> = {
  readonly [P in keyof T]: DeepReadonly4153<T[P]>;
};

type UnionToIntersection4153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4153<T> = UnionToIntersection4153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4153<T extends unknown[], V> = [...T, V];

type TuplifyUnion4153<T, L = LastOf4153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4153<TuplifyUnion4153<Exclude<T, L>>, L>;

type DeepPartial4153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4153<T[P]> }
  : T;

type Paths4153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4153<K, Paths4153<T[K], Prev4153[D]>> : never }[keyof T]
  : never;

type Prev4153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4153 {
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

type ConfigPaths4153 = Paths4153<NestedConfig4153>;

interface HeavyProps4153 {
  config: DeepPartial4153<NestedConfig4153>;
  path?: ConfigPaths4153;
}

const HeavyComponent4153 = memo(function HeavyComponent4153({ config }: HeavyProps4153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4153.displayName = 'HeavyComponent4153';
export default HeavyComponent4153;
