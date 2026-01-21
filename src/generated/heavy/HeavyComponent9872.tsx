'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9872<T> = T extends (infer U)[]
  ? DeepReadonlyArray9872<U>
  : T extends object
  ? DeepReadonlyObject9872<T>
  : T;

interface DeepReadonlyArray9872<T> extends ReadonlyArray<DeepReadonly9872<T>> {}

type DeepReadonlyObject9872<T> = {
  readonly [P in keyof T]: DeepReadonly9872<T[P]>;
};

type UnionToIntersection9872<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9872<T> = UnionToIntersection9872<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9872<T extends unknown[], V> = [...T, V];

type TuplifyUnion9872<T, L = LastOf9872<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9872<TuplifyUnion9872<Exclude<T, L>>, L>;

type DeepPartial9872<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9872<T[P]> }
  : T;

type Paths9872<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9872<K, Paths9872<T[K], Prev9872[D]>> : never }[keyof T]
  : never;

type Prev9872 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9872<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9872 {
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

type ConfigPaths9872 = Paths9872<NestedConfig9872>;

interface HeavyProps9872 {
  config: DeepPartial9872<NestedConfig9872>;
  path?: ConfigPaths9872;
}

const HeavyComponent9872 = memo(function HeavyComponent9872({ config }: HeavyProps9872) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9872) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9872 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9872: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9872.displayName = 'HeavyComponent9872';
export default HeavyComponent9872;
