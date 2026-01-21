'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly888<T> = T extends (infer U)[]
  ? DeepReadonlyArray888<U>
  : T extends object
  ? DeepReadonlyObject888<T>
  : T;

interface DeepReadonlyArray888<T> extends ReadonlyArray<DeepReadonly888<T>> {}

type DeepReadonlyObject888<T> = {
  readonly [P in keyof T]: DeepReadonly888<T[P]>;
};

type UnionToIntersection888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf888<T> = UnionToIntersection888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push888<T extends unknown[], V> = [...T, V];

type TuplifyUnion888<T, L = LastOf888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push888<TuplifyUnion888<Exclude<T, L>>, L>;

type DeepPartial888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial888<T[P]> }
  : T;

type Paths888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join888<K, Paths888<T[K], Prev888[D]>> : never }[keyof T]
  : never;

type Prev888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig888 {
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

type ConfigPaths888 = Paths888<NestedConfig888>;

interface HeavyProps888 {
  config: DeepPartial888<NestedConfig888>;
  path?: ConfigPaths888;
}

const HeavyComponent888 = memo(function HeavyComponent888({ config }: HeavyProps888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent888.displayName = 'HeavyComponent888';
export default HeavyComponent888;
