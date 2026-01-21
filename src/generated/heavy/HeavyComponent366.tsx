'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly366<T> = T extends (infer U)[]
  ? DeepReadonlyArray366<U>
  : T extends object
  ? DeepReadonlyObject366<T>
  : T;

interface DeepReadonlyArray366<T> extends ReadonlyArray<DeepReadonly366<T>> {}

type DeepReadonlyObject366<T> = {
  readonly [P in keyof T]: DeepReadonly366<T[P]>;
};

type UnionToIntersection366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf366<T> = UnionToIntersection366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push366<T extends unknown[], V> = [...T, V];

type TuplifyUnion366<T, L = LastOf366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push366<TuplifyUnion366<Exclude<T, L>>, L>;

type DeepPartial366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial366<T[P]> }
  : T;

type Paths366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join366<K, Paths366<T[K], Prev366[D]>> : never }[keyof T]
  : never;

type Prev366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig366 {
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

type ConfigPaths366 = Paths366<NestedConfig366>;

interface HeavyProps366 {
  config: DeepPartial366<NestedConfig366>;
  path?: ConfigPaths366;
}

const HeavyComponent366 = memo(function HeavyComponent366({ config }: HeavyProps366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent366.displayName = 'HeavyComponent366';
export default HeavyComponent366;
