'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6135<T> = T extends (infer U)[]
  ? DeepReadonlyArray6135<U>
  : T extends object
  ? DeepReadonlyObject6135<T>
  : T;

interface DeepReadonlyArray6135<T> extends ReadonlyArray<DeepReadonly6135<T>> {}

type DeepReadonlyObject6135<T> = {
  readonly [P in keyof T]: DeepReadonly6135<T[P]>;
};

type UnionToIntersection6135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6135<T> = UnionToIntersection6135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6135<T extends unknown[], V> = [...T, V];

type TuplifyUnion6135<T, L = LastOf6135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6135<TuplifyUnion6135<Exclude<T, L>>, L>;

type DeepPartial6135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6135<T[P]> }
  : T;

type Paths6135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6135<K, Paths6135<T[K], Prev6135[D]>> : never }[keyof T]
  : never;

type Prev6135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6135 {
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

type ConfigPaths6135 = Paths6135<NestedConfig6135>;

interface HeavyProps6135 {
  config: DeepPartial6135<NestedConfig6135>;
  path?: ConfigPaths6135;
}

const HeavyComponent6135 = memo(function HeavyComponent6135({ config }: HeavyProps6135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6135.displayName = 'HeavyComponent6135';
export default HeavyComponent6135;
