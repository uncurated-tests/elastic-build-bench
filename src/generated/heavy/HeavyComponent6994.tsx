'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6994<T> = T extends (infer U)[]
  ? DeepReadonlyArray6994<U>
  : T extends object
  ? DeepReadonlyObject6994<T>
  : T;

interface DeepReadonlyArray6994<T> extends ReadonlyArray<DeepReadonly6994<T>> {}

type DeepReadonlyObject6994<T> = {
  readonly [P in keyof T]: DeepReadonly6994<T[P]>;
};

type UnionToIntersection6994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6994<T> = UnionToIntersection6994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6994<T extends unknown[], V> = [...T, V];

type TuplifyUnion6994<T, L = LastOf6994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6994<TuplifyUnion6994<Exclude<T, L>>, L>;

type DeepPartial6994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6994<T[P]> }
  : T;

type Paths6994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6994<K, Paths6994<T[K], Prev6994[D]>> : never }[keyof T]
  : never;

type Prev6994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6994 {
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

type ConfigPaths6994 = Paths6994<NestedConfig6994>;

interface HeavyProps6994 {
  config: DeepPartial6994<NestedConfig6994>;
  path?: ConfigPaths6994;
}

const HeavyComponent6994 = memo(function HeavyComponent6994({ config }: HeavyProps6994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6994.displayName = 'HeavyComponent6994';
export default HeavyComponent6994;
