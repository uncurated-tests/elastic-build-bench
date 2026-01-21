'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly991<T> = T extends (infer U)[]
  ? DeepReadonlyArray991<U>
  : T extends object
  ? DeepReadonlyObject991<T>
  : T;

interface DeepReadonlyArray991<T> extends ReadonlyArray<DeepReadonly991<T>> {}

type DeepReadonlyObject991<T> = {
  readonly [P in keyof T]: DeepReadonly991<T[P]>;
};

type UnionToIntersection991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf991<T> = UnionToIntersection991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push991<T extends unknown[], V> = [...T, V];

type TuplifyUnion991<T, L = LastOf991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push991<TuplifyUnion991<Exclude<T, L>>, L>;

type DeepPartial991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial991<T[P]> }
  : T;

type Paths991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join991<K, Paths991<T[K], Prev991[D]>> : never }[keyof T]
  : never;

type Prev991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig991 {
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

type ConfigPaths991 = Paths991<NestedConfig991>;

interface HeavyProps991 {
  config: DeepPartial991<NestedConfig991>;
  path?: ConfigPaths991;
}

const HeavyComponent991 = memo(function HeavyComponent991({ config }: HeavyProps991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent991.displayName = 'HeavyComponent991';
export default HeavyComponent991;
