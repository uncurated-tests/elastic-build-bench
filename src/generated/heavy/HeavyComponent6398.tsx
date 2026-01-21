'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6398<T> = T extends (infer U)[]
  ? DeepReadonlyArray6398<U>
  : T extends object
  ? DeepReadonlyObject6398<T>
  : T;

interface DeepReadonlyArray6398<T> extends ReadonlyArray<DeepReadonly6398<T>> {}

type DeepReadonlyObject6398<T> = {
  readonly [P in keyof T]: DeepReadonly6398<T[P]>;
};

type UnionToIntersection6398<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6398<T> = UnionToIntersection6398<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6398<T extends unknown[], V> = [...T, V];

type TuplifyUnion6398<T, L = LastOf6398<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6398<TuplifyUnion6398<Exclude<T, L>>, L>;

type DeepPartial6398<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6398<T[P]> }
  : T;

type Paths6398<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6398<K, Paths6398<T[K], Prev6398[D]>> : never }[keyof T]
  : never;

type Prev6398 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6398<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6398 {
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

type ConfigPaths6398 = Paths6398<NestedConfig6398>;

interface HeavyProps6398 {
  config: DeepPartial6398<NestedConfig6398>;
  path?: ConfigPaths6398;
}

const HeavyComponent6398 = memo(function HeavyComponent6398({ config }: HeavyProps6398) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6398) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6398 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6398: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6398.displayName = 'HeavyComponent6398';
export default HeavyComponent6398;
