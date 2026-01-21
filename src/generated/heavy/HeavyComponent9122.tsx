'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9122<T> = T extends (infer U)[]
  ? DeepReadonlyArray9122<U>
  : T extends object
  ? DeepReadonlyObject9122<T>
  : T;

interface DeepReadonlyArray9122<T> extends ReadonlyArray<DeepReadonly9122<T>> {}

type DeepReadonlyObject9122<T> = {
  readonly [P in keyof T]: DeepReadonly9122<T[P]>;
};

type UnionToIntersection9122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9122<T> = UnionToIntersection9122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9122<T extends unknown[], V> = [...T, V];

type TuplifyUnion9122<T, L = LastOf9122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9122<TuplifyUnion9122<Exclude<T, L>>, L>;

type DeepPartial9122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9122<T[P]> }
  : T;

type Paths9122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9122<K, Paths9122<T[K], Prev9122[D]>> : never }[keyof T]
  : never;

type Prev9122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9122 {
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

type ConfigPaths9122 = Paths9122<NestedConfig9122>;

interface HeavyProps9122 {
  config: DeepPartial9122<NestedConfig9122>;
  path?: ConfigPaths9122;
}

const HeavyComponent9122 = memo(function HeavyComponent9122({ config }: HeavyProps9122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9122.displayName = 'HeavyComponent9122';
export default HeavyComponent9122;
