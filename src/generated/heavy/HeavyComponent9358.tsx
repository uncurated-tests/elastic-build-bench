'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9358<T> = T extends (infer U)[]
  ? DeepReadonlyArray9358<U>
  : T extends object
  ? DeepReadonlyObject9358<T>
  : T;

interface DeepReadonlyArray9358<T> extends ReadonlyArray<DeepReadonly9358<T>> {}

type DeepReadonlyObject9358<T> = {
  readonly [P in keyof T]: DeepReadonly9358<T[P]>;
};

type UnionToIntersection9358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9358<T> = UnionToIntersection9358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9358<T extends unknown[], V> = [...T, V];

type TuplifyUnion9358<T, L = LastOf9358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9358<TuplifyUnion9358<Exclude<T, L>>, L>;

type DeepPartial9358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9358<T[P]> }
  : T;

type Paths9358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9358<K, Paths9358<T[K], Prev9358[D]>> : never }[keyof T]
  : never;

type Prev9358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9358 {
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

type ConfigPaths9358 = Paths9358<NestedConfig9358>;

interface HeavyProps9358 {
  config: DeepPartial9358<NestedConfig9358>;
  path?: ConfigPaths9358;
}

const HeavyComponent9358 = memo(function HeavyComponent9358({ config }: HeavyProps9358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9358.displayName = 'HeavyComponent9358';
export default HeavyComponent9358;
