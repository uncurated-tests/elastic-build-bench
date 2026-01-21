'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly115<T> = T extends (infer U)[]
  ? DeepReadonlyArray115<U>
  : T extends object
  ? DeepReadonlyObject115<T>
  : T;

interface DeepReadonlyArray115<T> extends ReadonlyArray<DeepReadonly115<T>> {}

type DeepReadonlyObject115<T> = {
  readonly [P in keyof T]: DeepReadonly115<T[P]>;
};

type UnionToIntersection115<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf115<T> = UnionToIntersection115<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push115<T extends unknown[], V> = [...T, V];

type TuplifyUnion115<T, L = LastOf115<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push115<TuplifyUnion115<Exclude<T, L>>, L>;

type DeepPartial115<T> = T extends object
  ? { [P in keyof T]?: DeepPartial115<T[P]> }
  : T;

type Paths115<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join115<K, Paths115<T[K], Prev115[D]>> : never }[keyof T]
  : never;

type Prev115 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join115<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig115 {
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

type ConfigPaths115 = Paths115<NestedConfig115>;

interface HeavyProps115 {
  config: DeepPartial115<NestedConfig115>;
  path?: ConfigPaths115;
}

const HeavyComponent115 = memo(function HeavyComponent115({ config }: HeavyProps115) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 115) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-115 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H115: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent115.displayName = 'HeavyComponent115';
export default HeavyComponent115;
