'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6851<T> = T extends (infer U)[]
  ? DeepReadonlyArray6851<U>
  : T extends object
  ? DeepReadonlyObject6851<T>
  : T;

interface DeepReadonlyArray6851<T> extends ReadonlyArray<DeepReadonly6851<T>> {}

type DeepReadonlyObject6851<T> = {
  readonly [P in keyof T]: DeepReadonly6851<T[P]>;
};

type UnionToIntersection6851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6851<T> = UnionToIntersection6851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6851<T extends unknown[], V> = [...T, V];

type TuplifyUnion6851<T, L = LastOf6851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6851<TuplifyUnion6851<Exclude<T, L>>, L>;

type DeepPartial6851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6851<T[P]> }
  : T;

type Paths6851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6851<K, Paths6851<T[K], Prev6851[D]>> : never }[keyof T]
  : never;

type Prev6851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6851 {
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

type ConfigPaths6851 = Paths6851<NestedConfig6851>;

interface HeavyProps6851 {
  config: DeepPartial6851<NestedConfig6851>;
  path?: ConfigPaths6851;
}

const HeavyComponent6851 = memo(function HeavyComponent6851({ config }: HeavyProps6851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6851.displayName = 'HeavyComponent6851';
export default HeavyComponent6851;
