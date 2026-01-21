'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6071<T> = T extends (infer U)[]
  ? DeepReadonlyArray6071<U>
  : T extends object
  ? DeepReadonlyObject6071<T>
  : T;

interface DeepReadonlyArray6071<T> extends ReadonlyArray<DeepReadonly6071<T>> {}

type DeepReadonlyObject6071<T> = {
  readonly [P in keyof T]: DeepReadonly6071<T[P]>;
};

type UnionToIntersection6071<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6071<T> = UnionToIntersection6071<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6071<T extends unknown[], V> = [...T, V];

type TuplifyUnion6071<T, L = LastOf6071<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6071<TuplifyUnion6071<Exclude<T, L>>, L>;

type DeepPartial6071<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6071<T[P]> }
  : T;

type Paths6071<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6071<K, Paths6071<T[K], Prev6071[D]>> : never }[keyof T]
  : never;

type Prev6071 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6071<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6071 {
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

type ConfigPaths6071 = Paths6071<NestedConfig6071>;

interface HeavyProps6071 {
  config: DeepPartial6071<NestedConfig6071>;
  path?: ConfigPaths6071;
}

const HeavyComponent6071 = memo(function HeavyComponent6071({ config }: HeavyProps6071) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6071) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6071 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6071: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6071.displayName = 'HeavyComponent6071';
export default HeavyComponent6071;
