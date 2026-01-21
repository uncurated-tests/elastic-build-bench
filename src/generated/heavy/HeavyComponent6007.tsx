'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6007<T> = T extends (infer U)[]
  ? DeepReadonlyArray6007<U>
  : T extends object
  ? DeepReadonlyObject6007<T>
  : T;

interface DeepReadonlyArray6007<T> extends ReadonlyArray<DeepReadonly6007<T>> {}

type DeepReadonlyObject6007<T> = {
  readonly [P in keyof T]: DeepReadonly6007<T[P]>;
};

type UnionToIntersection6007<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6007<T> = UnionToIntersection6007<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6007<T extends unknown[], V> = [...T, V];

type TuplifyUnion6007<T, L = LastOf6007<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6007<TuplifyUnion6007<Exclude<T, L>>, L>;

type DeepPartial6007<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6007<T[P]> }
  : T;

type Paths6007<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6007<K, Paths6007<T[K], Prev6007[D]>> : never }[keyof T]
  : never;

type Prev6007 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6007<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6007 {
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

type ConfigPaths6007 = Paths6007<NestedConfig6007>;

interface HeavyProps6007 {
  config: DeepPartial6007<NestedConfig6007>;
  path?: ConfigPaths6007;
}

const HeavyComponent6007 = memo(function HeavyComponent6007({ config }: HeavyProps6007) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6007) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6007 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6007: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6007.displayName = 'HeavyComponent6007';
export default HeavyComponent6007;
