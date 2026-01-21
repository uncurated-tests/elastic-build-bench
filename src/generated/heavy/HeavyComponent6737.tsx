'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6737<T> = T extends (infer U)[]
  ? DeepReadonlyArray6737<U>
  : T extends object
  ? DeepReadonlyObject6737<T>
  : T;

interface DeepReadonlyArray6737<T> extends ReadonlyArray<DeepReadonly6737<T>> {}

type DeepReadonlyObject6737<T> = {
  readonly [P in keyof T]: DeepReadonly6737<T[P]>;
};

type UnionToIntersection6737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6737<T> = UnionToIntersection6737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6737<T extends unknown[], V> = [...T, V];

type TuplifyUnion6737<T, L = LastOf6737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6737<TuplifyUnion6737<Exclude<T, L>>, L>;

type DeepPartial6737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6737<T[P]> }
  : T;

type Paths6737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6737<K, Paths6737<T[K], Prev6737[D]>> : never }[keyof T]
  : never;

type Prev6737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6737 {
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

type ConfigPaths6737 = Paths6737<NestedConfig6737>;

interface HeavyProps6737 {
  config: DeepPartial6737<NestedConfig6737>;
  path?: ConfigPaths6737;
}

const HeavyComponent6737 = memo(function HeavyComponent6737({ config }: HeavyProps6737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6737.displayName = 'HeavyComponent6737';
export default HeavyComponent6737;
