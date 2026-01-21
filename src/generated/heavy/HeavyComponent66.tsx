'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly66<T> = T extends (infer U)[]
  ? DeepReadonlyArray66<U>
  : T extends object
  ? DeepReadonlyObject66<T>
  : T;

interface DeepReadonlyArray66<T> extends ReadonlyArray<DeepReadonly66<T>> {}

type DeepReadonlyObject66<T> = {
  readonly [P in keyof T]: DeepReadonly66<T[P]>;
};

type UnionToIntersection66<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf66<T> = UnionToIntersection66<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push66<T extends unknown[], V> = [...T, V];

type TuplifyUnion66<T, L = LastOf66<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push66<TuplifyUnion66<Exclude<T, L>>, L>;

type DeepPartial66<T> = T extends object
  ? { [P in keyof T]?: DeepPartial66<T[P]> }
  : T;

type Paths66<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join66<K, Paths66<T[K], Prev66[D]>> : never }[keyof T]
  : never;

type Prev66 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join66<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig66 {
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

type ConfigPaths66 = Paths66<NestedConfig66>;

interface HeavyProps66 {
  config: DeepPartial66<NestedConfig66>;
  path?: ConfigPaths66;
}

const HeavyComponent66 = memo(function HeavyComponent66({ config }: HeavyProps66) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 66) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-66 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H66: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent66.displayName = 'HeavyComponent66';
export default HeavyComponent66;
