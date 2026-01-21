'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9973<T> = T extends (infer U)[]
  ? DeepReadonlyArray9973<U>
  : T extends object
  ? DeepReadonlyObject9973<T>
  : T;

interface DeepReadonlyArray9973<T> extends ReadonlyArray<DeepReadonly9973<T>> {}

type DeepReadonlyObject9973<T> = {
  readonly [P in keyof T]: DeepReadonly9973<T[P]>;
};

type UnionToIntersection9973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9973<T> = UnionToIntersection9973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9973<T extends unknown[], V> = [...T, V];

type TuplifyUnion9973<T, L = LastOf9973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9973<TuplifyUnion9973<Exclude<T, L>>, L>;

type DeepPartial9973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9973<T[P]> }
  : T;

type Paths9973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9973<K, Paths9973<T[K], Prev9973[D]>> : never }[keyof T]
  : never;

type Prev9973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9973 {
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

type ConfigPaths9973 = Paths9973<NestedConfig9973>;

interface HeavyProps9973 {
  config: DeepPartial9973<NestedConfig9973>;
  path?: ConfigPaths9973;
}

const HeavyComponent9973 = memo(function HeavyComponent9973({ config }: HeavyProps9973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9973.displayName = 'HeavyComponent9973';
export default HeavyComponent9973;
