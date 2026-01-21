'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6114<T> = T extends (infer U)[]
  ? DeepReadonlyArray6114<U>
  : T extends object
  ? DeepReadonlyObject6114<T>
  : T;

interface DeepReadonlyArray6114<T> extends ReadonlyArray<DeepReadonly6114<T>> {}

type DeepReadonlyObject6114<T> = {
  readonly [P in keyof T]: DeepReadonly6114<T[P]>;
};

type UnionToIntersection6114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6114<T> = UnionToIntersection6114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6114<T extends unknown[], V> = [...T, V];

type TuplifyUnion6114<T, L = LastOf6114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6114<TuplifyUnion6114<Exclude<T, L>>, L>;

type DeepPartial6114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6114<T[P]> }
  : T;

type Paths6114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6114<K, Paths6114<T[K], Prev6114[D]>> : never }[keyof T]
  : never;

type Prev6114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6114 {
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

type ConfigPaths6114 = Paths6114<NestedConfig6114>;

interface HeavyProps6114 {
  config: DeepPartial6114<NestedConfig6114>;
  path?: ConfigPaths6114;
}

const HeavyComponent6114 = memo(function HeavyComponent6114({ config }: HeavyProps6114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6114.displayName = 'HeavyComponent6114';
export default HeavyComponent6114;
