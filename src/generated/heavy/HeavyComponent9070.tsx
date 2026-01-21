'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9070<T> = T extends (infer U)[]
  ? DeepReadonlyArray9070<U>
  : T extends object
  ? DeepReadonlyObject9070<T>
  : T;

interface DeepReadonlyArray9070<T> extends ReadonlyArray<DeepReadonly9070<T>> {}

type DeepReadonlyObject9070<T> = {
  readonly [P in keyof T]: DeepReadonly9070<T[P]>;
};

type UnionToIntersection9070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9070<T> = UnionToIntersection9070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9070<T extends unknown[], V> = [...T, V];

type TuplifyUnion9070<T, L = LastOf9070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9070<TuplifyUnion9070<Exclude<T, L>>, L>;

type DeepPartial9070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9070<T[P]> }
  : T;

type Paths9070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9070<K, Paths9070<T[K], Prev9070[D]>> : never }[keyof T]
  : never;

type Prev9070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9070 {
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

type ConfigPaths9070 = Paths9070<NestedConfig9070>;

interface HeavyProps9070 {
  config: DeepPartial9070<NestedConfig9070>;
  path?: ConfigPaths9070;
}

const HeavyComponent9070 = memo(function HeavyComponent9070({ config }: HeavyProps9070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9070.displayName = 'HeavyComponent9070';
export default HeavyComponent9070;
