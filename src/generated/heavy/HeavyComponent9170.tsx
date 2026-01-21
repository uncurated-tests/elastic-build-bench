'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9170<T> = T extends (infer U)[]
  ? DeepReadonlyArray9170<U>
  : T extends object
  ? DeepReadonlyObject9170<T>
  : T;

interface DeepReadonlyArray9170<T> extends ReadonlyArray<DeepReadonly9170<T>> {}

type DeepReadonlyObject9170<T> = {
  readonly [P in keyof T]: DeepReadonly9170<T[P]>;
};

type UnionToIntersection9170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9170<T> = UnionToIntersection9170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9170<T extends unknown[], V> = [...T, V];

type TuplifyUnion9170<T, L = LastOf9170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9170<TuplifyUnion9170<Exclude<T, L>>, L>;

type DeepPartial9170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9170<T[P]> }
  : T;

type Paths9170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9170<K, Paths9170<T[K], Prev9170[D]>> : never }[keyof T]
  : never;

type Prev9170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9170 {
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

type ConfigPaths9170 = Paths9170<NestedConfig9170>;

interface HeavyProps9170 {
  config: DeepPartial9170<NestedConfig9170>;
  path?: ConfigPaths9170;
}

const HeavyComponent9170 = memo(function HeavyComponent9170({ config }: HeavyProps9170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9170.displayName = 'HeavyComponent9170';
export default HeavyComponent9170;
