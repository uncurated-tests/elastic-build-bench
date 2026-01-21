'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6047<T> = T extends (infer U)[]
  ? DeepReadonlyArray6047<U>
  : T extends object
  ? DeepReadonlyObject6047<T>
  : T;

interface DeepReadonlyArray6047<T> extends ReadonlyArray<DeepReadonly6047<T>> {}

type DeepReadonlyObject6047<T> = {
  readonly [P in keyof T]: DeepReadonly6047<T[P]>;
};

type UnionToIntersection6047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6047<T> = UnionToIntersection6047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6047<T extends unknown[], V> = [...T, V];

type TuplifyUnion6047<T, L = LastOf6047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6047<TuplifyUnion6047<Exclude<T, L>>, L>;

type DeepPartial6047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6047<T[P]> }
  : T;

type Paths6047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6047<K, Paths6047<T[K], Prev6047[D]>> : never }[keyof T]
  : never;

type Prev6047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6047 {
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

type ConfigPaths6047 = Paths6047<NestedConfig6047>;

interface HeavyProps6047 {
  config: DeepPartial6047<NestedConfig6047>;
  path?: ConfigPaths6047;
}

const HeavyComponent6047 = memo(function HeavyComponent6047({ config }: HeavyProps6047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6047.displayName = 'HeavyComponent6047';
export default HeavyComponent6047;
