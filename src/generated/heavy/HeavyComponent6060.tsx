'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6060<T> = T extends (infer U)[]
  ? DeepReadonlyArray6060<U>
  : T extends object
  ? DeepReadonlyObject6060<T>
  : T;

interface DeepReadonlyArray6060<T> extends ReadonlyArray<DeepReadonly6060<T>> {}

type DeepReadonlyObject6060<T> = {
  readonly [P in keyof T]: DeepReadonly6060<T[P]>;
};

type UnionToIntersection6060<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6060<T> = UnionToIntersection6060<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6060<T extends unknown[], V> = [...T, V];

type TuplifyUnion6060<T, L = LastOf6060<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6060<TuplifyUnion6060<Exclude<T, L>>, L>;

type DeepPartial6060<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6060<T[P]> }
  : T;

type Paths6060<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6060<K, Paths6060<T[K], Prev6060[D]>> : never }[keyof T]
  : never;

type Prev6060 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6060<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6060 {
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

type ConfigPaths6060 = Paths6060<NestedConfig6060>;

interface HeavyProps6060 {
  config: DeepPartial6060<NestedConfig6060>;
  path?: ConfigPaths6060;
}

const HeavyComponent6060 = memo(function HeavyComponent6060({ config }: HeavyProps6060) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6060) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6060 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6060: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6060.displayName = 'HeavyComponent6060';
export default HeavyComponent6060;
