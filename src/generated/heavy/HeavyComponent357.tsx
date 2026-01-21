'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly357<T> = T extends (infer U)[]
  ? DeepReadonlyArray357<U>
  : T extends object
  ? DeepReadonlyObject357<T>
  : T;

interface DeepReadonlyArray357<T> extends ReadonlyArray<DeepReadonly357<T>> {}

type DeepReadonlyObject357<T> = {
  readonly [P in keyof T]: DeepReadonly357<T[P]>;
};

type UnionToIntersection357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf357<T> = UnionToIntersection357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push357<T extends unknown[], V> = [...T, V];

type TuplifyUnion357<T, L = LastOf357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push357<TuplifyUnion357<Exclude<T, L>>, L>;

type DeepPartial357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial357<T[P]> }
  : T;

type Paths357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join357<K, Paths357<T[K], Prev357[D]>> : never }[keyof T]
  : never;

type Prev357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig357 {
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

type ConfigPaths357 = Paths357<NestedConfig357>;

interface HeavyProps357 {
  config: DeepPartial357<NestedConfig357>;
  path?: ConfigPaths357;
}

const HeavyComponent357 = memo(function HeavyComponent357({ config }: HeavyProps357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent357.displayName = 'HeavyComponent357';
export default HeavyComponent357;
