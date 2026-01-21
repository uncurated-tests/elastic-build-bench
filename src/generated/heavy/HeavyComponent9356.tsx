'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9356<T> = T extends (infer U)[]
  ? DeepReadonlyArray9356<U>
  : T extends object
  ? DeepReadonlyObject9356<T>
  : T;

interface DeepReadonlyArray9356<T> extends ReadonlyArray<DeepReadonly9356<T>> {}

type DeepReadonlyObject9356<T> = {
  readonly [P in keyof T]: DeepReadonly9356<T[P]>;
};

type UnionToIntersection9356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9356<T> = UnionToIntersection9356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9356<T extends unknown[], V> = [...T, V];

type TuplifyUnion9356<T, L = LastOf9356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9356<TuplifyUnion9356<Exclude<T, L>>, L>;

type DeepPartial9356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9356<T[P]> }
  : T;

type Paths9356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9356<K, Paths9356<T[K], Prev9356[D]>> : never }[keyof T]
  : never;

type Prev9356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9356 {
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

type ConfigPaths9356 = Paths9356<NestedConfig9356>;

interface HeavyProps9356 {
  config: DeepPartial9356<NestedConfig9356>;
  path?: ConfigPaths9356;
}

const HeavyComponent9356 = memo(function HeavyComponent9356({ config }: HeavyProps9356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9356.displayName = 'HeavyComponent9356';
export default HeavyComponent9356;
