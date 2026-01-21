'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9125<T> = T extends (infer U)[]
  ? DeepReadonlyArray9125<U>
  : T extends object
  ? DeepReadonlyObject9125<T>
  : T;

interface DeepReadonlyArray9125<T> extends ReadonlyArray<DeepReadonly9125<T>> {}

type DeepReadonlyObject9125<T> = {
  readonly [P in keyof T]: DeepReadonly9125<T[P]>;
};

type UnionToIntersection9125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9125<T> = UnionToIntersection9125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9125<T extends unknown[], V> = [...T, V];

type TuplifyUnion9125<T, L = LastOf9125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9125<TuplifyUnion9125<Exclude<T, L>>, L>;

type DeepPartial9125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9125<T[P]> }
  : T;

type Paths9125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9125<K, Paths9125<T[K], Prev9125[D]>> : never }[keyof T]
  : never;

type Prev9125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9125 {
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

type ConfigPaths9125 = Paths9125<NestedConfig9125>;

interface HeavyProps9125 {
  config: DeepPartial9125<NestedConfig9125>;
  path?: ConfigPaths9125;
}

const HeavyComponent9125 = memo(function HeavyComponent9125({ config }: HeavyProps9125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9125.displayName = 'HeavyComponent9125';
export default HeavyComponent9125;
