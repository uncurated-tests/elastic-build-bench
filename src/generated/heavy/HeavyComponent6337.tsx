'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6337<T> = T extends (infer U)[]
  ? DeepReadonlyArray6337<U>
  : T extends object
  ? DeepReadonlyObject6337<T>
  : T;

interface DeepReadonlyArray6337<T> extends ReadonlyArray<DeepReadonly6337<T>> {}

type DeepReadonlyObject6337<T> = {
  readonly [P in keyof T]: DeepReadonly6337<T[P]>;
};

type UnionToIntersection6337<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6337<T> = UnionToIntersection6337<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6337<T extends unknown[], V> = [...T, V];

type TuplifyUnion6337<T, L = LastOf6337<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6337<TuplifyUnion6337<Exclude<T, L>>, L>;

type DeepPartial6337<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6337<T[P]> }
  : T;

type Paths6337<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6337<K, Paths6337<T[K], Prev6337[D]>> : never }[keyof T]
  : never;

type Prev6337 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6337<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6337 {
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

type ConfigPaths6337 = Paths6337<NestedConfig6337>;

interface HeavyProps6337 {
  config: DeepPartial6337<NestedConfig6337>;
  path?: ConfigPaths6337;
}

const HeavyComponent6337 = memo(function HeavyComponent6337({ config }: HeavyProps6337) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6337) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6337 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6337: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6337.displayName = 'HeavyComponent6337';
export default HeavyComponent6337;
