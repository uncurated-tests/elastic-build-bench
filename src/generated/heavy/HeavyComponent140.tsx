'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly140<T> = T extends (infer U)[]
  ? DeepReadonlyArray140<U>
  : T extends object
  ? DeepReadonlyObject140<T>
  : T;

interface DeepReadonlyArray140<T> extends ReadonlyArray<DeepReadonly140<T>> {}

type DeepReadonlyObject140<T> = {
  readonly [P in keyof T]: DeepReadonly140<T[P]>;
};

type UnionToIntersection140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf140<T> = UnionToIntersection140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push140<T extends unknown[], V> = [...T, V];

type TuplifyUnion140<T, L = LastOf140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push140<TuplifyUnion140<Exclude<T, L>>, L>;

type DeepPartial140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial140<T[P]> }
  : T;

type Paths140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join140<K, Paths140<T[K], Prev140[D]>> : never }[keyof T]
  : never;

type Prev140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig140 {
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

type ConfigPaths140 = Paths140<NestedConfig140>;

interface HeavyProps140 {
  config: DeepPartial140<NestedConfig140>;
  path?: ConfigPaths140;
}

const HeavyComponent140 = memo(function HeavyComponent140({ config }: HeavyProps140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent140.displayName = 'HeavyComponent140';
export default HeavyComponent140;
