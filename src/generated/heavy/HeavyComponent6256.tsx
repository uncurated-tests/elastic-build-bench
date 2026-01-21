'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6256<T> = T extends (infer U)[]
  ? DeepReadonlyArray6256<U>
  : T extends object
  ? DeepReadonlyObject6256<T>
  : T;

interface DeepReadonlyArray6256<T> extends ReadonlyArray<DeepReadonly6256<T>> {}

type DeepReadonlyObject6256<T> = {
  readonly [P in keyof T]: DeepReadonly6256<T[P]>;
};

type UnionToIntersection6256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6256<T> = UnionToIntersection6256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6256<T extends unknown[], V> = [...T, V];

type TuplifyUnion6256<T, L = LastOf6256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6256<TuplifyUnion6256<Exclude<T, L>>, L>;

type DeepPartial6256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6256<T[P]> }
  : T;

type Paths6256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6256<K, Paths6256<T[K], Prev6256[D]>> : never }[keyof T]
  : never;

type Prev6256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6256 {
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

type ConfigPaths6256 = Paths6256<NestedConfig6256>;

interface HeavyProps6256 {
  config: DeepPartial6256<NestedConfig6256>;
  path?: ConfigPaths6256;
}

const HeavyComponent6256 = memo(function HeavyComponent6256({ config }: HeavyProps6256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6256.displayName = 'HeavyComponent6256';
export default HeavyComponent6256;
