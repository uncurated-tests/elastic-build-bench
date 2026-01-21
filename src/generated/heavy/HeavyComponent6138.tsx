'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6138<T> = T extends (infer U)[]
  ? DeepReadonlyArray6138<U>
  : T extends object
  ? DeepReadonlyObject6138<T>
  : T;

interface DeepReadonlyArray6138<T> extends ReadonlyArray<DeepReadonly6138<T>> {}

type DeepReadonlyObject6138<T> = {
  readonly [P in keyof T]: DeepReadonly6138<T[P]>;
};

type UnionToIntersection6138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6138<T> = UnionToIntersection6138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6138<T extends unknown[], V> = [...T, V];

type TuplifyUnion6138<T, L = LastOf6138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6138<TuplifyUnion6138<Exclude<T, L>>, L>;

type DeepPartial6138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6138<T[P]> }
  : T;

type Paths6138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6138<K, Paths6138<T[K], Prev6138[D]>> : never }[keyof T]
  : never;

type Prev6138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6138 {
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

type ConfigPaths6138 = Paths6138<NestedConfig6138>;

interface HeavyProps6138 {
  config: DeepPartial6138<NestedConfig6138>;
  path?: ConfigPaths6138;
}

const HeavyComponent6138 = memo(function HeavyComponent6138({ config }: HeavyProps6138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6138.displayName = 'HeavyComponent6138';
export default HeavyComponent6138;
