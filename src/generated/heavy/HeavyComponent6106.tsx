'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6106<T> = T extends (infer U)[]
  ? DeepReadonlyArray6106<U>
  : T extends object
  ? DeepReadonlyObject6106<T>
  : T;

interface DeepReadonlyArray6106<T> extends ReadonlyArray<DeepReadonly6106<T>> {}

type DeepReadonlyObject6106<T> = {
  readonly [P in keyof T]: DeepReadonly6106<T[P]>;
};

type UnionToIntersection6106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6106<T> = UnionToIntersection6106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6106<T extends unknown[], V> = [...T, V];

type TuplifyUnion6106<T, L = LastOf6106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6106<TuplifyUnion6106<Exclude<T, L>>, L>;

type DeepPartial6106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6106<T[P]> }
  : T;

type Paths6106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6106<K, Paths6106<T[K], Prev6106[D]>> : never }[keyof T]
  : never;

type Prev6106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6106 {
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

type ConfigPaths6106 = Paths6106<NestedConfig6106>;

interface HeavyProps6106 {
  config: DeepPartial6106<NestedConfig6106>;
  path?: ConfigPaths6106;
}

const HeavyComponent6106 = memo(function HeavyComponent6106({ config }: HeavyProps6106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6106.displayName = 'HeavyComponent6106';
export default HeavyComponent6106;
