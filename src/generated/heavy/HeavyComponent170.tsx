'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly170<T> = T extends (infer U)[]
  ? DeepReadonlyArray170<U>
  : T extends object
  ? DeepReadonlyObject170<T>
  : T;

interface DeepReadonlyArray170<T> extends ReadonlyArray<DeepReadonly170<T>> {}

type DeepReadonlyObject170<T> = {
  readonly [P in keyof T]: DeepReadonly170<T[P]>;
};

type UnionToIntersection170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf170<T> = UnionToIntersection170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push170<T extends unknown[], V> = [...T, V];

type TuplifyUnion170<T, L = LastOf170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push170<TuplifyUnion170<Exclude<T, L>>, L>;

type DeepPartial170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial170<T[P]> }
  : T;

type Paths170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join170<K, Paths170<T[K], Prev170[D]>> : never }[keyof T]
  : never;

type Prev170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig170 {
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

type ConfigPaths170 = Paths170<NestedConfig170>;

interface HeavyProps170 {
  config: DeepPartial170<NestedConfig170>;
  path?: ConfigPaths170;
}

const HeavyComponent170 = memo(function HeavyComponent170({ config }: HeavyProps170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent170.displayName = 'HeavyComponent170';
export default HeavyComponent170;
