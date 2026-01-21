'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9765<T> = T extends (infer U)[]
  ? DeepReadonlyArray9765<U>
  : T extends object
  ? DeepReadonlyObject9765<T>
  : T;

interface DeepReadonlyArray9765<T> extends ReadonlyArray<DeepReadonly9765<T>> {}

type DeepReadonlyObject9765<T> = {
  readonly [P in keyof T]: DeepReadonly9765<T[P]>;
};

type UnionToIntersection9765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9765<T> = UnionToIntersection9765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9765<T extends unknown[], V> = [...T, V];

type TuplifyUnion9765<T, L = LastOf9765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9765<TuplifyUnion9765<Exclude<T, L>>, L>;

type DeepPartial9765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9765<T[P]> }
  : T;

type Paths9765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9765<K, Paths9765<T[K], Prev9765[D]>> : never }[keyof T]
  : never;

type Prev9765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9765 {
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

type ConfigPaths9765 = Paths9765<NestedConfig9765>;

interface HeavyProps9765 {
  config: DeepPartial9765<NestedConfig9765>;
  path?: ConfigPaths9765;
}

const HeavyComponent9765 = memo(function HeavyComponent9765({ config }: HeavyProps9765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9765.displayName = 'HeavyComponent9765';
export default HeavyComponent9765;
