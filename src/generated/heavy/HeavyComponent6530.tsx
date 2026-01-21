'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6530<T> = T extends (infer U)[]
  ? DeepReadonlyArray6530<U>
  : T extends object
  ? DeepReadonlyObject6530<T>
  : T;

interface DeepReadonlyArray6530<T> extends ReadonlyArray<DeepReadonly6530<T>> {}

type DeepReadonlyObject6530<T> = {
  readonly [P in keyof T]: DeepReadonly6530<T[P]>;
};

type UnionToIntersection6530<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6530<T> = UnionToIntersection6530<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6530<T extends unknown[], V> = [...T, V];

type TuplifyUnion6530<T, L = LastOf6530<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6530<TuplifyUnion6530<Exclude<T, L>>, L>;

type DeepPartial6530<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6530<T[P]> }
  : T;

type Paths6530<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6530<K, Paths6530<T[K], Prev6530[D]>> : never }[keyof T]
  : never;

type Prev6530 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6530<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6530 {
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

type ConfigPaths6530 = Paths6530<NestedConfig6530>;

interface HeavyProps6530 {
  config: DeepPartial6530<NestedConfig6530>;
  path?: ConfigPaths6530;
}

const HeavyComponent6530 = memo(function HeavyComponent6530({ config }: HeavyProps6530) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6530) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6530 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6530: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6530.displayName = 'HeavyComponent6530';
export default HeavyComponent6530;
