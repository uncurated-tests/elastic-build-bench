'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9298<T> = T extends (infer U)[]
  ? DeepReadonlyArray9298<U>
  : T extends object
  ? DeepReadonlyObject9298<T>
  : T;

interface DeepReadonlyArray9298<T> extends ReadonlyArray<DeepReadonly9298<T>> {}

type DeepReadonlyObject9298<T> = {
  readonly [P in keyof T]: DeepReadonly9298<T[P]>;
};

type UnionToIntersection9298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9298<T> = UnionToIntersection9298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9298<T extends unknown[], V> = [...T, V];

type TuplifyUnion9298<T, L = LastOf9298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9298<TuplifyUnion9298<Exclude<T, L>>, L>;

type DeepPartial9298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9298<T[P]> }
  : T;

type Paths9298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9298<K, Paths9298<T[K], Prev9298[D]>> : never }[keyof T]
  : never;

type Prev9298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9298 {
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

type ConfigPaths9298 = Paths9298<NestedConfig9298>;

interface HeavyProps9298 {
  config: DeepPartial9298<NestedConfig9298>;
  path?: ConfigPaths9298;
}

const HeavyComponent9298 = memo(function HeavyComponent9298({ config }: HeavyProps9298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9298.displayName = 'HeavyComponent9298';
export default HeavyComponent9298;
