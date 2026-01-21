'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6570<T> = T extends (infer U)[]
  ? DeepReadonlyArray6570<U>
  : T extends object
  ? DeepReadonlyObject6570<T>
  : T;

interface DeepReadonlyArray6570<T> extends ReadonlyArray<DeepReadonly6570<T>> {}

type DeepReadonlyObject6570<T> = {
  readonly [P in keyof T]: DeepReadonly6570<T[P]>;
};

type UnionToIntersection6570<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6570<T> = UnionToIntersection6570<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6570<T extends unknown[], V> = [...T, V];

type TuplifyUnion6570<T, L = LastOf6570<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6570<TuplifyUnion6570<Exclude<T, L>>, L>;

type DeepPartial6570<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6570<T[P]> }
  : T;

type Paths6570<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6570<K, Paths6570<T[K], Prev6570[D]>> : never }[keyof T]
  : never;

type Prev6570 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6570<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6570 {
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

type ConfigPaths6570 = Paths6570<NestedConfig6570>;

interface HeavyProps6570 {
  config: DeepPartial6570<NestedConfig6570>;
  path?: ConfigPaths6570;
}

const HeavyComponent6570 = memo(function HeavyComponent6570({ config }: HeavyProps6570) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6570) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6570 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6570: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6570.displayName = 'HeavyComponent6570';
export default HeavyComponent6570;
