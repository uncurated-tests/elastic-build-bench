'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6362<T> = T extends (infer U)[]
  ? DeepReadonlyArray6362<U>
  : T extends object
  ? DeepReadonlyObject6362<T>
  : T;

interface DeepReadonlyArray6362<T> extends ReadonlyArray<DeepReadonly6362<T>> {}

type DeepReadonlyObject6362<T> = {
  readonly [P in keyof T]: DeepReadonly6362<T[P]>;
};

type UnionToIntersection6362<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6362<T> = UnionToIntersection6362<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6362<T extends unknown[], V> = [...T, V];

type TuplifyUnion6362<T, L = LastOf6362<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6362<TuplifyUnion6362<Exclude<T, L>>, L>;

type DeepPartial6362<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6362<T[P]> }
  : T;

type Paths6362<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6362<K, Paths6362<T[K], Prev6362[D]>> : never }[keyof T]
  : never;

type Prev6362 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6362<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6362 {
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

type ConfigPaths6362 = Paths6362<NestedConfig6362>;

interface HeavyProps6362 {
  config: DeepPartial6362<NestedConfig6362>;
  path?: ConfigPaths6362;
}

const HeavyComponent6362 = memo(function HeavyComponent6362({ config }: HeavyProps6362) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6362) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6362 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6362: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6362.displayName = 'HeavyComponent6362';
export default HeavyComponent6362;
