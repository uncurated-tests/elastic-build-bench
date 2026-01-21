'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly202<T> = T extends (infer U)[]
  ? DeepReadonlyArray202<U>
  : T extends object
  ? DeepReadonlyObject202<T>
  : T;

interface DeepReadonlyArray202<T> extends ReadonlyArray<DeepReadonly202<T>> {}

type DeepReadonlyObject202<T> = {
  readonly [P in keyof T]: DeepReadonly202<T[P]>;
};

type UnionToIntersection202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf202<T> = UnionToIntersection202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push202<T extends unknown[], V> = [...T, V];

type TuplifyUnion202<T, L = LastOf202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push202<TuplifyUnion202<Exclude<T, L>>, L>;

type DeepPartial202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial202<T[P]> }
  : T;

type Paths202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join202<K, Paths202<T[K], Prev202[D]>> : never }[keyof T]
  : never;

type Prev202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig202 {
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

type ConfigPaths202 = Paths202<NestedConfig202>;

interface HeavyProps202 {
  config: DeepPartial202<NestedConfig202>;
  path?: ConfigPaths202;
}

const HeavyComponent202 = memo(function HeavyComponent202({ config }: HeavyProps202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent202.displayName = 'HeavyComponent202';
export default HeavyComponent202;
