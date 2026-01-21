'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6487<T> = T extends (infer U)[]
  ? DeepReadonlyArray6487<U>
  : T extends object
  ? DeepReadonlyObject6487<T>
  : T;

interface DeepReadonlyArray6487<T> extends ReadonlyArray<DeepReadonly6487<T>> {}

type DeepReadonlyObject6487<T> = {
  readonly [P in keyof T]: DeepReadonly6487<T[P]>;
};

type UnionToIntersection6487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6487<T> = UnionToIntersection6487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6487<T extends unknown[], V> = [...T, V];

type TuplifyUnion6487<T, L = LastOf6487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6487<TuplifyUnion6487<Exclude<T, L>>, L>;

type DeepPartial6487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6487<T[P]> }
  : T;

type Paths6487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6487<K, Paths6487<T[K], Prev6487[D]>> : never }[keyof T]
  : never;

type Prev6487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6487 {
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

type ConfigPaths6487 = Paths6487<NestedConfig6487>;

interface HeavyProps6487 {
  config: DeepPartial6487<NestedConfig6487>;
  path?: ConfigPaths6487;
}

const HeavyComponent6487 = memo(function HeavyComponent6487({ config }: HeavyProps6487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6487.displayName = 'HeavyComponent6487';
export default HeavyComponent6487;
