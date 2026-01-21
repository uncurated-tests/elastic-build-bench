'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6381<T> = T extends (infer U)[]
  ? DeepReadonlyArray6381<U>
  : T extends object
  ? DeepReadonlyObject6381<T>
  : T;

interface DeepReadonlyArray6381<T> extends ReadonlyArray<DeepReadonly6381<T>> {}

type DeepReadonlyObject6381<T> = {
  readonly [P in keyof T]: DeepReadonly6381<T[P]>;
};

type UnionToIntersection6381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6381<T> = UnionToIntersection6381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6381<T extends unknown[], V> = [...T, V];

type TuplifyUnion6381<T, L = LastOf6381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6381<TuplifyUnion6381<Exclude<T, L>>, L>;

type DeepPartial6381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6381<T[P]> }
  : T;

type Paths6381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6381<K, Paths6381<T[K], Prev6381[D]>> : never }[keyof T]
  : never;

type Prev6381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6381 {
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

type ConfigPaths6381 = Paths6381<NestedConfig6381>;

interface HeavyProps6381 {
  config: DeepPartial6381<NestedConfig6381>;
  path?: ConfigPaths6381;
}

const HeavyComponent6381 = memo(function HeavyComponent6381({ config }: HeavyProps6381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6381.displayName = 'HeavyComponent6381';
export default HeavyComponent6381;
