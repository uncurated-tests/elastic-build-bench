'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9286<T> = T extends (infer U)[]
  ? DeepReadonlyArray9286<U>
  : T extends object
  ? DeepReadonlyObject9286<T>
  : T;

interface DeepReadonlyArray9286<T> extends ReadonlyArray<DeepReadonly9286<T>> {}

type DeepReadonlyObject9286<T> = {
  readonly [P in keyof T]: DeepReadonly9286<T[P]>;
};

type UnionToIntersection9286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9286<T> = UnionToIntersection9286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9286<T extends unknown[], V> = [...T, V];

type TuplifyUnion9286<T, L = LastOf9286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9286<TuplifyUnion9286<Exclude<T, L>>, L>;

type DeepPartial9286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9286<T[P]> }
  : T;

type Paths9286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9286<K, Paths9286<T[K], Prev9286[D]>> : never }[keyof T]
  : never;

type Prev9286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9286 {
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

type ConfigPaths9286 = Paths9286<NestedConfig9286>;

interface HeavyProps9286 {
  config: DeepPartial9286<NestedConfig9286>;
  path?: ConfigPaths9286;
}

const HeavyComponent9286 = memo(function HeavyComponent9286({ config }: HeavyProps9286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9286.displayName = 'HeavyComponent9286';
export default HeavyComponent9286;
