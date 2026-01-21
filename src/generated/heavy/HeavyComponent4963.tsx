'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4963<T> = T extends (infer U)[]
  ? DeepReadonlyArray4963<U>
  : T extends object
  ? DeepReadonlyObject4963<T>
  : T;

interface DeepReadonlyArray4963<T> extends ReadonlyArray<DeepReadonly4963<T>> {}

type DeepReadonlyObject4963<T> = {
  readonly [P in keyof T]: DeepReadonly4963<T[P]>;
};

type UnionToIntersection4963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4963<T> = UnionToIntersection4963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4963<T extends unknown[], V> = [...T, V];

type TuplifyUnion4963<T, L = LastOf4963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4963<TuplifyUnion4963<Exclude<T, L>>, L>;

type DeepPartial4963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4963<T[P]> }
  : T;

type Paths4963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4963<K, Paths4963<T[K], Prev4963[D]>> : never }[keyof T]
  : never;

type Prev4963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4963 {
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

type ConfigPaths4963 = Paths4963<NestedConfig4963>;

interface HeavyProps4963 {
  config: DeepPartial4963<NestedConfig4963>;
  path?: ConfigPaths4963;
}

const HeavyComponent4963 = memo(function HeavyComponent4963({ config }: HeavyProps4963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4963.displayName = 'HeavyComponent4963';
export default HeavyComponent4963;
