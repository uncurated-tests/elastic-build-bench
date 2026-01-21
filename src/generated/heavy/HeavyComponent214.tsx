'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly214<T> = T extends (infer U)[]
  ? DeepReadonlyArray214<U>
  : T extends object
  ? DeepReadonlyObject214<T>
  : T;

interface DeepReadonlyArray214<T> extends ReadonlyArray<DeepReadonly214<T>> {}

type DeepReadonlyObject214<T> = {
  readonly [P in keyof T]: DeepReadonly214<T[P]>;
};

type UnionToIntersection214<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf214<T> = UnionToIntersection214<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push214<T extends unknown[], V> = [...T, V];

type TuplifyUnion214<T, L = LastOf214<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push214<TuplifyUnion214<Exclude<T, L>>, L>;

type DeepPartial214<T> = T extends object
  ? { [P in keyof T]?: DeepPartial214<T[P]> }
  : T;

type Paths214<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join214<K, Paths214<T[K], Prev214[D]>> : never }[keyof T]
  : never;

type Prev214 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join214<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig214 {
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

type ConfigPaths214 = Paths214<NestedConfig214>;

interface HeavyProps214 {
  config: DeepPartial214<NestedConfig214>;
  path?: ConfigPaths214;
}

const HeavyComponent214 = memo(function HeavyComponent214({ config }: HeavyProps214) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 214) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-214 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H214: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent214.displayName = 'HeavyComponent214';
export default HeavyComponent214;
