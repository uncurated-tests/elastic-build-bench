'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly970<T> = T extends (infer U)[]
  ? DeepReadonlyArray970<U>
  : T extends object
  ? DeepReadonlyObject970<T>
  : T;

interface DeepReadonlyArray970<T> extends ReadonlyArray<DeepReadonly970<T>> {}

type DeepReadonlyObject970<T> = {
  readonly [P in keyof T]: DeepReadonly970<T[P]>;
};

type UnionToIntersection970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf970<T> = UnionToIntersection970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push970<T extends unknown[], V> = [...T, V];

type TuplifyUnion970<T, L = LastOf970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push970<TuplifyUnion970<Exclude<T, L>>, L>;

type DeepPartial970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial970<T[P]> }
  : T;

type Paths970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join970<K, Paths970<T[K], Prev970[D]>> : never }[keyof T]
  : never;

type Prev970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig970 {
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

type ConfigPaths970 = Paths970<NestedConfig970>;

interface HeavyProps970 {
  config: DeepPartial970<NestedConfig970>;
  path?: ConfigPaths970;
}

const HeavyComponent970 = memo(function HeavyComponent970({ config }: HeavyProps970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent970.displayName = 'HeavyComponent970';
export default HeavyComponent970;
