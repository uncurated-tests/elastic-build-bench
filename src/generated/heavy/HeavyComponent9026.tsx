'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9026<T> = T extends (infer U)[]
  ? DeepReadonlyArray9026<U>
  : T extends object
  ? DeepReadonlyObject9026<T>
  : T;

interface DeepReadonlyArray9026<T> extends ReadonlyArray<DeepReadonly9026<T>> {}

type DeepReadonlyObject9026<T> = {
  readonly [P in keyof T]: DeepReadonly9026<T[P]>;
};

type UnionToIntersection9026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9026<T> = UnionToIntersection9026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9026<T extends unknown[], V> = [...T, V];

type TuplifyUnion9026<T, L = LastOf9026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9026<TuplifyUnion9026<Exclude<T, L>>, L>;

type DeepPartial9026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9026<T[P]> }
  : T;

type Paths9026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9026<K, Paths9026<T[K], Prev9026[D]>> : never }[keyof T]
  : never;

type Prev9026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9026 {
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

type ConfigPaths9026 = Paths9026<NestedConfig9026>;

interface HeavyProps9026 {
  config: DeepPartial9026<NestedConfig9026>;
  path?: ConfigPaths9026;
}

const HeavyComponent9026 = memo(function HeavyComponent9026({ config }: HeavyProps9026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9026.displayName = 'HeavyComponent9026';
export default HeavyComponent9026;
