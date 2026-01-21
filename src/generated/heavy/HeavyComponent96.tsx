'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly96<T> = T extends (infer U)[]
  ? DeepReadonlyArray96<U>
  : T extends object
  ? DeepReadonlyObject96<T>
  : T;

interface DeepReadonlyArray96<T> extends ReadonlyArray<DeepReadonly96<T>> {}

type DeepReadonlyObject96<T> = {
  readonly [P in keyof T]: DeepReadonly96<T[P]>;
};

type UnionToIntersection96<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf96<T> = UnionToIntersection96<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push96<T extends unknown[], V> = [...T, V];

type TuplifyUnion96<T, L = LastOf96<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push96<TuplifyUnion96<Exclude<T, L>>, L>;

type DeepPartial96<T> = T extends object
  ? { [P in keyof T]?: DeepPartial96<T[P]> }
  : T;

type Paths96<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join96<K, Paths96<T[K], Prev96[D]>> : never }[keyof T]
  : never;

type Prev96 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join96<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig96 {
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

type ConfigPaths96 = Paths96<NestedConfig96>;

interface HeavyProps96 {
  config: DeepPartial96<NestedConfig96>;
  path?: ConfigPaths96;
}

const HeavyComponent96 = memo(function HeavyComponent96({ config }: HeavyProps96) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 96) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-96 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H96: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent96.displayName = 'HeavyComponent96';
export default HeavyComponent96;
