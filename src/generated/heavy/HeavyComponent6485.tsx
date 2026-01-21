'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6485<T> = T extends (infer U)[]
  ? DeepReadonlyArray6485<U>
  : T extends object
  ? DeepReadonlyObject6485<T>
  : T;

interface DeepReadonlyArray6485<T> extends ReadonlyArray<DeepReadonly6485<T>> {}

type DeepReadonlyObject6485<T> = {
  readonly [P in keyof T]: DeepReadonly6485<T[P]>;
};

type UnionToIntersection6485<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6485<T> = UnionToIntersection6485<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6485<T extends unknown[], V> = [...T, V];

type TuplifyUnion6485<T, L = LastOf6485<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6485<TuplifyUnion6485<Exclude<T, L>>, L>;

type DeepPartial6485<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6485<T[P]> }
  : T;

type Paths6485<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6485<K, Paths6485<T[K], Prev6485[D]>> : never }[keyof T]
  : never;

type Prev6485 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6485<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6485 {
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

type ConfigPaths6485 = Paths6485<NestedConfig6485>;

interface HeavyProps6485 {
  config: DeepPartial6485<NestedConfig6485>;
  path?: ConfigPaths6485;
}

const HeavyComponent6485 = memo(function HeavyComponent6485({ config }: HeavyProps6485) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6485) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6485 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6485: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6485.displayName = 'HeavyComponent6485';
export default HeavyComponent6485;
