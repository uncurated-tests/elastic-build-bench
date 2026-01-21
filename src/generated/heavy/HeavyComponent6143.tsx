'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6143<T> = T extends (infer U)[]
  ? DeepReadonlyArray6143<U>
  : T extends object
  ? DeepReadonlyObject6143<T>
  : T;

interface DeepReadonlyArray6143<T> extends ReadonlyArray<DeepReadonly6143<T>> {}

type DeepReadonlyObject6143<T> = {
  readonly [P in keyof T]: DeepReadonly6143<T[P]>;
};

type UnionToIntersection6143<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6143<T> = UnionToIntersection6143<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6143<T extends unknown[], V> = [...T, V];

type TuplifyUnion6143<T, L = LastOf6143<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6143<TuplifyUnion6143<Exclude<T, L>>, L>;

type DeepPartial6143<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6143<T[P]> }
  : T;

type Paths6143<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6143<K, Paths6143<T[K], Prev6143[D]>> : never }[keyof T]
  : never;

type Prev6143 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6143<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6143 {
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

type ConfigPaths6143 = Paths6143<NestedConfig6143>;

interface HeavyProps6143 {
  config: DeepPartial6143<NestedConfig6143>;
  path?: ConfigPaths6143;
}

const HeavyComponent6143 = memo(function HeavyComponent6143({ config }: HeavyProps6143) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6143) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6143 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6143: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6143.displayName = 'HeavyComponent6143';
export default HeavyComponent6143;
