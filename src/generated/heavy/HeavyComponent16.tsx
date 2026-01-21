'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly16<T> = T extends (infer U)[]
  ? DeepReadonlyArray16<U>
  : T extends object
  ? DeepReadonlyObject16<T>
  : T;

interface DeepReadonlyArray16<T> extends ReadonlyArray<DeepReadonly16<T>> {}

type DeepReadonlyObject16<T> = {
  readonly [P in keyof T]: DeepReadonly16<T[P]>;
};

type UnionToIntersection16<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf16<T> = UnionToIntersection16<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push16<T extends unknown[], V> = [...T, V];

type TuplifyUnion16<T, L = LastOf16<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push16<TuplifyUnion16<Exclude<T, L>>, L>;

type DeepPartial16<T> = T extends object
  ? { [P in keyof T]?: DeepPartial16<T[P]> }
  : T;

type Paths16<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join16<K, Paths16<T[K], Prev16[D]>> : never }[keyof T]
  : never;

type Prev16 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join16<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig16 {
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

type ConfigPaths16 = Paths16<NestedConfig16>;

interface HeavyProps16 {
  config: DeepPartial16<NestedConfig16>;
  path?: ConfigPaths16;
}

const HeavyComponent16 = memo(function HeavyComponent16({ config }: HeavyProps16) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 16) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-16 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H16: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent16.displayName = 'HeavyComponent16';
export default HeavyComponent16;
