'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6277<T> = T extends (infer U)[]
  ? DeepReadonlyArray6277<U>
  : T extends object
  ? DeepReadonlyObject6277<T>
  : T;

interface DeepReadonlyArray6277<T> extends ReadonlyArray<DeepReadonly6277<T>> {}

type DeepReadonlyObject6277<T> = {
  readonly [P in keyof T]: DeepReadonly6277<T[P]>;
};

type UnionToIntersection6277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6277<T> = UnionToIntersection6277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6277<T extends unknown[], V> = [...T, V];

type TuplifyUnion6277<T, L = LastOf6277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6277<TuplifyUnion6277<Exclude<T, L>>, L>;

type DeepPartial6277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6277<T[P]> }
  : T;

type Paths6277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6277<K, Paths6277<T[K], Prev6277[D]>> : never }[keyof T]
  : never;

type Prev6277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6277 {
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

type ConfigPaths6277 = Paths6277<NestedConfig6277>;

interface HeavyProps6277 {
  config: DeepPartial6277<NestedConfig6277>;
  path?: ConfigPaths6277;
}

const HeavyComponent6277 = memo(function HeavyComponent6277({ config }: HeavyProps6277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6277.displayName = 'HeavyComponent6277';
export default HeavyComponent6277;
