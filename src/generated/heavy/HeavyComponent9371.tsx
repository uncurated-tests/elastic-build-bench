'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9371<T> = T extends (infer U)[]
  ? DeepReadonlyArray9371<U>
  : T extends object
  ? DeepReadonlyObject9371<T>
  : T;

interface DeepReadonlyArray9371<T> extends ReadonlyArray<DeepReadonly9371<T>> {}

type DeepReadonlyObject9371<T> = {
  readonly [P in keyof T]: DeepReadonly9371<T[P]>;
};

type UnionToIntersection9371<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9371<T> = UnionToIntersection9371<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9371<T extends unknown[], V> = [...T, V];

type TuplifyUnion9371<T, L = LastOf9371<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9371<TuplifyUnion9371<Exclude<T, L>>, L>;

type DeepPartial9371<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9371<T[P]> }
  : T;

type Paths9371<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9371<K, Paths9371<T[K], Prev9371[D]>> : never }[keyof T]
  : never;

type Prev9371 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9371<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9371 {
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

type ConfigPaths9371 = Paths9371<NestedConfig9371>;

interface HeavyProps9371 {
  config: DeepPartial9371<NestedConfig9371>;
  path?: ConfigPaths9371;
}

const HeavyComponent9371 = memo(function HeavyComponent9371({ config }: HeavyProps9371) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9371) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9371 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9371: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9371.displayName = 'HeavyComponent9371';
export default HeavyComponent9371;
