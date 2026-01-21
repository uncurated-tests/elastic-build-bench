'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6294<T> = T extends (infer U)[]
  ? DeepReadonlyArray6294<U>
  : T extends object
  ? DeepReadonlyObject6294<T>
  : T;

interface DeepReadonlyArray6294<T> extends ReadonlyArray<DeepReadonly6294<T>> {}

type DeepReadonlyObject6294<T> = {
  readonly [P in keyof T]: DeepReadonly6294<T[P]>;
};

type UnionToIntersection6294<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6294<T> = UnionToIntersection6294<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6294<T extends unknown[], V> = [...T, V];

type TuplifyUnion6294<T, L = LastOf6294<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6294<TuplifyUnion6294<Exclude<T, L>>, L>;

type DeepPartial6294<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6294<T[P]> }
  : T;

type Paths6294<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6294<K, Paths6294<T[K], Prev6294[D]>> : never }[keyof T]
  : never;

type Prev6294 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6294<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6294 {
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

type ConfigPaths6294 = Paths6294<NestedConfig6294>;

interface HeavyProps6294 {
  config: DeepPartial6294<NestedConfig6294>;
  path?: ConfigPaths6294;
}

const HeavyComponent6294 = memo(function HeavyComponent6294({ config }: HeavyProps6294) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6294) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6294 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6294: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6294.displayName = 'HeavyComponent6294';
export default HeavyComponent6294;
