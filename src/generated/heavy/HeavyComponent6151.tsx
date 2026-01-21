'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6151<T> = T extends (infer U)[]
  ? DeepReadonlyArray6151<U>
  : T extends object
  ? DeepReadonlyObject6151<T>
  : T;

interface DeepReadonlyArray6151<T> extends ReadonlyArray<DeepReadonly6151<T>> {}

type DeepReadonlyObject6151<T> = {
  readonly [P in keyof T]: DeepReadonly6151<T[P]>;
};

type UnionToIntersection6151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6151<T> = UnionToIntersection6151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6151<T extends unknown[], V> = [...T, V];

type TuplifyUnion6151<T, L = LastOf6151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6151<TuplifyUnion6151<Exclude<T, L>>, L>;

type DeepPartial6151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6151<T[P]> }
  : T;

type Paths6151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6151<K, Paths6151<T[K], Prev6151[D]>> : never }[keyof T]
  : never;

type Prev6151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6151 {
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

type ConfigPaths6151 = Paths6151<NestedConfig6151>;

interface HeavyProps6151 {
  config: DeepPartial6151<NestedConfig6151>;
  path?: ConfigPaths6151;
}

const HeavyComponent6151 = memo(function HeavyComponent6151({ config }: HeavyProps6151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6151.displayName = 'HeavyComponent6151';
export default HeavyComponent6151;
