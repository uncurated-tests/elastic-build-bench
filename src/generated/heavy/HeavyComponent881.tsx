'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly881<T> = T extends (infer U)[]
  ? DeepReadonlyArray881<U>
  : T extends object
  ? DeepReadonlyObject881<T>
  : T;

interface DeepReadonlyArray881<T> extends ReadonlyArray<DeepReadonly881<T>> {}

type DeepReadonlyObject881<T> = {
  readonly [P in keyof T]: DeepReadonly881<T[P]>;
};

type UnionToIntersection881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf881<T> = UnionToIntersection881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push881<T extends unknown[], V> = [...T, V];

type TuplifyUnion881<T, L = LastOf881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push881<TuplifyUnion881<Exclude<T, L>>, L>;

type DeepPartial881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial881<T[P]> }
  : T;

type Paths881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join881<K, Paths881<T[K], Prev881[D]>> : never }[keyof T]
  : never;

type Prev881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig881 {
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

type ConfigPaths881 = Paths881<NestedConfig881>;

interface HeavyProps881 {
  config: DeepPartial881<NestedConfig881>;
  path?: ConfigPaths881;
}

const HeavyComponent881 = memo(function HeavyComponent881({ config }: HeavyProps881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent881.displayName = 'HeavyComponent881';
export default HeavyComponent881;
