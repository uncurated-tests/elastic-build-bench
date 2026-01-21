'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6264<T> = T extends (infer U)[]
  ? DeepReadonlyArray6264<U>
  : T extends object
  ? DeepReadonlyObject6264<T>
  : T;

interface DeepReadonlyArray6264<T> extends ReadonlyArray<DeepReadonly6264<T>> {}

type DeepReadonlyObject6264<T> = {
  readonly [P in keyof T]: DeepReadonly6264<T[P]>;
};

type UnionToIntersection6264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6264<T> = UnionToIntersection6264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6264<T extends unknown[], V> = [...T, V];

type TuplifyUnion6264<T, L = LastOf6264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6264<TuplifyUnion6264<Exclude<T, L>>, L>;

type DeepPartial6264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6264<T[P]> }
  : T;

type Paths6264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6264<K, Paths6264<T[K], Prev6264[D]>> : never }[keyof T]
  : never;

type Prev6264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6264 {
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

type ConfigPaths6264 = Paths6264<NestedConfig6264>;

interface HeavyProps6264 {
  config: DeepPartial6264<NestedConfig6264>;
  path?: ConfigPaths6264;
}

const HeavyComponent6264 = memo(function HeavyComponent6264({ config }: HeavyProps6264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6264.displayName = 'HeavyComponent6264';
export default HeavyComponent6264;
