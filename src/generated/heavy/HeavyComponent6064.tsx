'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6064<T> = T extends (infer U)[]
  ? DeepReadonlyArray6064<U>
  : T extends object
  ? DeepReadonlyObject6064<T>
  : T;

interface DeepReadonlyArray6064<T> extends ReadonlyArray<DeepReadonly6064<T>> {}

type DeepReadonlyObject6064<T> = {
  readonly [P in keyof T]: DeepReadonly6064<T[P]>;
};

type UnionToIntersection6064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6064<T> = UnionToIntersection6064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6064<T extends unknown[], V> = [...T, V];

type TuplifyUnion6064<T, L = LastOf6064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6064<TuplifyUnion6064<Exclude<T, L>>, L>;

type DeepPartial6064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6064<T[P]> }
  : T;

type Paths6064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6064<K, Paths6064<T[K], Prev6064[D]>> : never }[keyof T]
  : never;

type Prev6064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6064 {
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

type ConfigPaths6064 = Paths6064<NestedConfig6064>;

interface HeavyProps6064 {
  config: DeepPartial6064<NestedConfig6064>;
  path?: ConfigPaths6064;
}

const HeavyComponent6064 = memo(function HeavyComponent6064({ config }: HeavyProps6064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6064.displayName = 'HeavyComponent6064';
export default HeavyComponent6064;
