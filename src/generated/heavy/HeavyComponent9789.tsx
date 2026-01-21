'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9789<T> = T extends (infer U)[]
  ? DeepReadonlyArray9789<U>
  : T extends object
  ? DeepReadonlyObject9789<T>
  : T;

interface DeepReadonlyArray9789<T> extends ReadonlyArray<DeepReadonly9789<T>> {}

type DeepReadonlyObject9789<T> = {
  readonly [P in keyof T]: DeepReadonly9789<T[P]>;
};

type UnionToIntersection9789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9789<T> = UnionToIntersection9789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9789<T extends unknown[], V> = [...T, V];

type TuplifyUnion9789<T, L = LastOf9789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9789<TuplifyUnion9789<Exclude<T, L>>, L>;

type DeepPartial9789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9789<T[P]> }
  : T;

type Paths9789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9789<K, Paths9789<T[K], Prev9789[D]>> : never }[keyof T]
  : never;

type Prev9789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9789 {
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

type ConfigPaths9789 = Paths9789<NestedConfig9789>;

interface HeavyProps9789 {
  config: DeepPartial9789<NestedConfig9789>;
  path?: ConfigPaths9789;
}

const HeavyComponent9789 = memo(function HeavyComponent9789({ config }: HeavyProps9789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9789.displayName = 'HeavyComponent9789';
export default HeavyComponent9789;
