'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly873<T> = T extends (infer U)[]
  ? DeepReadonlyArray873<U>
  : T extends object
  ? DeepReadonlyObject873<T>
  : T;

interface DeepReadonlyArray873<T> extends ReadonlyArray<DeepReadonly873<T>> {}

type DeepReadonlyObject873<T> = {
  readonly [P in keyof T]: DeepReadonly873<T[P]>;
};

type UnionToIntersection873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf873<T> = UnionToIntersection873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push873<T extends unknown[], V> = [...T, V];

type TuplifyUnion873<T, L = LastOf873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push873<TuplifyUnion873<Exclude<T, L>>, L>;

type DeepPartial873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial873<T[P]> }
  : T;

type Paths873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join873<K, Paths873<T[K], Prev873[D]>> : never }[keyof T]
  : never;

type Prev873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig873 {
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

type ConfigPaths873 = Paths873<NestedConfig873>;

interface HeavyProps873 {
  config: DeepPartial873<NestedConfig873>;
  path?: ConfigPaths873;
}

const HeavyComponent873 = memo(function HeavyComponent873({ config }: HeavyProps873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent873.displayName = 'HeavyComponent873';
export default HeavyComponent873;
