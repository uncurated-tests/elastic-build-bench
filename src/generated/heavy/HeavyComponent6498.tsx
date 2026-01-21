'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6498<T> = T extends (infer U)[]
  ? DeepReadonlyArray6498<U>
  : T extends object
  ? DeepReadonlyObject6498<T>
  : T;

interface DeepReadonlyArray6498<T> extends ReadonlyArray<DeepReadonly6498<T>> {}

type DeepReadonlyObject6498<T> = {
  readonly [P in keyof T]: DeepReadonly6498<T[P]>;
};

type UnionToIntersection6498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6498<T> = UnionToIntersection6498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6498<T extends unknown[], V> = [...T, V];

type TuplifyUnion6498<T, L = LastOf6498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6498<TuplifyUnion6498<Exclude<T, L>>, L>;

type DeepPartial6498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6498<T[P]> }
  : T;

type Paths6498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6498<K, Paths6498<T[K], Prev6498[D]>> : never }[keyof T]
  : never;

type Prev6498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6498 {
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

type ConfigPaths6498 = Paths6498<NestedConfig6498>;

interface HeavyProps6498 {
  config: DeepPartial6498<NestedConfig6498>;
  path?: ConfigPaths6498;
}

const HeavyComponent6498 = memo(function HeavyComponent6498({ config }: HeavyProps6498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6498.displayName = 'HeavyComponent6498';
export default HeavyComponent6498;
