'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly398<T> = T extends (infer U)[]
  ? DeepReadonlyArray398<U>
  : T extends object
  ? DeepReadonlyObject398<T>
  : T;

interface DeepReadonlyArray398<T> extends ReadonlyArray<DeepReadonly398<T>> {}

type DeepReadonlyObject398<T> = {
  readonly [P in keyof T]: DeepReadonly398<T[P]>;
};

type UnionToIntersection398<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf398<T> = UnionToIntersection398<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push398<T extends unknown[], V> = [...T, V];

type TuplifyUnion398<T, L = LastOf398<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push398<TuplifyUnion398<Exclude<T, L>>, L>;

type DeepPartial398<T> = T extends object
  ? { [P in keyof T]?: DeepPartial398<T[P]> }
  : T;

type Paths398<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join398<K, Paths398<T[K], Prev398[D]>> : never }[keyof T]
  : never;

type Prev398 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join398<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig398 {
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

type ConfigPaths398 = Paths398<NestedConfig398>;

interface HeavyProps398 {
  config: DeepPartial398<NestedConfig398>;
  path?: ConfigPaths398;
}

const HeavyComponent398 = memo(function HeavyComponent398({ config }: HeavyProps398) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 398) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-398 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H398: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent398.displayName = 'HeavyComponent398';
export default HeavyComponent398;
