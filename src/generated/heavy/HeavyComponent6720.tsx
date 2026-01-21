'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6720<T> = T extends (infer U)[]
  ? DeepReadonlyArray6720<U>
  : T extends object
  ? DeepReadonlyObject6720<T>
  : T;

interface DeepReadonlyArray6720<T> extends ReadonlyArray<DeepReadonly6720<T>> {}

type DeepReadonlyObject6720<T> = {
  readonly [P in keyof T]: DeepReadonly6720<T[P]>;
};

type UnionToIntersection6720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6720<T> = UnionToIntersection6720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6720<T extends unknown[], V> = [...T, V];

type TuplifyUnion6720<T, L = LastOf6720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6720<TuplifyUnion6720<Exclude<T, L>>, L>;

type DeepPartial6720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6720<T[P]> }
  : T;

type Paths6720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6720<K, Paths6720<T[K], Prev6720[D]>> : never }[keyof T]
  : never;

type Prev6720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6720 {
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

type ConfigPaths6720 = Paths6720<NestedConfig6720>;

interface HeavyProps6720 {
  config: DeepPartial6720<NestedConfig6720>;
  path?: ConfigPaths6720;
}

const HeavyComponent6720 = memo(function HeavyComponent6720({ config }: HeavyProps6720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6720.displayName = 'HeavyComponent6720';
export default HeavyComponent6720;
