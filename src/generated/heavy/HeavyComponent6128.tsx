'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6128<T> = T extends (infer U)[]
  ? DeepReadonlyArray6128<U>
  : T extends object
  ? DeepReadonlyObject6128<T>
  : T;

interface DeepReadonlyArray6128<T> extends ReadonlyArray<DeepReadonly6128<T>> {}

type DeepReadonlyObject6128<T> = {
  readonly [P in keyof T]: DeepReadonly6128<T[P]>;
};

type UnionToIntersection6128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6128<T> = UnionToIntersection6128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6128<T extends unknown[], V> = [...T, V];

type TuplifyUnion6128<T, L = LastOf6128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6128<TuplifyUnion6128<Exclude<T, L>>, L>;

type DeepPartial6128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6128<T[P]> }
  : T;

type Paths6128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6128<K, Paths6128<T[K], Prev6128[D]>> : never }[keyof T]
  : never;

type Prev6128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6128 {
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

type ConfigPaths6128 = Paths6128<NestedConfig6128>;

interface HeavyProps6128 {
  config: DeepPartial6128<NestedConfig6128>;
  path?: ConfigPaths6128;
}

const HeavyComponent6128 = memo(function HeavyComponent6128({ config }: HeavyProps6128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6128.displayName = 'HeavyComponent6128';
export default HeavyComponent6128;
