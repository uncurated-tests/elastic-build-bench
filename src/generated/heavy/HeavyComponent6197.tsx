'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6197<T> = T extends (infer U)[]
  ? DeepReadonlyArray6197<U>
  : T extends object
  ? DeepReadonlyObject6197<T>
  : T;

interface DeepReadonlyArray6197<T> extends ReadonlyArray<DeepReadonly6197<T>> {}

type DeepReadonlyObject6197<T> = {
  readonly [P in keyof T]: DeepReadonly6197<T[P]>;
};

type UnionToIntersection6197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6197<T> = UnionToIntersection6197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6197<T extends unknown[], V> = [...T, V];

type TuplifyUnion6197<T, L = LastOf6197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6197<TuplifyUnion6197<Exclude<T, L>>, L>;

type DeepPartial6197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6197<T[P]> }
  : T;

type Paths6197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6197<K, Paths6197<T[K], Prev6197[D]>> : never }[keyof T]
  : never;

type Prev6197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6197 {
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

type ConfigPaths6197 = Paths6197<NestedConfig6197>;

interface HeavyProps6197 {
  config: DeepPartial6197<NestedConfig6197>;
  path?: ConfigPaths6197;
}

const HeavyComponent6197 = memo(function HeavyComponent6197({ config }: HeavyProps6197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6197.displayName = 'HeavyComponent6197';
export default HeavyComponent6197;
