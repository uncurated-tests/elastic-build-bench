'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4740<T> = T extends (infer U)[]
  ? DeepReadonlyArray4740<U>
  : T extends object
  ? DeepReadonlyObject4740<T>
  : T;

interface DeepReadonlyArray4740<T> extends ReadonlyArray<DeepReadonly4740<T>> {}

type DeepReadonlyObject4740<T> = {
  readonly [P in keyof T]: DeepReadonly4740<T[P]>;
};

type UnionToIntersection4740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4740<T> = UnionToIntersection4740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4740<T extends unknown[], V> = [...T, V];

type TuplifyUnion4740<T, L = LastOf4740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4740<TuplifyUnion4740<Exclude<T, L>>, L>;

type DeepPartial4740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4740<T[P]> }
  : T;

type Paths4740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4740<K, Paths4740<T[K], Prev4740[D]>> : never }[keyof T]
  : never;

type Prev4740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4740 {
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

type ConfigPaths4740 = Paths4740<NestedConfig4740>;

interface HeavyProps4740 {
  config: DeepPartial4740<NestedConfig4740>;
  path?: ConfigPaths4740;
}

const HeavyComponent4740 = memo(function HeavyComponent4740({ config }: HeavyProps4740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4740.displayName = 'HeavyComponent4740';
export default HeavyComponent4740;
