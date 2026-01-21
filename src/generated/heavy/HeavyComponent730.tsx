'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly730<T> = T extends (infer U)[]
  ? DeepReadonlyArray730<U>
  : T extends object
  ? DeepReadonlyObject730<T>
  : T;

interface DeepReadonlyArray730<T> extends ReadonlyArray<DeepReadonly730<T>> {}

type DeepReadonlyObject730<T> = {
  readonly [P in keyof T]: DeepReadonly730<T[P]>;
};

type UnionToIntersection730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf730<T> = UnionToIntersection730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push730<T extends unknown[], V> = [...T, V];

type TuplifyUnion730<T, L = LastOf730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push730<TuplifyUnion730<Exclude<T, L>>, L>;

type DeepPartial730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial730<T[P]> }
  : T;

type Paths730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join730<K, Paths730<T[K], Prev730[D]>> : never }[keyof T]
  : never;

type Prev730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig730 {
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

type ConfigPaths730 = Paths730<NestedConfig730>;

interface HeavyProps730 {
  config: DeepPartial730<NestedConfig730>;
  path?: ConfigPaths730;
}

const HeavyComponent730 = memo(function HeavyComponent730({ config }: HeavyProps730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent730.displayName = 'HeavyComponent730';
export default HeavyComponent730;
