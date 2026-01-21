'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6369<T> = T extends (infer U)[]
  ? DeepReadonlyArray6369<U>
  : T extends object
  ? DeepReadonlyObject6369<T>
  : T;

interface DeepReadonlyArray6369<T> extends ReadonlyArray<DeepReadonly6369<T>> {}

type DeepReadonlyObject6369<T> = {
  readonly [P in keyof T]: DeepReadonly6369<T[P]>;
};

type UnionToIntersection6369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6369<T> = UnionToIntersection6369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6369<T extends unknown[], V> = [...T, V];

type TuplifyUnion6369<T, L = LastOf6369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6369<TuplifyUnion6369<Exclude<T, L>>, L>;

type DeepPartial6369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6369<T[P]> }
  : T;

type Paths6369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6369<K, Paths6369<T[K], Prev6369[D]>> : never }[keyof T]
  : never;

type Prev6369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6369 {
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

type ConfigPaths6369 = Paths6369<NestedConfig6369>;

interface HeavyProps6369 {
  config: DeepPartial6369<NestedConfig6369>;
  path?: ConfigPaths6369;
}

const HeavyComponent6369 = memo(function HeavyComponent6369({ config }: HeavyProps6369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6369.displayName = 'HeavyComponent6369';
export default HeavyComponent6369;
