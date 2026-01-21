'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9880<T> = T extends (infer U)[]
  ? DeepReadonlyArray9880<U>
  : T extends object
  ? DeepReadonlyObject9880<T>
  : T;

interface DeepReadonlyArray9880<T> extends ReadonlyArray<DeepReadonly9880<T>> {}

type DeepReadonlyObject9880<T> = {
  readonly [P in keyof T]: DeepReadonly9880<T[P]>;
};

type UnionToIntersection9880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9880<T> = UnionToIntersection9880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9880<T extends unknown[], V> = [...T, V];

type TuplifyUnion9880<T, L = LastOf9880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9880<TuplifyUnion9880<Exclude<T, L>>, L>;

type DeepPartial9880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9880<T[P]> }
  : T;

type Paths9880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9880<K, Paths9880<T[K], Prev9880[D]>> : never }[keyof T]
  : never;

type Prev9880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9880 {
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

type ConfigPaths9880 = Paths9880<NestedConfig9880>;

interface HeavyProps9880 {
  config: DeepPartial9880<NestedConfig9880>;
  path?: ConfigPaths9880;
}

const HeavyComponent9880 = memo(function HeavyComponent9880({ config }: HeavyProps9880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9880.displayName = 'HeavyComponent9880';
export default HeavyComponent9880;
