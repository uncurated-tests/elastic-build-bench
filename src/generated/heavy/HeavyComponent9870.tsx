'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9870<T> = T extends (infer U)[]
  ? DeepReadonlyArray9870<U>
  : T extends object
  ? DeepReadonlyObject9870<T>
  : T;

interface DeepReadonlyArray9870<T> extends ReadonlyArray<DeepReadonly9870<T>> {}

type DeepReadonlyObject9870<T> = {
  readonly [P in keyof T]: DeepReadonly9870<T[P]>;
};

type UnionToIntersection9870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9870<T> = UnionToIntersection9870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9870<T extends unknown[], V> = [...T, V];

type TuplifyUnion9870<T, L = LastOf9870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9870<TuplifyUnion9870<Exclude<T, L>>, L>;

type DeepPartial9870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9870<T[P]> }
  : T;

type Paths9870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9870<K, Paths9870<T[K], Prev9870[D]>> : never }[keyof T]
  : never;

type Prev9870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9870 {
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

type ConfigPaths9870 = Paths9870<NestedConfig9870>;

interface HeavyProps9870 {
  config: DeepPartial9870<NestedConfig9870>;
  path?: ConfigPaths9870;
}

const HeavyComponent9870 = memo(function HeavyComponent9870({ config }: HeavyProps9870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9870.displayName = 'HeavyComponent9870';
export default HeavyComponent9870;
