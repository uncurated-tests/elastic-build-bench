'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6458<T> = T extends (infer U)[]
  ? DeepReadonlyArray6458<U>
  : T extends object
  ? DeepReadonlyObject6458<T>
  : T;

interface DeepReadonlyArray6458<T> extends ReadonlyArray<DeepReadonly6458<T>> {}

type DeepReadonlyObject6458<T> = {
  readonly [P in keyof T]: DeepReadonly6458<T[P]>;
};

type UnionToIntersection6458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6458<T> = UnionToIntersection6458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6458<T extends unknown[], V> = [...T, V];

type TuplifyUnion6458<T, L = LastOf6458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6458<TuplifyUnion6458<Exclude<T, L>>, L>;

type DeepPartial6458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6458<T[P]> }
  : T;

type Paths6458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6458<K, Paths6458<T[K], Prev6458[D]>> : never }[keyof T]
  : never;

type Prev6458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6458 {
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

type ConfigPaths6458 = Paths6458<NestedConfig6458>;

interface HeavyProps6458 {
  config: DeepPartial6458<NestedConfig6458>;
  path?: ConfigPaths6458;
}

const HeavyComponent6458 = memo(function HeavyComponent6458({ config }: HeavyProps6458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6458.displayName = 'HeavyComponent6458';
export default HeavyComponent6458;
