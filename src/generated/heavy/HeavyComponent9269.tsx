'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9269<T> = T extends (infer U)[]
  ? DeepReadonlyArray9269<U>
  : T extends object
  ? DeepReadonlyObject9269<T>
  : T;

interface DeepReadonlyArray9269<T> extends ReadonlyArray<DeepReadonly9269<T>> {}

type DeepReadonlyObject9269<T> = {
  readonly [P in keyof T]: DeepReadonly9269<T[P]>;
};

type UnionToIntersection9269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9269<T> = UnionToIntersection9269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9269<T extends unknown[], V> = [...T, V];

type TuplifyUnion9269<T, L = LastOf9269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9269<TuplifyUnion9269<Exclude<T, L>>, L>;

type DeepPartial9269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9269<T[P]> }
  : T;

type Paths9269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9269<K, Paths9269<T[K], Prev9269[D]>> : never }[keyof T]
  : never;

type Prev9269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9269 {
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

type ConfigPaths9269 = Paths9269<NestedConfig9269>;

interface HeavyProps9269 {
  config: DeepPartial9269<NestedConfig9269>;
  path?: ConfigPaths9269;
}

const HeavyComponent9269 = memo(function HeavyComponent9269({ config }: HeavyProps9269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9269.displayName = 'HeavyComponent9269';
export default HeavyComponent9269;
