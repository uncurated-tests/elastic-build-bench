'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4988<T> = T extends (infer U)[]
  ? DeepReadonlyArray4988<U>
  : T extends object
  ? DeepReadonlyObject4988<T>
  : T;

interface DeepReadonlyArray4988<T> extends ReadonlyArray<DeepReadonly4988<T>> {}

type DeepReadonlyObject4988<T> = {
  readonly [P in keyof T]: DeepReadonly4988<T[P]>;
};

type UnionToIntersection4988<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4988<T> = UnionToIntersection4988<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4988<T extends unknown[], V> = [...T, V];

type TuplifyUnion4988<T, L = LastOf4988<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4988<TuplifyUnion4988<Exclude<T, L>>, L>;

type DeepPartial4988<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4988<T[P]> }
  : T;

type Paths4988<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4988<K, Paths4988<T[K], Prev4988[D]>> : never }[keyof T]
  : never;

type Prev4988 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4988<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4988 {
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

type ConfigPaths4988 = Paths4988<NestedConfig4988>;

interface HeavyProps4988 {
  config: DeepPartial4988<NestedConfig4988>;
  path?: ConfigPaths4988;
}

const HeavyComponent4988 = memo(function HeavyComponent4988({ config }: HeavyProps4988) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4988) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4988 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4988: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4988.displayName = 'HeavyComponent4988';
export default HeavyComponent4988;
