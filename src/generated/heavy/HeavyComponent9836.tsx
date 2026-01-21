'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9836<T> = T extends (infer U)[]
  ? DeepReadonlyArray9836<U>
  : T extends object
  ? DeepReadonlyObject9836<T>
  : T;

interface DeepReadonlyArray9836<T> extends ReadonlyArray<DeepReadonly9836<T>> {}

type DeepReadonlyObject9836<T> = {
  readonly [P in keyof T]: DeepReadonly9836<T[P]>;
};

type UnionToIntersection9836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9836<T> = UnionToIntersection9836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9836<T extends unknown[], V> = [...T, V];

type TuplifyUnion9836<T, L = LastOf9836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9836<TuplifyUnion9836<Exclude<T, L>>, L>;

type DeepPartial9836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9836<T[P]> }
  : T;

type Paths9836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9836<K, Paths9836<T[K], Prev9836[D]>> : never }[keyof T]
  : never;

type Prev9836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9836 {
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

type ConfigPaths9836 = Paths9836<NestedConfig9836>;

interface HeavyProps9836 {
  config: DeepPartial9836<NestedConfig9836>;
  path?: ConfigPaths9836;
}

const HeavyComponent9836 = memo(function HeavyComponent9836({ config }: HeavyProps9836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9836.displayName = 'HeavyComponent9836';
export default HeavyComponent9836;
