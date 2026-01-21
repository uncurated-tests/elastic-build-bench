'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6043<T> = T extends (infer U)[]
  ? DeepReadonlyArray6043<U>
  : T extends object
  ? DeepReadonlyObject6043<T>
  : T;

interface DeepReadonlyArray6043<T> extends ReadonlyArray<DeepReadonly6043<T>> {}

type DeepReadonlyObject6043<T> = {
  readonly [P in keyof T]: DeepReadonly6043<T[P]>;
};

type UnionToIntersection6043<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6043<T> = UnionToIntersection6043<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6043<T extends unknown[], V> = [...T, V];

type TuplifyUnion6043<T, L = LastOf6043<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6043<TuplifyUnion6043<Exclude<T, L>>, L>;

type DeepPartial6043<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6043<T[P]> }
  : T;

type Paths6043<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6043<K, Paths6043<T[K], Prev6043[D]>> : never }[keyof T]
  : never;

type Prev6043 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6043<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6043 {
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

type ConfigPaths6043 = Paths6043<NestedConfig6043>;

interface HeavyProps6043 {
  config: DeepPartial6043<NestedConfig6043>;
  path?: ConfigPaths6043;
}

const HeavyComponent6043 = memo(function HeavyComponent6043({ config }: HeavyProps6043) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6043) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6043 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6043: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6043.displayName = 'HeavyComponent6043';
export default HeavyComponent6043;
