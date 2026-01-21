'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly797<T> = T extends (infer U)[]
  ? DeepReadonlyArray797<U>
  : T extends object
  ? DeepReadonlyObject797<T>
  : T;

interface DeepReadonlyArray797<T> extends ReadonlyArray<DeepReadonly797<T>> {}

type DeepReadonlyObject797<T> = {
  readonly [P in keyof T]: DeepReadonly797<T[P]>;
};

type UnionToIntersection797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf797<T> = UnionToIntersection797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push797<T extends unknown[], V> = [...T, V];

type TuplifyUnion797<T, L = LastOf797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push797<TuplifyUnion797<Exclude<T, L>>, L>;

type DeepPartial797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial797<T[P]> }
  : T;

type Paths797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join797<K, Paths797<T[K], Prev797[D]>> : never }[keyof T]
  : never;

type Prev797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig797 {
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

type ConfigPaths797 = Paths797<NestedConfig797>;

interface HeavyProps797 {
  config: DeepPartial797<NestedConfig797>;
  path?: ConfigPaths797;
}

const HeavyComponent797 = memo(function HeavyComponent797({ config }: HeavyProps797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent797.displayName = 'HeavyComponent797';
export default HeavyComponent797;
