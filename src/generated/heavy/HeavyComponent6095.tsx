'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6095<T> = T extends (infer U)[]
  ? DeepReadonlyArray6095<U>
  : T extends object
  ? DeepReadonlyObject6095<T>
  : T;

interface DeepReadonlyArray6095<T> extends ReadonlyArray<DeepReadonly6095<T>> {}

type DeepReadonlyObject6095<T> = {
  readonly [P in keyof T]: DeepReadonly6095<T[P]>;
};

type UnionToIntersection6095<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6095<T> = UnionToIntersection6095<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6095<T extends unknown[], V> = [...T, V];

type TuplifyUnion6095<T, L = LastOf6095<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6095<TuplifyUnion6095<Exclude<T, L>>, L>;

type DeepPartial6095<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6095<T[P]> }
  : T;

type Paths6095<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6095<K, Paths6095<T[K], Prev6095[D]>> : never }[keyof T]
  : never;

type Prev6095 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6095<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6095 {
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

type ConfigPaths6095 = Paths6095<NestedConfig6095>;

interface HeavyProps6095 {
  config: DeepPartial6095<NestedConfig6095>;
  path?: ConfigPaths6095;
}

const HeavyComponent6095 = memo(function HeavyComponent6095({ config }: HeavyProps6095) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6095) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6095 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6095: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6095.displayName = 'HeavyComponent6095';
export default HeavyComponent6095;
