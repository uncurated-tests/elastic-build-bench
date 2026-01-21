'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9379<T> = T extends (infer U)[]
  ? DeepReadonlyArray9379<U>
  : T extends object
  ? DeepReadonlyObject9379<T>
  : T;

interface DeepReadonlyArray9379<T> extends ReadonlyArray<DeepReadonly9379<T>> {}

type DeepReadonlyObject9379<T> = {
  readonly [P in keyof T]: DeepReadonly9379<T[P]>;
};

type UnionToIntersection9379<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9379<T> = UnionToIntersection9379<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9379<T extends unknown[], V> = [...T, V];

type TuplifyUnion9379<T, L = LastOf9379<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9379<TuplifyUnion9379<Exclude<T, L>>, L>;

type DeepPartial9379<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9379<T[P]> }
  : T;

type Paths9379<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9379<K, Paths9379<T[K], Prev9379[D]>> : never }[keyof T]
  : never;

type Prev9379 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9379<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9379 {
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

type ConfigPaths9379 = Paths9379<NestedConfig9379>;

interface HeavyProps9379 {
  config: DeepPartial9379<NestedConfig9379>;
  path?: ConfigPaths9379;
}

const HeavyComponent9379 = memo(function HeavyComponent9379({ config }: HeavyProps9379) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9379) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9379 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9379: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9379.displayName = 'HeavyComponent9379';
export default HeavyComponent9379;
