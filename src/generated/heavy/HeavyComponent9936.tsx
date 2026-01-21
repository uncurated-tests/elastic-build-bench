'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9936<T> = T extends (infer U)[]
  ? DeepReadonlyArray9936<U>
  : T extends object
  ? DeepReadonlyObject9936<T>
  : T;

interface DeepReadonlyArray9936<T> extends ReadonlyArray<DeepReadonly9936<T>> {}

type DeepReadonlyObject9936<T> = {
  readonly [P in keyof T]: DeepReadonly9936<T[P]>;
};

type UnionToIntersection9936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9936<T> = UnionToIntersection9936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9936<T extends unknown[], V> = [...T, V];

type TuplifyUnion9936<T, L = LastOf9936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9936<TuplifyUnion9936<Exclude<T, L>>, L>;

type DeepPartial9936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9936<T[P]> }
  : T;

type Paths9936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9936<K, Paths9936<T[K], Prev9936[D]>> : never }[keyof T]
  : never;

type Prev9936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9936 {
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

type ConfigPaths9936 = Paths9936<NestedConfig9936>;

interface HeavyProps9936 {
  config: DeepPartial9936<NestedConfig9936>;
  path?: ConfigPaths9936;
}

const HeavyComponent9936 = memo(function HeavyComponent9936({ config }: HeavyProps9936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9936.displayName = 'HeavyComponent9936';
export default HeavyComponent9936;
