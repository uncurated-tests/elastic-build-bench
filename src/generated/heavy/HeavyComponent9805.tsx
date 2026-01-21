'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9805<T> = T extends (infer U)[]
  ? DeepReadonlyArray9805<U>
  : T extends object
  ? DeepReadonlyObject9805<T>
  : T;

interface DeepReadonlyArray9805<T> extends ReadonlyArray<DeepReadonly9805<T>> {}

type DeepReadonlyObject9805<T> = {
  readonly [P in keyof T]: DeepReadonly9805<T[P]>;
};

type UnionToIntersection9805<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9805<T> = UnionToIntersection9805<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9805<T extends unknown[], V> = [...T, V];

type TuplifyUnion9805<T, L = LastOf9805<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9805<TuplifyUnion9805<Exclude<T, L>>, L>;

type DeepPartial9805<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9805<T[P]> }
  : T;

type Paths9805<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9805<K, Paths9805<T[K], Prev9805[D]>> : never }[keyof T]
  : never;

type Prev9805 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9805<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9805 {
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

type ConfigPaths9805 = Paths9805<NestedConfig9805>;

interface HeavyProps9805 {
  config: DeepPartial9805<NestedConfig9805>;
  path?: ConfigPaths9805;
}

const HeavyComponent9805 = memo(function HeavyComponent9805({ config }: HeavyProps9805) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9805) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9805 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9805: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9805.displayName = 'HeavyComponent9805';
export default HeavyComponent9805;
