'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9940<T> = T extends (infer U)[]
  ? DeepReadonlyArray9940<U>
  : T extends object
  ? DeepReadonlyObject9940<T>
  : T;

interface DeepReadonlyArray9940<T> extends ReadonlyArray<DeepReadonly9940<T>> {}

type DeepReadonlyObject9940<T> = {
  readonly [P in keyof T]: DeepReadonly9940<T[P]>;
};

type UnionToIntersection9940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9940<T> = UnionToIntersection9940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9940<T extends unknown[], V> = [...T, V];

type TuplifyUnion9940<T, L = LastOf9940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9940<TuplifyUnion9940<Exclude<T, L>>, L>;

type DeepPartial9940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9940<T[P]> }
  : T;

type Paths9940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9940<K, Paths9940<T[K], Prev9940[D]>> : never }[keyof T]
  : never;

type Prev9940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9940 {
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

type ConfigPaths9940 = Paths9940<NestedConfig9940>;

interface HeavyProps9940 {
  config: DeepPartial9940<NestedConfig9940>;
  path?: ConfigPaths9940;
}

const HeavyComponent9940 = memo(function HeavyComponent9940({ config }: HeavyProps9940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9940.displayName = 'HeavyComponent9940';
export default HeavyComponent9940;
