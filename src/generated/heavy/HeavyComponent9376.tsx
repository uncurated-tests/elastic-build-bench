'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9376<T> = T extends (infer U)[]
  ? DeepReadonlyArray9376<U>
  : T extends object
  ? DeepReadonlyObject9376<T>
  : T;

interface DeepReadonlyArray9376<T> extends ReadonlyArray<DeepReadonly9376<T>> {}

type DeepReadonlyObject9376<T> = {
  readonly [P in keyof T]: DeepReadonly9376<T[P]>;
};

type UnionToIntersection9376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9376<T> = UnionToIntersection9376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9376<T extends unknown[], V> = [...T, V];

type TuplifyUnion9376<T, L = LastOf9376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9376<TuplifyUnion9376<Exclude<T, L>>, L>;

type DeepPartial9376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9376<T[P]> }
  : T;

type Paths9376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9376<K, Paths9376<T[K], Prev9376[D]>> : never }[keyof T]
  : never;

type Prev9376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9376 {
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

type ConfigPaths9376 = Paths9376<NestedConfig9376>;

interface HeavyProps9376 {
  config: DeepPartial9376<NestedConfig9376>;
  path?: ConfigPaths9376;
}

const HeavyComponent9376 = memo(function HeavyComponent9376({ config }: HeavyProps9376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9376.displayName = 'HeavyComponent9376';
export default HeavyComponent9376;
