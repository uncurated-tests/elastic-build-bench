'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly164<T> = T extends (infer U)[]
  ? DeepReadonlyArray164<U>
  : T extends object
  ? DeepReadonlyObject164<T>
  : T;

interface DeepReadonlyArray164<T> extends ReadonlyArray<DeepReadonly164<T>> {}

type DeepReadonlyObject164<T> = {
  readonly [P in keyof T]: DeepReadonly164<T[P]>;
};

type UnionToIntersection164<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf164<T> = UnionToIntersection164<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push164<T extends unknown[], V> = [...T, V];

type TuplifyUnion164<T, L = LastOf164<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push164<TuplifyUnion164<Exclude<T, L>>, L>;

type DeepPartial164<T> = T extends object
  ? { [P in keyof T]?: DeepPartial164<T[P]> }
  : T;

type Paths164<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join164<K, Paths164<T[K], Prev164[D]>> : never }[keyof T]
  : never;

type Prev164 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join164<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig164 {
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

type ConfigPaths164 = Paths164<NestedConfig164>;

interface HeavyProps164 {
  config: DeepPartial164<NestedConfig164>;
  path?: ConfigPaths164;
}

const HeavyComponent164 = memo(function HeavyComponent164({ config }: HeavyProps164) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 164) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-164 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H164: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent164.displayName = 'HeavyComponent164';
export default HeavyComponent164;
