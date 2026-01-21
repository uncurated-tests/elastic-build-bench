'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6152<T> = T extends (infer U)[]
  ? DeepReadonlyArray6152<U>
  : T extends object
  ? DeepReadonlyObject6152<T>
  : T;

interface DeepReadonlyArray6152<T> extends ReadonlyArray<DeepReadonly6152<T>> {}

type DeepReadonlyObject6152<T> = {
  readonly [P in keyof T]: DeepReadonly6152<T[P]>;
};

type UnionToIntersection6152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6152<T> = UnionToIntersection6152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6152<T extends unknown[], V> = [...T, V];

type TuplifyUnion6152<T, L = LastOf6152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6152<TuplifyUnion6152<Exclude<T, L>>, L>;

type DeepPartial6152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6152<T[P]> }
  : T;

type Paths6152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6152<K, Paths6152<T[K], Prev6152[D]>> : never }[keyof T]
  : never;

type Prev6152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6152 {
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

type ConfigPaths6152 = Paths6152<NestedConfig6152>;

interface HeavyProps6152 {
  config: DeepPartial6152<NestedConfig6152>;
  path?: ConfigPaths6152;
}

const HeavyComponent6152 = memo(function HeavyComponent6152({ config }: HeavyProps6152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6152.displayName = 'HeavyComponent6152';
export default HeavyComponent6152;
