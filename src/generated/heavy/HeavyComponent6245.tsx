'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6245<T> = T extends (infer U)[]
  ? DeepReadonlyArray6245<U>
  : T extends object
  ? DeepReadonlyObject6245<T>
  : T;

interface DeepReadonlyArray6245<T> extends ReadonlyArray<DeepReadonly6245<T>> {}

type DeepReadonlyObject6245<T> = {
  readonly [P in keyof T]: DeepReadonly6245<T[P]>;
};

type UnionToIntersection6245<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6245<T> = UnionToIntersection6245<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6245<T extends unknown[], V> = [...T, V];

type TuplifyUnion6245<T, L = LastOf6245<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6245<TuplifyUnion6245<Exclude<T, L>>, L>;

type DeepPartial6245<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6245<T[P]> }
  : T;

type Paths6245<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6245<K, Paths6245<T[K], Prev6245[D]>> : never }[keyof T]
  : never;

type Prev6245 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6245<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6245 {
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

type ConfigPaths6245 = Paths6245<NestedConfig6245>;

interface HeavyProps6245 {
  config: DeepPartial6245<NestedConfig6245>;
  path?: ConfigPaths6245;
}

const HeavyComponent6245 = memo(function HeavyComponent6245({ config }: HeavyProps6245) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6245) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6245 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6245: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6245.displayName = 'HeavyComponent6245';
export default HeavyComponent6245;
