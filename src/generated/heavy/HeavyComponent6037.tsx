'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6037<T> = T extends (infer U)[]
  ? DeepReadonlyArray6037<U>
  : T extends object
  ? DeepReadonlyObject6037<T>
  : T;

interface DeepReadonlyArray6037<T> extends ReadonlyArray<DeepReadonly6037<T>> {}

type DeepReadonlyObject6037<T> = {
  readonly [P in keyof T]: DeepReadonly6037<T[P]>;
};

type UnionToIntersection6037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6037<T> = UnionToIntersection6037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6037<T extends unknown[], V> = [...T, V];

type TuplifyUnion6037<T, L = LastOf6037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6037<TuplifyUnion6037<Exclude<T, L>>, L>;

type DeepPartial6037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6037<T[P]> }
  : T;

type Paths6037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6037<K, Paths6037<T[K], Prev6037[D]>> : never }[keyof T]
  : never;

type Prev6037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6037 {
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

type ConfigPaths6037 = Paths6037<NestedConfig6037>;

interface HeavyProps6037 {
  config: DeepPartial6037<NestedConfig6037>;
  path?: ConfigPaths6037;
}

const HeavyComponent6037 = memo(function HeavyComponent6037({ config }: HeavyProps6037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6037.displayName = 'HeavyComponent6037';
export default HeavyComponent6037;
