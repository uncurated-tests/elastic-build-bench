'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly215<T> = T extends (infer U)[]
  ? DeepReadonlyArray215<U>
  : T extends object
  ? DeepReadonlyObject215<T>
  : T;

interface DeepReadonlyArray215<T> extends ReadonlyArray<DeepReadonly215<T>> {}

type DeepReadonlyObject215<T> = {
  readonly [P in keyof T]: DeepReadonly215<T[P]>;
};

type UnionToIntersection215<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf215<T> = UnionToIntersection215<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push215<T extends unknown[], V> = [...T, V];

type TuplifyUnion215<T, L = LastOf215<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push215<TuplifyUnion215<Exclude<T, L>>, L>;

type DeepPartial215<T> = T extends object
  ? { [P in keyof T]?: DeepPartial215<T[P]> }
  : T;

type Paths215<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join215<K, Paths215<T[K], Prev215[D]>> : never }[keyof T]
  : never;

type Prev215 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join215<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig215 {
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

type ConfigPaths215 = Paths215<NestedConfig215>;

interface HeavyProps215 {
  config: DeepPartial215<NestedConfig215>;
  path?: ConfigPaths215;
}

const HeavyComponent215 = memo(function HeavyComponent215({ config }: HeavyProps215) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 215) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-215 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H215: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent215.displayName = 'HeavyComponent215';
export default HeavyComponent215;
