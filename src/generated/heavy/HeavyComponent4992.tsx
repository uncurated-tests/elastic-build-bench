'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4992<T> = T extends (infer U)[]
  ? DeepReadonlyArray4992<U>
  : T extends object
  ? DeepReadonlyObject4992<T>
  : T;

interface DeepReadonlyArray4992<T> extends ReadonlyArray<DeepReadonly4992<T>> {}

type DeepReadonlyObject4992<T> = {
  readonly [P in keyof T]: DeepReadonly4992<T[P]>;
};

type UnionToIntersection4992<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4992<T> = UnionToIntersection4992<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4992<T extends unknown[], V> = [...T, V];

type TuplifyUnion4992<T, L = LastOf4992<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4992<TuplifyUnion4992<Exclude<T, L>>, L>;

type DeepPartial4992<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4992<T[P]> }
  : T;

type Paths4992<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4992<K, Paths4992<T[K], Prev4992[D]>> : never }[keyof T]
  : never;

type Prev4992 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4992<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4992 {
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

type ConfigPaths4992 = Paths4992<NestedConfig4992>;

interface HeavyProps4992 {
  config: DeepPartial4992<NestedConfig4992>;
  path?: ConfigPaths4992;
}

const HeavyComponent4992 = memo(function HeavyComponent4992({ config }: HeavyProps4992) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4992) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4992 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4992: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4992.displayName = 'HeavyComponent4992';
export default HeavyComponent4992;
