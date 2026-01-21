'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly652<T> = T extends (infer U)[]
  ? DeepReadonlyArray652<U>
  : T extends object
  ? DeepReadonlyObject652<T>
  : T;

interface DeepReadonlyArray652<T> extends ReadonlyArray<DeepReadonly652<T>> {}

type DeepReadonlyObject652<T> = {
  readonly [P in keyof T]: DeepReadonly652<T[P]>;
};

type UnionToIntersection652<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf652<T> = UnionToIntersection652<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push652<T extends unknown[], V> = [...T, V];

type TuplifyUnion652<T, L = LastOf652<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push652<TuplifyUnion652<Exclude<T, L>>, L>;

type DeepPartial652<T> = T extends object
  ? { [P in keyof T]?: DeepPartial652<T[P]> }
  : T;

type Paths652<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join652<K, Paths652<T[K], Prev652[D]>> : never }[keyof T]
  : never;

type Prev652 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join652<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig652 {
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

type ConfigPaths652 = Paths652<NestedConfig652>;

interface HeavyProps652 {
  config: DeepPartial652<NestedConfig652>;
  path?: ConfigPaths652;
}

const HeavyComponent652 = memo(function HeavyComponent652({ config }: HeavyProps652) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 652) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-652 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H652: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent652.displayName = 'HeavyComponent652';
export default HeavyComponent652;
