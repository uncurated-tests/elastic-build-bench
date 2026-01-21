'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6471<T> = T extends (infer U)[]
  ? DeepReadonlyArray6471<U>
  : T extends object
  ? DeepReadonlyObject6471<T>
  : T;

interface DeepReadonlyArray6471<T> extends ReadonlyArray<DeepReadonly6471<T>> {}

type DeepReadonlyObject6471<T> = {
  readonly [P in keyof T]: DeepReadonly6471<T[P]>;
};

type UnionToIntersection6471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6471<T> = UnionToIntersection6471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6471<T extends unknown[], V> = [...T, V];

type TuplifyUnion6471<T, L = LastOf6471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6471<TuplifyUnion6471<Exclude<T, L>>, L>;

type DeepPartial6471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6471<T[P]> }
  : T;

type Paths6471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6471<K, Paths6471<T[K], Prev6471[D]>> : never }[keyof T]
  : never;

type Prev6471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6471 {
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

type ConfigPaths6471 = Paths6471<NestedConfig6471>;

interface HeavyProps6471 {
  config: DeepPartial6471<NestedConfig6471>;
  path?: ConfigPaths6471;
}

const HeavyComponent6471 = memo(function HeavyComponent6471({ config }: HeavyProps6471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6471.displayName = 'HeavyComponent6471';
export default HeavyComponent6471;
