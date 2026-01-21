'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9913<T> = T extends (infer U)[]
  ? DeepReadonlyArray9913<U>
  : T extends object
  ? DeepReadonlyObject9913<T>
  : T;

interface DeepReadonlyArray9913<T> extends ReadonlyArray<DeepReadonly9913<T>> {}

type DeepReadonlyObject9913<T> = {
  readonly [P in keyof T]: DeepReadonly9913<T[P]>;
};

type UnionToIntersection9913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9913<T> = UnionToIntersection9913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9913<T extends unknown[], V> = [...T, V];

type TuplifyUnion9913<T, L = LastOf9913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9913<TuplifyUnion9913<Exclude<T, L>>, L>;

type DeepPartial9913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9913<T[P]> }
  : T;

type Paths9913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9913<K, Paths9913<T[K], Prev9913[D]>> : never }[keyof T]
  : never;

type Prev9913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9913 {
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

type ConfigPaths9913 = Paths9913<NestedConfig9913>;

interface HeavyProps9913 {
  config: DeepPartial9913<NestedConfig9913>;
  path?: ConfigPaths9913;
}

const HeavyComponent9913 = memo(function HeavyComponent9913({ config }: HeavyProps9913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9913.displayName = 'HeavyComponent9913';
export default HeavyComponent9913;
