'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9746<T> = T extends (infer U)[]
  ? DeepReadonlyArray9746<U>
  : T extends object
  ? DeepReadonlyObject9746<T>
  : T;

interface DeepReadonlyArray9746<T> extends ReadonlyArray<DeepReadonly9746<T>> {}

type DeepReadonlyObject9746<T> = {
  readonly [P in keyof T]: DeepReadonly9746<T[P]>;
};

type UnionToIntersection9746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9746<T> = UnionToIntersection9746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9746<T extends unknown[], V> = [...T, V];

type TuplifyUnion9746<T, L = LastOf9746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9746<TuplifyUnion9746<Exclude<T, L>>, L>;

type DeepPartial9746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9746<T[P]> }
  : T;

type Paths9746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9746<K, Paths9746<T[K], Prev9746[D]>> : never }[keyof T]
  : never;

type Prev9746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9746 {
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

type ConfigPaths9746 = Paths9746<NestedConfig9746>;

interface HeavyProps9746 {
  config: DeepPartial9746<NestedConfig9746>;
  path?: ConfigPaths9746;
}

const HeavyComponent9746 = memo(function HeavyComponent9746({ config }: HeavyProps9746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9746.displayName = 'HeavyComponent9746';
export default HeavyComponent9746;
