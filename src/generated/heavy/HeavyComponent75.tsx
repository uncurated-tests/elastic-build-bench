'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly75<T> = T extends (infer U)[]
  ? DeepReadonlyArray75<U>
  : T extends object
  ? DeepReadonlyObject75<T>
  : T;

interface DeepReadonlyArray75<T> extends ReadonlyArray<DeepReadonly75<T>> {}

type DeepReadonlyObject75<T> = {
  readonly [P in keyof T]: DeepReadonly75<T[P]>;
};

type UnionToIntersection75<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf75<T> = UnionToIntersection75<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push75<T extends unknown[], V> = [...T, V];

type TuplifyUnion75<T, L = LastOf75<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push75<TuplifyUnion75<Exclude<T, L>>, L>;

type DeepPartial75<T> = T extends object
  ? { [P in keyof T]?: DeepPartial75<T[P]> }
  : T;

type Paths75<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join75<K, Paths75<T[K], Prev75[D]>> : never }[keyof T]
  : never;

type Prev75 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join75<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig75 {
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

type ConfigPaths75 = Paths75<NestedConfig75>;

interface HeavyProps75 {
  config: DeepPartial75<NestedConfig75>;
  path?: ConfigPaths75;
}

const HeavyComponent75 = memo(function HeavyComponent75({ config }: HeavyProps75) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 75) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-75 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H75: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent75.displayName = 'HeavyComponent75';
export default HeavyComponent75;
