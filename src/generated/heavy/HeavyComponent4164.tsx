'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4164<T> = T extends (infer U)[]
  ? DeepReadonlyArray4164<U>
  : T extends object
  ? DeepReadonlyObject4164<T>
  : T;

interface DeepReadonlyArray4164<T> extends ReadonlyArray<DeepReadonly4164<T>> {}

type DeepReadonlyObject4164<T> = {
  readonly [P in keyof T]: DeepReadonly4164<T[P]>;
};

type UnionToIntersection4164<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4164<T> = UnionToIntersection4164<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4164<T extends unknown[], V> = [...T, V];

type TuplifyUnion4164<T, L = LastOf4164<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4164<TuplifyUnion4164<Exclude<T, L>>, L>;

type DeepPartial4164<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4164<T[P]> }
  : T;

type Paths4164<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4164<K, Paths4164<T[K], Prev4164[D]>> : never }[keyof T]
  : never;

type Prev4164 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4164<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4164 {
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

type ConfigPaths4164 = Paths4164<NestedConfig4164>;

interface HeavyProps4164 {
  config: DeepPartial4164<NestedConfig4164>;
  path?: ConfigPaths4164;
}

const HeavyComponent4164 = memo(function HeavyComponent4164({ config }: HeavyProps4164) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4164) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4164 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4164: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4164.displayName = 'HeavyComponent4164';
export default HeavyComponent4164;
