'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6962<T> = T extends (infer U)[]
  ? DeepReadonlyArray6962<U>
  : T extends object
  ? DeepReadonlyObject6962<T>
  : T;

interface DeepReadonlyArray6962<T> extends ReadonlyArray<DeepReadonly6962<T>> {}

type DeepReadonlyObject6962<T> = {
  readonly [P in keyof T]: DeepReadonly6962<T[P]>;
};

type UnionToIntersection6962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6962<T> = UnionToIntersection6962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6962<T extends unknown[], V> = [...T, V];

type TuplifyUnion6962<T, L = LastOf6962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6962<TuplifyUnion6962<Exclude<T, L>>, L>;

type DeepPartial6962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6962<T[P]> }
  : T;

type Paths6962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6962<K, Paths6962<T[K], Prev6962[D]>> : never }[keyof T]
  : never;

type Prev6962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6962 {
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

type ConfigPaths6962 = Paths6962<NestedConfig6962>;

interface HeavyProps6962 {
  config: DeepPartial6962<NestedConfig6962>;
  path?: ConfigPaths6962;
}

const HeavyComponent6962 = memo(function HeavyComponent6962({ config }: HeavyProps6962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6962.displayName = 'HeavyComponent6962';
export default HeavyComponent6962;
