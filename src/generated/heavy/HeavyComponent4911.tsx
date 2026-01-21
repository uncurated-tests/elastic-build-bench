'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4911<T> = T extends (infer U)[]
  ? DeepReadonlyArray4911<U>
  : T extends object
  ? DeepReadonlyObject4911<T>
  : T;

interface DeepReadonlyArray4911<T> extends ReadonlyArray<DeepReadonly4911<T>> {}

type DeepReadonlyObject4911<T> = {
  readonly [P in keyof T]: DeepReadonly4911<T[P]>;
};

type UnionToIntersection4911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4911<T> = UnionToIntersection4911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4911<T extends unknown[], V> = [...T, V];

type TuplifyUnion4911<T, L = LastOf4911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4911<TuplifyUnion4911<Exclude<T, L>>, L>;

type DeepPartial4911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4911<T[P]> }
  : T;

type Paths4911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4911<K, Paths4911<T[K], Prev4911[D]>> : never }[keyof T]
  : never;

type Prev4911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4911 {
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

type ConfigPaths4911 = Paths4911<NestedConfig4911>;

interface HeavyProps4911 {
  config: DeepPartial4911<NestedConfig4911>;
  path?: ConfigPaths4911;
}

const HeavyComponent4911 = memo(function HeavyComponent4911({ config }: HeavyProps4911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4911.displayName = 'HeavyComponent4911';
export default HeavyComponent4911;
