'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4014<T> = T extends (infer U)[]
  ? DeepReadonlyArray4014<U>
  : T extends object
  ? DeepReadonlyObject4014<T>
  : T;

interface DeepReadonlyArray4014<T> extends ReadonlyArray<DeepReadonly4014<T>> {}

type DeepReadonlyObject4014<T> = {
  readonly [P in keyof T]: DeepReadonly4014<T[P]>;
};

type UnionToIntersection4014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4014<T> = UnionToIntersection4014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4014<T extends unknown[], V> = [...T, V];

type TuplifyUnion4014<T, L = LastOf4014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4014<TuplifyUnion4014<Exclude<T, L>>, L>;

type DeepPartial4014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4014<T[P]> }
  : T;

type Paths4014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4014<K, Paths4014<T[K], Prev4014[D]>> : never }[keyof T]
  : never;

type Prev4014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4014 {
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

type ConfigPaths4014 = Paths4014<NestedConfig4014>;

interface HeavyProps4014 {
  config: DeepPartial4014<NestedConfig4014>;
  path?: ConfigPaths4014;
}

const HeavyComponent4014 = memo(function HeavyComponent4014({ config }: HeavyProps4014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4014.displayName = 'HeavyComponent4014';
export default HeavyComponent4014;
