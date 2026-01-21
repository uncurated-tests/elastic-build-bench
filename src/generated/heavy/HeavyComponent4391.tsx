'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4391<T> = T extends (infer U)[]
  ? DeepReadonlyArray4391<U>
  : T extends object
  ? DeepReadonlyObject4391<T>
  : T;

interface DeepReadonlyArray4391<T> extends ReadonlyArray<DeepReadonly4391<T>> {}

type DeepReadonlyObject4391<T> = {
  readonly [P in keyof T]: DeepReadonly4391<T[P]>;
};

type UnionToIntersection4391<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4391<T> = UnionToIntersection4391<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4391<T extends unknown[], V> = [...T, V];

type TuplifyUnion4391<T, L = LastOf4391<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4391<TuplifyUnion4391<Exclude<T, L>>, L>;

type DeepPartial4391<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4391<T[P]> }
  : T;

type Paths4391<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4391<K, Paths4391<T[K], Prev4391[D]>> : never }[keyof T]
  : never;

type Prev4391 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4391<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4391 {
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

type ConfigPaths4391 = Paths4391<NestedConfig4391>;

interface HeavyProps4391 {
  config: DeepPartial4391<NestedConfig4391>;
  path?: ConfigPaths4391;
}

const HeavyComponent4391 = memo(function HeavyComponent4391({ config }: HeavyProps4391) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4391) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4391 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4391: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4391.displayName = 'HeavyComponent4391';
export default HeavyComponent4391;
