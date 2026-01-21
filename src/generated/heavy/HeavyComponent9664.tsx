'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9664<T> = T extends (infer U)[]
  ? DeepReadonlyArray9664<U>
  : T extends object
  ? DeepReadonlyObject9664<T>
  : T;

interface DeepReadonlyArray9664<T> extends ReadonlyArray<DeepReadonly9664<T>> {}

type DeepReadonlyObject9664<T> = {
  readonly [P in keyof T]: DeepReadonly9664<T[P]>;
};

type UnionToIntersection9664<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9664<T> = UnionToIntersection9664<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9664<T extends unknown[], V> = [...T, V];

type TuplifyUnion9664<T, L = LastOf9664<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9664<TuplifyUnion9664<Exclude<T, L>>, L>;

type DeepPartial9664<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9664<T[P]> }
  : T;

type Paths9664<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9664<K, Paths9664<T[K], Prev9664[D]>> : never }[keyof T]
  : never;

type Prev9664 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9664<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9664 {
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

type ConfigPaths9664 = Paths9664<NestedConfig9664>;

interface HeavyProps9664 {
  config: DeepPartial9664<NestedConfig9664>;
  path?: ConfigPaths9664;
}

const HeavyComponent9664 = memo(function HeavyComponent9664({ config }: HeavyProps9664) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9664) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9664 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9664: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9664.displayName = 'HeavyComponent9664';
export default HeavyComponent9664;
